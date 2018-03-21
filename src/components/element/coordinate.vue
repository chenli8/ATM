<template>
   <div class='instrument-file'>
        <div class="instrument-project">
            <p>
              <label for="">选择项目名称：</label>
                  <i-select :model.sync="nameId" style="width:300px" @on-change='selectChange' >
                    <i-option v-for="item in cityList" :value="item.id">{{ item.name }}</i-option>
                  </i-select>
            </p>
            <p>
                <label for="">作业名称：</label>
                <i-input :value.sync="name" placeholder="请输入..." style="width: 300px" ></i-input>
            </p>
            <p>
                <label for="">原始坐标系：</label>
                <i-select :model.sync="coordinate_start" style="width:300px" @on-change='startChange' >
                  <i-option v-for="item in startList" :value="item.value" :disabled='item.disabled'>{{ item.label }}</i-option>
                </i-select>
            </p>
            <p>
                <label for="">目标坐标系：</label>
                <i-select :model.sync="coordinate_end" style="width:300px" @on-change='endChange' >
                  <i-option v-for="item in endList" :value="item.value" :key='item.value' :disabled='item.disabled'>{{ item.label }}</i-option>
                </i-select>
            </p>
        </div>
        <Upload  :one='select1' :two='select2' :three='nameId' :four='name':type='type1' @success='EmitSuccess' :url='url1' :sync='sync1' :arr='arr1'></Upload>
   </div>
</template>
<script>
import Upload from './upload'
export default {
        components:{Upload},
        props:['type'],
        data(){
            return{
                coordinate_start:1,
                coordinate_end:2,
                startList:[{
                  value:1,label:'WGS84',disabled:false
                },{
                  value:2,label:'BD09',disabled:false
                },{
                  value:3,label:'GCJ02',disabled:false
                }],
                endList:[{
                  value:1,label:'WGS84',disabled:true
                },{
                  value:2,label:'BD09',disabled:false
                },{
                  value:3,label:'GCJ02',disabled:false
                }],
                select2:0,
                select1:0,
                type1:0,
                sync1:true,
                url1:process.env.NODE_ENV.toolPath+"/api/upload",
                arr1:['from','to','projectId','name'],
                nameId:0,
                cityList: [],
                name:''
            }
        },
        computed: {
        },
        ready(){
            this.getcookie()
            this.select1=this.coordinate_start
            this.select2=this.coordinate_end 
        },
        watch: {
          type:function(n,o){
            if(n===3){
              this.type1=3
            }
          },
          name:function(n,o){
            this.name=n
            if(n){
              this.sync1=false
            }else{
              this.sync1=true
            }
          }
        },
        methods:{
            getcookie(){
                  let email=''
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
                      email=useremail
                   }else if(sessionemail){
                      email=sessionemail
                   }
                   this.email=email
                   if(email){
                        let url=process.env.NODE_ENV.apiPath+"jobManager/getProjects";
                        Vue.http.get(url,{
                            params:{
                                email:email
                            }
                        }).then((response) => {
                           this.cityList=response.body
                           this.nameId=response.body[0].id           
                        }).catch();
                    }    
            },
            startChange(){
                for(let i=0;i<this.startList.length;i++){
                   if(this.coordinate_start==this.startList[i].value){
                      this.endList[i].disabled=true
                   }else{
                       this.endList[i].disabled=false
                   }
                   if(this.coordinate_start==this.coordinate_end){
                      this.coordinate_end=this.endList[0].value
                   }
                }
                this.select1=this.coordinate_start
            },
            endChange(){
                for(let i=0;i<this.endList.length;i++){
                   if(this.coordinate_end==this.endList[i].value){
                      this.startList[i].disabled=true
                   }else{
                       this.startList[i].disabled=false
                   }
                   if(this.coordinate_start==this.coordinate_end){
                      this.coordinate_start=this.coordinate_start[0].value
                   }
                }
                this.select2=this.coordinate_end
            },
            EmitSuccess(data){
              if(data){
                this.name=''
                this.$emit('success',true)
              }
            },
            selectChange(data){
              this.nameId=data
            },
        }
}
</script>
