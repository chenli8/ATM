<template>
   <div class="atm-ide">
       <div class="demo-spin-container" v-show="loader">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </div>
       <ul class='instrument'>
         <li @click='change(2)'>
            <Icon type="ios-analytics"  size='25'></Icon>
            <span>伪MAC过滤</span>
         </li>
         <li @click='change(1)'>
             <Icon type="ios-pulse-strong" size='25'></Icon>
             <span>MD5加密</span>
         </li>
          <li @click='change(3)'>
             <Icon type="ios-loop-strong" size='25'></Icon>
             <span>坐标系转换 </span>
         </li>
       </ul>
       <div class="buttonCon">
         <i-button type="ghost" icon="refresh" class="delivery-mar" style="float:right;margin-right:0px;padding:3px 15px" @click="initTable"  class="delivery-mar" title='刷新'></i-button>
       </div>
       <i-table  highlight-row border :columns="columns1" :data="data1" :content="self" size="small" ></i-table>
       <div class='page-footer'>
            <Page :total='navigatePages'  @on-change="changePage" :current="current" :page-size='15' show-total></Page>
       </div>
   <!-- 失败原因 -->
    <Modal
          :visible.sync="failloader">
          <div class='instrument-file'>
            <div class="instrument-project"> 
                 tttttttttt
            </div>
       </Modal>
   <!-- 伪MAC过滤-MD5加密 -->
       <Modal
          :visible.sync="modal1"
          :title=title
          :mask-closable=false
          @on-cancel="callOff">
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
            </div>
            <Upload   :one='nameId1' :two='name1' :type='type1' @success='EmitSuccess' :url='url1' :sync='sync1' :arr='arr1'></Upload>
          </div>
          <div slot="footer">
          </div>
       </Modal>
   <!-- 坐标系转换 -->
       <Modal
          :visible.sync="modal2"
          :title=title
          :mask-closable=false
          @on-cancel="coorOff">
          <Coordinate :type='type1' @success='Emitcoordinate'></Coordinate>
          <div slot="footer">
          </div>
       </Modal>
   </div>
</template>
<script>
import Upload from './element/upload'
import Coordinate  from './element/coordinate'
export default {
        components:{
          Upload,Coordinate
        },
        data(){
            return{
              self:this,
              nameId: 0,
              cityList: [],
              name:'',
              modal1:false,
              modal2:false,
              title:'伪MAC识别',
              delFile:null,
              newdeviceList:null,
              keepNewFile:null,
              macShow:1,
              data1: [],
              email:'',
              loader:false,
              failloader:false,
              columns1: [
                    {
                        sortable: true,
                        title: '作业id',
                        key: 'id',
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
                        key: 'name',
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
                        title: '上传条数',
                        width:'120',
                        key: 'uploadCnt',
                        type:'center',
                    },
                    {
                        sortable: true,
                        title: '结果记录数',
                        width:'120',
                        key: 'resultCnt',
                        type:'center',
                    },
                    {
                        sortable: true,
                        title: '类型',
                        key: 'type',
                        type:'center',
                        render (row, column, index) {
                          let type='伪MAC识别'
                          switch(row.type){
                            case 2: 
                              type='伪MAC识别' 
                              break;
                            case 1: 
                              type='MD5加密' 
                              break;
                            case 3:
                              type='坐标系转换' 
                              break;
                          }
                          return `<div>${type}</div>`;
                        }
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
                        width:'130',
                        type:'center',
                        render (row, column, index) {
                            let status='';
                            switch(row.status){
                              case 1:
                                status='已提交'
                                break;
                              case 2:
                                status='排队'
                                break;
                              case 3:
                                status='运行'
                                break;
                              case 4:
                                status='成功'
                                break;
                              case 5:
                                status='失败'
                                break;
                            }
                            const color = row.status == 4 ? 'green' : row.status == 5 ? 'red' : 'blue';
                            return `<tag type="dot" style='width:100px;text-align:center' color="${color}">${status}</tag>`;
                        }
                    },
                    {
                        title: '操作',
                        type:'center',
                        width:'120',
                        render (row, column, index) {
                            console.log(row.comment)
                            let n=true;
                            let m=true;
                            let s='';
                            let params=null;
                            if(row.status==4){
                                n=false
                            }
                            if(row.type==3 && row.status==5 || row.type==3 && row.uploadCnt!=row.resultCnt){
                               m=false;
                               row.comment = row.comment ? row.comment.replace(/"/g, '') : '';
                               s = row.type==3 && row.status==5 ? `showFailHandle('${row.comment}')` : 'download('+row.id+')';
                            //    params= row.type==3 && row.status==5 ? row.comment : row.id;
                            }
                            return '<i-button type="primary" size="small"  @click="download('+row.id+')" :disabled="'+n+'"  style="float:left;">下载</i-button><i-button type="primary" size="small"  @click="'+s+'" :disabled="'+m+'" style="float:right;">查看</i-button>'
                        }
                    }
              ],
              //分页
              navigatePages:0,
              current:1,
              pageNum:1,
              //第一个弹框
              name1:'',
              nameId1:0,
              type1:0,
              sync1:true,
              url1:process.env.NODE_ENV.toolPath+"/api/upload",
              //url1:'//jsonplaceholder.typicode.com/posts/',
              arr1:['projectId','name']
            }
        },
        computed: {
        },
        ready(){
            this.getcookie()
            this.initTable()
        },
        watch: {
          name:function(n,o){
            this.name1=n
            if(n&&this.nameId){
              this.sync1=false
            }else{
              this.sync1=true
            }
          },
          nameId:function(n,o){
            if(n&&this.name){
              this.sync1=false
            }else{
              this.sync1=true
            }
          }
        },
        methods:{
            showFailHandle(comment){
                alert(comment)
            },
            selectChange(data){
              this.nameId1=data
            },
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
            initTable(){
                let url=process.env.NODE_ENV.toolPath+"api/list";
                this.loader=true;
                if(this.email){
                    Vue.http.get(url,{
                        params:{
                            pageNum:this.pageNum,
                            pageSize:15,
                            email:this.email
                        }
                    }).then((response) => {
                       this.loader=false;
                       this.data1=response.body.list;
                       this.navigatePages=response.body.total;
                    }, (response) => {
                        this.loader=false;
                        console.log('请求不到数据')
                    });
                }
            },
            changePage(status){
                this.pageNum=status
                this.current = status;
                this.initTable();
            },
            change(index){
              if(index===2){
                this.title='伪MAC过滤'
                this.type1=2
                this.modal1=true
              }else if(index===1){
                this.title='MD5加密'
                this.type1=1
                this.modal1=true
              }else if(index===3){
                this.title='坐标系转换'
                this.type1=3
                this.modal2=true
              } 
            },
            callOff(){ 
              this.modal1=false
              this.name=''
            },
            coorOff(){
               this.modal2=false
            },
            download(id){
                 let url=process.env.NODE_ENV.toolPath+"api/download/"+id;
                 var el = document.createElement("a");
                 document.body.appendChild(el);
                 el.href = url; 
                 el.click();
                 document.body.removeChild(el);
            },
            EmitSuccess(data){
              if(data){
                this.pageNum=1
                this.current = 1
                this.callOff()
                this.initTable()
              }
            },
            Emitcoordinate(data){
              if(data){
                this.pageNum=1
                this.current = 1
                this.coorOff()
                this.initTable()
              }
            }
       }
}
</script>
<style>
    .buttonCon{
        height:40px;
    }
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
    .demo-spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: fixed;
  border: 1px solid #eee;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
  z-index: 9999999;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
</style>