webpackJsonp([9,14],{193:function(e,t,a){function n(e,t){for(var a=0;a<e.length;a++){var n=e[a],o=d[n.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(l(n.parts[s],t))}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(l(n.parts[s],t));d[n.id]={id:n.id,refs:1,parts:r}}}}function o(e){for(var t=[],a={},n=0;n<e.length;n++){var o=e[n],s=o[0],r=o[1],i=o[2],l=o[3],c={css:r,media:i,sourceMap:l};a[s]?a[s].parts.push(c):t.push(a[s]={id:s,parts:[c]})}return t}function s(e,t){var a=f(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function l(e,t){var a,n,o;if(t.singleton){var s=b++;a=m||(m=i(t)),n=c.bind(null,a,s,!1),o=c.bind(null,a,s,!0)}else a=i(t),n=p.bind(null,a),o=function(){r(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,a,n){var o=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function p(e,t){var a=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(a+="\n/*# sourceURL="+o.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=o(e);return n(a,t),function(e){for(var s=[],r=0;r<a.length;r++){var i=a[r],l=d[i.id];l.refs--,s.push(l)}if(e){var c=o(e);n(c,t)}for(var r=0;r<s.length;r++){var l=s[r];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete d[l.id]}}}};var v=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},1227:function(e,t,a){var n,o,s={};a(1228),n=a(1230),o=a(1234),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(r.template=o),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},1228:function(e,t,a){var n=a(1229);"string"==typeof n&&(n=[[e.id,n,""]]);a(193)(n,{});n.locals&&(e.exports=n.locals)},1229:function(e,t,a){t=e.exports=a(7)(),t.push([e.id,".vertical-center-modal .ivu-modal-body{border-top:none;padding:0}.deliveryFooter{text-align:left}",""])},1230:function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1231),s=n(o);t.default={components:{Newpop:s.default},data:function(){return{self:this,modal1:!1,pageNum:1,data1:[],value:"",model2:"",navigatePages:0,msg:"",email:"",search:"",current:1,projectVal:"",columns1:[{sortable:!0,title:"作业id",key:"jobId",width:"100",type:"center"},{sortable:!0,title:"项目名称",key:"projectName"},{sortable:!0,title:"作业名称",key:"jobName",type:"center"},{sortable:!0,title:"提交用户",key:"email",type:"center"},{sortable:!0,title:"提交时间",key:"createTime",type:"center"},{sortable:!0,title:"更新时间",key:"doneTime",type:"center"},{sortable:!0,title:"作业状态",width:"123",type:"center",render:function(e,t,a){var n="";0==e.status?n="已创建":1==e.status?n="已提交":2==e.status?n="排队中":3==e.status?n="已调度":4==e.status?n="运行中":5==e.status?n="已成功":6==e.status?n="已失败":7==e.status?n="已拉取":8==e.status&&(n="已取消");var o=5==e.status?"green":6==e.status?"red":"blue";return'<tag type="dot" color="'+o+'">'+n+"</tag>"}},{title:"查看作业详情",type:"center",width:"130",render:function(e,t,a){var n=!0;return 2==e.status&&(n=!1),'<i-button type="primary" size="small"  @click="show('+a+')" class="management-btn">查看</i-button><i-button type="primary" size="small"  @click="abrogate('+a+')" :disabled="'+n+'">取消</i-button> '}}]}},ready:function(){this.getcookie(),this.fetchData()},methods:{getcookie:function(){function e(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?unescape(t[2]):null}var t=e("useremail"),a=e("userpassword"),n=sessionStorage.getItem("sessionUser");t&&a?this.email=t:n&&(this.email=n)},changePage:function(e){this.pageNum=e,this.current=e,this.fetchData()},fetchData:function(){var t=this,a="http://yhdc.tendcloud.com/atm_backend//jobManager/getJobList";this.email&&e.http.get(a,{params:{email:this.email,keyword:this.search,pageNum:this.pageNum,pageSize:15,jobType:2}}).then(function(e){t.data1=e.body.list,t.navigatePages=e.body.total},function(e){console.log("请求不到数据")})},show:function(t){var a=this,n=this.data1[t].jobId,o="http://yhdc.tendcloud.com/atm_backend/jobManager/getJobDetail";e.http.get(o,{params:{jobId:n}}).then(function(e){a.msg=e,a.modal1=!0},function(e){console.log("请求不到数据")})},projectsubmit:function(){var t=this;if(""==this.projectVal)this.$Notice.warning({title:"创建项目",desc:"请输入要创建项目名称"});else{var a="http://yhdc.tendcloud.com/atm_backend//jobManager/addProject";e.http.get(a,{params:{email:this.email,projectName:this.projectVal}}).then(function(e){0==e.body.resultCode?t.$Notice.success({title:"创建项目",desc:"创建项目成功"}):t.$Notice.error({title:"创建项目",desc:"创建项目失败！请重新创建"})},function(e){console.log("请求不到数据")})}},searchPlay:function(){var t=this,a="http://yhdc.tendcloud.com/atm_backend/jobManager/getJobList";e.http.get(a,{params:{email:this.email,keyword:this.search,pageNum:1,pageSize:15,jobType:2}}).then(function(e){t.data1=e.body.list,t.navigatePages=e.body.total,t.current=1},function(e){console.log("请求不到数据")})},abrogate:function(t){var a=this;this.$Modal.confirm({title:"取消作业",content:"<p>您确认要取消当前作业？</p>",onOk:function(){var n=a.data1[t].jobId,o="http://yhdc.tendcloud.com/atm_backend/jobMonitor/cancelJob";e.http.get(o,{params:{jobId:n}}).then(function(e){0==e.body.resultCode?(a.fetchData(),a.$Notice.success({title:"取消任务",desc:"取消任务成功"})):a.$Notice.error({title:"取消任务",desc:"取消任务失败"})},function(e){console.log("请求不到数据")})}})}}}}).call(t,a(1))},1231:function(e,t,a){var n,o,s={};n=a(1232),o=a(1233),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(r.template=o),r.computed||(r.computed={}),Object.keys(s).forEach(function(e){var t=s[e];r.computed[e]=function(){return t}})},1232:function(e,t,a){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(199);t.default={props:["msg"],components:{rdNumber:n.rdNumber},data:function(){function e(e){var t,a=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(a))?unescape(t[2]):null}var t=e("atmJson"),a=sessionStorage.getItem("sessionAtmJson"),n=!1;t?n=JSON.parse(t).admin:a&&(n=JSON.parse(a).admin);return{dataType:null,self:this,data2:[],data3:[],show:!1,allPut:[],number:{value:1,step:1},numberTop:{value:1,step:1},data3_pop_wrapper_ren:!1,modal5:!1,bg1:!1,bg2:!1,bg3:!1,allidx:"",allArray:[],leftArr:[],columns2:[{title:"作业id",key:"id",width:80,type:"center"},{title:"作业名称",key:"name",type:"center"},{title:"页面参数",type:"center",width:120,render:function(e,t,a){var n=e.params.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/ /g,"&nbsp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/:/g,":");return"<Tooltip content="+n+">参数详情</Tooltip>"}},{title:"输出路径",key:"outputPath",type:"center"},{title:"作业状态",key:"status",type:"center",width:124,render:function(e,t,a){var n="";0==e.status?n="已创建":1==e.status?n="已提交":2==e.status?n="排队中":3==e.status?n="已调度":4==e.status?n="运行中":5==e.status?n="已成功":6==e.status?n="已失败":8==e.status?n="已取消":7==e.status&&(n="已拉取");var o=5==e.status?"green":6==e.status?"red":"blue";return'<tag type="dot" color="'+o+'">'+n+"</tag>"}},{title:"排队次序",type:"center",width:120,render:function(e,t,a){var n="";return n=e.jobCntBefore===-1?"":e.jobCntBefore,"<span>"+n+"</span>"}},{title:"创建时间",key:"createTime",type:"center"},{title:"结束时间",key:"doneTime",type:"center"}],columns3:[{title:"任务id",key:"id",type:"center",width:80},{title:"任务序号",key:"serialNo",type:"center",width:100},{title:"任务类型",type:"center",width:120,render:function(e,t,a){var n="";return n=0==e.taskType?"未知":1==e.taskType?"GP":2==e.taskType?"JAVA":3==e.taskType?"SPARK":4==e.taskType?"MAP-REDUCE":5==e.taskType?"FLINK":6==e.taskType?"REST-CALLKING":"REST-POLLING","<span>"+n+"</span> "}},{title:"任务描述",type:"center",render:function(e,t,a){var n=JSON.parse(e.params);return n.taskDesc}},{title:"任务参数",type:"center",width:120,render:function(e,t,a){var n=e.params.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/ /g,"&nbsp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/:/g,":");return"<Tooltip content="+n+">参数详情</Tooltip>"}},{title:"任务状态",type:"center",width:124,render:function(e,t,a){var n="";0==e.status?n="已创建":1==e.status?n="排队中":2==e.status?n="已调度":3==e.status?n="已提交":4==e.status?n="运行中":5==e.status?n="已成功":6==e.status&&(n="已失败");var o=5==e.status?"green":6==e.status?"red":"blue";return"<tag color="+o+" >"+n+"</tag>"}},{title:"结果数目",type:"center",render:function(e,t,a){var n="";return n=e.resultCount==-1?"":e.resultCount,"<span>"+n+"</span> "}},{title:"开始时间",key:"startTime",type:"center"},{title:"更新时间",key:"doneTime",type:"center"}]}},ready:function(){},watch:{msg:function(){this.data2=this.msg.body.userJobs,this.dataType=this.data2[0].name,this.data3=this.msg.body.userTasks,0!=this.data3.length?this.data3_pop_wrapper_ren=!0:this.data3_pop_wrapper_ren=!1,this.allArray=[],this.leftArr=[];for(var e=this.msg.body.jobDesc.excludeCheatedIds,t=this.msg.body.jobDesc.conditions,a=0;a<t.length;a++){for(var n in t[a])"操作编码"==n&&this.leftArr.push(t[a]["操作编码"]);delete t[a]["操作编码"]}this.leftArr.unshift("刷量"),t.unshift({excludeCheatedIds:e}),this.allArray=t,this.$refs.loadid.activeKey="key1"}},methods:{popOne:function(e){this.bg1=!0,this.bg2=!1,this.allidx=e},popTop:function(e){this.bg2=!0,this.bg1=!1,this.allidx=e},backroll:function(t){var a=this;this.$Modal.confirm({title:"重新运行作业",content:"<p>您确认要重新运行作业吗？</p>",onOk:function(){var n="http://yhdc.tendcloud.com/atm_backend/jobManager/reExecuteJob";e.http.get(n,{params:{jobId:t}}).then(function(e){e.body.resultCode?a.$Notice.error({title:"重新运行作业",desc:"重新运行作业失败！"}):a.$Notice.success({title:"重新运行作业",desc:"重新运行作业成功！"})},function(e){console.log("请求失败")})}})},ballSuccer1:function(){var t=/^[0-9]*$/;if(t.test(this.number.value)){this.bg1=!1;var a="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";e.http.get(a,{params:{taskId:this.allidx,downloadType:2,sampleSize:this.number.value}}).then(function(e){var t=document.createElement("a");document.body.appendChild(t),t.href=e.url,t.click(),document.body.removeChild(t)})}else this.$Notice.error({title:"输入有误",desc:"请输入数字！"})},ballSuccer2:function(){var t=/^[0-9]*$/;if(t.test(this.numberTop.value)){this.bg2=!1;var a="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";e.http.get(a,{params:{taskId:this.allidx,downloadType:1,sampleSize:this.numberTop.value}}).then(function(e){var t=document.createElement("a");document.body.appendChild(t),t.href=e.url,t.click(),document.body.removeChild(t)},function(e){console.log("请求失败")})}else this.$Notice.error({title:"输入有误",desc:"请输入数字！"})},allDownload:function(t){var a="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";e.http.get(a,{params:{taskId:t,downloadType:1,sampleSize:-1}}).then(function(e){var t=document.createElement("a");document.body.appendChild(t),t.href=e.url,t.click(),document.body.removeChild(t)},function(e){console.log("请求失败")})},off:function(){this.bg2=!1,this.bg1=!1,this.bg3=!1,this.numberTop.value=1,this.number.value=1},showHeat:function(e){layer.open({type:2,title:"热力图展示",shadeClose:!0,shade:.8,area:["100%","100%"],content:"build/td_heatmap/heatmap.html?jobId="+e+"&dataType="+encodeURIComponent(this.dataType)+"&basePath=http://yhdc.tendcloud.com/atm_backend/"})},notification:function(){this.bg3=!0},tiaojian:function(e){var t=e instanceof Array;return t&&(this.allPut=e),t}}}}).call(t,a(1))},1233:function(e,t){e.exports=' <section class=pop-wrapper> <tabs type=card v-ref:loadid> <tab-pane label=概要信息 key=key1> <h2> <icon type=ios-browsers-outline size=18></icon><span>查看作业</span></h2> <i-table highlight-row border :columns=columns2 :data=data2 :content=self></i-table> <section class=pop-wrapper-ren v-show=data3_pop_wrapper_ren> <h2> <icon type=ios-browsers-outline size=18></icon><span>任务详情</span></h2> <i-table highlight-row border :columns=columns3 :data=data3 :content=self size=small></i-table> </section> <div class=popCenter v-show=bg1> <h2>抽样下载 (输入数字)</h2> <rd-number :number=number></rd-number> <span class=popTop><i-button type=ghost @click=ballSuccer1>确定</i-button></span> <i-button type=ghost @click=off class=popOff>X</i-button> </div> <div class=popCenter v-show=bg2> <h2>Top下载 (输入数字)</h2> <rd-number :number=numberTop></rd-number> <span class=popTop><i-button type=ghost @click=ballSuccer2>确定</i-button></span> <i-button type=ghost @click=off class=popOff>X</i-button> </div> <div class=popCenter3 v-show=bg3> <h2>下载需审批：</h2> <p>明细数据下载说明请查看<a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p> <i-button type=ghost @click=off class=popOff>X</i-button> </div> </tab-pane> <tab-pane label=条件信息 key=key2> <h2> <icon type=ios-browsers-outline size=18></icon><span>作业条件信息</span></h2> <div class=pop-wrapper-list> <section class=pop-wrapper-list-header><label for="">条件名称</label><h2>条件详情</h2></section> <section v-for="item in allArray"> <label>{{leftArr[$index]}}</label> <nav> <div v-for="(key,val) in item" track-by=$index> <span class=list-p1><b>{{key}}：</b></span> <div class=list-p2 v-if=tiaojian(val)> <div v-for="val in allPut"> <div v-for="(k,v) in val" style=display:-webkit-flex> <span>{{k}}：</span><div class=list-p2>{{v}}</div> </div> </div> </div> <div class=list-p2 v-else>{{val}}</div> </div> </nav> </section> </div> </tab-pane> </tabs> </section> '},1234:function(e,t){e.exports=' <div class=atm-ide> <div class=delivery_btn> <i-input :value.sync=search size=small placeholder=请输入要搜索的内容... style="width: 300px;margin-left:10px" @keyup.enter=searchPlay></i-input> <i-button type=primary size=small @click=searchPlay icon=ios-search class=delivery-mar>搜索</i-button> </div> <i-table highlight-row border :columns=columns1 :data=data1 :content=self size=small></i-table> <div class=page-footer> <page :total=navigatePages @on-change=changePage :current=current :page-size=15 show-total></page> </div> <modal :visible.sync=modal1 :style="{width: \'90%\'}" title=查看作业详情 class-name=vertical-center-modal> <div slot=footer class=deliveryFooter><newpop :msg=msg><newpop></newpop></newpop></div> </modal> </div> '}});