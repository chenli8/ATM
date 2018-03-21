<template >
	<div class="atm-ide-connect">
		<Tabs type="card">
				<!-- 调度平台 -->
                <Tab-pane label="调度平台"><Switchs @child-switch="getSwitch" :msgtime='msgtime' :msgresonse='msgresonse'></Switchs></Tab-pane>
				

                <!-- 服务配置 -->
                <Tab-pane label="服务配置">
                		<div class="switch-wrapper-top">
				        	<label><Icon type="ios-browsers-outline" size="18"></Icon><span>新建服务</span></label>
				            <p class="switch-wrapper-select">
					             <i-button type="primary" size="small" @click="modal3=true" icon="ios-color-filter-outline">新建</i-button>
				            </p>
						</div>
                		<i-table  highlight-row border :columns="columns" :data="data1" :content="self" size="small" ></i-table>
                </Tab-pane>


               <!--  服务开通 -->
                <Tab-pane label="服务开通">
					<div class="switch-wrapper-top">
			        	<label><Icon type="ios-browsers-outline" size="18"></Icon><span>新建用户</span></label>
			            <p class="switch-wrapper-select">
				             <i-button type="primary" size="small" @click="modal5=true" icon="ios-color-filter-outline">新建</i-button>
			            </p>
			            <i-table  highlight-row border :columns="columnsuser" :data="data2" :content="self" size="small" ></i-table>
					</div>
                </Tab-pane>
        </Tabs>


        <Modal
	        :visible.sync="modal1"
	        :style="{width: '40%'}"
            title='修改资源数量'
            @on-ok="sure"
            class-name="vertical-center-modal"
            >
            <div class="platform-dir">
            	<p><label for="">队列名称:</label>{{newQueue}}</p>
				<p><label for="">任务类型 :</label>{{newTaskType}}</p>
	            <p><label for="">类型描述 :</label>{{newTypeDesc}}</p>
	            <p><label for="">请输入资源数量：</label><i-input :value.sync="newValue" style="width: 300px"></i-input></p>
            </div>
       </Modal>


        <Modal
            :visible.sync="modal2"
            :style="{width: '40%'}"
            @on-ok="down"
			@on-cancel="off"
            title="修改时间"
            >
            <div class="switch-wrapper-end">
			 	<p>
			 		<label for="">请选择开始日期和时间</label>
			 		<Time-picker confirm placeholder="选择时间" style="width: 250px" format="HH点mm分ss秒" :value='value1' @on-change="TimeChange1"></Time-picker>
			 	</p>
			 	<p>
			 		<label for="">请选择结束日期和时间</label>
			 		<Time-picker confirm placeholder="选择时间" style="width: 250px" format="HH点mm分ss秒" :value='value2' @on-change="TimeChange2"></Time-picker>
			 	</p>
			 </div>
        </Modal>



         <!-- 添加服务 -->
		<Modal
	        :visible.sync="modal3"
	        :style="{width: '40%'}"
            title='新建服务'
            @on-cancel="removeService"
            >
            <div class="service-t">
            	<p><strong>服务ID:</strong><i-input :value.sync="service2" placeholder="请输入..." style="width: 300px" size="small"></i-input></p>
            	<p><strong>接口类型:</strong><Input-number  :min="0" :value.sync="service3" size="small"></Input-number></p>
            	<p><strong>URI:</strong><i-input :value.sync="service4" placeholder="请输入..." style="width: 300px" size="small"></i-input></p>
            	<p><strong>描述:</strong><i-input :value.sync="service5" placeholder="请输入..." style="width: 300px" size="small"></i-input></p>
            	<p><strong>状态:</strong>
            		  <Radio-group :model.sync="serviceHhone">
				        <Radio value="0">
				           <span>不启用</span>
				        </Radio>
				        <Radio value="1">
				           <span>启用</span>
				        </Radio>
				    </Radio-group>
            	</p>
            	<p class="service-t-last" v-show="serviceMessage">请信息完善后提交</p>
			 </div>
			 <div slot="footer">
			 	  <i-button type="primary" @click="removeService()">取消</i-button>
                  <i-button type="primary" @click="addService()">确认新建</i-button>
            </div>
       </Modal>



       <!-- 修改服务 -->
       <Modal
	        :visible.sync="modal4"
	        :style="{width: '40%'}"
            title='修改服务'
            @on-cancel="removeDirService"
            >
            <div class="service-t">
				<p><strong>ID:</strong>{{serviceConnectId}}</p>
            	<p><strong>服务ID:</strong><i-input :value.sync="updateService_id" placeholder="请输入..." style="width: 400px" size="small"></i-input></p>
            	<p><strong>接口类型:</strong><Input-number  :min="0" :value.sync="typological" size="small"></Input-number></p>
            	<p><strong>URI:</strong><i-input :value.sync="updateURI" placeholder="请输入..." style="width: 400px" size="small"></i-input></i-input></p>
            	<p><strong>描述:</strong><i-input :value.sync="updateDescription" placeholder="请输入..." style="width: 400px" size="small"></i-input></p>
            	<p><strong>状态:</strong>
            		  <Radio-group :model.sync="endinvocation">
				        <Radio value="0">
				           <span>不启用</span>
				        </Radio>
				        <Radio value="1">
				           <span>启用</span>
				        </Radio>
				    </Radio-group>
            	</p>
            	<p class="service-t-last" v-show="serviceMessage">请信息完善后提交</p>
			 </div>
			 <div slot="footer">
			 	  <i-button type="primary" @click="removeDirService()">取消</i-button>
                  <i-button type="primary" @click="addDirService()">确认修改</i-button>
            </div>
       </Modal>

       <!-- 服务开通弹框 -->
        <Modal
            :visible.sync="modal5"
            :style="{width: '40%'}"
			@on-cancel="removeOpening()"
            title="新建用户"
            >
            <div class="service-t">
				<p>
					<strong>选择描述:</strong>
					<i-select :model.sync="OpeningSelecter" style="width:350px" size="small">
	                    <i-option v-for="item in OpeningLsit" :value="item.id">{{  item.description  }}</i-option>
	                </i-select>
				</p>
				<p><strong>用户邮箱:</strong><i-input :value.sync="OpeningUserEmail" placeholder="请输入..." style="width: 350px" size="small"></i-input></p>
				<p><strong>状态:</strong>
            		  <Radio-group :model.sync="OpeningEnabled">
				        <Radio value="0">
				           <span>不启用</span>
				        </Radio>
				        <Radio value="1">
				           <span>启用</span>
				        </Radio>
				     </Radio-group>
            	</p>
            	<p class="service-t-last" v-show="serviceMessage">请信息完善后提交</p>
			</div>	
			 <div slot="footer">
			 	  <i-button type="primary" @click="removeOpening()">取消</i-button>
                  <i-button type="primary" @click="addOpening()">确认新建</i-button>
            </div>
        </Modal>

      <!--   添加约束 -->
       <Modal
            :visible.sync="modal6"
            :style="{width: '45%'}"
			@on-cancel="removeRestrict"
            title="添加约束"
            >
         	<div class="service-f">
         			<p>
		            	<strong>要约束的用户:</strong>
		            	<span>{{restrictEmail}}</span>
		            </p>
				  	<p>
						<strong>选择约束:</strong>
		            	<i-select :model.sync="restrictId" style="width:200px" size="small" @on-change="restricSelecter">
			                <i-option v-for="item in restrictList" :value="item.id">{{  item.description  }}</i-option>
			            </i-select>
		            </p>
		            <p><strong>状态:</strong>
            		  <Radio-group :model.sync="restrictEnd">
				        <Radio value="0">
				           <span>不启用</span>
				        </Radio>
				        <Radio value="1">
				           <span>启用</span>
				        </Radio>
				     </Radio-group>
            	    </p>
		            <p>
		            	<strong>模板:</strong>
		            	<i-input :value.sync="restrictControlment" placeholder="请输入..." style="width:450px" size="small"></i-input></p>
	               </p>
					<p class="service-t-last" v-show="serviceMessage">请信息完善后提交</p>
           	</div>
			<div slot="footer">
			 	  <i-button type="primary" @click="removeRestrict">取消</i-button>
                  <i-button type="primary" @click="addRestrict">确认添加</i-button>
            </div>
        </Modal>


       <!--  查看约束 -->
        <Modal
            :visible.sync="modal7"
            :style="{width: '90%'}"
            title="查看约束"
            class-name="vertical-center-modal"
            >
         	<Fulfilling slot="footer" :propsfulfilling='propsfulfilling' class="deliveryFooter" @child-msg='getAllMessage'></Fulfilling>
        </Modal>

    </div>
</template>
<script>
import Switchs from '../lib/configuration/switch';
import Fulfilling from '../lib/configuration/fulfilling';
export default{
	components:{
		Switchs,Fulfilling
	},
	data(){
		return {
			self:this,
			modal1:false,
			modal2:false,
			modal3:false,
			modal4:false,
			modal5:false,
			modal6:false,
			modal7:false,
			value1:'',
			value2:'',
			msgtime:false,
			msgresonse:false,
			newValue:'',
			newQueue:'',
			newTaskType:'',
			newTypeDesc:'',
			service2:'',
			service3:0,
			service4:'',
			service5:'',
			serviceHhone:0,
			serviceMessage:false,
			serviceConnectId:'',
			updateService_id:'',
			updateURI:'',
			updateDescription:'',
			typological:0,
			endinvocation:0,
			columns:[
				{
                    sortable: true,
                    title: 'ID',
                    key: 'id',
                  	type:'center'
                },
                {
                    sortable: true,
                    title: '服务ID',
                    key: 'serviceId',
                    type:'center'
                },
                {
                    title: '接口类型',
                    key: 'ifaceType',
                    width:'90',
                    type:'center'
                },
                {
                    sortable: true,
                    title: 'URI',
                    key: 'path',
                    type:'center'
                },
                 {
                    sortable: true,
                    title: '描述',
                    key: 'description',
                    type:'center',
                },
                 {
                    title: '状态',
                    key: 'enabled',
                    width:'70',
                    type:'center',
                    render (row, column, index) {
                    	let data=''
                    	if(row.enabled===0){
                    		data='未启用'
                    	}else if(row.enabled===1){
							data='启用'
                    	}
                        return '<p>'+data+'</p>';
                    }
                }, {
                    sortable: true,
                    title: '创建时间',
                    key: 'createTime',
                    width:'170',
                    type:'center'
                },{
                    title: '操作',
                    key: '',
                    width:80,
                    type:'center',
                    render (row, column, index) {
                        return '<i-button type="primary" size="small" @click="updateTabService('+index+')">修改</i-button> ';
                    }
                }
			],
			data1:[],//开通服务
			OpeningLsit:[],
			OpeningSelecter:1,
			OpeningUserEmail:'',
			OpeningEnabled:0,
			columnsuser:[
				{
                    sortable: true,
                    title: 'ID',
                    key: 'id',
                    width:'70',
                    type:'center'
                },{
                    sortable: true,
                    title: '操作时间',
                    key: 'opTime',
                    type:'center'
                },{
                    sortable: true,
                    title: '创建时间',
                    key: 'createTime',
                    type:'center'
                },{
                    sortable: true,
                    title: '接口ID',
                    key: 'ifaceId',
                    type:'center'
                },{
                    sortable: true,
                    title: '操作人',
                    key: 'opUser',
                    type:'center'
                },{
                    sortable: true,
                    title: '接口调用方',
                    key: 'userId',
                    type:'center'
                },{
                    sortable: true,
                    title: '服务名',
                    key: 'serviceId',
                    type:'center'
                },{
                    sortable: true,
                    title: 'URL路径',
                    key: 'path',
                    type:'center'
                },{
                    title: '状态',
                    key: 'enabled',
                    width:'100',
                    type:'center',
                    render (row, column, index) {
                        let endlabel=false;
                    	if(row.enabled===0){
                            endlabel=false
                    	}else if(row.enabled===1){
                            endlabel=true
                    	}
                        return '<p>'+
                                    '<Switch size="large" @on-change="enabledOpen('+index+')" :checked="'+endlabel+'">'+
                                    '<span slot="open" >启用</span>'+
                                    '<span slot="close">禁用</span>'+
                                    '</Switch>'+
                                '</p>';
                    }
                },{
                    title: '操作',
                    key: '',
                    width:158,
                    type:'center',
                    render (row, column, index) {
                        let userId=row.id;
                        return '<i-button type="primary" size="small" @click="updateTabOpening('+userId+')" class="management-btn">添加约束</i-button><i-button type="primary" size="small" @click="seeOpening('+userId+')" class="management-btn">查看</i-button>';
                    }
                }
			],
			data2:[],//添加约束
			restrictId:1,
			restrictList:[],
			restrictEnd:0,
			restrictControlment:'',
			restrictEmailId:0,//记录要约束的id传给后台
			restrictEmail:'',//记录要约束的email
			propsfulfilling:[]//传给子组件
		}
	},
	ready(){
		//获取服务配置 表格  ；和服务开通中-新建约束中-选择描述
		this.getSrvice();
		//获取开通服务 表格；添加约束-选择约束
		this.getOpeningSelector()
	},
	watch:{
	},
	methods:{
		getSwitch(data){
			this.modal1=data.async1;
			this.modal2=data.async2;
			if(data.amountAll){
				this.newValue=data.amountAll.amount;
				this.newQueue=data.amountAll.queue;
				this.newTaskType=data.amountAll.taskType;
				this.newTypeDesc=data.amountAll.typeDesc
			}
		},
		down(){
			if(!this.value1 || !this.value2){
				 this.$Notice.error({title: '修改时间失败',desc:  '请先选择开始时间和结束时间'})
			}else{
				let reg= /[\u4e00-\u9fa5]+/g,
				str1 = this.value1.replace( reg,':'),	
				str2 = this.value2.replace( reg,':' ),	
				state=str1.substring(0,str1.length - 1),	
				end=str2.substring(0,str2.length - 1);
				let url=process.env.NODE_ENV.schedPath+"admin/maintenance";
                Vue.http.get(url,{
                    params:{
                        startTime:state,
                        endTime:end
                    }
                }).then((response) => {
                	let body=JSON.parse(response.body);
                    if(body.statusCode===200){
                        this.value1=''
						this.value2=''
						this.msgtime=!this.msgtime
						this.$Notice.success({title: '修改时间范围',desc: '修改时间范围成功'})
					}else{
                         this.$Notice.error({title: '修改时间范围',desc:  '修改时间范围失败，请重试！'})
                    }
                }, (response) => {
                    console.log('请求不到数据')
                });
			}
		},
		off(){
			this.value1=''
			this.value2=''
		},
		TimeChange1(time){
			this.value1=time
		},
		TimeChange2(time){
			this.value2=time
		},
		sure(){
			let reg=/^[0-9]*$/;
            if(!reg.test(this.newValue)){
                this.$Notice.error({title: '输入有误',desc:  '请输入数字！'})
            }else{
            	 let url=process.env.NODE_ENV.schedPath+'admin/resource';
                Vue.http.get(url,{
                    params:{
                    	queue:this.newQueue,
                    	taskType:this.newTaskType,
                        amount:this.newValue
                    }
                }).then((response) => {
                   let body=JSON.parse(response.body);
                   if(body.statusCode===200){
                   	   this.msgresonse=!this.msgresonse
                   	   this.$Notice.success({title: '修改资源数量',desc:  '修改资源数量成功！'})
                   }else{
                   	   this.$Notice.error({title: '修改资源数量',desc:  '修改资源数量失败！'})
                   }
                 },(response) => {
            			console.log('请求不到数据')
           		})
            }
		},//添加服务
		addService(){
            if(this.service2===''||this.service4===''||this.service5===''){
				this.serviceMessage=true
			}else{
				this.serviceMessage=false
				let url="http://172.21.58.17:8083/admin/saveOrUpdateIface";
				Vue.http.post(url,{
				        serviceId:this.service2,
				 		ifaceType:this.service3,
				 		path:this.service4,
				 		description:this.service5,
				 		enabled:this.serviceHhone
	           },{emulateJSON:true}).then((response) => {
			 	 	   if(response.data.code===200){
			 	 	   	     this.getSrvice()
				 	 	   	 this.removeService()
                             this.$Notice.success({title: '新建服务',desc:  '新建服务成功'})
                       }else{
                            this.$Notice.error({title: '新建服务',desc: '新建服务失败！请重试'})
                       }
	            }, (response) => {
	                console.log('请求不到数据')
	            });
			}
		},
		removeService(){
			this.modal3=false;
			this.service2='';
			this.service3=0;
			this.service4='';
			this.service5='';
			this.serviceHhone='0';
		},//获取表格信息
		getSrvice(){
				let url="http://172.21.58.17:8083/admin/queryAllIfaces";
				 Vue.http.post(url,{
				 },{emulateJSON:true}).then((response) => {
				 	if(response.data.code===200){
				 		 this.data1=JSON.parse(response.data.data)
				 		 this.OpeningLsit=JSON.parse(response.data.data)  
				 	}
				 }, (response) => {
		                console.log('请求不到数据')
		         });
		},//修改
		updateTabService(index){
			this.modal4=true
			this.serviceConnectId=this.data1[index].id
			this.updateService_id=this.data1[index].serviceId
			this.updateURI=this.data1[index].path
			this.updateDescription=this.data1[index].description
			this.typological=this.data1[index].ifaceType;
			this.endinvocation=this.data1[index].enabled;
		},//修改服务配置
		addDirService(){
			if(!this.updateService_id||!this.typological||!this.updateURI||!this.updateDescription){
				this.serviceMessage=true
				this.modal4=true
			}else{
				this.serviceMessage=false
			    let url="http://172.21.58.17:8083/admin/saveOrUpdateIface";
				Vue.http.post(url,{
				 		id:this.serviceConnectId,
				 		serviceId:this.updateService_id,
				 		ifaceType:this.typological,
				 		path:this.updateURI,
				 		description:this.updateDescription,
				 		enabled:this.endinvocation
				},{emulateJSON:true}).then((response) => {
			 	 	   if(response.data.code===200){
                             this.$Notice.success({title: '修改服务',desc:  '修改服务成功'})
                             this.modal4=false
                             this.getSrvice()
                       }else{
                            this.$Notice.error({title: '修改服务',desc: '修改服务失败！请重试'})
                       }
	            }, (response) => {
	                console.log('请求不到数据')
	            });
			}
		},
		removeDirService(){
			this.serviceMessage=false
			this.modal4=false
		},
		//开通服务
		getOpeningSelector(){
				let url="http://172.21.58.17:8083/admin/queryAllPermissions"
			    Vue.http.post(url,{
				},{emulateJSON:true}).then((response) => {
					if(response.data.code===200){
	                    this.data2=JSON.parse(response.data.data)  
	                }
	            }, (response) => {
	                console.log('请求不到数据')
	            });
				//获取添加约束 select
			    let url_="http://172.21.58.17:8083/admin/queryAllRuleTemplates";
				 Vue.http.post(url_,{emulateJSON:true}).then((response) => {
				 	if(response.data.code===200){
				 		this.restrictList=JSON.parse(response.data.data) 
				 	}
		         }, (response) => {
		                console.log('请求不到数据')
		         });
			
		},
		addOpening(){
			if(!this.OpeningUserEmail){
				this.serviceMessage=true
			}else{
				//获取当前用户email
				function getCookie(name) {
					var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
					if(arr = document.cookie.match(reg))
						return unescape(arr[2]);
					else
						return null;
				}
				let stat='';
					if(getCookie('useremail')){
						 stat= getCookie('useremail')
					}else if( sessionStorage.getItem('sessionUser')){
						 stat=sessionStorage.getItem('sessionUser')
					}
				let url="http://172.21.58.17:8083/admin/saveOrUpdatePermission";
				 Vue.http.post(url,{
						id:'',
				 		ifaceId:this.OpeningSelecter,
				 		userId:this.OpeningUserEmail,
				 		opUser:stat,
				 		enabled:this.OpeningEnabled
				 },{emulateJSON:true}).then((response) => {
						if(response.data.code===200){
                             this.getOpeningSelector()
                             this.removeOpening()
                             this.$Notice.success({title: '新建用户',desc:  '新建用户成功'})
                       }else{
                            this.$Notice.error({title: '新建用户',desc: '新建用户失败！请重新添加'})
                       }
	             }, (response) => {
		                console.log('请求不到数据')
		         });
			}
		},
		removeOpening(){
			this.serviceMessage=false
			this.OpeningUserEmail=''
			this.OpeningEnabled=0
			this.OpeningSelecter=1
			this.modal5=false
		},
		updateTabOpening(id){
			this.restrictControlment=this.restrictList[0].template
			this.modal6=true
			this.restrictEmailId=id//记录要约束的id传给后台
			let index=-1
			for(let i=0;i<this.data2.length;i++){
				if(this.data2[i].id===id){
					index=i;
					break
				}
			}
            this.restrictEnd=this.data2[index].enabled
			this.restrictEmail=this.data2[index].userId
		},
		addRestrict(){
			if(!this.restrictControlment){
				this.serviceMessage=true
			}else {
				let url="http://172.21.58.17:8083/admin/saveOrUpdateRule";
				Vue.http.post(url,{
				 		id:"",
						typeId:this.restrictId,
						enabled:this.restrictEnd,
					    permissionId:this.restrictEmailId,
					    expr:this.restrictControlment,
				 },{emulateJSON:true}).then((response) => {
				 			if(response.data.code===200){
	                             this.$Notice.success({title: '添加约束',desc:  '添加约束成功'})
	                             this.getOpeningSelector()
	                             this.removeRestrict()
	                       }else{
	                            this.$Notice.error({title: '添加约束',desc: '添加约束失败！请重新添加'})
	                       }
				 	 	
		         }, (response) => {
		                console.log('请求不到数据')
		         });
			}
		},
		removeRestrict(){
				this.serviceMessage=false
				this.modal6=false
				this.restrictControlment=''
				this.restrictId=1
		},//查看约束
		seeOpening(id){
			this.modal7=true
			let url="http://172.21.58.17:8083/admin/queryRulesByPermission";
				 Vue.http.post(url,{
				 	permissionId:id
				 },{emulateJSON:true}).then((response) => {
				 	   if(response.data.code===200){
                            this.propsfulfilling=JSON.parse(response.data.data)
                       }
				 }, (response) => {
		                console.log('请求不到数据')
		         });
		},
		restricSelecter(id){
			let data=''
			for(let i=0;i<this.restrictList.length;i++){
				if(id===this.restrictList[i].id){
					data=this.restrictList[i].template
					break;
				}
			}
		    this.restrictControlment=data
		},
		getAllMessage(data){
			if(data){
				this.modal7=false
			}
			
		},
        enabledOpen(index){
            console.log(this.data2[index].enabled)
            let idx=-1
            if(this.data2[index].enabled===0){
                idx=1
                this.data2[index].enabled=1
            }else if(this.data2[index].enabled===1){
                this.data2[index].enabled=0
                idx=0
            }
                function getCookie(name) {
                    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                    if(arr = document.cookie.match(reg))
                        return unescape(arr[2]);
                    else
                        return null;
                }
                let stat='';
                    if(getCookie('useremail')){
                         stat= getCookie('useremail')
                    }else if( sessionStorage.getItem('sessionUser')){
                         stat=sessionStorage.getItem('sessionUser')
                    }
                let url="http://172.21.58.17:8083/admin/saveOrUpdatePermission";
                 Vue.http.post(url,{
                        id:this.data2[index].id,
                        ifaceId:this.data2[index].ifaceId,
                        userId:this.data2[index].userId,
                        opUser:stat,
                        enabled:idx,
                 },{emulateJSON:true}).then((response) => {
                        if(response.data.code===200){
                             this.getOpeningSelector()
                             this.$Notice.success({title: '修改用户状态',desc:  '修改用户状态成功'})
                       }else{
                            this.$Notice.error({title: '修改用户状态',desc: '修改用户状态失败！请重试'})
                       }
                 }, (response) => {
                        console.log('请求不到数据')
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
</style>

