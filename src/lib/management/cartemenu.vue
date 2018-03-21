<template><!-- 菜单列表 -->
    <section class="cartmenu-swiper">
    	<p class="cartmenu-swiper-input">
    		<label for="">父级菜单:</label>
	    	<i-select :model.sync="cartmenuSelectDef" style="width:200px" size="small" >
				<i-option v-for="item in cartmenuSelectArr"  :value="item.id"  >{{item.name}}</i-option>
			</i-select>
			<i-input :value.sync="value1" placeholder="请输入菜单名称" style="width: 200px" size="small" class="user-mar"></i-input>
			<i-input :value.sync="value2" placeholder="请输入菜单url" style="width: 200px" size="small" class="user-mar"></i-input>
			<i-input :value.sync="value3" placeholder="请输入顺序号" style="width: 200px" size="small" class="user-mar"></i-input>
			<i-button type="primary" @click="add_cartmenu"  size="small" class="user-mar">新增菜单</i-button>
		</p>
		<i-table  highlight-row border :columns="cartmenu_table" :data="cartmenuData" :content="self" size="small" ></i-table>
    </section>
</template>
<script>
	export default{
		data(){
			return{
				self:this,
				cartmenuSelectDef:'',
				cartmenuSelectArr:[],
				value1:'',
				value2:'',
				value3:'',
				cartmenuData:[],
				cartmenu_table:[
						{
	                        sortable: true,
	                        title: 'Id',
	                        key: 'id',
	                        type:'center'
	                    },
	                    {
	                        sortable: true,
	                        title: '名称',
	                        key: 'name',
	                        type:'center'
	                    },{
	                        sortable: true,
	                        title: '顺序号',
	                        key: 'orderNum',
	                        type:'center'
	                    },{
	                        sortable: true,
	                        title: '父id',
	                        key: 'pid',
	                        type:'center'
	                    },{
	                        sortable: true,
	                        title: '路径',
	                        key: 'url',
	                        type:'center'
	                    },
	                    {
	                        title: '操作',
	                        width:100,
	                      	type:'center',
	                        render (row, column, index) {
                            let idx=row.id
                            return '<i-button type="error" size="small" @click="cartmenu_remove('+idx+')">删除</i-button>';
                        	}
	                    }],
			}
		},
		ready(){
			this.cartmenu_connect()
		},
		methods:{
				cartmenu_connect(){
					let url=process.env.NODE_ENV.apiPath+"systemManager/menu/queryAllMenus";
					Vue.http.post(url,{
						pageNum:0,pageSize:0
					},{emulateJSON:true}).then((response)=>{
						this.cartmenuData=response.body.list
						this.cartmenuSelectArr=response.body.list
					},(response)=>{
						console.log('请求不到数据')
					})
				},
				cartmenu_change(item){

				},
				add_cartmenu(){
					if(!this.cartmenuSelectDef || !this.value1 || !this.value2 || !this.value3 ){
						 this.$Notice.warning({title: '新增菜单失败',desc: '请完善信息！'})
					}else{
						let url=process.env.NODE_ENV.apiPath+"systemManager/menu/addMenu";
						Vue.http.post(url,{
							menuPid:this.cartmenuSelectDef,
							orderNum:this.value3,
							name:this.value1,
							url:this.value2,
						},{emulateJSON:true}).then((response)=>{
							if(response.body.resultCode==0){
								 this.cartmenu_connect()
								 this.$Notice.success({title: '新增菜单',desc:'新增菜单成功！'})
							}else{
								 this.$Notice.success({title: '新增菜单',desc:'新增菜单失败！'})
							}
						},(response)=>{
							console.log('请求数据失败')
						})
					}
				},
				cartmenu_remove(pid){
					 this.$Modal.confirm({
	                    title: '删除菜单',
	                    content: '<p>您确认要删除菜单吗？</p>',
	                    onOk: () => {
	                        let url=process.env.NODE_ENV.apiPath+"systemManager/menu/deleteMenu";
							Vue.http.post(url,{
								menuId:pid
							},{emulateJSON:true}).then((response)=>{
								if(response.body.resultCode==0){
									 this.cartmenu_connect()
									 this.$Notice.success({title: '删除菜单',desc:'删除菜单成功！'})
								}else{
									 this.$Notice.error({title: '删除菜单',desc: '删除菜单失败！'})
								}
							},(response)=>{
								console.log('请求不到数据！')
							})
	                    }
	                });
					
				}

		}
	}
</script>
