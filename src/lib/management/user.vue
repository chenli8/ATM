<template><!-- 平台管理   用户管理 -->
    <div class="management-swiper">
        <p>
            <i-input :value.sync="emailVal" placeholder="请输入邮箱名称" style="width: 200px"  size="small" ></i-input>
            <i-select :model.sync="branch" style="width:200px" size="small" class="user1-mar">
                    <i-option v-for="item in branchList" :value="item.id">{{item.deptName}}</i-option>
            </i-select>
            <i-button type="primary"  size="small" @click="adduser">新增用户</i-button>
            <i-input :value.sync="search" size="small" placeholder="请输入要搜索的内容..." style="width: 200px;margin-left:10px" @keyup.enter="searchPlay" ></i-input>
            <i-button type="primary"   size="small" @click="searchPlay" icon="ios-search" class="user-mar">搜索</i-button>
        </p>
        <i-table  highlight-row border :columns="columns1" :data="data1" :content="self" size="small" ></i-table>
        <div class='page-footer'>
                <Page :total='navigatePages'  @on-change="changePage" :current="current" :page-size=15 show-total></Page>
        </div>
    </div> 
</template>
<script>
    export default{
        props:['chuan'],
        data(){
            return{
                 self:this,
                 emailVal:'',
                 branch:'',
                 pageNum:1,
                 search:'',
                 current:1,
                 show:{
                    id:1,
                    isb:false,
                    isc:false,
                    name:'',
                    email:'',
                    deptName:'',
                    deptId:'',
                 },
                 navigatePages:1,
                 branchList:[],
                 data1:[],
                 columns1:[
                    {
                        sortable: true,
                        title: '用户名称',
                        key: 'name',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '部门名称',
                        key: 'deptName',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '邮箱',
                        key: 'email',
                        type:'center'
                    },
                    {
                        title: '操作',
                        key: '',
                        width:370,
                        type:'center',
                        render (row, column, index) {
                            let userId=row.id;
                            return '<i-button type="primary" size="small" @click="updatarole('+userId+')" class="management-btn">角色管理</i-button> <i-button type="primary" size="small" @click="selectuser('+userId+')" class="management-btn">重置密码</i-button><i-button type="primary" size="small" @click="unemail('+userId+')" class="management-btn" >通知</i-button><i-button type="primary" size="small" @click="updtaeUser('+userId+')" class="management-btn">修改</i-button><i-button type="error" size="small" @click="remove('+userId+')">删除</i-button> ';
                        }
                    },
                 ]
            }
        },
        ready(){
            this.readygetbranch()
            this.managData()
        },
        watch:{
            chuan:function(){
                this.managData()
            }
        },
        methods:{
            readygetbranch(){
                let url=process.env.NODE_ENV.apiPath+"systemManager/dept/queryAllDepts";
                Vue.http.post(url,{
                    pageNum:0,
                    pageSize:0
                },{emulateJSON:true})
                .then((respnese)=>{
                    this.branchList=respnese.body.list
                },(response)=>{
                    console.log('请求不到数据')
                })
            } ,
            changePage(status){
                    this.pageNum = status;
                    this.current = status;
                    this.managData();
            },
            managData(){
                    let url=process.env.NODE_ENV.apiPath+"systemManager/user/queryAllUsers";
                    Vue.http.post(url,{
                            pageNum:this.pageNum,
                            pageSize:15,
                         },{emulateJSON:true})
                   .then((response) => {
                        this.data1=response.body.list;
                        this.navigatePages=response.body.total;
                    }, (response) => {
                        console.log('请求不到数据')
                    });
            },
            adduser(){
                    if(!this.emailVal){
                        this.$Notice.warning({title: '用户管理',desc: '请输入邮箱'
                        })
                    }else if(!this.branch){
                        this.$Notice.warning({title: '用户管理',desc: '请选择部门'
                        })
                    }else{
                        let url=process.env.NODE_ENV.apiPath+"systemManager/user/addUser";
                        Vue.http.post(url,{
                            email:this.emailVal,
                            deptId:this.branch
                        },{emulateJSON:true})
                       .then((response) => {
                            if(response.body.resultCode===0){
                               this.managData()
                                this.$Notice.success({title: '新增用户',desc: '新增用户成功'})
                            }else{
                                 this.$Notice.error({title: '新增用户',desc: '新增用户失败！'})    
                            }
                        }, (response) => {
                            console.log('请求不到数据')
                        });
                    }
            },
            updatarole(userId){
                this.show.id=userId
                this.show.isb=true
                this.show.isc=false
                this.$emit( 'child-msg',this.show);
            },
            selectuser(userId){
                this.$Modal.confirm({
                        title: '重置密码',
                        content: '<p>您确认要重置密码吗？</p>',
                        onOk: () => {
                                let url=process.env.NODE_ENV.apiPath+"systemManager/user/resetPassword";
                                Vue.http.post(url,{
                                    userId:userId
                                },{emulateJSON:true})
                                .then((response)=>{
                                    if(response.body.resultCode==0){
                                        this.$Notice.success({ title: '重置密码',desc: '重置密码成功'})
                                    }else{
                                        this.$Notice.error({ title: '重置密码',desc: '重置密码失败！'})
                                    }
                                },(response)=>{
                                    console.log('请求不到数据')
                                })
                        }
                    });
            },
            remove(index){
                 this.$Modal.confirm({
                    title: '删除用户',
                    content: '<p>您确认删除当前用户吗？</p>',
                    onOk: () => {
                       let url=process.env.NODE_ENV.apiPath+"systemManager/user/deleteUser";
                        Vue.http.post(url,{
                            userId:index
                        },{emulateJSON:true})
                       .then((response) => {
                            if(response.body.resultCode==0){
                                this.managData()
                                this.$Notice.success({ title: '删除用户',desc: '删除用户成功'})
                            }else{
                                 this.$Notice.error({title: '删除用户',desc: '删除用户失败！'})    
                            }
                        }, (response) => {
                            console.log('请求不到数据')
                        });
                    }
                 });
            },
            searchPlay(){
                 let url=process.env.NODE_ENV.apiPath+"systemManager/user/queryAllUsers";
                    Vue.http.post(url,{
                            keyword:this.search,
                            pageNum:1,
                            pageSize:15,
                    },{emulateJSON:true}).then((response) => {
                        this.data1=response.body.list;
                        this.navigatePages=response.body.total;
                         this.current=1;
                    }, (response) => {
                        console.log('请求不到数据')
                    });
            },
            unemail(id){
            this.$Modal.confirm({
                    title: '通知',
                    content: '<p>您确认发送通知吗？</p>',
                    onOk: () => { 
                            let arr=this.data1,
                                arr1=[],
                                arr2=[];
                            for(var i=0;i<arr.length;i++){
                                arr1.push(arr[i].id)
                                arr2.push((arr[i].email))
                            }
                            let idx=arr1.indexOf(id),
                                 email=arr2[idx],
                                 obj={
                                    "toAddress":email
                                 },
                            newobj=JSON.stringify(obj),
                            url=process.env.NODE_ENV.apiPath+"commonServiceManager/notify";
                            console.log(newobj)
                            Vue.http.get(url,{
                                    params:{
                                        alertType:0,
                                        messageType:0,
                                        params:newobj,
                                    }
                             })
                           .then((response) => {
                            console.log(response.body.resultCode)
                                if(response.body.resultCode===0){
                                     this.$Notice.success({title: '通知',desc: '发送邮件成功'})
                                }else{
                                     this.$Notice.error({title: '通知',desc: '发送邮件失败！'})    
                                }
                            }, (response) => {
                                console.log('请求不到数据')
                            });
                    }
                 });
            },
            updtaeUser(userId){
                this.show.id=userId
                this.show.isb=false
                this.show.isc=true
                let arr=this.data1,
                    arr1=[];
                for(var i=0;i<arr.length;i++){
                    arr1.push(arr[i].id)
                }
                let idx=arr1.indexOf(userId);
                this.show.name=arr[idx].name  
                this.show.deptName=arr[idx].deptName;
                this.show.email=arr[idx].email;
                this.show.deptId=arr[idx].deptId
                this.$emit( 'child-msg',this.show);
            }
        }
    }
</script>
