<template >
 	<div class="fulfilling-wrapper">
		<i-table  highlight-row border :columns="columns" :data="propsfulfilling" :content="self" size="small" ></i-table>
    </div>
</template>
<script>
export default{
	props:['propsfulfilling'],
	data(){
		return{
			 self:this,
			 columns:[
				 {
                    sortable: true,
                    title: 'ID',
                    key: 'id',
                    width:'80',
                    type:'center'
                },{
                    sortable: true,
                    title: '约束类型',
                    key: 'typeId',
                    width:'120',
                    type:'center'
                },{
                    sortable: true,
                    title: '权限ID',
                    key: 'permissionId',
                    width:'140',
                    type:'center'
                },{
                    sortable: true,
                    title: '创建时间',
                    width:'180',
                    key: 'createTime',
                    type:'center'
                },{
                    sortable: true,
                    title: '约束表达式',
                    key: 'expr',
                    type:'center'
                },{
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
                },{
                    title: '操作',
                    key: '',
                    width:100,
                    type:'center',
                    render (row, column, index) {
                        return '<i-button type="primary" size="small" @click="updateTble('+index+')" class="management-btn">修改</i-button>'
                    }
                }
			 ],
			 getMessage:false,
		}
	},
	watch:{
	},
	ready(){
	},
	methods:{
		updateTble(index){
			let oldtypeId=this.propsfulfilling[index].typeId,
				oldexpr=this.propsfulfilling[index].expr,
				self=this;	
			    layer.confirm("<div class='service-p'>"+
		  					"<p><strong>约束类型：</strong><input type='text' id='typeId' value='"+oldtypeId+"' class='larerInput'/></p>"+
		  					"<p><strong>约束表达式：</strong><input type='text' id='expr' value='"+oldexpr+"'     class='larerInput'/></p>"+
							"<p class='larer-radio'><strong>状态：</strong>"+
		  						"<a><input type='radio' name='radioName' value='0'  id='radio1' /><label for='radio1'></label></a>不启用"+
		  						"<a><input type='radio' name='radioName' value='1' checked id='radio2'/><label for='radio2'></label></a><span>启用</span>"+
		  					"</p>"+
		  				"</div>", {
		  		  title:'修改约束',
				  btn: ['确认','取消'] ,
				  area: ['45%','200px']
				}, function(index, layero){
					let expr=document.getElementById('expr').value,
				  		    typeId=document.getElementById('typeId').value,
				  		    obj = document.getElementsByName('radioName');  //这个是以标签的name来取控件
				  		 	let end=''
			                for(let i=0; i<obj.length;i++){
			  					if(obj[i].checked)    { 
			                      end=obj[i].value; 
			                   } 
			                }
			                let url="http://172.21.58.17:8083/admin/saveOrUpdateRule";
			                Vue.http.post(url,{
			                	id:self.propsfulfilling[index].id,
								permissionId:self.propsfulfilling[index].permissionId,
								typeId:typeId,
								expr:expr,
								enabled:end*1
			                },{emulateJSON:true}).then((response)=>{
			                	   if(response.data.code===200){
			                	   		layer.close(index); 
			      						self.$Notice.success({title: '修改约束',desc:  '修改约束成功'})
			      						this.getMessage=true
			      						self.$emit( 'child-msg',this.getMessage);
			                       }else{
			                            self.$Notice.error({title: '修改约束',desc: '修改约束失败！请重试'})
			                       }
			                },(response)=>{
			                	console.log('请求失败')
			                })
				}, function(){
				  	    
				})
		}
	}
}
</script>