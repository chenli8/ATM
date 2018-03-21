<template>
 <div>
    <div class="demo-spin-container" v-show="loader1">
        <Spin fix>
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
    </div>
    <div class="demo-spin-container" v-show="loader2">
        <Spin fix>
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
    </div>
    <div class="demo-spin-container" v-show="loader3">
        <Spin fix>
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
    </div>
    <section class="pop-wrapper">
            <Tabs type="card"   v-ref:loadid >
            <Tab-pane label="概要信息"   key="key1">
                <!-- loading -->
                    <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>查看作业</span></h2>
                    <i-table  highlight-row border :columns="columns2" :data="data2" :content="self" ></i-table>
                    <section class="pop-wrapper-ren" v-show="data3_pop_wrapper_ren"> 
                        <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>任务详情</span></h2>
                        <i-table  highlight-row border :columns="columns3" :data="data3" :content="self" size="small" ></i-table>
                        <button id="btn" style="display:node"></button>
                    </section>  
                    <div class="popCenter"  v-show="bg1">
                            <h2>抽样下载 (输入数字)</h2>
                            <rd-number :number="number"></rd-number>
                            <span class="popTop"><i-button type="ghost" @click="ballSuccer1">确定</i-button></span>
                            <i-button type="ghost" @click="off" class="popOff">X</i-button>
                    </div>
                    <div class="popCenter"  v-show="bg2">
                            <h2>Top下载 (输入数字)</h2>
                            <rd-number :number="numberTop"></rd-number>
                            <span class="popTop"><i-button type="ghost" @click="ballSuccer2">确定</i-button></span>
                            <i-button type="ghost" @click="off" class="popOff">X</i-button>
                    </div>
                    <div class="popCenter3"  v-show="bg3">
                        <h2>下载需审批：</h2>
                        <p>明细数据下载说明请查看<a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p><i-button type="ghost" @click="off" class="popOff">X</i-button>
                    </div>
            </Tab-pane>
            <Tab-pane label="条件信息" key="key2">
                <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>作业条件信息</span></h2>
                    <div class="pop-wrapper-list">
                    <section class="pop-wrapper-list-header"><label for="">条件名称</label><h2>条件详情</h2></section>
                    <section v-for="item in allArray" >
                        <label>{{leftArr[$index]}}</label>
                        <nav> 
                            <div v-for='(key,val) in item' track-by="$index">
                                <span class="list-p1"><b>{{key}}：</b></span>
                                <div class="list-p2" v-if="tiaojian(val)">
                                    <div v-for="val in allPut">
                                        <div v-for="(k,v) in val" style="display:-webkit-flex">
                                            <span>{{k}}：</span><div class="list-p2">{{v}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-p2" v-else>{{val}}</div>
                            </div>
                        </nav>
                    </section>
                    </div>
            </Tab-pane>
            </Tabs>
            <Modal
                :visible.sync="modal1"
                title="提示"
                @on-ok="yun"
                >
                <p style='text-align:center;line-height:50px;'>您确认上传到云传？</p>
            </Modal>
        </section>    
</div>
       
</template>
<script>
import { rdNumber } from "radon-ui";
import Clipboard from "clipboard";
import { timeList } from '../../vuex/business-util';
import Vue from 'vue'
export default {
  props: ["msg"],
  components: { rdNumber },

  data() {
    function getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
      else return null;
    }
    let atmJson = getCookie("atmJson"),
      sessionAtmJson = sessionStorage.getItem("sessionAtmJson"),
      hun = false;
    if (atmJson) {
      hun = JSON.parse(atmJson).admin;
    } else if (sessionAtmJson) {
      hun = JSON.parse(sessionAtmJson).admin;
    }
    const self = this;
    return {
      arr:[{name:1}],
      modal1: false,
      yunIndex: 0,
      dataType: null,
      self: this,
      data2: [],
      data3: [],
      show: false,
      allPut: [],
      number: {
        value: 1,
        step: 1
      },
      numberTop: {
        value: 1,
        step: 1
      },
      loader1: false,
      loader2: false,
      loader3: false,
      data3_pop_wrapper_ren: false,
      modal5: false,
      bg1: false,
      bg2: false,
      bg3: false,
      allidx: "",
      allArray: [],
      leftArr: [],
      columns2: [
        {
          title: "作业id",
          key: "id",
          width: 80,
          type: "center"
        },
        {
          title: "作业名称",
          key: "name",
          type: "center"
        },
        {
          title: "页面参数",
          type: "center",
          width: 120,
          render(row, column, index) {
            let String = row.params
              .replace(/>/g, "&gt;")
              .replace(/</g, "&lt;")
              .replace(/ /g, "&nbsp;")
              .replace(/\"/g, "&quot;")
              .replace(/\'/g, "&#39;")
              .replace(/\\/g, "\\\\")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/:/g, ":");
            return "<Tooltip content=" + String + ">参数详情</Tooltip>";
          }
        },
        {
          title: "输出路径",
          key: "outputPath",
          type: "center"
        },
        {
          title: "作业状态",
          key: "status",
          type: "center",
          width: 124,
          render(row, column, index) {
            let status = "";
            if (row.status == 0) {
              status = "已创建";
            } else if (row.status == 1) {
              status = "已提交";
            } else if (row.status == 2) {
              status = "排队中";
            } else if (row.status == 3) {
              status = "已调度";
            } else if (row.status == 4) {
              status = "运行中";
            } else if (row.status == 5) {
              status = "已成功";
            } else if (row.status == 6) {
              status = "已失败";
            } else if (row.status == 8) {
              status = "已取消";
            } else if (row.status == 7) {
              status = "已拉取";
            }
            const color =
              row.status == 5 ? "green" : row.status == 6 ? "red" : "blue";
            return `<tag type="dot" color="${color}">${status}</tag>`;
          }
        },
        {
          title: "排队次序",
          //key: 'jobCntBefore',
          type: "center",
          width: 120,
          render(row, column, index) {
            let jobCntBefore = "";
            if (row.jobCntBefore === -1) {
              jobCntBefore = "";
            } else {
              jobCntBefore = row.jobCntBefore;
            }
            return "<span>" + jobCntBefore + "</span>";
          }
        },
        {
          title: "创建时间",
          key: "createTime",
          type: "center"
        },
        {
          title: "结束时间",
          key: "doneTime",
          type: "center"
        },
        {
          title: "操作",
          type: "center",
          render(row, column, index) {
            let id = row.id,
              status = row.status;
            return (
              '<i-button type="primary" size="small" v-show="' +
              status +
              "===6 && " +
              hun +
              '" @click="backroll(' +
              id +
              ')">重新运行作业</i-button>'
            );
          }
        }
      ],
      columns3: [
        {
          title: "任务id",
          key: "id",
          type: "center",
          width: 80
        },
        {
          title: "任务序号",
          key: "serialNo",
          type: "center",
          width: 90
        },
        {
          title: "任务类型",
          type: "center",
          width: 120,
          render(row, column, index) {
            let status = "";
            if (row.taskType == 0) {
              status = "未知";
            } else if (row.taskType == 1) {
              status = "GP";
            } else if (row.taskType == 2) {
              status = "JAVA";
            } else if (row.taskType == 3) {
              status = "SPARK";
            } else if (row.taskType == 4) {
              status = "MAP-REDUCE";
            } else if (row.taskType == 5) {
              status = "FLINK";
            } else if (row.taskType == 6) {
              status = "REST-CALLKING";
            } else {
              status = "REST-POLLING";
            }
            return "<span>" + status + "</span> ";
          }
        },
        {
          title: "任务描述",
          type: "center",
          render(row, column, index) {
            let lens = JSON.parse(row.params);
            return lens.taskDesc;
          }
        },
        {
          title: "任务参数",
          type: "center",
          width: 120,
          render(row, column, index) {
            let String = row.params
              .replace(/>/g, "&gt;")
              .replace(/</g, "&lt;")
              .replace(/ /g, "&nbsp;")
              .replace(/\"/g, "&quot;")
              .replace(/\'/g, "&#39;")
              .replace(/\\/g, "\\\\")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/:/g, ":");
            return "<Tooltip content=" + String + ">参数详情</Tooltip>";
          }
        },
        {
          title: "任务状态",
          type: "center",
          width: 110,
          render(row, column, index) {
            let status = "";
            if (row.status == 0) {
              status = "已创建";
            } else if (row.status == 1) {
              status = "排队中";
            } else if (row.status == 2) {
              status = "已调度";
            } else if (row.status == 3) {
              status = "已提交";
            } else if (row.status == 4) {
              status = "运行中";
            } else if (row.status == 5) {
              status = "已成功";
            } else if (row.status == 6) {
              status = "已失败";
            }
            const color =
              row.status == 5 ? "green" : row.status == 6 ? "red" : "blue";
            return "<tag color=" + color + " >" + status + "</tag>";
          }
        },
        {
          title: "结果数目",
          type: "center",

          render(row, column, index) {
            let status = "";
            if (row.resultCount == -1) {
              status = "";
            } else {
              status = row.resultCount;
            }
            return "<span>" + status + "</span> ";
          }
        },
        {
          title: "开始时间",
          key: "startTime",
          type: "center"
        },
        {
          title: "更新时间",
          key: "doneTime",
          type: "center"
        },
        {
          title: "操作",
          type: "center",
          width: 295,
          render(row, column, index) {
            let m = row.expCode.substr(1, 1),
              paramsExpCode = JSON.parse(row.params).expCode,
              n = 1,
              status = row.status,
              idx = row.id,
              sun = index + 1,
              len = "",
              flug= row.flug,
              item=row,
              newheatMapId = JSON.parse(row.params);
            if (self.msg.body.userTasks.length) {
              len = self.msg.body.userTasks.length;
            }
            let s = false,
              k = false,
              f = false,
              h = false;
            if (newheatMapId.heatMapId) {
              h = true;
            } else {
              h = false;
            }
            if (hun) {
              s = true;
              k = false;
              f = false;
              if (paramsExpCode == "03033" && status == 5) {
                s = false;
                k = false;
                f = true;
              }
            } else {
              if (sun == len) {
                s = true;
                k = false;
                f = false;
                if (
                  (paramsExpCode == "02010" && status == 5) ||
                  (paramsExpCode == "02011" && status == 5) ||
                  (paramsExpCode == "02020" && status == 5) ||
                  (paramsExpCode == "02050" && status == 5) ||
                  (paramsExpCode == "02051" && status == 5) ||
                  (paramsExpCode == "02052" && status == 5)
                ) {
                  s = false;
                  k = true;
                  f = false;
                } else if (paramsExpCode == "03033" && status == 5) {
                  s = false;
                  k = false;
                  f = true;
                }
              }
            }
            return (
              '<section v-if="' +
              s +
              '">' +
              '<p v-show="' +
              m +
              "===2&&" +
              status +
              "===5||" +
              m +
              "===3&&" +
              status +
              "===5||" +
              m +
              "===4&&" +
              status +
              "===5||" +
              m +
              "===5&&" +
              status +
              '===5">' +
              '<i-button type="primary" size="small"  v-bind:disabled="'+row.allDown+'"   @click="allDownload(' +
              idx+
              ')">全部下载</i-button>' +
              '<i-button type="primary" size="small" v-bind:disabled="'+row.sampleDown+'" @click="popOne(' +
              idx +
              ')">抽样下载</i-button>' +
              '<i-button type="primary" size="small" v-bind:disabled="'+row.topDown+'"  @click="popTop(' +
              idx +
              ')">Top下载</i-button>' +
              '<i-button type="primary" size="small" v-bind:disabled="'+row.cloudDown+'"   @click="swarmLoup(' +
              index +
              ')">云传</i-button>' +
              '</p><span><i-button type="primary" size="small" @click="showHeat(' +
              index +
              ')" v-show="' +
              m +
              "===6 && " +
              status +
              '===5">显示热力图</i-button><i-button type="primary" size="small" v-show="' +
              m +
              "===6 && " +
              status +
              "===5 && " +
              h +
              '" @click="cloneUrl(' +
              index +
              ')"">复制url</i-button></span>' +
              "</section>" +
              '<p v-if="' +
              k +
              '"><i-button type="primary" size="small"   @click="notification()">下载需审批</i-button></p>' +
              '<p v-if="' +
              f +
              '">手动复制设备统计数</p>'
            );
          }
        }
      ]
    };
  },
  ready() {},
  watch: {
    msg: function() {
      this.data2 = this.msg.body.userJobs;
      this.dataType = this.data2[0].name;
      this.data3 = this.msg.body.userTasks;
      (this.data3||[]).forEach((item,index)=>{
          item.allDown=false;//全部下载
          item.sampleDown=false;//抽样
          item.topDown=false;//top下载
          item.cloudDown=false;//云传
        this.data3.$set(index,item);
      });
      
      if (this.data3.length != 0) {
        this.data3_pop_wrapper_ren = true;
      } else {
        this.data3_pop_wrapper_ren = false;
      }

      this.allArray = [];
      this.leftArr = [];
      let excludeCheatedIds = this.msg.body.jobDesc.excludeCheatedIds;
      let p = this.msg.body.jobDesc.conditions;
      for (let i = 0; i < p.length; i++) {
        for (let j in p[i]) {
          if (j == "操作编码") {
            this.leftArr.push(p[i]["操作编码"]);
          }
        }
        delete p[i]["操作编码"];
      }
      this.leftArr.unshift("刷量");
      p.unshift({
        excludeCheatedIds: excludeCheatedIds
      });
      this.allArray = p;
      this.$refs.loadid.activeKey = "key1";
    }
  },
  methods: {
    popOne(idx) {
      this.bg1 = true;
      this.bg2 = false;
      this.allidx = idx;
    },
    popTop(idx) {
      this.bg2 = true;
      this.bg1 = false;
      this.allidx = idx;
    },
    backroll(id) {
      this.$Modal.confirm({
        title: "重新运行作业",
        content: "<p>您确认要重新运行作业吗？</p>",
        onOk: () => {
          let url = process.env.NODE_ENV.apiPath + "jobManager/reExecuteJob";
          Vue.http
            .get(url, {
              params: {
                jobId: id
              }
            })
            .then(
              response => {
                if (!response.body.resultCode) {
                  this.$Notice.success({
                    title: "重新运行作业",
                    desc: "重新运行作业成功！"
                  });
                } else {
                  this.$Notice.error({
                    title: "重新运行作业",
                    desc: "重新运行作业失败！"
                  });
                }
              },
              response => {
                console.log("请求失败");
              }
            );
        }
      });
    },
    ballSuccer1() {
      this.loader2 = true;
      this.findItem(this.allidx,true,'sampleDown');
      let reg = /^[0-9]*$/;
      if (!reg.test(this.number.value)) {
        this.$Notice.error({ title: "输入有误", desc: "请输入数字！" });
      } else {
        this.bg1 = false;
        let url = process.env.NODE_ENV.apiPath + "fileTransferManager/download";
        Vue.http
          .get(url, {
            params: {
              taskId: this.allidx,
              downloadType: 2,
              sampleSize: this.number.value
            }
          })
          .then(
            response => {
            this.loader2 = false;
            this.findItem(this.allidx,false,'sampleDown');
            var el = document.createElement("a");
            document.body.appendChild(el);
            el.href = response.url;
            el.click();
            document.body.removeChild(el);
          },
          response => {
              this.loader2 = false;
              console.log("请求失败");
            }
          );
      }
    },
    ballSuccer2() {
      this.loader3 = true;
      let reg = /^[0-9]*$/;
      if (!reg.test(this.numberTop.value)) {
        this.$Notice.error({ title: "输入有误", desc: "请输入数字！" });
      } else {
        this.bg2 = false;
        let url = process.env.NODE_ENV.apiPath + "fileTransferManager/download";
        Vue.http
          .get(url, {
            params: {
              taskId: this.allidx,
              downloadType: 1,
              sampleSize: this.numberTop.value
            }
          })
          .then(
            response => {
              this.loader3 = false;
              var el = document.createElement("a");
              document.body.appendChild(el);
              el.href = response.url;
              el.click();
              document.body.removeChild(el);
            },
            response => {
              this.loader3 = false;
              console.log("请求失败");
            }
          );
      }
    },
    findItem(id,blean,type){
      for(var i=0;i<this.data3.length;i++){
          var item=this.data3[i];
          if(item.id===id){
              item[type]=blean;
              this.data3.$set(i,item);
          }
      }
    },
    allDownload(id) {
        this.findItem(id,true,'allDown');
        this.loader1 = true;
        let url = process.env.NODE_ENV.apiPath + "fileTransferManager/download";
        let THIS=this;
       Vue.http
          .get(url, {
            params: {
              taskId: id,
              downloadType: 1,
              sampleSize: -1
            }
          })
          .then(
            response => {
              this.findItem(id,false,'allDown')
              this.loader1 = false;
              var el = document.createElement("a");
              el.href = response.url;
              document.body.appendChild(el);
              el.click();
              document.body.removeChild(el);
            },
            response => {
              this.loader1 = false;
              console.log("请求失败");
            }
      );
    },
    off() {
      this.bg2 = false;
      this.bg1 = false;
      this.bg3 = false;
      this.numberTop.value = 1;
      this.number.value = 1;
    },
    showHeat(index) {
      let jobId = this.data3[index].id;
      let params = JSON.parse(this.data3[index].params);
      if (params.heatMapId) {
        let id = params.heatMapId;
        window.open(
          "http://yhdc.tendcloud.com/heatmap/index.html?id=" + id + "",
          "_blank"
        );
      } else {
        layer.open({
          type: 2,
          title: "热力图展示",
          shadeClose: true,
          shade: 0.8,
          area: ["100%", "100%"],
          content:
            "build/td_heatmap/heatmap.html?jobId=" +
            jobId +
            "&dataType=" +
            encodeURIComponent(this.dataType) +
            "&basePath=" +
            process.env.NODE_ENV.apiPath // iframe的url
        });
      }
    },
    notification() {
      this.bg3 = true;
    },
    tiaojian(data) {
      let b = data instanceof Array;
      if (b) {
        this.allPut = data;
      }
      return b;
    },
    cloneUrl(index) {
      let self = this;
      let params = JSON.parse(this.data3[index].params);
      if (params.heatMapId) {
        let id = params.heatMapId;
        let url = "http://heatmap.talkingdata.com/index.html?id=" + id + "";
        let btn = document.getElementById("btn");
        btn.click();
        let clipboard = new Clipboard("#btn", {
          text: function() {
            return url;
          }
        });
        let bg = false;
        clipboard.on("success", function(e) {
          bg = true;
        });
        clipboard.on("error", function(e) {
          bg = false;
        });
        btn.click();
        if (bg) {
          self.$Notice.success({ title: "复制路径成功" });
        } else {
          self.$Notice.error({ title: "复制路径失败" });
        }
      }
    },
    swarmLoup(index) {
      this.modal1 = true;
      this.yunIndex = index;
    },
    yun() {
      function getCookie(name) {
        var arr,
          reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
        else return null;
      }
      let useremail = getCookie("useremail");
      let sessionemail = sessionStorage.getItem("sessionUser");
      let url = process.env.NODE_ENV.apiPath + "ftp/upload";
      let email = useremail || sessionemail;
      const form = new FormData();
      form.append(
        "filepath",
        this.data3[this.yunIndex].outputPath + "/result.gz"
      );
      form.append("email", email);
      Vue.http.post(url, form).then(
        response => {
          if (response.status === 200) {
            if (response.data.resultCode === 0) {
              let _url = response.data.resultValue;
              this.$Modal.confirm({
                title: "上传成功",
                okText: "复制路径",
                content:
                  '<p style="word-break: normal;;word-wrap: break-word">' +
                  "您的文件已上传到云传,路径：" +
                  _url +
                  "</p>",
                loading: true,
                onOk: () => {
                  setTimeout(() => {
                    this.$Modal.remove();
                    let btn = document.getElementById("btn");
                    btn.click();
                    let clipboard = new Clipboard("#btn", {
                      text: function() {
                        return _url;
                      }
                    });
                    let bg = false;
                    clipboard.on("success", function(e) {
                      bg = true;
                    });
                    clipboard.on("error", function(e) {
                      bg = false;
                    });
                    btn.click();
                    if (bg) {
                      this.$Notice.success({ title: "复制路径成功" });
                    } else {
                      this.$Notice.error({ title: "复制路径失败" });
                    }
                  }, 800);
                }
              });
            } else if (response.data.resultCode === 7) {
              this.$Notice.error({
                title: "授权失败",
                desc: "请先开通云传账号"
              });
            } else {
              this.$Notice.error({ title: "上传失败", desc: "请重新上传！" });
            }
          }
        },
        response => {
          console.log("请求失败");
        }
      );
    }
  }
};
</script>
<style>
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