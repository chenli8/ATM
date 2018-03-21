webpackJsonp([3,14],{84:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.dateTypeList=[{id:1,name:"日",value:"day"},{id:2,name:"周",value:"week"},{id:3,name:"月",value:"month"}],t.workingDayList=[{id:1,name:"工作日"},{id:2,name:"非工作日"}],t.selectivityList=[{id:0,name:"不选POI"},{id:1,name:"模糊搜索POI"},{id:2,name:"围栏圈POI"}],t.source=[{name:"北京",code:"beijing"},{name:"上海",code:"shanghai"},{name:"广州",code:"guangzhou"},{name:"深圳",code:"shenzhen"}],t.dateInfo=function(){return{dateLabel:"选择时间",dateTypeLabel:"时间类型",startDateLabel:"起始范围",timeLabel:"时间范围",endDateLabel:"结束范围",typeList:[{id:1,name:"日",value:"day"},{id:2,name:"周",value:"week"},{id:3,name:"月",value:"month"}],startDatePicker:{value:"",options:{placeHolder:"请选择时间",type:"day",tag:"startDatePicker",limit:{customerLimit:function(e){var t=1*new Date,n=t-2592e5,i=1*new Date(e.time._i);return i>n}}}},endDatePicker:{value:"",options:{placeHolder:"请选择时间",type:"day",tag:"endDatePicker",limit:{customerLimit:function(e){var t=1*new Date,n=t-2592e5,i=1*new Date(e.time._i);return i>n}}}}}},t.timeList=function(){for(var e=[],t=0;t<24;t++)e.push({id:t,name:t});return e},t.TIMESTR="0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23",t.areaTypeList=[{id:1,name:"国家"},{id:2,name:"省份"},{id:3,name:"城市"}],t.appQueryTypeList=[{id:1,name:"名称"},{id:2,name:"包名"},{id:3,name:"哈希"}],t.behaviorTypeList=[{id:"installAppList",name:"安装"},{id:"activeAppList",name:"活跃"}],t.filterTypeList=[{id:1,name:"居住地"},{id:2,name:"工作地"}],t.activeTypelist=[{id:1,name:"按天活跃"},{id:2,name:"按小时活跃"}],t.activeBehaviorList=[{id:1,name:"第一次活跃"},{id:2,name:"最后一次活跃"}],t.groupTypeList=[{id:1,name:" 按天/月统计"},{id:2,name:"全时段统计"}],t.locationTypeList=[{id:1,name:"上传中心点+半径"},{id:2,name:"上传围栏"},{id:3,name:"选择围栏"}],t.locationGhettoTypeList=[{id:0,name:"无围栏"},{id:1,name:"上传中心点+半径"},{id:2,name:"上传围栏"},{id:3,name:"选择围栏"}],t.coordinaryTypeList=[{id:1,name:"WGS84"},{id:2,name:"百度"},{id:3,name:"高德"}],t.deviceList=[{id:21,name:"TDID"},{id:31,name:"MAC"},{id:41,name:"IMEI"},{id:51,name:"PHONENOMD5"},{id:61,name:"IDFA"},{id:71,name:"AndroidID"},{id:81,name:"IMSI"}],t.md5DeviceList=[{id:32,name:"小写MD5加密的MAC"},{id:33,name:"大写MD5加密的MAC"},{id:42,name:"小写MD5加密的IMEI"},{id:43,name:"大写MD5加密的IMEI"},{id:44,name:"截取前14位后MD5加密的IMEI"},{id:62,name:"小写MD5加密的IDFA"},{id:63,name:"大写MD5加密的IDFA"},{id:72,name:"小写MD5加密的AndroidID"},{id:73,name:"大写MD5加密的AndroidID"}],t.regionTypeList=[{id:"area",name:"出现"},{id:"residentCityByMonth",name:"按月常驻"},{id:"residentCity",name:"常驻(与时间无关)"}],t.equipmentProList=[{id:91,name:"原始机型"},{id:92,name:"网络"},{id:93,name:"运营商"},{id:94,name:"分辨率"},{id:95,name:"OS"},{id:97,name:"品牌"},{id:98,name:"价格范围"},{id:99,name:"屏幕尺寸"},{id:100,name:"硬件特性"},{id:101,name:"功能特性"}],t.fileContentList=[{id:1,name:"位置聚集点"},{id:2,name:"经纬度"}],t.coordinateList=[{id:1,name:"WGS84（GPS）"},{id:2,name:"BD09LL（百度地图）"}],t.inquiryList=[{id:1,name:"社区街道"},{id:2,name:"周边POI"},{id:3,name:"POI排名(TOP1000倒序排列)"}],t.withinList=[{id:1,name:"工作日"},{id:2,name:"周六日"},{id:3,name:"全部"}],t.brushList=[{id:1,name:"过滤刷量设备"},{id:2,name:"过滤非刷量设备"}],t.placeList=[{id:0,name:"全部"},{id:2,name:"工作地"},{id:1,name:"居住地"}],t.resideList=[{id:2,name:"工作地"},{id:1,name:"居住地"}],t.domainList=[{id:1,name:"城市统计"},{id:2,name:"区统计"}],t.tagExpressionList=[{id:1,name:"OR"},{id:2,name:"AND"}],t.appSelectivityList=[{id:1,name:"模糊选择"},{id:2,name:"上传APP文件 (只支持上传APP哈希，每行单列)"}],t.getWeek=function(e,t,n){if(1==n){var i=new Date(e),a=new Date(t),o=2592e6;return!(1*a-1*i>o)}if(2==n){var r=new Date,s=new Date;s.setMonth(0),s.setDate(1);var l=r-s,c=Math.ceil(l/864e5),d=Math.ceil(c/7),u=new Date,p=e.split("-")[0],f=t.split("-")[0],m=e.split("-")[1],h=t.split("-")[1],y=u.getFullYear();d<10&&(d="0"+d);var v=y+"-"+d;if(f-p==0&&e<=t&&e<v&&t<v)return!(1*h-1*m+1>8);if(f-p==1&&e<=t&&e<v&&t<v){var b=function(e){for(var t=[],n=0;n<10;n++)t.push(2010+6*n);return t.indexOf(1*e)!=-1?53:52};0==m.substr(0,1)&&(m=m.substr(1,1)),0==h.substr(0,1)&&(h=h.substr(1,1));var g=b(p);return!(g-1*m+1*h+1>8)}return!1}if(3==n){var k=new Date,w=k.getFullYear(),x=1*e.split("-")[0],T=1*t.split("-")[0],E=1*e.split("-")[1],S=1*t.split("-")[1],L=k.getMonth()+1;L<10&&(L="0"+L);var M=w+"-"+L;return T-x==0&&e<=t&&e<M&&t<M?!(S-E>2):T-x==1&&e<=t&&e<M&&t<M&&!(12-1*E+1*S>2)}}},190:function(e,t,n){var i,a,o={};n(191),i=n(194),a=n(487),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(o).forEach(function(e){var t=o[e];r.computed[e]=function(){return t}})},191:function(e,t,n){var i=n(192);"string"==typeof i&&(i=[[e.id,i,""]]);n(193)(i,{});i.locals&&(e.exports=i.locals)},192:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".vertical-center-modal .ivu-modal-body{border-top:none;padding:0}.deliveryFooter{text-align:left}.ivu-icon-refresh{font-size:19px}",""])},193:function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],a=u[i.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(l(i.parts[o],t))}else{for(var r=[],o=0;o<i.parts.length;o++)r.push(l(i.parts[o],t));u[i.id]={id:i.id,refs:1,parts:r}}}}function a(e){for(var t=[],n={},i=0;i<e.length;i++){var a=e[i],o=a[0],r=a[1],s=a[2],l=a[3],c={css:r,media:s,sourceMap:l};n[o]?n[o].parts.push(c):t.push(n[o]={id:o,parts:[c]})}return t}function o(e,t){var n=m(),i=v[v.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e,t){var n,i,a;if(t.singleton){var o=y++;n=h||(h=s(t)),i=c.bind(null,n,o,!1),a=c.bind(null,n,o,!0)}else n=s(t),i=d.bind(null,n),a=function(){r(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}function c(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var o=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function d(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,y=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return i(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var s=n[r],l=u[s.id];l.refs--,o.push(l)}if(e){var c=a(e);i(c,t)}for(var r=0;r<o.length;r++){var l=o[r];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},194:function(e,t,n){(function(e){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(195),o=i(a);t.default={components:{Pop:o.default},data:function(){return{self:this,modal1:!1,pageNum:1,data1:[],value:"",model2:"",navigatePages:0,msg:"",email:"",search:"",current:1,projectVal:"",loader:!1,columns1:[{sortable:!0,title:"作业id",key:"jobId",width:"100",type:"center"},{sortable:!0,title:"项目名称",key:"projectName"},{sortable:!0,title:"作业名称",key:"jobName",type:"center"},{sortable:!0,title:"提交用户",key:"email",type:"center"},{sortable:!0,title:"提交时间",key:"createTime",type:"center"},{sortable:!0,title:"更新时间",key:"doneTime",type:"center"},{sortable:!0,title:"作业状态",width:"123",type:"center",render:function(e,t,n){var i="";0==e.status?i="已创建":1==e.status?i="已提交":2==e.status?i="排队中":3==e.status?i="已调度":4==e.status?i="运行中":5==e.status?i="已成功":6==e.status?i="已失败":7==e.status?i="已拉取":8==e.status&&(i="已取消");var a=5==e.status?"green":6==e.status?"red":"blue";return'<tag type="dot" color="'+a+'">'+i+"</tag>"}},{title:"查看作业详情",type:"center",width:"130",render:function(e,t,n){var i=!0;return 2==e.status&&(i=!1),'<i-button type="primary" size="small"  @click="show('+n+')" class="management-btn">查看</i-button><i-button type="primary" size="small"  @click="abrogate('+n+')" :disabled="'+i+'">取消</i-button> '}}]}},ready:function(){this.getcookie(),this.fetchData()},methods:{freshPage:function(){location.reload()},getcookie:function(){function e(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}var t=e("useremail"),n=e("userpassword"),i=sessionStorage.getItem("sessionUser");t&&n?this.email=t:i&&(this.email=i)},changePage:function(e){this.pageNum=e,this.current=e,this.fetchData()},fetchData:function(){var t=this;this.loader=!0;var n="http://yhdc.tendcloud.com/atm_backend//jobManager/getJobList";this.email&&e.http.get(n,{params:{email:this.email,keyword:this.search,pageNum:this.pageNum,pageSize:15,jobType:1}}).then(function(e){t.loader=!1,t.data1=e.body.list,t.navigatePages=e.body.total},function(e){console.log("请求不到数据")})},show:function(t){var n=this,i=this.data1[t].jobId,a="http://yhdc.tendcloud.com/atm_backend/jobManager/getJobDetail";e.http.get(a,{params:{jobId:i}}).then(function(e){n.msg=e,n.modal1=!0},function(e){console.log("请求不到数据")})},projectsubmit:function(){var t=this;if(""==this.projectVal)this.$Notice.warning({title:"创建项目",desc:"请输入要创建项目名称"});else{var n="http://yhdc.tendcloud.com/atm_backend//jobManager/addProject";e.http.get(n,{params:{email:this.email,projectName:this.projectVal}}).then(function(e){0==e.body.resultCode?t.$Notice.success({title:"创建项目",desc:"创建项目成功"}):t.$Notice.error({title:"创建项目",desc:"创建项目失败！请重新创建"})},function(e){console.log("请求不到数据")})}},searchPlay:function(){var t=this,n="http://yhdc.tendcloud.com/atm_backend/jobManager/getJobList";e.http.get(n,{params:{email:this.email,keyword:this.search,pageNum:1,pageSize:15,jobType:1}}).then(function(e){t.data1=e.body.list,t.navigatePages=e.body.total,t.current=1},function(e){console.log("请求不到数据")})},abrogate:function(t){var n=this;this.$Modal.confirm({title:"取消作业",content:"<p>您确认要取消当前作业？</p>",onOk:function(){var i=n.data1[t].jobId,a="http://yhdc.tendcloud.com/atm_backend/jobMonitor/cancelJob";e.http.get(a,{params:{jobId:i}}).then(function(e){0==e.body.resultCode?(n.fetchData(),n.$Notice.success({title:"取消任务",desc:"取消任务成功"})):n.$Notice.error({title:"取消任务",desc:"取消任务失败"})},function(e){console.log("请求不到数据")})}})}}}}).call(t,n(1))},195:function(e,t,n){var i,a,o={};n(196),i=n(198),a=n(486),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(o).forEach(function(e){var t=o[e];r.computed[e]=function(){return t}})},196:function(e,t,n){var i=n(197);"string"==typeof i&&(i=[[e.id,i,""]]);n(193)(i,{});i.locals&&(e.exports=i.locals)},197:function(e,t,n){t=e.exports=n(7)(),t.push([e.id,".demo-spin-container{display:inline-block;width:200px;height:100px;position:fixed;border:1px solid #eee;top:50%;left:50%;margin-top:-50px;margin-left:-100px;z-index:9999999}.demo-spin-icon-load{-webkit-animation:ani-demo-spin 1s linear infinite;animation:ani-demo-spin 1s linear infinite}@-webkit-keyframes ani-demo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ani-demo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.demo-spin-col{height:100px;position:relative;border:1px solid #eee}",""])},198:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(199),o=n(478),r=i(o),s=(n(84),n(1)),l=i(s);t.default={props:["msg"],components:{rdNumber:a.rdNumber},data:function(){function e(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}var t=e("atmJson"),n=sessionStorage.getItem("sessionAtmJson"),i=!1;t?i=JSON.parse(t).admin:n&&(i=JSON.parse(n).admin);var a=this;return{arr:[{name:1}],modal1:!1,yunIndex:0,dataType:null,self:this,data2:[],data3:[],show:!1,allPut:[],number:{value:1,step:1},numberTop:{value:1,step:1},loader1:!1,loader2:!1,loader3:!1,data3_pop_wrapper_ren:!1,modal5:!1,bg1:!1,bg2:!1,bg3:!1,allidx:"",allArray:[],leftArr:[],columns2:[{title:"作业id",key:"id",width:80,type:"center"},{title:"作业名称",key:"name",type:"center"},{title:"页面参数",type:"center",width:120,render:function(e,t,n){var i=e.params.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/ /g,"&nbsp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/:/g,":");return"<Tooltip content="+i+">参数详情</Tooltip>"}},{title:"输出路径",key:"outputPath",type:"center"},{title:"作业状态",key:"status",type:"center",width:124,render:function(e,t,n){var i="";0==e.status?i="已创建":1==e.status?i="已提交":2==e.status?i="排队中":3==e.status?i="已调度":4==e.status?i="运行中":5==e.status?i="已成功":6==e.status?i="已失败":8==e.status?i="已取消":7==e.status&&(i="已拉取");var a=5==e.status?"green":6==e.status?"red":"blue";return'<tag type="dot" color="'+a+'">'+i+"</tag>"}},{title:"排队次序",type:"center",width:120,render:function(e,t,n){var i="";return i=e.jobCntBefore===-1?"":e.jobCntBefore,"<span>"+i+"</span>"}},{title:"创建时间",key:"createTime",type:"center"},{title:"结束时间",key:"doneTime",type:"center"},{title:"操作",type:"center",render:function(e,t,n){var a=e.id,o=e.status;return'<i-button type="primary" size="small" v-show="'+o+"===6 && "+i+'" @click="backroll('+a+')">重新运行作业</i-button>'}}],columns3:[{title:"任务id",key:"id",type:"center",width:80},{title:"任务序号",key:"serialNo",type:"center",width:90},{title:"任务类型",type:"center",width:120,render:function(e,t,n){var i="";return i=0==e.taskType?"未知":1==e.taskType?"GP":2==e.taskType?"JAVA":3==e.taskType?"SPARK":4==e.taskType?"MAP-REDUCE":5==e.taskType?"FLINK":6==e.taskType?"REST-CALLKING":"REST-POLLING","<span>"+i+"</span> "}},{title:"任务描述",type:"center",render:function(e,t,n){var i=JSON.parse(e.params);return i.taskDesc}},{title:"任务参数",type:"center",width:120,render:function(e,t,n){var i=e.params.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/ /g,"&nbsp;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;").replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/:/g,":");return"<Tooltip content="+i+">参数详情</Tooltip>"}},{title:"任务状态",type:"center",width:110,render:function(e,t,n){var i="";0==e.status?i="已创建":1==e.status?i="排队中":2==e.status?i="已调度":3==e.status?i="已提交":4==e.status?i="运行中":5==e.status?i="已成功":6==e.status&&(i="已失败");var a=5==e.status?"green":6==e.status?"red":"blue";return"<tag color="+a+" >"+i+"</tag>"}},{title:"结果数目",type:"center",render:function(e,t,n){var i="";return i=e.resultCount==-1?"":e.resultCount,"<span>"+i+"</span> "}},{title:"开始时间",key:"startTime",type:"center"},{title:"更新时间",key:"doneTime",type:"center"},{title:"操作",type:"center",width:295,render:function(e,t,n){var o=e.expCode.substr(1,1),r=JSON.parse(e.params).expCode,s=e.status,l=e.id,c=n+1,d="",u=(e.flug,JSON.parse(e.params));a.msg.body.userTasks.length&&(d=a.msg.body.userTasks.length);var p=!1,f=!1,m=!1,h=!1;return h=!!u.heatMapId,i?(p=!0,f=!1,m=!1,"03033"==r&&5==s&&(p=!1,f=!1,m=!0)):c==d&&(p=!0,f=!1,m=!1,"02010"==r&&5==s||"02011"==r&&5==s||"02020"==r&&5==s||"02050"==r&&5==s||"02051"==r&&5==s||"02052"==r&&5==s?(p=!1,f=!0,m=!1):"03033"==r&&5==s&&(p=!1,f=!1,m=!0)),'<section v-if="'+p+'"><p v-show="'+o+"===2&&"+s+"===5||"+o+"===3&&"+s+"===5||"+o+"===4&&"+s+"===5||"+o+"===5&&"+s+'===5"><i-button type="primary" size="small"  v-bind:disabled="'+e.allDown+'"   @click="allDownload('+l+')">全部下载</i-button><i-button type="primary" size="small" v-bind:disabled="'+e.sampleDown+'" @click="popOne('+l+')">抽样下载</i-button><i-button type="primary" size="small" v-bind:disabled="'+e.topDown+'"  @click="popTop('+l+')">Top下载</i-button><i-button type="primary" size="small" v-bind:disabled="'+e.cloudDown+'"   @click="swarmLoup('+n+')">云传</i-button></p><span><i-button type="primary" size="small" @click="showHeat('+n+')" v-show="'+o+"===6 && "+s+'===5">显示热力图</i-button><i-button type="primary" size="small" v-show="'+o+"===6 && "+s+"===5 && "+h+'" @click="cloneUrl('+n+')"">复制url</i-button></span></section><p v-if="'+f+'"><i-button type="primary" size="small"   @click="notification()">下载需审批</i-button></p><p v-if="'+m+'">手动复制设备统计数</p>'}}]}},ready:function(){},watch:{msg:function(){var e=this;this.data2=this.msg.body.userJobs,this.dataType=this.data2[0].name,this.data3=this.msg.body.userTasks,(this.data3||[]).forEach(function(t,n){t.allDown=!1,t.sampleDown=!1,t.topDown=!1,t.cloudDown=!1,e.data3.$set(n,t)}),0!=this.data3.length?this.data3_pop_wrapper_ren=!0:this.data3_pop_wrapper_ren=!1,this.allArray=[],this.leftArr=[];for(var t=this.msg.body.jobDesc.excludeCheatedIds,n=this.msg.body.jobDesc.conditions,i=0;i<n.length;i++){for(var a in n[i])"操作编码"==a&&this.leftArr.push(n[i]["操作编码"]);delete n[i]["操作编码"]}this.leftArr.unshift("刷量"),n.unshift({excludeCheatedIds:t}),this.allArray=n,this.$refs.loadid.activeKey="key1"}},methods:{popOne:function(e){this.bg1=!0,this.bg2=!1,this.allidx=e},popTop:function(e){this.bg2=!0,this.bg1=!1,this.allidx=e},backroll:function(e){var t=this;this.$Modal.confirm({title:"重新运行作业",content:"<p>您确认要重新运行作业吗？</p>",onOk:function(){var n="http://yhdc.tendcloud.com/atm_backend/jobManager/reExecuteJob";l.default.http.get(n,{params:{jobId:e}}).then(function(e){e.body.resultCode?t.$Notice.error({title:"重新运行作业",desc:"重新运行作业失败！"}):t.$Notice.success({title:"重新运行作业",desc:"重新运行作业成功！"})},function(e){console.log("请求失败")})}})},ballSuccer1:function(){var e=this;this.loader2=!0,this.findItem(this.allidx,!0,"sampleDown");var t=/^[0-9]*$/;if(t.test(this.number.value)){this.bg1=!1;var n="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";l.default.http.get(n,{params:{taskId:this.allidx,downloadType:2,sampleSize:this.number.value}}).then(function(t){e.loader2=!1,e.findItem(e.allidx,!1,"sampleDown");var n=document.createElement("a");document.body.appendChild(n),n.href=t.url,n.click(),document.body.removeChild(n)},function(t){e.loader2=!1,console.log("请求失败")})}else this.$Notice.error({title:"输入有误",desc:"请输入数字！"})},ballSuccer2:function(){var e=this;this.loader3=!0;var t=/^[0-9]*$/;if(t.test(this.numberTop.value)){this.bg2=!1;var n="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";l.default.http.get(n,{params:{taskId:this.allidx,downloadType:1,sampleSize:this.numberTop.value}}).then(function(t){e.loader3=!1;var n=document.createElement("a");document.body.appendChild(n),n.href=t.url,n.click(),document.body.removeChild(n)},function(t){e.loader3=!1,console.log("请求失败")})}else this.$Notice.error({title:"输入有误",desc:"请输入数字！"})},findItem:function(e,t,n){for(var i=0;i<this.data3.length;i++){var a=this.data3[i];a.id===e&&(a[n]=t,this.data3.$set(i,a))}},allDownload:function(e){var t=this;this.findItem(e,!0,"allDown"),this.loader1=!0;var n="http://yhdc.tendcloud.com/atm_backend/fileTransferManager/download";l.default.http.get(n,{params:{taskId:e,downloadType:1,sampleSize:-1}}).then(function(n){t.findItem(e,!1,"allDown"),t.loader1=!1;var i=document.createElement("a");i.href=n.url,document.body.appendChild(i),i.click(),document.body.removeChild(i)},function(e){t.loader1=!1,console.log("请求失败")})},off:function(){this.bg2=!1,this.bg1=!1,this.bg3=!1,this.numberTop.value=1,this.number.value=1},showHeat:function(e){var t=this.data3[e].id,n=JSON.parse(this.data3[e].params);if(n.heatMapId){var i=n.heatMapId;window.open("http://yhdc.tendcloud.com/heatmap/index.html?id="+i,"_blank")}else layer.open({type:2,title:"热力图展示",shadeClose:!0,shade:.8,area:["100%","100%"],content:"build/td_heatmap/heatmap.html?jobId="+t+"&dataType="+encodeURIComponent(this.dataType)+"&basePath=http://yhdc.tendcloud.com/atm_backend/"})},notification:function(){this.bg3=!0},tiaojian:function(e){var t=e instanceof Array;return t&&(this.allPut=e),t},cloneUrl:function(e){var t=this,n=JSON.parse(this.data3[e].params);if(n.heatMapId){var i=n.heatMapId,a="http://heatmap.talkingdata.com/index.html?id="+i,o=document.getElementById("btn");o.click();var s=new r.default("#btn",{text:function(){return a}}),l=!1;s.on("success",function(e){l=!0}),s.on("error",function(e){l=!1}),o.click(),l?t.$Notice.success({title:"复制路径成功"}):t.$Notice.error({title:"复制路径失败"})}},swarmLoup:function(e){this.modal1=!0,this.yunIndex=e},yun:function(){function e(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}var t=this,n=e("useremail"),i=sessionStorage.getItem("sessionUser"),a="http://yhdc.tendcloud.com/atm_backend/ftp/upload",o=n||i,s=new FormData;s.append("filepath",this.data3[this.yunIndex].outputPath+"/result.gz"),s.append("email",o),l.default.http.post(a,s).then(function(e){if(200===e.status)if(0===e.data.resultCode){var n=e.data.resultValue;t.$Modal.confirm({title:"上传成功",okText:"复制路径",content:'<p style="word-break: normal;;word-wrap: break-word">您的文件已上传到云传,路径：'+n+"</p>",loading:!0,onOk:function(){setTimeout(function(){t.$Modal.remove();var e=document.getElementById("btn");e.click();var i=new r.default("#btn",{text:function(){return n}}),a=!1;i.on("success",function(e){a=!0}),i.on("error",function(e){a=!1}),e.click(),a?t.$Notice.success({title:"复制路径成功"}):t.$Notice.error({title:"复制路径失败"})},800)}})}else 7===e.data.resultCode?t.$Notice.error({title:"授权失败",desc:"请先开通云传账号"}):t.$Notice.error({title:"上传失败",desc:"请重新上传！"})},function(e){console.log("请求失败")})}}}},478:function(e,t,n){var i,a,o;!function(r,s){a=[e,n(479),n(481),n(482)],i=s,o="function"==typeof i?i.apply(t,a):i,!(void 0!==o&&(e.exports=o))}(this,function(e,t,n,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var c=a(t),d=a(n),u=a(i),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),m=function(e){function t(e,n){o(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return s(t,e),f(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,u.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(d.default);e.exports=m})},479:function(e,t,n){var i,a,o;!function(r,s){a=[e,n(480)],i=s,o="function"==typeof i?i.apply(t,a):i,!(void 0!==o&&(e.exports=o))}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,a.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,a.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=s})},480:function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),a=document.createRange();a.selectNodeContents(e),i.removeAllRanges(),i.addRange(a),t=i.toString()}return t}e.exports=n},481:function(e,t){function n(){}n.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){a.off(e,i),t.apply(n,arguments)}var a=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,a=n.length;for(i;i<a;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],a=[];if(i&&t)for(var o=0,r=i.length;o<r;o++)i[o].fn!==t&&i[o].fn._!==t&&a.push(i[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=n},482:function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!s.string(t))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(e))return a(e,t,n);if(s.nodeList(e))return o(e,t,n);if(s.string(e))return r(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function o(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function r(e,t,n){return l(document.body,e,t,n)}var s=n(483),l=n(484);e.exports=i},483:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},484:function(e,t,n){function i(e,t,n,i,a){var r=o.apply(this,arguments);return e.addEventListener(n,r,a),{destroy:function(){e.removeEventListener(n,r,a)}}}function a(e,t,n,a,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return i(e,t,n,a,o)}))}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=n(485);e.exports=a},485:function(e,t){function n(e,t){for(;e&&e.nodeType!==i;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){
var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}e.exports=n},486:function(e,t){e.exports=' <div> <div class=demo-spin-container v-show=loader1> <spin fix> <icon type=load-c size=18 class=demo-spin-icon-load></icon> <div>Loading</div> </spin> </div> <div class=demo-spin-container v-show=loader2> <spin fix> <icon type=load-c size=18 class=demo-spin-icon-load></icon> <div>Loading</div> </spin> </div> <div class=demo-spin-container v-show=loader3> <spin fix> <icon type=load-c size=18 class=demo-spin-icon-load></icon> <div>Loading</div> </spin> </div> <section class=pop-wrapper> <tabs type=card v-ref:loadid> <tab-pane label=概要信息 key=key1> <h2> <icon type=ios-browsers-outline size=18></icon><span>查看作业</span></h2> <i-table highlight-row border :columns=columns2 :data=data2 :content=self></i-table> <section class=pop-wrapper-ren v-show=data3_pop_wrapper_ren> <h2> <icon type=ios-browsers-outline size=18></icon><span>任务详情</span></h2> <i-table highlight-row border :columns=columns3 :data=data3 :content=self size=small></i-table> <button id=btn style=display:node></button> </section> <div class=popCenter v-show=bg1> <h2>抽样下载 (输入数字)</h2> <rd-number :number=number></rd-number> <span class=popTop><i-button type=ghost @click=ballSuccer1>确定</i-button></span> <i-button type=ghost @click=off class=popOff>X</i-button> </div> <div class=popCenter v-show=bg2> <h2>Top下载 (输入数字)</h2> <rd-number :number=numberTop></rd-number> <span class=popTop><i-button type=ghost @click=ballSuccer2>确定</i-button></span> <i-button type=ghost @click=off class=popOff>X</i-button> </div> <div class=popCenter3 v-show=bg3> <h2>下载需审批：</h2> <p>明细数据下载说明请查看<a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p><i-button type=ghost @click=off class=popOff>X</i-button> </div> </tab-pane> <tab-pane label=条件信息 key=key2> <h2> <icon type=ios-browsers-outline size=18></icon><span>作业条件信息</span></h2> <div class=pop-wrapper-list> <section class=pop-wrapper-list-header><label for="">条件名称</label><h2>条件详情</h2></section> <section v-for="item in allArray"> <label>{{leftArr[$index]}}</label> <nav> <div v-for="(key,val) in item" track-by=$index> <span class=list-p1><b>{{key}}：</b></span> <div class=list-p2 v-if=tiaojian(val)> <div v-for="val in allPut"> <div v-for="(k,v) in val" style=display:-webkit-flex> <span>{{k}}：</span><div class=list-p2>{{v}}</div> </div> </div> </div> <div class=list-p2 v-else>{{val}}</div> </div> </nav> </section> </div> </tab-pane> </tabs> <modal :visible.sync=modal1 title=提示 @on-ok=yun> <p style=text-align:center;line-height:50px>您确认上传到云传？</p> </modal> </section> </div> '},487:function(e,t){e.exports=' <div class=atm-ide> <div class=demo-spin-container v-show=loader> <spin fix> <icon type=load-c size=18 class=demo-spin-icon-load></icon> <div>Loading</div> </spin> </div> <div class=delivery_btn> <i-input :value.sync=search size=small placeholder=请输入要搜索的内容... style="width: 300px;margin-left:10px" @keyup.enter=searchPlay></i-input> <i-button type=primary size=small @click=searchPlay icon=ios-search class=delivery-mar>搜索</i-button> <i-button type=ghost icon=refresh class=delivery-mar style="float:right;margin-right:0px;padding:3px 15px" @click=fetchData class=delivery-mar title=刷新></i-button> </div> <i-table highlight-row border :columns=columns1 :data=data1 :content=self size=small></i-table> <div class=page-footer> <page :total=navigatePages @on-change=changePage :current=current :page-size=15 show-total></page> </div> <modal :visible.sync=modal1 :style="{width: \'90%\'}" title=查看作业详情 class-name=vertical-center-modal> <div slot=footer class=deliveryFooter><pop :msg=msg><pop></pop></pop></div> </modal> </div> '}});