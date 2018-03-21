<template><!-- 数据交付 -->
	<div class="atm-ide">
         <div class="demo-spin-container" v-show="loader">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </div>
		<div class="delivery_btn">
			<!-- <i-input :value.sync="projectVal" size="small" placeholder="请输入项目名称..." style="width: 300px" ></i-input>
			<i-button type="primary" @click="projectsubmit"  size="small" class="delivery-mar">创建项目</i-button> -->
            <i-input :value.sync="search" size="small" placeholder="请输入要搜索的内容..." style="width: 300px;margin-left:10px" @keyup.enter="searchPlay"></i-input>
            <i-button type="primary"   size="small" @click="searchPlay" icon="ios-search" class="delivery-mar">搜索</i-button>
            <i-button type="ghost" icon="refresh" class="delivery-mar" style="float:right;margin-right:0px;padding:3px 15px" @click="fetchData"  class="delivery-mar" title='刷新'></i-button>
        </div>
		<i-table  highlight-row border :columns="columns1" :data="data1" :content="self" size="small" ></i-table>
        <div class='page-footer'>
                <Page :total='navigatePages'  @on-change="changePage" :current="current" :page-size='15' show-total></Page>
	    </div>
	 	<Modal
	        :visible.sync="modal1"
	        :style="{width: '90%'}"
            title='查看作业详情'
            class-name="vertical-center-modal"
            >
           <div slot="footer" class="deliveryFooter"><Pop :msg='msg'><Pop></div>
	   </Modal>
     </div>
</template>

<script>
import Pop from '../lib/pop/pop';

 export default {
 		components:{Pop},
        data () {
            return {
                self: this,
                modal1: false,
                pageNum:1,
                data1: [] ,
                value: '',
                model2: '',
                navigatePages:0,
                msg:'',
                email:'',
                search:'',
                current:1,
                projectVal:'',
                loader:false,
                columns1: [
                    {
                        sortable: true,
                        title: '作业id',
                        key: 'jobId',
                        width:'100',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '项目名称',
                        key: 'projectName',
                    },
                    {
                        sortable: true,
                        title: '作业名称',
                        key: 'jobName',
                        type:'center'
                    },
                    {
                    	sortable: true,
                        title: '提交用户',
                        key: 'email',
                        type:'center',
                    },
                    {
                        sortable: true,
                        title: '提交时间',
                        key: 'createTime',
                        type:'center'
                    },
                    {
                        sortable: true,
                        title: '更新时间',
                        key: 'doneTime',
                        type:'center'
                    },
                    {
                    	sortable: true,
                        title: '作业状态',
                        width:'123',
                        type:'center',
                        render (row, column, index) {
                            let status='';
                            if(row.status==0){
                                status='已创建'
                            }else if(row.status==1){
                                status='已提交'
                            }else if(row.status==2){
                                status='排队中'
                            }else if(row.status==3){
                                status='已调度'
                            }else if(row.status==4){
                                status='运行中'
                            }else if(row.status==5){
                                status='已成功'
                            }else if(row.status==6){
                                status='已失败'
                            }else if(row.status==7){
                                status='已拉取'
                            }else if(row.status==8){
                                status='已取消'
                            }
                            const color = row.status == 5 ? 'green' : row.status == 6 ? 'red' : 'blue';
                            return `<tag type="dot" color="${color}">${status}</tag>`;
                        }
                    },
                    {
                        title: '查看作业详情',
                        type:'center',
                        width:'130',
                        render (row, column, index) {
                            let n=true;
                            if(row.status==2){
                                n=false
                            }
                            return '<i-button type="primary" size="small"  @click="show('+index+')" class="management-btn">查看</i-button><i-button type="primary" size="small"  @click="abrogate('+index+')" :disabled="'+n+'">取消</i-button> '
                        }
                    }
                ]
            }
        },
        ready(){
             this.getcookie()
			 this.fetchData();
        },
        methods:{
            freshPage(){
                location.reload();
            },
            getcookie(){
                    function getCookie(name){
                        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                        if(arr=document.cookie.match(reg))
                        return unescape(arr[2]);
                        else
                        return null;
                    }
                       let useremail=(getCookie('useremail')),
                           userpassword=(getCookie('userpassword')),
                           sessionemail=sessionStorage.getItem('sessionUser');
                       if(useremail && userpassword){
                          this.email=useremail
                       }else if(sessionemail){
                          this.email=sessionemail
                       }
            },
        	changePage(status){
        		this.pageNum=status
				this.current = status;
                this.fetchData();
        	},
        	fetchData(){
                this.loader=true;
        		let url=process.env.NODE_ENV.apiPath+"/jobManager/getJobList";
                if(this.email){
                    Vue.http.get(url,{
                        params:{
                            email:this.email,
                            keyword:this.search,
                            pageNum:this.pageNum,
                            pageSize:15,
                            jobType:1,
                        }
                    }).then((response) => {
                       this.loader=false;
                       this.data1=response.body.list;
                       this.navigatePages=response.body.total;
                    }, (response) => {
                        console.log('请求不到数据')
                    });
                }
        	},
        	show (index) {
        		let len=this.data1[index].jobId;
        		let url=process.env.NODE_ENV.apiPath+"jobManager/getJobDetail";
        		Vue.http.get(url,{
        			params:{
        				jobId:len
        			}
        		}).then((response) => {
                    this.msg=response
					this.modal1=true
		        }, (response) => {
		        	console.log('请求不到数据')
		        });
            },
            projectsubmit(){
            	if(this.projectVal==''){
            		this.$Notice.warning({title: '创建项目',desc:  '请输入要创建项目名称'})
            	}else{
                    let url=process.env.NODE_ENV.apiPath+"/jobManager/addProject";
                    Vue.http.get(url,{
                        params:{
                            email:this.email,
                            projectName:this.projectVal
                        }
                    }).then((response) => {
                       if(response.body.resultCode==0){
                             this.$Notice.success({title: '创建项目',desc:  '创建项目成功'})
                       }else{
                            this.$Notice.error({title: '创建项目',desc: '创建项目失败！请重新创建'})
                       }
                    }, (response) => {
                        console.log('请求不到数据')
                    });
                }
            },
            searchPlay(){
                    let url=process.env.NODE_ENV.apiPath+"jobManager/getJobList";
                    Vue.http.get(url,{
                        params:{
                            email:this.email,
                            keyword:this.search,
                            pageNum:1,
                            pageSize:15,
                            jobType:1,
                        }
                    }).then((response) => {
                        this.data1=response.body.list;
                        this.navigatePages=response.body.total;
                         this.current=1;
                    }, (response) => {
                        console.log('请求不到数据')
                    });
             },
             abrogate(index){
                this.$Modal.confirm({
                    title: '取消作业',
                    content: '<p>您确认要取消当前作业？</p>',
                    onOk: () => {
                                let len=this.data1[index].jobId;
                                let url=process.env.NODE_ENV.apiPath+"jobMonitor/cancelJob";
                                Vue.http.get(url,{
                                    params:{
                                        jobId:len
                                    }
                                }).then((response) => {
                                    if(response.body.resultCode==0){
                                         this.fetchData()
                                         this.$Notice.success({title: '取消任务',desc:  '取消任务成功'})
                                   }else{
                                        this.$Notice.error({title: '取消任务',desc: '取消任务失败'})
                                   }
                                }, (response) => {
                                    console.log('请求不到数据')
                                });
                    }
                });
            }
          
        }

  }
</script>
<style>
   
    .vertical-center-modal .ivu-modal-body{
        border-top:none;
        padding:0;
    }
	.deliveryFooter{
        text-align:left;
    }
    .ivu-icon-refresh{
        font-size: 19px;
    }
</style>

