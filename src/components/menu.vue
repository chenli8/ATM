
<template>
    <div class='menu-left' id='menu'>
        <img src='../images/logo/logo1.png' style='width:100px;margin:17px 0px 0px 5px;' />
        <ul @click.stop='setSelected'>
            <li v-for='item in config.data' class='trans' :class='{active:item.path.indexOf(selected)!=-1}'>
                <a v-link="{ path:item.path }">{{item.name}}</a>
            </li>
        </ul>
        <section class="outLogin">
           <p>
               <label for="" >用户名：</label>
               <span>{{cookies}}</span>
               <i-button type="ghost" @click="handbook" style='margin-left:10px'>用户使用手册</i-button>
               <i-button type="ghost" @click="changePwd" style='margin:0 10px'>修改密码</i-button> <i-button type="ghost" @click="outLogin" >退出</i-button>
            </p> 
        </section>
        <Modal
            :visible.sync="modal1"
            :style="{width: '40%'}"
            :on-cancel='outGo()'
            title="修改密码"
            >
            <div style='padding-left:70px'>
                <p style='padding-bottom:10px'>
                   <label for=""><Icon type="android-person"></Icon> 用户名：{{cookies}}</label>
                </p>
                 <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
                    <Form-item prop="user">
                        <i-input type="password" :value.sync="formInline.user" placeholder="old password">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                    <Form-item prop="password">
                        <i-input type="password" :value.sync="formInline.password" placeholder="new password">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                </i-form>
            </div>
            <div slot="footer">
                  <i-button type="primary" @click="handleSubmit('formInline')">确定修改</i-button>
            </div>
         </Modal>
    </div>

</template>
<script>
var md5 = require('md5')
//import MenuConfig from '../config/menu.config';
export default {

    data() {
        return {
            formInline: {
                    user: '',
                    password: ''
            },
            ruleInline: {
                    user: [
                        { required: true, message: '请填写旧密码', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写新密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
            selected:'',
            config: '',
            cookies:'',
            modal1:false,
         }
    },
    ready() {
        this.init();
    },
    methods: {
        init() {
            this.getCookie();
            this.setSelected();
        },
        getCookie(){
           function getCookie(name){
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
                else
                return null;
            }
            let useremail=(getCookie('useremail')),
                sessionemail=sessionStorage.getItem('sessionUser'),
                atmJson=(getCookie('atmJson')),
                sessionAtmJson=sessionStorage.getItem('sessionAtmJson'),
                arrname=[],
                arrurl=[];
                if(atmJson){
                    this.cookies=useremail
                    if(JSON.parse(atmJson).menus){
                        let atm=JSON.parse(atmJson).menus
                        for(var i=0;i<atm.length;i++){
                           arrname.push(atm[i].name) 
                           arrurl.push(atm[i].url) 
                        }
                    }
                }else if(sessionAtmJson){
                    this.cookies=sessionemail
                    if(JSON.parse(sessionAtmJson).menus){
                        let atm=JSON.parse(sessionAtmJson).menus
                        for(var i=0;i<atm.length;i++){
                           arrname.push(atm[i].name) 
                           arrurl.push(atm[i].url) 
                        }
                    }
                } 
               let data=[]
                for(var i=0;i<arrname.length;i++){
                     data.push({name:arrname[i],path:arrurl[i]})
                }
              //data.push({name:'小工具',path:'instrument'});
               let obj={}
                    obj.data=data
                    this.config=obj
         },
        /**
         * 激活左侧菜单选中项
         */
        setSelected(){
            let hash=window.location.hash;
            this.selected=this.config.selected;
            for(let i=0,len=this.config.data.length;i<len;i++){
                let data=this.config.data[i];
                if(hash.indexOf(data.path)!=-1){
                    this.selected=data.path;
                    return 0;
                }
            }
        },
        outLogin(){
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
        },
        changePwd(){
            this.modal1=true
        },
        outGo(){
            this.formInline.user=''
            this.formInline.password=''
        },
        handleSubmit(name) {
              this.$refs[name].validate((valid) => {
                    if (valid) {
                            let url=process.env.NODE_ENV.apiPath+"systemManager/user/updatePassword";
                            Vue.http.post(url,{
                                    email:this.cookies,
                                    oldPass:md5(this.formInline.user),
                                    newPass:md5(this.formInline.password),
                                },{emulateJSON:true})
                           .then((response) => {
                                if(response.body.resultCode===0){
                                    this.$Notice.success({ title: '修改密码成功',desc: '返回登录页重新登陆'})
                                    this.outLogin()
                                }else{
                                    this.$Notice.error({title: '修改密码失败',desc: '修改密码失败'})
                                }
                            }, (response) => {
                                console.log('请求不到数据')
                            });
                    } 
                })
        },
        handbook(){
             window.open ('http://wiki.tenddata.com/pages/viewpage.action?pageId=26084143', '_blank' ) ;
        }
    }
}
</script>
