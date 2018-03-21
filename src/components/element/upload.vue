<template>
   <div>
        <section class='upload-shade'>
            <Upload 
                v-ref:upload
                :action="uploadiview",
                :format="['txt','csv','rar']",
                :max-size="104857600",
                :show-upload-list="true",
                :on-format-error="handleFormatError",
                :on-success="handleSuccess",
                :data='uploadData'
                >
                 <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或将文件拖拽到这里上传</p>
                </div>
            </Upload>
            <div class='upload-shade-top' v-if='top'></div>
        </section>
  </div>
</template>
<script>
export default {
        props:['one','two','three','four','type','url','sync','arr'],
        data(){
            return{
              uploadiview:process.env.NODE_ENV.toolPath+"/api/upload",
              uploadData:{},
              email:'',
              top:false,
              listArr:[]
            }
        },
        computed: {
        },
        ready(){
            this.getcookie()
            this.uploadiview=this.url
            this.top=this.sync
            this.listArr=this.arr
        },
        watch: {
          one:function(n,o){
             this.uploadData[this.listArr[0]]=n
          },
          two:function(n,o){
            this.uploadData[this.listArr[1]]=n
            this.uploadData.email=this.email
          },
          three:function(n,o){
            this.uploadData[this.listArr[2]]=n
          },
          four:function(n,o){
            this.uploadData[this.listArr[3]]=n
          },
          type:function(n,o){
            this.uploadData.type=n//mac后台是要2  MD5加密:1   坐标系是3
          },
          url:function(n,o){
            this.uploadiview=n
          },
          //通过sync  遮罩是否否显示，福组件判断，初始化为false 不禁用
          sync:function(n,o){
           if(n){
              this.top=true
           }else{
              this.top=false
           }
          }
        },
        methods:{
            //成功返回
            handleSuccess (res, file) {
              if(res.code===200){
                this.callOff()
                this.$Notice.success({title: '上传文件成功'});
              }else{
                this.$Notice.error({title: '上传文件失败'});
              }
            },
            //失败
            handleFormatError (file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 .txt,.csv,.rar 格式的文件。'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 100M。'
                });
            },
            //获取email
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
                   this.uploadData.email=this.email
                   if(email){
                        let url=process.env.NODE_ENV.apiPath+"jobManager/getProjects";
                        Vue.http.get(url,{
                            params:{
                                email:email
                            }
                        }).then((response) => {
                           this.cityList=response.body               
                        }).catch();
                    }    
            },
            //清空
            callOff(){ 
              //清空上传信息
              this.$refs.upload.clearFiles()
              this.$emit('success',true)
            }
       }
}
</script>
