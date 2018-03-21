<template><!-- 部门列表 -->
  	<section>
  		<p class="cartmenu-swiper-input">
    		<label for="">上级部门名称:</label>
	    	<i-select :model.sync="departmentSelectDef" style="width:200px" size="small"   >
				<i-option v-for="item in departmentSelectArr"  :value="item.id"  >{{item.deptName}}</i-option>
			</i-select>
			<i-input :value.sync="value" placeholder="请输入..." style="width: 200px" size="small" class="user-mar"></i-input>
			<i-button type="primary" @click="add_department"  size="small" class="user-mar">新增部门</i-button>
		</p>
		<i-table  highlight-row border :columns="departmentTable" :data="departmentData" :content="self" size="small" ></i-table>
  	</section>
</template>
<script>
	export default{
		data(){
			return{
				self:this,
				value:'',
				departmentSelectDef:'',
				departmentSelectArr:[],
				departmentTable:[
					{
                        sortable: true,
                        title: 'Id',
                        key: 'id',
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
                        title: '父id',
                        key: 'pid',
                        type:'center'
                    },
                    {
                        title: '操作',
                       	type:'center',
                        render (row, column, index) {
                        let idx=row.id
                        return '<i-button type="error" size="small" @click="department_remove('+idx+')">删除</i-button>';
                    	}
                    }

				],
				departmentData:[],
			}
		},
		ready(){
			this.department_connect()
		},
		methods:{
			department_connect(){
				let url=process.env.NODE_ENV.apiPath+"systemManager/dept/queryAllDepts";
				Vue.http.post(url,{
					pageNum:0,pageSize:0,
				},{emulateJSON:true}).then((response)=>{
					this.departmentSelectArr=response.body.list
					this.departmentData=response.body.list
				},(response)=>{
					console.log('请求数据失败')
				})
			},
			add_department(){
				if(!this.departmentSelectDef || !this.value){
					 this.$Notice.warning({title: '新增部门失败',desc: '请先完善信息！'})
				}else{
					let url=process.env.NODE_ENV.apiPath+"systemManager/dept/addDept";
					Vue.http.post(url,{
						deptPid:this.departmentSelectDef,
						deptName:this.value,
					},{emulateJSON:true}).then((response)=>{
						if(response.body.resultCode==0){
							 this.department_connect()
							 this.$Notice.success({title: '新增菜单',desc: '新增菜单成功！'})
						}else{
							 this.$Notice.error({title: '新增菜单',desc: '新增菜单失败！'})
						}
					},(response)=>{
						console.log('请求数据失败')
					})
					
				}
			},
			department_remove(index){
				 this.$Modal.confirm({
                    title: '删除部门',
                    content: '<p>您确认要删除部门吗？</p>',
                    onOk: () => {
                        let url=process.env.NODE_ENV.apiPath+"systemManager/dept/deleteDept";
						Vue.http.post(url,{
							deptId:index
						},{emulateJSON:true}).then((response)=>{
							if(response.body.resultCode==0){
								 this.department_connect()
								 this.$Notice.success({title: '删除部门',desc: '删除部门成功！'})
							}else{
								 this.$Notice.error({title: '删除部门',desc: '删除部门失败！'})
							}
						},(response)=>{
							console.log('请求数据失败')
						})
                    }
                });
				
			}
		}
	}
</script>