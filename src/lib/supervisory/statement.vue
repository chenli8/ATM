<template><!-- 作业统计 -->
        <section class="accounting-wrapper">
        <div style="height:50px">
          <div class="accounting-date">
                <row>
                    <i-col span="12">
                        <Date-picker type="date" confirm placeholder="选择日期" style="width: 200px" :value="value1"  @on-change="handleChange1"></Date-picker>
                    </i-col>
                    <i-col span="12">
                        <Date-picker type="date" confirm placeholder="选择日期" style="width: 200px" :value="value2"  @on-change="handleChange2"></Date-picker>
                    </i-col>
               </row>
           </div>
           
           <div class="accounting-Checkbox">
              <p>
                  <Radio-group :model.sync="vertical" size='large'>
                  <Radio value="3">
                      <Icon type="android-contacts"></Icon>
                      <span>各大部门统计</span>
                  </Radio>
                  <Radio value="4">
                      <Icon type="android-contact"></Icon>
                      <span>各子部门统计</span>
                  </Radio>
                  <Radio value="5">
                      <Icon type="android-funnel"></Icon>
                      <span>接口</span>
                  </Radio>
              </Radio-group>
                  <i-button type="primary"  icon="ios-search" size="small" style='margin:0 15px' @click='all'>统计</i-button>
                  <i-button type="primary" size="small" @click="exportData()"><Icon type="ios-download-outline"></Icon> 导出数据</i-button>
              </p>
            </div>
        </div>
            <i-table  highlight-row border :columns="columns" :data="data1" :content="self" size="small" ></i-table>
            <i-table  highlight-row border :columns="columns2" :data="data2" size="small" v-ref:table1 style="display:none"></i-table>
            <div class='page-footer'>
                <Page :total='navigatePages'  @on-change="changePage" :current="current" :page-size=15 show-total></Page>
            </div>
        </section>
</template>
<script>
    export default{
        data () {
            return {
                self:this,
                value1: '',
                value2: '',
                vertical: '3',
                data1:[],
                columns:[],
                columns1:[{title: '表格'}],
                navigatePages:1,
                current:1,
                data2:[],
                columns2:[]
            }
        },
        ready(){
          this.columns=this.columns1
          this.columns2=this.columns1
        },
        methods: {
            handleChange1 (date) {
                this.value1 = date;
            },
            handleChange2 (date) {
                this.value2 = date;
            },
            getSend(idx){
                   let url=process.env.NODE_ENV.apiPath+"metricManager/metric",
                   filterCondition=JSON.stringify({'startTime':this.value1,'endTime':this.value2});
                    Vue.http.get(url,{
                        params:{
                               metricType:this.vertical,
                               filterCondition:filterCondition,
                               pageNum:idx,
                               pageSize:15,
                        }
                    }).then((response) =>{
                          let header=response.body.header.fields,
                              list=response.body.body.list;
                          if(this.vertical!=='2'){
                                   this.data1=[]
                                   this.columns=[]
                                  for(var i=0;i<header.length;i++){
                                     this.columns.push({ 
                                          sortable: true,
                                          title: header[i].value,
                                          key: header[i].key,
                                          type:'center'
                                      })
                                  }
                          }else{
                                   this.data1=[]
                                   this.columns=[]
                                   for(var i=0;i<header.length;i++){
                                     this.columns.push({ 
                                          sortable: true,
                                          title: header[i].value,
                                          key: header[i].key,
                                          width:180,
                                          type:'center'
                                      })
                                  }
                          }
                          for(var j=0;j<list.length;j++){
                             this.data1.push(list[j])
                          }
                          this.navigatePages=response.body.body.total
                          if(idx==='1'){
                            this.current=1;
                          }
                          this.get()
                    },(response) =>{
                        console.log("请求不到数据")
                    })
            },
            all(){
                  if(!this.value1 || !this.value2){
                      this.$Notice.error({ title: '统计失败',desc: '请先选择日期！'})
                  }else{
                        this.getSend('1')
                  }
            },
            changePage(status){
                   this.current = status;
                   this.getSend(status);
            },
            get(){
              let url=process.env.NODE_ENV.apiPath+"metricManager/metric",
                   filterCondition=JSON.stringify({'startTime':this.value1,'endTime':this.value2});
                    Vue.http.get(url,{
                        params:{
                               metricType:this.vertical,
                               filterCondition:filterCondition,
                               pageNum:0,
                               pageSize:0,
                        }
                    }).then((response) =>{
                          let header=response.body.header.fields,
                              list=response.body.body.list;
                          if(this.vertical!=='2'){
                                   this.data2=[]
                                   this.columns2=[]
                                  for(var i=0;i<header.length;i++){
                                     this.columns2.push({ 
                                          sortable: true,
                                          title: header[i].value,
                                          key: header[i].key,
                                          type:'center'
                                      })
                                  }
                          }else{
                                   this.data2=[]
                                   this.columns2=[]
                                   for(var i=0;i<header.length;i++){
                                     this.columns2.push({ 
                                          sortable: true,
                                          title: header[i].value,
                                          key: header[i].key,
                                          width:180,
                                          type:'center'
                                      })
                                  }
                          }
                          for(var j=0;j<list.length;j++){
                             this.data2.push(list[j])
                          }
                          
                    },(response) =>{
                        console.log("请求不到数据")
                    })      
            },
            exportData () {
                  if(this.data1.length===0){
                      this.$Notice.warning({title: '提示',desc: '下载前请先点击统计'})
                      return
                  }
                  let cun=''
                  if(this.vertical==3){
                    cun='各大部门统计'
                  }else if(this.vertical==4){
                    cun='各子部门统计'
                  }else if(this.vertical==5){
                    cun='接口'
                  }
                  if(this.data2.length>0){
                    console.log(this.data2)
                    this.$refs.table1.exportCsv({filename: cun });
                  }
             }  
         }
    }
</script>


