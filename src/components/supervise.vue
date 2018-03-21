<template><!-- 平台管理 -->
        <div class="atm-ide">
	        <section class="">
		        <Tabs type="card">
				        <Tab-pane label="用户管理"><Management  @child-msg="get1" :chuan='chuan'><Management></Tab-pane>
				        <Tab-pane label="角色管理"><Character   @character-msg="get2"></character></Tab-pane>
				        <Tab-pane label="菜单管理"><Cartemenu></cartemenu></Tab-pane>
				        <Tab-pane label="部门列表"><Department></Department></Tab-pane>
		   		 </Tabs>
		   		 <!--  弹框(一) -->
		         <Modal
				        :visible.sync="user_show"
				        title="用户管理--角色管理"
				        ok-text="保存角色"
				        @on-ok="userOk"
				        width="800">
				        <Checkbox :value="item.id" :checked="social.indexOf(item.id)!==-1"@change="changeSocoal(item)" v-for="item in userarr">
			       		 	<span>{{item.name}}</span>
			       		</Checkbox>
					    <div class="useradd">
					    	<label for="">新增角色</label>
					    	<template v-if="userList.length">
						    <i-select :model.sync="userid" style="width:200px" size="small" >
				                    <i-option v-for="item in userList"  :value="item.id" @click="change(item)" >{{item.name}}</i-option>
				            </i-select>
				            </template>
					    </div>
					    
		         </Modal>
		         <!-- 弹框一 （二）-->
		          <Modal
				        :visible.sync="user_show1"
				        title="用户管理--修改用户"
				        ok-text="保存"
				        @on-ok="SaveUser"
				        @on-cancel="off"
				        width="800">
				        	<p class="useradd">我的用户名:{{name}}  
				        		 <i-button  size="small" @click="updateName" style="margin:0 10px">修改</i-button>
				        		 <i-input :value.sync="nameValue" placeholder="请输入..." style="width: 300px" size="small" v-show='updateUserName'></i-input>
				            </p>
				        	<p class="useradd">我的部门:{{deptName}}</p>
						    <div class="useradd">
						    	<label for="">修改部门</label>
						    	<i-select :model.sync="updateUser" style="width:200px" size="small" >
					                    <i-option v-for="item in list"  :value="item.id" @click="updateDeptName(item)" >{{item.deptName}}</i-option>
					            </i-select>
					        </div>
				       	</div>
				</Modal>
		        <!--  弹框（二 ）角色管理  菜单管理-->
		         <Modal
			        :visible.sync="character_show"
			        title="角色管理--菜单管理"
			         ok-text="保存"
			        @on-ok="characterOk"
			        width="800">
			        <Checkbox :value="item.id" :checked="arrayarr.indexOf(item.id)!==-1"@change="changearrayarr(item)" v-for="item in getcharacterarr">
			        		<span>{{item.name}}</span>
			         </Checkbox>
			        <div class="character-selector">
			        	<i-select :model.sync="selectarr" style="width:200px" size="small" >
			       			<i-option v-for="item in characterList"  :value="item.id" @click="characterchange(item)" >{{item.name}}</i-option>
			       		</i-select>
			        </div>
			    </Modal>
			    <!-- 弹框二 角色管理 用户管理 -->
				<Modal
			        :visible.sync="character_show1"
			        title=""
			        width="800">
			        <i-table  highlight-row border :columns="getcharacter2" :data="getcharacterdata2" :content="self" size="small"></i-table>
			       
			    </Modal>

	        </section>
       </div>  
</template>
<script>
	import Management from '../lib/management/user';
	import Character from '../lib/management/character';
	import Cartemenu from '../lib/management/cartemenu';
	import Department from '../lib/management/department';
	export default{
				components:{Management,Character,Cartemenu,Department},
				data(){
					return {
						//用户管理
						self:this,
						chuan:1,
						user_show:false,
						user_show1:false,
						userarr:[],
						userList:[],
						userid:'',
						social:[],
						name:'',
						list:'',
						deptName:'',
						deptId:'',//拉下选中修改用户id
						updateUser:'',
						updateUserName:false,
						nameValue:'',//input修改用户名
						email:'',
						id:'',
						//角色管理
						character_show:false,
						character_show1:false,
						getcharacterarr:[],
						characterList:[],//下拉框请求到的arr
						selectarr:[],//下拉框选中项存放数组
						character_id:"",//存放行的id
						arrayarr:[],//存放角色请求到的Id
						getcharacter2:[
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
		                        sortable: true,
		                        title: '名称',
		                        key: 'name',
		                        type:'center'
		                    }
						],
						getcharacterdata2:[],//记录点击角色管理-用户管理的内容
						//菜单管理
					}
				},
				methods:{
					get1(zishow){
						this.user_show=zishow.isb;
						this.user_show1=zishow.isc;
						this.id=zishow.id
						if(this.user_show){
								let url=process.env.NODE_ENV.apiPath+"systemManager/role/queryRolesByUser";
								let _url=process.env.NODE_ENV.apiPath+"systemManager/role/queryAllRoles";
								Vue.http.post(url,{
									userId:zishow.id
								},{emulateJSON:true})
								.then((response)=>{
									this.userarr=response.body;
									this.social=[];
									for(var i=0;i<response.body.length;i++){
										this.social.push(response.body[i].id);
									}
								},(response)=>{
									console.log('请求数据失败');
								})
								Vue.http.post(_url,{
									pageNum:0,
									pageSize:0
								},{emulateJSON:true})
								.then((response)=>{
									this.userList=response.body.list
								},(response)=>{
									console.log('请求数据失败')
								})
						}else{
						    this.name=zishow.name
						    this.email=zishow.email
							this.deptName=zishow.deptName
						    this.deptId=zishow.deptId//记录当前用户部门id  
							 let url=process.env.NODE_ENV.apiPath+"systemManager/dept/queryAllDepts";
		                        Vue.http.post(url,{
		                            pageNum:0,
		                            pageSize:0,
		                        },{emulateJSON:true})
		                        .then((response)=>{
		                       		this.list=response.body.list
		                         },(response)=>{
		                            console.log('请求数据失败');
		                        })
							this.list=zishow.list
						}
					},
					changeSocoal(item){//弹框1更改复选框
						const index=this.social.indexOf(item.id)
						if(index!==-1){
							this.social.splice(index,1)
						}else{
							this.social.push(item.id)
						}
					},
					changearrayarr(item){
						const index=this.arrayarr.indexOf(item.id)
						if(index!==-1){
							this.arrayarr.splice(index,1)
						}else{
							this.arrayarr.push(item.id)
						}
					},
					change(val){//弹框1下拉框发上变化
						let val1=val.id,
							val2=val.name,
							arr=[];
						for(var i=0;i<this.userarr.length;i++){
							arr.push(this.userarr[i].id)
						}
						if(arr.indexOf(val1)!='-1') return false;
						this.userarr.push({id:val1,name:val2});
						this.social.push(parseInt(val1));
					},
					userOk(){//弹框一  保存角色 点击确定按钮
						let roles=this.social.join()
						let url=process.env.NODE_ENV.apiPath+"systemManager/user/addOrDelUserRoles";
						Vue.http.post(url,{
							userId:this.id,
							roles:roles
						},{emulateJSON:true})
						.then((response)=>{
							if(response.body.resultCode==0){
								this.$Notice.success({ title: '角色管理',desc: false ? '' : '修改角色成功'})
							}else{
								 this.$Notice.error({title: '角色管理',desc: true ? '' : '角色管理失败！'})
							}
						},(response)=>{
							console.log('请求数据失败')
						})
					},//弹框二 角色管理
					get2(zishow2){//通过子集传值 弹窗二显示  请求数据
						this.character_show=zishow2.isb;
						this.character_show1=zishow2.isc;
						this.character_id=zishow2.id
						if(zishow2.isb){
							this.getcharacterConnect()
						}else{
							this.getcharacterdata2=zishow2.connect
						}
					},
					getcharacterConnect(){//弹框二  请求当前角色数据 和 下拉框数据
						let url=process.env.NODE_ENV.apiPath+"systemManager/menu/queryMenusByRole";
						Vue.http.post(url,{
							roleId:this.character_id
						},{emulateJSON:true})
						.then((response)=>{
							this.getcharacterarr=response.body;
							this.arrayarr=[];
							for(var i=0;i<response.body.length;i++){
								this.arrayarr.push(response.body[i].id);
							}
						},(response)=>{
							console.log('请求数据失败');
						})
						let _url=process.env.NODE_ENV.apiPath+"systemManager/menu/queryAllMenus";
						Vue.http.post(_url,{
							pageNum:0,
							pageSize:0,
						},{emulateJSON:true})
						.then((response)=>{
							this.characterList=response.body.list;
						},(response)=>{
							console.log('请求数据失败');
						})
					},
					characterchange(val){//弹框二 下拉变化
						let val1=val.id,
							val2=val.name,
							arr=[];
						for(var i=0;i<this.getcharacterarr.length;i++){
							arr.push(this.getcharacterarr[i].id)
						}
						if(arr.indexOf(val1)!='-1') return false;
						this.getcharacterarr.push({id:val1,name:val2});
						this.arrayarr.push(parseInt(val1));

					},
					characterOk(){
						let str=this.arrayarr.join()
						let url=process.env.NODE_ENV.apiPath+"systemManager/role/addOrDelRoleMenus";
						Vue.http.post(url,{
							roleId:this.character_id,
							menus:str
						},{emulateJSON:true})
						.then((response)=>{
							if(response.body.resultCode==0){
								this.getcharacterConnect()
								this.$Notice.success({ title: '角色管理',desc:  '增加角色菜单成功'})
							}else{
								this.$Notice.error({title: '角色管理',desc: '增加角色菜单失败！'})
							}
						},(response)=>{
							console.log('请求数据失败');
						})
					},
					updateName(){
						this.updateUserName=true
					},
					off(){
						this.updateUserName=false
						this.nameValue=''
					},
					updateDeptName(item){
						this.deptName=item.deptName
						this.deptId=item.id;
					},
					SaveUser(){
						let name='';
						if(this.nameValue!==''){
							name=this.nameValue
						}else{
							name=this.name
						}
						let url=process.env.NODE_ENV.apiPath+"systemManager/user/updateUser";
						Vue.http.post(url,{
							userId:this.id,
							deptId:this.deptId,
							email:this.email,
							name:name,
						},{emulateJSON:true})
						.then((response)=>{
							if(response.body.resultCode==0){
								this.nameValue=''
								this.chuan=this.chuan+1;
								this.updateUserName=false
								this.$Notice.success({ title: '修改用户',desc: '修改用户成功'})
							}else{
								this.$Notice.error({title: '修改用户',desc: '修改用户失败！'})
							}
						},(response)=>{
							console.log('请求数据失败');
						})
					}
				}
	}
</script>
