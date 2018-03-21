<template>
    <div id='app'>
        <menu></menu>
        <main></main>
    </div>
</template>
<script>
import Menu from './menu';
import Main from './main';
import store from '../vuex/store';

export default {
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store, // 译注：简写，等效于 store: store
    components: {
        Menu,
        Main,
    },
    ready(){
           this.connect()    
               
    },
    methods:{
        connect(){
                function getCookie(name){
                    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                    if(arr=document.cookie.match(reg))
                    return unescape(arr[2]);
                    else
                    return null;
                }
                let useremail=(getCookie('useremail')),//cook
                    userpassword=(getCookie('userpassword')),//cook
                    userjson=(getCookie('atmJson')),//cook
                    sessionemail=sessionStorage.getItem('sessionUser'),//seccess
                    sessionPassword=sessionStorage.getItem('sessionPassword'),//seccess
                    sessionAtmJson=sessionStorage.getItem('sessionAtmJson'),//seccess
                    a=userpassword||sessionemail?true:false;
                    //没有用户名跳转登录页
                     if(!a){
                         this.$router.go("/login")
                     }else{
                              let url=process.env.NODE_ENV.apiPath+"systemManager/login";
                              let email='',
                                  pwd='',
                                  jsonString='',
                                  k='';
                              if(useremail){
                                email=useremail
                                pwd=userpassword
                                jsonString=userjson
                                k=1
                              }else if(sessionemail){
                                email=sessionemail
                                pwd=sessionPassword
                                jsonString=sessionAtmJson
                                k=2
                              }
                              Vue.http.post(url,{
                                email:email,
                                password:pwd,
                              },{emulateJSON:true}).then((response)=>{
                                 if(response.body.resultValue!=jsonString){
                                            delCookie('useremail')
                                            delCookie('userpassword')
                                            delCookie('atmJson')
                                            sessionStorage.removeItem('sessionUser');
                                            sessionStorage.removeItem('sessionPassword');
                                            sessionStorage.removeItem('sessionAtmJson');
                                             function getCookie(name){
                                                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                                                if(arr=document.cookie.match(reg))
                                                return unescape(arr[2]);
                                                else
                                                return null;
                                            }
                                            function delCookie(name){
                                                var exp = new Date();
                                                exp.setTime(exp.getTime() - 1);
                                                var cval=getCookie(name);
                                                if(cval!=null)
                                                document.cookie= name + "="+cval+";expires="+exp.toGMTString();
                                            }
                                            this.$router.go("/login")
                                 }
                            },(response)=>{
                                console.log('请求数据失败')
                            })
                     }//
                     
        }
    }

}
</script>
