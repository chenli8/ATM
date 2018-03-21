<template><!-- 作业监控 -->
        <div>
                    <div class="demo-spin-container" v-show="loader">
                        <Spin fix>
                            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                            <div>Loading</div>
                        </Spin>
                    </div>
                     <section class="minitoring-wrapper">
                        <h2><Icon type="ios-browsers-outline" size="18"></Icon><span>作业队列管理</span></h2>
                        <div class="minitoring-wrapper-top">
                            <label for="">请选择队列</label>
                            <p class="minitoring-wrapper-select">
                                <i-select :model.sync="monitoringtype" style="width:200px" size="small">
                                    <i-option v-for="item in cityList3" :value="item.type">{{  item.val  }}</i-option>
                                </i-select>
                            </p>
                        <i-button type="ghost" icon="refresh" class="delivery-mar" style="float:right;margin-right:0px;padding:3px 15px" @click="monitoringData"  class="delivery-mar" title='刷新'></i-button>
                        </div>
                            <div class="minitoring-scroll">
                                <i-table  highlight-row border :columns="columns1" :data="data1" :content="self" size="small" ></i-table>
                                <!-- <i-button type="text" class="minitoring_no" v-show="information">当前没有数据</i-button> -->
                            </div>
                </section>
        </div>
       
</template>
<script>
    export default{
      data () {
            return {
                self: this,
                monitoringtype:1,
                information:true,
                loader:false,
                cityList3:[
                    {
                        type:1,
                        val:'用户作业'
                    },
                    {
                        type:2,
                        val:'服务作业'
                    }
                ],
                columns1:[
                    {
                        sortable: true,
                        title: '作业id',
                        key: 'jobId',
                        width: '100',
                        type:'center'
                    },
                    {
                        title: '项目名称',
                        key: 'projectName',
                    },
                    {
                        title: '作业名称',
                        key: 'jobName',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '邮箱',
                        key: 'email',
                        type:'center',
                    },
                    {
                        sortable: true,
                        title: '创建时间',
                        key: 'createTime',
                        width: 180,
                        type:'center'
                    },
                    {
                        title: '任务个数',
                        key: 'taskCount',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '作业状态',
                        key: 'jobStatus',
                        type:'center',
                        
                    },
                    {
                       title: 'Task次序',
                       key: 'serialNo',
                       type:'center',
                    },
                    {
                        title: 'TaskID',
                        key: 'taskId',
                        type:'center',
                    },
                    {
                        title: 'Task状态',
                        key: 'taskStatus',
                        type:'center',
                    },
                    {
                        title: '排队次序',
                        key: 'jobCntBefore',
                        type:'center',
                        
                    },
                    {
                        title: '操作',
                        type:'center',
                        render (row, column, index) {
                            let Id=row.jobId
                            return '<i-button type="primary" size="small"  @click="monitoringshow('+Id+')">提高优先级</i-button> ';
                        }
                    }
                ],
                data1:[]
            }
        },
        ready(){
                this.monitoringData()
        },
        watch:{
            monitoringtype:function(){
                let url=process.env.NODE_ENV.apiPath+"jobMonitor/getWaitingJobs";
                Vue.http.get(url,{
                    params:{
                            type:this.monitoringtype
                    }
                }).then((response) =>{
                    if(response.body.resultCode==0){
                        this.data1=JSON.parse(response.body.resultValue).list
                    }
                },(response) =>{
                    console.log("请求不到数据")
                })
            },
            data1:function(){
               if(this.data1.length>0){
                    this.information=false
               }else{
                    this.information=true
               }
            }
        },
        methods:{
            monitoringData(){
                this.loader=true;
                let url=process.env.NODE_ENV.apiPath+"jobMonitor/getWaitingJobs";
                Vue.http.get(url,{
                    params:{
                            type:1
                    }
                }).then((response) =>{
                    this.loader=false;
                    if(response.body.resultCode==0){
                         this.data1=JSON.parse(response.body.resultValue).list
                     }
                },(response) =>{
                    console.log("请求不到数据")
                })
            },
            monitoringshow(jobId){
                if(this.monitoringtype==''){
                         this.$Notice.warning({
                            title: '选择队列',
                            desc: '请先选择队列'
                        });
                }else{
                        let url=process.env.NODE_ENV.apiPath+"jobMonitor/prioritizeJob";
                        Vue.http.get(url,{
                            params:{
                                jobId:jobId,
                                type:this.monitoringtype,
                            }
                        }).then((response) => {
                            if(response.body.resultCode==0){
                                this.$Notice.success({
                                        title: '提高优先级',
                                        desc: '提高优先级成功'
                                })
                            }else{
                                 this.$Notice.error({
                                        title: '提高优先级',
                                        desc:  '提高优先级失败'
                                 })
                            }
                        }, (response) => {
                            console.log('请求不到数据')
                        });
                }

                
            }
        }
    }
</script>
<style>
    th>.ivu-table-cell{
       word-wrap: normal;
       white-space: inherit;
    }
    .ivu-icon-refresh{
        font-size: 19px;
    }
    .demo-spin-container {
    display: inline-block;
    width: 200px;
    height: 100px;
    position: fixed;
    border: 1px solid #eee;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -100px;
    z-index: 9999999;
    }
    .demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
    }
    .demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
    }
</style>


