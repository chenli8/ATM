<template >
 	<section class="switch-wrapper">
		<div class="switch-wrapper-top">
        	<label><Icon type="ios-browsers-outline" size="18"></Icon><span>请选择显示内容</span></label>
            <p class="switch-wrapper-select">
	             <i-select :model.sync="sildeDown" style="width:200px" size="small">
	                 <i-option v-for="item in cityList3" :value="item.type">{{  item.val  }}</i-option>
	             </i-select>
            </p>
		</div>
    	<section class="switch-wrapper-off" v-show="sildeDown===1">
    	    <Switch size="large" @on-change="powerSwitch" :checked='checked' :disabled="disabled">
		        <span slot="open" >开启</span>
		        <span slot="close" >关闭</span>
		    </Switch>
			<p><Icon type="unlocked" v-if="lock1"></Icon><Icon type="locked" v-show="lock2"></Icon><span>{{connect}}</span></p>
        </section>
        <section v-if="sildeDown===2">
       		 <i-table  highlight-row border :columns="tabel" :data="data1" :content="self" size="small" ></i-table>
		</section>
		<section class="switch-wrapper-state" v-if="sildeDown===3">
			 <h4>当前开放时间为</h4>
			 <div class="switch-wrapper-time">
			 	<p><Icon type="clock"></Icon><label for="">开始时间：</label>{{stateTime}}</p>
			 	<p><Icon type="android-time"></Icon><label for="">结束时间：</label>{{endTime}}</p>
			 	<i-button type="primary" size="small" @click="updataTime">修改</i-button>
			 </div>
		</section>
    </section>
</template>
<script>
export default{
	props:['msgtime','msgresonse'],
	data(){
		return{
			 sildeDown:1,
			 checked:false,
			 stateTime:'',
			 endTime:'',
			 lock1:false,
			 lock2:false,
			 disabled:true,
			 show:{
                    amountAll:'',
                  	async1:false,
                  	async2:false,
             },
			 connect:'请耐心等待，正在请求数据...',
			 cityList3:[{
	                        type:1,
	                        val:'状态开关'
	                    },{
	                        type:2,
	                        val:'资源配置'
	                    },{
	                        type:3,
	                        val:'例行维护'
	                    }],
	         self:this,
			 tabel:[{
                        title: '队列名称',
                        key: 'queue',
                        sortable: true
                    },{
                        title: '任务类型',
                        key: 'taskType',
                        sortable: true
                    },{
                        title: '资源数量',
                        key: 'amount',
                        sortable: true
                    },{
                        title: '类型描述',
                        key: 'typeDesc',
                        sortable: true
                    },{
                    title: '操作',
                    width:100,
                  	type:'center',
                    render (row, column, index) {
                    	return '<i-button type="primary" size="small" class="management-btn" @click="updataResources('+index+')">修改</i-button>'
                	}
              }],
              data1:[],
			}
	},
	ready(){
		this.getSwitch()
		this.getTime()
		this.getConnect()
	},
	watch:{
		msgtime:function(){
			this.getTime()
		},
		msgresonse:function(){
			this.getConnect()
		}
	},
	methods:{
		powerSwitch(data){
			this.checked=data
			if(data==false){
				this.connect='当前为-关闭-状态</b>'
				this.lock1=false
				this.lock2=true
			}else{
				this.connect='当前为-开启-状态</b>'
				this.lock1=true
				this.lock2=false
			}
			let url=process.env.NODE_ENV.schedPath+"admin/sched"
			Vue.http.get(url,{
				params:{
					isOpeningToFetchJobs:data
				}
			}).then((response) => {
				let body=JSON.parse(response.body);
				if(body.statusCode===200){
                    this.$Notice.success({title: '状态开关',desc: '状态开关修改成功！'})
                }else{
                	this.$Notice.error({title: '状态开关',desc:  '修改状态开关失败，请重试！'})
                	this.checked=!this.checked
                }
            }, (response) => {
            	this.checked=!this.checked
                console.log('请求不到数据')
            });
		},
		updataResources(obj){
			this.show.amountAll=this.data1[obj];
			this.show.async1=true;
          	this.show.async2=false;
            this.$emit( 'child-switch',this.show);
		},
		getSwitch(){
				let url=process.env.NODE_ENV.schedPath+"admin/sched?query=switchStatus";
				Vue.http.get(url).then((response) => {
					let body=JSON.parse(response.body);
	                if(body.statusCode===200){
	                	this.disabled=false
	                	this.checked=body.result.isOpeningToFetchJobs;
						if(body.result.isOpeningToFetchJobs){
							this.lock1=true;
							this.lock2=false;
							this.connect='当前为-开启-状态';
						}else{
							this.lock1=false;
							this.lock2=true;
							this.connect='当前为-关闭-状态';
						}
	                }
	            }, (response) => {
	                console.log('请求不到数据')
	            })
		},
		getTime(){
			 let url=process.env.NODE_ENV.schedPath+"admin/maintenance?query=maintenanceTimeSegment";
			 Vue.http.get(url).then((response) => {
			 		let body=JSON.parse(response.body);
                    if(body.statusCode===200){
                        this.stateTime=body.result.startTime
						this.endTime=body.result.endTime
                    }
                }, (response) => {
                    console.log('请求不到数据')
                });
		},
		getConnect(){
			let url=process.env.NODE_ENV.schedPath+"admin/resource";
                Vue.http.get(url).then((response) => {
                	let body=JSON.parse(response.body);
                    if(body.statusCode===200){
                       this.data1=body.result
                    }
                }, (response) => {
                    console.log('请求不到数据')
                });
		},
		updataTime(){
          	this.show.async1=false;
          	this.show.async2=true;
          	this.show.amountAll='';
            this.$emit( 'child-switch',this.show);
		}
	}
}
</script>
