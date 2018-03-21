<template><!-- 角色管理 -->
    <section class="character-swiper">
    <div class="character-swiper_btn">
    	<i-input :value.sync="characterval" placeholder="请输入角色名称" style="width: 200px"  size="small" ></i-input>
    	<i-button type="primary"  size="small" @click="addcharacter" class="user-mar">新增角色</i-button>
    </div>	
    	<i-table  highlight-row border :columns="columnscharacter" :data="data1" :content="self" size="small" ></i-table>
    </section>
</template>
<script>
	export default{
		data(){
			return {
				self:this,
				characterval:'',
				characterShow:{
                    id:1,
                    connect:'',
                    isb:false,
                    idc:false,
                 },
                columnscharacter:[
				 	{
                        sortable: true,
                        title: '角色名称',
                        key: 'name',
                        type:'center'
                    },
                     {
                        sortable: true,
                        title: '是否是管理员',
                        type:'center',
                        render (row, column, index) {
                            let _admin='否'
                       		if(row.admin==true){
                         		_admin='是'
                         	}
                            return '<i-button type="primary" size="small">'+_admin+'</i-button>';
                        }
                    },
                    {
                        title: '操作',
                       	type:'center',
                       	render (row, column, index) {
                            let charaterId=row.id
                            return '<i-button type="primary" size="small" @click="updatemenu('+charaterId+')" class="management-btn">菜单管理</i-button> <i-button type="primary" size="small" @click="updateuser('+charaterId+')" class="management-btn">用户管理</i-button><i-button type="error" size="small" @click="removecharacter('+charaterId+')" class="management-btn">删除</i-button>';
                        }
                    },
				],
				data1:[]
			}
		},
		ready(){
			this.addconnect()
		},
		methods:{
			addcharacter(){
				let arr=[]
				for(var i=0;i<this.data1.length;i++){
					arr.push(this.data1[i].name)
				}
				if(this.characterval==''){
					 this.$Notice.error({title: '用户管理',desc:'新增角色失败 请先输入内容！'})  
				}else if(arr.indexOf(this.characterval)!='-1'){
					 this.$Notice.error({title: '用户管理',desc:'新增角色失败 已有要新增的角色！'})  
				}else{
					let url=process.env.NODE_ENV.apiPath+"systemManager/role/addRole";
					Vue.http.post(url,{
						isAdmin:false,
						name:this.characterval,
					},{emulateJSON:true}).then((response)=>{
						this.addconnect()
						if(response.body.resultCode==0){
							this.$Notice.success({title: '用户管理',desc: '新增角色成功'})
						}else{
							this.$Notice.error({title: '用户管理',desc: '新增角色失败！'}) 
						}	
						
					},(response)=>{
						console.log('请求数据失败！')
					})
				}
			},
			addconnect(){
				let url=process.env.NODE_ENV.apiPath+"systemManager/role/queryAllRoles";
				Vue.http.post(url,{
					pageNum:0,
					pageSize:0,
				},{emulateJSON:true}).then((response)=>{
					this.data1=response.body.list
				},(response)=>{
					console.log('请求数据失败！')
				})
			},
			removecharacter(index){
				 this.$Modal.confirm({
                    title: '删除角色',
                    content: '<p>您确认删除角色吗？</p>',
                    onOk: () => {
                       let url=process.env.NODE_ENV.apiPath+"systemManager/role/deleteRole";
						Vue.http.post(url,{
							roleId:index
						},{emulateJSON:true}).then((response)=>{
							if(response.body.resultCode==0){
								this.addconnect()
								this.$Notice.success({title: '用户管理',desc: '删除角色成功'})
							}else{
								this.$Notice.error({title: '用户管理',desc: '删除角色失败！'}) 
							}
						},(response)=>{
							console.log('请求数据失败！')
						})
                    },
                    
                });
				
			},
			updatemenu(index){
				 this.characterShow.id=index
				 this.characterShow.isb=true
				 this.characterShow.isc=false
                 this.$emit( 'character-msg',this.characterShow);
            },
            updateuser(index){
				let url=process.env.NODE_ENV.apiPath+"systemManager/user/queryUsersByRole";
            	Vue.http.post(url,{
					roleId:index
				},{emulateJSON:true}).then((response)=>{
					this.characterShow.id=index
				 	this.characterShow.isc=true
				 	this.characterShow.isb=false
				 	this.characterShow.connect=response.body
                	this.$emit( 'character-msg',this.characterShow);
				},(response)=>{
					console.log('请求数据失败！')
				})
				
            }
		}

	}
</script>
