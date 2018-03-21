<template>
    <div class="login-contain">
        <div class="login">
            <h1 class="login-logo"></h1>
            <p class="login-title">{{ loginTitle }}</p>
            <form>
                <input v-model="userVal" type="text"  class="login-user" placeholder="请输入用户名" @blur="check('user')">
                <input v-model="pwVal" type="password"  class="login-pw" placeholder="请输入密码" @blur="check('pw')">
                <div v-show="login_error" class="login-error">{{ error }}</div>
                <div class="find-div clearfix">
                    <div v-show="rememberMe" class="rem-label">
                        <label>
                            <Checkbox :checked.sync="single">记住我</Checkbox>
                        </label>
                        <Poptip placement="right" width="400" style='left:-18px;position:relative'>
                            <i-button type="text" ><Icon type="help-circled" size="15"></Icon></i-button>
                        <div class="api" slot="content">
                            <strong style="text-align:center;display:block">Data ATM权限开通须知</strong>
                            <p>1、发送邮件至：《{{arr}}》</p>
                            <p>2、抄送邮件至：何兴权《xingquan.he@tendcloud.com》，以及申请人直接领导</p>
                            <p>3、邮件主题：Data ATM权限开通申请</p>
                            <p>4、邮件正文指定姓名、公司邮箱地址、部门名称、开通理由</p>
                            <p>内容模板示例：</p>
                            <div class="login_der">  
                                 <p>姓名：张三</p>
                                 <p>邮箱：san.zhang@tendcloud.com</p>
                                 <p>部门：咨询部-FE</p>
                                 <p>理由：监控平台的运行状态，保证平台稳定性</p>
                             </div>
                           <p> 5、谢绝口头开通，谢绝代人开通，不按要求申请不予开通</p>
                           <p> 6、领导逐一审批通过，我们会第一时间给予开通，系统自动邮件通知账号信息</p>
                        </div>
                    </div>
                    <a v-show="findPw" class="forget-pw" @click='handbook()'>用户使用手册</a>
                    <a v-show="register" class="register-pw">注册</a>
                </div>
                <i-button type="success" long  @click="submit">登录</i-button>
            </form>
        </div>
    </div>
</template>
<script>
var md5 = require('md5');//md555
    module.exports = {
        props:{
            loginTitle:{
                type:String,
                default:"登录" //修改登录名称
            },
            findPw:{ //true 保留忘记密码功能  false 删除忘记密码功能
                type:Boolean,
                default:true,
            },
            rememberMe:{// true 保留记住我功能  false 删除记住我功能
                type:Boolean,
                default:true
            },
            register:{//true 保留注册功能  false 删除注册功能
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                "url_run":"index.html",       //登录成功后跳转地址
                "url_login":"td-login",       //登录接口地址
                "dataType":"json",            //服务器返回的数据类型
                "type":"post",
                "login_error":false ,
                "error":"",
                "remember":false,
                "userVal":'',
                "pwVal":'',
                "single":false,
                 arr:[],
            }
        },
        ready(){
            function getCookie(name){
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
                else
                return null;
            }
           let useremail=(getCookie('useremail')),
               userpassword=(getCookie('userpassword'));
               if(useremail && userpassword){
                    this.$router.go("./connect/delivery")
               }
        },
        ready(){
          this.getconnect()
        },
        methods : {
            check () {
                let vm=this;
                let reg_email =  /^([a-zA-Z0-9]+[_|\_|\.|\-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    reg_pwd = /.{6,18}/,
                    reg_empty = /\s/g;
                let user = vm.userVal.replace(reg_empty,''),
                    pwd = vm.pwVal.replace(reg_empty,'');
                if(vm.userVal === "") {
                    vm.login_error=true;
                    vm.error="用户名不能为空";
                    return false;
                }else {
                    if(!reg_email.test(vm.userVal)) {
                        vm.login_error=true;
                        vm.error="请输入正确的邮箱";
                        return false;
                    }
                }
                if(vm.pwVal === "") {
                    vm.login_error=true;
                    vm.error="密码不能为空";
                    return false;
                }else {
                    if(!reg_pwd.test(vm.pwVal)) {
                        vm.login_error=true;
                        vm.error="密码长度大于6位";
                        return false;
                    }
                }
                vm.login_error=false;
                vm.error="";
                if(reg_email.test(user) && reg_pwd.test(pwd)) {
                    return {
                        user:user,
                        pwd:pwd,
                        rem:vm.single
                    };
                }
            },
            getconnect(){
                    let url=process.env.NODE_ENV.apiPath+"systemManager/user/queryAllAdmins";
                    Vue.http.get(url)
                    .then((response) => {
                       for(var i=0;i<response.body.length;i++){
                        this.arr.push(response.body[i].email)
                       }
                    }, (response) => {
                        console.log('请求不到数据')
                    });
            },
            submit () {
                var vm = this;
                if( vm.error!='' || !this.userVal || !this.pwVal){ return; }else{
                    let _user=vm.check ().user,
                        _pwd=md5(vm.check ().pwd),
                        url=process.env.NODE_ENV.apiPath+"systemManager/login";
                   Vue.http.post(url,{
                        email:_user,
                        password:_pwd,
                    },{emulateJSON:true}).then((response)=>{
                        if(response.body.resultCode===0){
                                    let json=JSON.parse(response.body.resultValue)
                                    if(vm.check ().rem){
                                         function setCookie(name,value){
                                            var Days = 30;
                                            var exp = new Date();
                                            exp.setTime(exp.getTime() + Days*24*60*60*1000);
                                            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
                                         }
                                         setCookie('useremail',json.email)
                                         setCookie('userpassword',json.password)
                                         setCookie('atmJson',response.body.resultValue)
                                    }else{
                                            sessionStorage.setItem('sessionUser',json.email);
                                            sessionStorage.setItem('sessionPassword',json.password);
                                            sessionStorage.setItem('sessionAtmJson',response.body.resultValue);
                                    }
                            vm.$router.go("./connect/delivery")
                        }else if(response.body.resultCode===4){
                             vm.login_error=true;
                             vm.error="邮箱格式错误";
                        }else if(response.body.resultCode===5){
                             vm.login_error=true;
                             vm.error="用户名密码错误";
                        }else{
                             vm.login_error=true;
                             vm.error="失败";
                        }
                    },(response)=>{
                        console.log('请求数据失败')
                    })
                }
            },
            handbook(){
                 window.open ('http://wiki.tenddata.com/pages/viewpage.action?pageId=26084143', '_blank' ) ;
            }   
        }
    }
</script>

