webpackJsonp([3,14],{

/***/ 84:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var dateTypeList = exports.dateTypeList = [{
	    id: 1,
	    name: '日',
	    value: 'day'
	}, {
	    id: 2,
	    name: '周',
	    value: 'week'
	}, {
	    id: 3,
	    name: '月',
	    value: 'month'
	}];
	var workingDayList = exports.workingDayList = [{
	    id: 1,
	    name: '工作日'
	}, {
	    id: 2,
	    name: '非工作日'
	}];
	var selectivityList = exports.selectivityList = [{
	    id: 0,
	    name: '不选POI'
	}, {
	    id: 1,
	    name: '模糊搜索POI'
	}, {
	    id: 2,
	    name: '围栏圈POI'
	}];
	var source = exports.source = [{
	    name: "北京",
	    code: "beijing"
	}, {
	    name: "上海",
	    code: "shanghai"
	}, {
	    name: "广州",
	    code: "guangzhou"
	}, {
	    name: "深圳",
	    code: "shenzhen"
	}];
	var dateInfo = exports.dateInfo = function dateInfo() {
	    return {
	        dateLabel: '选择时间',
	        dateTypeLabel: '时间类型',
	        startDateLabel: '起始范围',
	        timeLabel: '时间范围',
	        endDateLabel: '结束范围',
	        typeList: [{
	            id: 1,
	            name: '日',
	            value: 'day'
	        }, {
	            id: 2,
	            name: '周',
	            value: 'week'
	        }, {
	            id: 3,
	            name: '月',
	            value: 'month'
	        }],
	        //配置开始日期 type(day,week,month,year)
	        startDatePicker: {
	            value: '',
	            options: {
	                placeHolder: '请选择时间',
	                type: 'day',
	                tag: 'startDatePicker',
	                limit: {
	                    customerLimit: function customerLimit(day) {
	                        var time = new Date() * 1,
	                            end = time - 3 * 24 * 60 * 60 * 1000,
	                            state = new Date(day.time._i) * 1;
	                        if (state > end) {
	                            return true;
	                        } else {
	                            return false;
	                        }
	                    }
	                }
	            }
	        },
	        endDatePicker: {
	            value: '',
	            options: {
	                placeHolder: '请选择时间',
	                type: 'day',
	                tag: 'endDatePicker',
	                limit: {
	                    customerLimit: function customerLimit(day) {
	                        var time = new Date() * 1,
	                            end = time - 3 * 24 * 60 * 60 * 1000,
	                            state = new Date(day.time._i) * 1;
	                        if (state > end) {
	                            return true;
	                        } else {
	                            return false;
	                        }
	                    }
	                }
	            }
	        }
	    };
	};
	var timeList = exports.timeList = function timeList() {
	    var list = [];
	    for (var i = 0; i < 24; i++) {
	        list.push({
	            id: i,
	            name: i
	        });
	    }
	    return list;
	};
	
	var TIMESTR = exports.TIMESTR = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
	var areaTypeList = exports.areaTypeList = [{
	    id: 1,
	    name: '国家'
	}, {
	    id: 2,
	    name: '省份'
	}, {
	    id: 3,
	    name: '城市'
	}];
	var appQueryTypeList = exports.appQueryTypeList = [{
	    id: 1,
	    name: '名称'
	}, {
	    id: 2,
	    name: '包名'
	}, {
	    id: 3,
	    name: '哈希'
	}];
	var behaviorTypeList = exports.behaviorTypeList = [{
	    id: 'installAppList',
	    name: '安装'
	}, {
	    id: 'activeAppList',
	    name: '活跃'
	}];
	var filterTypeList = exports.filterTypeList = [{
	    id: 1,
	    name: '居住地'
	}, {
	    id: 2,
	    name: '工作地'
	}];
	var activeTypelist = exports.activeTypelist = [{
	    id: 1,
	    name: '按天活跃'
	}, {
	    id: 2,
	    name: '按小时活跃'
	}];
	var activeBehaviorList = exports.activeBehaviorList = [{
	    id: 1,
	    name: '第一次活跃'
	}, {
	    id: 2,
	    name: '最后一次活跃'
	}];
	var groupTypeList = exports.groupTypeList = [{
	    id: 1,
	    name: ' 按天/月统计'
	}, {
	    id: 2,
	    name: '全时段统计'
	}];
	var locationTypeList = exports.locationTypeList = [{
	    id: 1,
	    name: '上传中心点+半径'
	}, {
	    id: 2,
	    name: '上传围栏'
	}, {
	    id: 3,
	    name: '选择围栏'
	}];
	var locationGhettoTypeList = exports.locationGhettoTypeList = [{
	    id: 0,
	    name: '无围栏'
	}, {
	    id: 1,
	    name: '上传中心点+半径'
	}, {
	    id: 2,
	    name: '上传围栏'
	}, {
	    id: 3,
	    name: '选择围栏'
	}];
	var coordinaryTypeList = exports.coordinaryTypeList = [{
	    id: 1,
	    name: 'WGS84'
	}, {
	    id: 2,
	    name: '百度'
	}, {
	    id: 3,
	    name: '高德'
	}];
	var deviceList = exports.deviceList = [{
	    id: 21,
	    name: 'TDID'
	}, {
	    id: 31,
	    name: 'MAC'
	}, {
	    id: 41,
	    name: 'IMEI'
	}, {
	    id: 51,
	    name: 'PHONENOMD5'
	}, {
	    id: 61,
	    name: 'IDFA'
	}, {
	    id: 71,
	    name: 'AndroidID'
	}, {
	    id: 81,
	    name: 'IMSI'
	}];
	var md5DeviceList = exports.md5DeviceList = [{
	    id: 32,
	    name: '小写MD5加密的MAC'
	}, {
	    id: 33,
	    name: '大写MD5加密的MAC'
	}, {
	    id: 42,
	    name: '小写MD5加密的IMEI'
	}, {
	    id: 43,
	    name: '大写MD5加密的IMEI'
	}, {
	    id: 44,
	    name: '截取前14位后MD5加密的IMEI'
	}, {
	    id: 62,
	    name: '小写MD5加密的IDFA'
	}, {
	    id: 63,
	    name: '大写MD5加密的IDFA'
	}, {
	    id: 72,
	    name: '小写MD5加密的AndroidID'
	}, {
	    id: 73,
	    name: '大写MD5加密的AndroidID'
	}];
	var regionTypeList = exports.regionTypeList = [{
	    id: 'area',
	    name: '出现'
	}, {
	    id: 'residentCityByMonth',
	    name: '按月常驻'
	}, {
	    id: 'residentCity',
	    name: '常驻(与时间无关)'
	}];
	var equipmentProList = exports.equipmentProList = [{
	    id: 91,
	    name: '原始机型'
	}, {
	    id: 92,
	    name: '网络'
	}, {
	    id: 93,
	    name: '运营商'
	}, {
	    id: 94,
	    name: '分辨率'
	}, {
	    id: 95,
	    name: 'OS'
	}, {
	    id: 97,
	    name: '品牌'
	}, {
	    id: 98,
	    name: '价格范围'
	}, {
	    id: 99,
	    name: '屏幕尺寸'
	}, {
	    id: 100,
	    name: '硬件特性'
	}, {
	    id: 101,
	    name: '功能特性'
	}];
	var fileContentList = exports.fileContentList = [{
	    id: 1,
	    name: '位置聚集点'
	}, {
	    id: 2,
	    name: '经纬度'
	}];
	var coordinateList = exports.coordinateList = [{
	    id: 1,
	    name: 'WGS84（GPS）'
	}, {
	    id: 2,
	    name: 'BD09LL（百度地图）'
	}];
	var inquiryList = exports.inquiryList = [{
	    id: 1,
	    name: '社区街道'
	}, {
	    id: 2,
	    name: '周边POI'
	}, {
	    id: 3,
	    name: 'POI排名(TOP1000倒序排列)'
	}];
	var withinList = exports.withinList = [{
	    id: 1,
	    name: '工作日'
	}, {
	    id: 2,
	    name: '周六日'
	}, {
	    id: 3,
	    name: '全部'
	}];
	var brushList = exports.brushList = [{
	    id: 1,
	    name: '过滤刷量设备'
	}, {
	    id: 2,
	    name: '过滤非刷量设备'
	}];
	var placeList = exports.placeList = [{
	    id: 0,
	    name: '全部'
	}, {
	    id: 2,
	    name: '工作地'
	}, {
	    id: 1,
	    name: '居住地'
	}];
	var resideList = exports.resideList = [{
	    id: 2,
	    name: '工作地'
	}, {
	    id: 1,
	    name: '居住地'
	}];
	var domainList = exports.domainList = [{
	    id: 1,
	    name: '城市统计'
	}, {
	    id: 2,
	    name: '区统计'
	}];
	var tagExpressionList = exports.tagExpressionList = [{
	    id: 1,
	    name: 'OR'
	}, {
	    id: 2,
	    name: 'AND'
	}];
	var appSelectivityList = exports.appSelectivityList = [{
	    id: 1,
	    name: '模糊选择'
	}, {
	    id: 2,
	    name: '上传APP文件 (只支持上传APP哈希，每行单列)'
	}];
	var getWeek = exports.getWeek = function getWeek(one, two, idx) {
	    if (idx == 1) {
	        var stateTime = new Date(one),
	            endTimeR = new Date(two),
	            threeDate = 30 * 24 * 60 * 60 * 1000;
	        if (endTimeR * 1 - stateTime * 1 > threeDate) {
	            return false;
	        } else {
	            return true;
	        }
	    } else if (idx == 2) {
	        var d1 = new Date();
	        var d2 = new Date();
	        d2.setMonth(0);
	        d2.setDate(1);
	        var rq = d1 - d2;
	        var s1 = Math.ceil(rq / (24 * 60 * 60 * 1000));
	        var week = Math.ceil(s1 / 7);
	        var oDate = new Date(),
	            y1 = one.split('-')[0],
	            y2 = two.split('-')[0],
	            z1 = one.split('-')[1],
	            z2 = two.split('-')[1],
	            newyear = oDate.getFullYear();
	        if (week < 10) {
	            week = '0' + week;
	        }
	        var newWeek = newyear + '-' + week;
	        if (y2 - y1 == 0 && one <= two && one < newWeek && two < newWeek) {
	            if (z2 * 1 - z1 * 1 + 1 > 8) {
	                return false;
	            } else {
	                return true;
	            }
	        } else if (y2 - y1 == 1 && one <= two && one < newWeek && two < newWeek) {
	            var change = function change(y1) {
	                var dateArr = [];
	                for (var i = 0; i < 10; i++) {
	                    dateArr.push(2010 + i * 6);
	                }
	                if (dateArr.indexOf(y1 * 1) != -1) {
	                    return 53;
	                } else {
	                    return 52;
	                }
	            };
	
	            if (z1.substr(0, 1) == 0) {
	                z1 = z1.substr(1, 1);
	            }
	            if (z2.substr(0, 1) == 0) {
	                z2 = z2.substr(1, 1);
	            }
	
	            var s = change(y1);
	            if (s - z1 * 1 + z2 * 1 + 1 > 8) {
	                return false;
	            } else {
	                return true;
	            }
	        } else {
	            return false;
	        }
	    } else if (idx == 3) {
	        var timed = new Date(),
	            yeard = timed.getFullYear(),
	            _s = one.split('-')[0] * 1,
	            s2 = two.split('-')[0] * 1,
	            x1 = one.split('-')[1] * 1,
	            x2 = two.split('-')[1] * 1,
	            monthd = timed.getMonth() + 1;
	        if (monthd < 10) {
	            monthd = '0' + monthd;
	        }
	        var y = yeard + '-' + monthd;
	        if (s2 - _s == 0 && one <= two && one < y && two < y) {
	            if (x2 - x1 > 2) {
	                return false;
	            } else {
	                return true;
	            }
	        } else if (s2 - _s == 1 && one <= two && one < y && two < y) {
	            if (12 - x1 * 1 + x2 * 1 > 2) {
	                return false;
	            } else {
	                return true;
	            }
	        } else {
	            return false;
	        }
	    }
	};

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(194)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\delivery.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(487)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5246d52c/delivery.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./delivery.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./delivery.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n   \n    .vertical-center-modal .ivu-modal-body{\n        border-top:none;\n        padding:0;\n    }\n\t.deliveryFooter{\n        text-align:left;\n    }\n    .ivu-icon-refresh{\n        font-size: 19px;\n    }\n", "", {"version":3,"sources":["/./src/components/delivery.vue?53247d70"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA2QA;QACA,gBAAA;QACA,UAAA;KACA;CACA;QACA,gBAAA;KACA;IACA;QACA,gBAAA;KACA","file":"delivery.vue","sourcesContent":["<template><!-- 数据交付 -->\n\t<div class=\"atm-ide\">\n         <div class=\"demo-spin-container\" v-show=\"loader\">\n            <Spin fix>\n                <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n                <div>Loading</div>\n            </Spin>\n        </div>\n\t\t<div class=\"delivery_btn\">\n\t\t\t<!-- <i-input :value.sync=\"projectVal\" size=\"small\" placeholder=\"请输入项目名称...\" style=\"width: 300px\" ></i-input>\n\t\t\t<i-button type=\"primary\" @click=\"projectsubmit\"  size=\"small\" class=\"delivery-mar\">创建项目</i-button> -->\n            <i-input :value.sync=\"search\" size=\"small\" placeholder=\"请输入要搜索的内容...\" style=\"width: 300px;margin-left:10px\" @keyup.enter=\"searchPlay\"></i-input>\n            <i-button type=\"primary\"   size=\"small\" @click=\"searchPlay\" icon=\"ios-search\" class=\"delivery-mar\">搜索</i-button>\n            <i-button type=\"ghost\" icon=\"refresh\" class=\"delivery-mar\" style=\"float:right;margin-right:0px;padding:3px 15px\" @click=\"fetchData\"  class=\"delivery-mar\" title='刷新'></i-button>\n        </div>\n\t\t<i-table  highlight-row border :columns=\"columns1\" :data=\"data1\" :content=\"self\" size=\"small\" ></i-table>\n        <div class='page-footer'>\n                <Page :total='navigatePages'  @on-change=\"changePage\" :current=\"current\" :page-size='15' show-total></Page>\n\t    </div>\n\t \t<Modal\n\t        :visible.sync=\"modal1\"\n\t        :style=\"{width: '90%'}\"\n            title='查看作业详情'\n            class-name=\"vertical-center-modal\"\n            >\n           <div slot=\"footer\" class=\"deliveryFooter\"><Pop :msg='msg'><Pop></div>\n\t   </Modal>\n     </div>\n</template>\n\n<script>\nimport Pop from '../lib/pop/pop';\n\n export default {\n \t\tcomponents:{Pop},\n        data () {\n            return {\n                self: this,\n                modal1: false,\n                pageNum:1,\n                data1: [] ,\n                value: '',\n                model2: '',\n                navigatePages:0,\n                msg:'',\n                email:'',\n                search:'',\n                current:1,\n                projectVal:'',\n                loader:false,\n                columns1: [\n                    {\n                        sortable: true,\n                        title: '作业id',\n                        key: 'jobId',\n                        width:'100',\n                        type:'center'\n                    },\n                    {\n                        sortable: true,\n                        title: '项目名称',\n                        key: 'projectName',\n                    },\n                    {\n                        sortable: true,\n                        title: '作业名称',\n                        key: 'jobName',\n                        type:'center'\n                    },\n                    {\n                    \tsortable: true,\n                        title: '提交用户',\n                        key: 'email',\n                        type:'center',\n                    },\n                    {\n                        sortable: true,\n                        title: '提交时间',\n                        key: 'createTime',\n                        type:'center'\n                    },\n                    {\n                        sortable: true,\n                        title: '更新时间',\n                        key: 'doneTime',\n                        type:'center'\n                    },\n                    {\n                    \tsortable: true,\n                        title: '作业状态',\n                        width:'123',\n                        type:'center',\n                        render (row, column, index) {\n                            let status='';\n                            if(row.status==0){\n                                status='已创建'\n                            }else if(row.status==1){\n                                status='已提交'\n                            }else if(row.status==2){\n                                status='排队中'\n                            }else if(row.status==3){\n                                status='已调度'\n                            }else if(row.status==4){\n                                status='运行中'\n                            }else if(row.status==5){\n                                status='已成功'\n                            }else if(row.status==6){\n                                status='已失败'\n                            }else if(row.status==7){\n                                status='已拉取'\n                            }else if(row.status==8){\n                                status='已取消'\n                            }\n                            const color = row.status == 5 ? 'green' : row.status == 6 ? 'red' : 'blue';\n                            return `<tag type=\"dot\" color=\"${color}\">${status}</tag>`;\n                        }\n                    },\n                    {\n                        title: '查看作业详情',\n                        type:'center',\n                        width:'130',\n                        render (row, column, index) {\n                            let n=true;\n                            if(row.status==2){\n                                n=false\n                            }\n                            return '<i-button type=\"primary\" size=\"small\"  @click=\"show('+index+')\" class=\"management-btn\">查看</i-button><i-button type=\"primary\" size=\"small\"  @click=\"abrogate('+index+')\" :disabled=\"'+n+'\">取消</i-button> '\n                        }\n                    }\n                ]\n            }\n        },\n        ready(){\n             this.getcookie()\n\t\t\t this.fetchData();\n        },\n        methods:{\n            freshPage(){\n                location.reload();\n            },\n            getcookie(){\n                    function getCookie(name){\n                        var arr,reg=new RegExp(\"(^| )\"+name+\"=([^;]*)(;|$)\");\n                        if(arr=document.cookie.match(reg))\n                        return unescape(arr[2]);\n                        else\n                        return null;\n                    }\n                       let useremail=(getCookie('useremail')),\n                           userpassword=(getCookie('userpassword')),\n                           sessionemail=sessionStorage.getItem('sessionUser');\n                       if(useremail && userpassword){\n                          this.email=useremail\n                       }else if(sessionemail){\n                          this.email=sessionemail\n                       }\n            },\n        \tchangePage(status){\n        \t\tthis.pageNum=status\n\t\t\t\tthis.current = status;\n                this.fetchData();\n        \t},\n        \tfetchData(){\n                this.loader=true;\n        \t\tlet url=process.env.NODE_ENV.apiPath+\"/jobManager/getJobList\";\n                if(this.email){\n                    Vue.http.get(url,{\n                        params:{\n                            email:this.email,\n                            keyword:this.search,\n                            pageNum:this.pageNum,\n                            pageSize:15,\n                            jobType:1,\n                        }\n                    }).then((response) => {\n                       this.loader=false;\n                       this.data1=response.body.list;\n                       this.navigatePages=response.body.total;\n                    }, (response) => {\n                        console.log('请求不到数据')\n                    });\n                }\n        \t},\n        \tshow (index) {\n        \t\tlet len=this.data1[index].jobId;\n        \t\tlet url=process.env.NODE_ENV.apiPath+\"jobManager/getJobDetail\";\n        \t\tVue.http.get(url,{\n        \t\t\tparams:{\n        \t\t\t\tjobId:len\n        \t\t\t}\n        \t\t}).then((response) => {\n                    this.msg=response\n\t\t\t\t\tthis.modal1=true\n\t\t        }, (response) => {\n\t\t        \tconsole.log('请求不到数据')\n\t\t        });\n            },\n            projectsubmit(){\n            \tif(this.projectVal==''){\n            \t\tthis.$Notice.warning({title: '创建项目',desc:  '请输入要创建项目名称'})\n            \t}else{\n                    let url=process.env.NODE_ENV.apiPath+\"/jobManager/addProject\";\n                    Vue.http.get(url,{\n                        params:{\n                            email:this.email,\n                            projectName:this.projectVal\n                        }\n                    }).then((response) => {\n                       if(response.body.resultCode==0){\n                             this.$Notice.success({title: '创建项目',desc:  '创建项目成功'})\n                       }else{\n                            this.$Notice.error({title: '创建项目',desc: '创建项目失败！请重新创建'})\n                       }\n                    }, (response) => {\n                        console.log('请求不到数据')\n                    });\n                }\n            },\n            searchPlay(){\n                    let url=process.env.NODE_ENV.apiPath+\"jobManager/getJobList\";\n                    Vue.http.get(url,{\n                        params:{\n                            email:this.email,\n                            keyword:this.search,\n                            pageNum:1,\n                            pageSize:15,\n                            jobType:1,\n                        }\n                    }).then((response) => {\n                        this.data1=response.body.list;\n                        this.navigatePages=response.body.total;\n                         this.current=1;\n                    }, (response) => {\n                        console.log('请求不到数据')\n                    });\n             },\n             abrogate(index){\n                this.$Modal.confirm({\n                    title: '取消作业',\n                    content: '<p>您确认要取消当前作业？</p>',\n                    onOk: () => {\n                                let len=this.data1[index].jobId;\n                                let url=process.env.NODE_ENV.apiPath+\"jobMonitor/cancelJob\";\n                                Vue.http.get(url,{\n                                    params:{\n                                        jobId:len\n                                    }\n                                }).then((response) => {\n                                    if(response.body.resultCode==0){\n                                         this.fetchData()\n                                         this.$Notice.success({title: '取消任务',desc:  '取消任务成功'})\n                                   }else{\n                                        this.$Notice.error({title: '取消任务',desc: '取消任务失败'})\n                                   }\n                                }, (response) => {\n                                    console.log('请求不到数据')\n                                });\n                    }\n                });\n            }\n          \n        }\n\n  }\n</script>\n<style>\n   \n    .vertical-center-modal .ivu-modal-body{\n        border-top:none;\n        padding:0;\n    }\n\t.deliveryFooter{\n        text-align:left;\n    }\n    .ivu-icon-refresh{\n        font-size: 19px;\n    }\n</style>\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _pop = __webpack_require__(195);
	
	var _pop2 = _interopRequireDefault(_pop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    components: { Pop: _pop2.default },
	    data: function data() {
	        return {
	            self: this,
	            modal1: false,
	            pageNum: 1,
	            data1: [],
	            value: '',
	            model2: '',
	            navigatePages: 0,
	            msg: '',
	            email: '',
	            search: '',
	            current: 1,
	            projectVal: '',
	            loader: false,
	            columns1: [{
	                sortable: true,
	                title: '作业id',
	                key: 'jobId',
	                width: '100',
	                type: 'center'
	            }, {
	                sortable: true,
	                title: '项目名称',
	                key: 'projectName'
	            }, {
	                sortable: true,
	                title: '作业名称',
	                key: 'jobName',
	                type: 'center'
	            }, {
	                sortable: true,
	                title: '提交用户',
	                key: 'email',
	                type: 'center'
	            }, {
	                sortable: true,
	                title: '提交时间',
	                key: 'createTime',
	                type: 'center'
	            }, {
	                sortable: true,
	                title: '更新时间',
	                key: 'doneTime',
	                type: 'center'
	            }, {
	                sortable: true,
	                title: '作业状态',
	                width: '123',
	                type: 'center',
	                render: function render(row, column, index) {
	                    var status = '';
	                    if (row.status == 0) {
	                        status = '已创建';
	                    } else if (row.status == 1) {
	                        status = '已提交';
	                    } else if (row.status == 2) {
	                        status = '排队中';
	                    } else if (row.status == 3) {
	                        status = '已调度';
	                    } else if (row.status == 4) {
	                        status = '运行中';
	                    } else if (row.status == 5) {
	                        status = '已成功';
	                    } else if (row.status == 6) {
	                        status = '已失败';
	                    } else if (row.status == 7) {
	                        status = '已拉取';
	                    } else if (row.status == 8) {
	                        status = '已取消';
	                    }
	                    var color = row.status == 5 ? 'green' : row.status == 6 ? 'red' : 'blue';
	                    return '<tag type="dot" color="' + color + '">' + status + '</tag>';
	                }
	            }, {
	                title: '查看作业详情',
	                type: 'center',
	                width: '130',
	                render: function render(row, column, index) {
	                    var n = true;
	                    if (row.status == 2) {
	                        n = false;
	                    }
	                    return '<i-button type="primary" size="small"  @click="show(' + index + ')" class="management-btn">查看</i-button><i-button type="primary" size="small"  @click="abrogate(' + index + ')" :disabled="' + n + '">取消</i-button> ';
	                }
	            }]
	        };
	    },
	    ready: function ready() {
	        this.getcookie();
	        this.fetchData();
	    },
	
	    methods: {
	        freshPage: function freshPage() {
	            location.reload();
	        },
	        getcookie: function getcookie() {
	            function getCookie(name) {
	                var arr,
	                    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	                if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	            }
	            var useremail = getCookie('useremail'),
	                userpassword = getCookie('userpassword'),
	                sessionemail = sessionStorage.getItem('sessionUser');
	            if (useremail && userpassword) {
	                this.email = useremail;
	            } else if (sessionemail) {
	                this.email = sessionemail;
	            }
	        },
	        changePage: function changePage(status) {
	            this.pageNum = status;
	            this.current = status;
	            this.fetchData();
	        },
	        fetchData: function fetchData() {
	            var _this = this;
	
	            this.loader = true;
	            var url = ("http://yhdc.tendcloud.com/atm_backend/") + "/jobManager/getJobList";
	            if (this.email) {
	                Vue.http.get(url, {
	                    params: {
	                        email: this.email,
	                        keyword: this.search,
	                        pageNum: this.pageNum,
	                        pageSize: 15,
	                        jobType: 1
	                    }
	                }).then(function (response) {
	                    _this.loader = false;
	                    _this.data1 = response.body.list;
	                    _this.navigatePages = response.body.total;
	                }, function (response) {
	                    console.log('请求不到数据');
	                });
	            }
	        },
	        show: function show(index) {
	            var _this2 = this;
	
	            var len = this.data1[index].jobId;
	            var url = ("http://yhdc.tendcloud.com/atm_backend/") + "jobManager/getJobDetail";
	            Vue.http.get(url, {
	                params: {
	                    jobId: len
	                }
	            }).then(function (response) {
	                _this2.msg = response;
	                _this2.modal1 = true;
	            }, function (response) {
	                console.log('请求不到数据');
	            });
	        },
	        projectsubmit: function projectsubmit() {
	            var _this3 = this;
	
	            if (this.projectVal == '') {
	                this.$Notice.warning({ title: '创建项目', desc: '请输入要创建项目名称' });
	            } else {
	                var url = ("http://yhdc.tendcloud.com/atm_backend/") + "/jobManager/addProject";
	                Vue.http.get(url, {
	                    params: {
	                        email: this.email,
	                        projectName: this.projectVal
	                    }
	                }).then(function (response) {
	                    if (response.body.resultCode == 0) {
	                        _this3.$Notice.success({ title: '创建项目', desc: '创建项目成功' });
	                    } else {
	                        _this3.$Notice.error({ title: '创建项目', desc: '创建项目失败！请重新创建' });
	                    }
	                }, function (response) {
	                    console.log('请求不到数据');
	                });
	            }
	        },
	        searchPlay: function searchPlay() {
	            var _this4 = this;
	
	            var url = ("http://yhdc.tendcloud.com/atm_backend/") + "jobManager/getJobList";
	            Vue.http.get(url, {
	                params: {
	                    email: this.email,
	                    keyword: this.search,
	                    pageNum: 1,
	                    pageSize: 15,
	                    jobType: 1
	                }
	            }).then(function (response) {
	                _this4.data1 = response.body.list;
	                _this4.navigatePages = response.body.total;
	                _this4.current = 1;
	            }, function (response) {
	                console.log('请求不到数据');
	            });
	        },
	        abrogate: function abrogate(index) {
	            var _this5 = this;
	
	            this.$Modal.confirm({
	                title: '取消作业',
	                content: '<p>您确认要取消当前作业？</p>',
	                onOk: function onOk() {
	                    var len = _this5.data1[index].jobId;
	                    var url = ("http://yhdc.tendcloud.com/atm_backend/") + "jobMonitor/cancelJob";
	                    Vue.http.get(url, {
	                        params: {
	                            jobId: len
	                        }
	                    }).then(function (response) {
	                        if (response.body.resultCode == 0) {
	                            _this5.fetchData();
	                            _this5.$Notice.success({ title: '取消任务', desc: '取消任务成功' });
	                        } else {
	                            _this5.$Notice.error({ title: '取消任务', desc: '取消任务失败' });
	                        }
	                    }, function (response) {
	                        console.log('请求不到数据');
	                    });
	                }
	            });
	        }
	    }
	    // </script>
	    // <style>
	    //
	    //     .vertical-center-modal .ivu-modal-body{
	    //         border-top:none;
	    //         padding:0;
	    //     }
	    // 	.deliveryFooter{
	    //         text-align:left;
	    //     }
	    //     .ivu-icon-refresh{
	    //         font-size: 19px;
	    //     }
	    // </style>
	    //
	
	    /* generated by vue-loader */
	
	}; // <template><!-- 数据交付 -->
	// 	<div class="atm-ide">
	//          <div class="demo-spin-container" v-show="loader">
	//             <Spin fix>
	//                 <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
	//                 <div>Loading</div>
	//             </Spin>
	//         </div>
	// 		<div class="delivery_btn">
	// 			<!-- <i-input :value.sync="projectVal" size="small" placeholder="请输入项目名称..." style="width: 300px" ></i-input>
	// 			<i-button type="primary" @click="projectsubmit"  size="small" class="delivery-mar">创建项目</i-button> -->
	//             <i-input :value.sync="search" size="small" placeholder="请输入要搜索的内容..." style="width: 300px;margin-left:10px" @keyup.enter="searchPlay"></i-input>
	//             <i-button type="primary"   size="small" @click="searchPlay" icon="ios-search" class="delivery-mar">搜索</i-button>
	//             <i-button type="ghost" icon="refresh" class="delivery-mar" style="float:right;margin-right:0px;padding:3px 15px" @click="fetchData"  class="delivery-mar" title='刷新'></i-button>
	//         </div>
	// 		<i-table  highlight-row border :columns="columns1" :data="data1" :content="self" size="small" ></i-table>
	//         <div class='page-footer'>
	//                 <Page :total='navigatePages'  @on-change="changePage" :current="current" :page-size='15' show-total></Page>
	// 	    </div>
	// 	 	<Modal
	// 	        :visible.sync="modal1"
	// 	        :style="{width: '90%'}"
	//             title='查看作业详情'
	//             class-name="vertical-center-modal"
	//             >
	//            <div slot="footer" class="deliveryFooter"><Pop :msg='msg'><Pop></div>
	// 	   </Modal>
	//      </div>
	// </template>
	//
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\lib\\pop\\pop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(486)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5cbc8aa1/pop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pop.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.demo-spin-container {\n  display: inline-block;\n  width: 200px;\n  height: 100px;\n  position: fixed;\n  border: 1px solid #eee;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -100px;\n  z-index: 9999999;\n}\n.demo-spin-icon-load {\n  -webkit-animation: ani-demo-spin 1s linear infinite;\n          animation: ani-demo-spin 1s linear infinite;\n}\n@-webkit-keyframes ani-demo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes ani-demo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n", "", {"version":3,"sources":["/./src/lib/pop/pop.vue?0296deec"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmzBA;EACA,sBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;CACA;AACA;EACA,oDAAA;UAAA,4CAAA;CACA;AACA;EACA;IACA,gCAAA;YAAA,wBAAA;GACA;EACA;IACA,kCAAA;YAAA,0BAAA;GACA;EACA;IACA,kCAAA;YAAA,0BAAA;GACA;CACA;AAVA;EACA;IACA,gCAAA;YAAA,wBAAA;GACA;EACA;IACA,kCAAA;YAAA,0BAAA;GACA;EACA;IACA,kCAAA;YAAA,0BAAA;GACA;CACA;AACA;EACA,cAAA;EACA,mBAAA;EACA,uBAAA;CACA","file":"pop.vue","sourcesContent":["<template>\n <div>\n    <div class=\"demo-spin-container\" v-show=\"loader1\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <div class=\"demo-spin-container\" v-show=\"loader2\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <div class=\"demo-spin-container\" v-show=\"loader3\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <section class=\"pop-wrapper\">\n            <Tabs type=\"card\"   v-ref:loadid >\n            <Tab-pane label=\"概要信息\"   key=\"key1\">\n                <!-- loading -->\n                    <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>查看作业</span></h2>\n                    <i-table  highlight-row border :columns=\"columns2\" :data=\"data2\" :content=\"self\" ></i-table>\n                    <section class=\"pop-wrapper-ren\" v-show=\"data3_pop_wrapper_ren\"> \n                        <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>任务详情</span></h2>\n                        <i-table  highlight-row border :columns=\"columns3\" :data=\"data3\" :content=\"self\" size=\"small\" ></i-table>\n                        <button id=\"btn\" style=\"display:node\"></button>\n                    </section>  \n                    <div class=\"popCenter\"  v-show=\"bg1\">\n                            <h2>抽样下载 (输入数字)</h2>\n                            <rd-number :number=\"number\"></rd-number>\n                            <span class=\"popTop\"><i-button type=\"ghost\" @click=\"ballSuccer1\">确定</i-button></span>\n                            <i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n                    <div class=\"popCenter\"  v-show=\"bg2\">\n                            <h2>Top下载 (输入数字)</h2>\n                            <rd-number :number=\"numberTop\"></rd-number>\n                            <span class=\"popTop\"><i-button type=\"ghost\" @click=\"ballSuccer2\">确定</i-button></span>\n                            <i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n                    <div class=\"popCenter3\"  v-show=\"bg3\">\n                        <h2>下载需审批：</h2>\n                        <p>明细数据下载说明请查看<a href=\"http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334\">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p><i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n            </Tab-pane>\n            <Tab-pane label=\"条件信息\" key=\"key2\">\n                <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>作业条件信息</span></h2>\n                    <div class=\"pop-wrapper-list\">\n                    <section class=\"pop-wrapper-list-header\"><label for=\"\">条件名称</label><h2>条件详情</h2></section>\n                    <section v-for=\"item in allArray\" >\n                        <label>{{leftArr[$index]}}</label>\n                        <nav> \n                            <div v-for='(key,val) in item' track-by=\"$index\">\n                                <span class=\"list-p1\"><b>{{key}}：</b></span>\n                                <div class=\"list-p2\" v-if=\"tiaojian(val)\">\n                                    <div v-for=\"val in allPut\">\n                                        <div v-for=\"(k,v) in val\" style=\"display:-webkit-flex\">\n                                            <span>{{k}}：</span><div class=\"list-p2\">{{v}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"list-p2\" v-else>{{val}}</div>\n                            </div>\n                        </nav>\n                    </section>\n                    </div>\n            </Tab-pane>\n            </Tabs>\n            <Modal\n                :visible.sync=\"modal1\"\n                title=\"提示\"\n                @on-ok=\"yun\"\n                >\n                <p style='text-align:center;line-height:50px;'>您确认上传到云传？</p>\n            </Modal>\n        </section>    \n</div>\n       \n</template>\n<script>\nimport { rdNumber } from \"radon-ui\";\nimport Clipboard from \"clipboard\";\nimport { timeList } from '../../vuex/business-util';\nimport Vue from 'vue'\nexport default {\n  props: [\"msg\"],\n  components: { rdNumber },\n\n  data() {\n    function getCookie(name) {\n      var arr,\n        reg = new RegExp(\"(^| )\" + name + \"=([^;]*)(;|$)\");\n      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);\n      else return null;\n    }\n    let atmJson = getCookie(\"atmJson\"),\n      sessionAtmJson = sessionStorage.getItem(\"sessionAtmJson\"),\n      hun = false;\n    if (atmJson) {\n      hun = JSON.parse(atmJson).admin;\n    } else if (sessionAtmJson) {\n      hun = JSON.parse(sessionAtmJson).admin;\n    }\n    const self = this;\n    return {\n      arr:[{name:1}],\n      modal1: false,\n      yunIndex: 0,\n      dataType: null,\n      self: this,\n      data2: [],\n      data3: [],\n      show: false,\n      allPut: [],\n      number: {\n        value: 1,\n        step: 1\n      },\n      numberTop: {\n        value: 1,\n        step: 1\n      },\n      loader1: false,\n      loader2: false,\n      loader3: false,\n      data3_pop_wrapper_ren: false,\n      modal5: false,\n      bg1: false,\n      bg2: false,\n      bg3: false,\n      allidx: \"\",\n      allArray: [],\n      leftArr: [],\n      columns2: [\n        {\n          title: \"作业id\",\n          key: \"id\",\n          width: 80,\n          type: \"center\"\n        },\n        {\n          title: \"作业名称\",\n          key: \"name\",\n          type: \"center\"\n        },\n        {\n          title: \"页面参数\",\n          type: \"center\",\n          width: 120,\n          render(row, column, index) {\n            let String = row.params\n              .replace(/>/g, \"&gt;\")\n              .replace(/</g, \"&lt;\")\n              .replace(/ /g, \"&nbsp;\")\n              .replace(/\\\"/g, \"&quot;\")\n              .replace(/\\'/g, \"&#39;\")\n              .replace(/\\\\/g, \"\\\\\\\\\")\n              .replace(/\\n/g, \"\\\\n\")\n              .replace(/\\r/g, \"\\\\r\")\n              .replace(/:/g, \":\");\n            return \"<Tooltip content=\" + String + \">参数详情</Tooltip>\";\n          }\n        },\n        {\n          title: \"输出路径\",\n          key: \"outputPath\",\n          type: \"center\"\n        },\n        {\n          title: \"作业状态\",\n          key: \"status\",\n          type: \"center\",\n          width: 124,\n          render(row, column, index) {\n            let status = \"\";\n            if (row.status == 0) {\n              status = \"已创建\";\n            } else if (row.status == 1) {\n              status = \"已提交\";\n            } else if (row.status == 2) {\n              status = \"排队中\";\n            } else if (row.status == 3) {\n              status = \"已调度\";\n            } else if (row.status == 4) {\n              status = \"运行中\";\n            } else if (row.status == 5) {\n              status = \"已成功\";\n            } else if (row.status == 6) {\n              status = \"已失败\";\n            } else if (row.status == 8) {\n              status = \"已取消\";\n            } else if (row.status == 7) {\n              status = \"已拉取\";\n            }\n            const color =\n              row.status == 5 ? \"green\" : row.status == 6 ? \"red\" : \"blue\";\n            return `<tag type=\"dot\" color=\"${color}\">${status}</tag>`;\n          }\n        },\n        {\n          title: \"排队次序\",\n          //key: 'jobCntBefore',\n          type: \"center\",\n          width: 120,\n          render(row, column, index) {\n            let jobCntBefore = \"\";\n            if (row.jobCntBefore === -1) {\n              jobCntBefore = \"\";\n            } else {\n              jobCntBefore = row.jobCntBefore;\n            }\n            return \"<span>\" + jobCntBefore + \"</span>\";\n          }\n        },\n        {\n          title: \"创建时间\",\n          key: \"createTime\",\n          type: \"center\"\n        },\n        {\n          title: \"结束时间\",\n          key: \"doneTime\",\n          type: \"center\"\n        },\n        {\n          title: \"操作\",\n          type: \"center\",\n          render(row, column, index) {\n            let id = row.id,\n              status = row.status;\n            return (\n              '<i-button type=\"primary\" size=\"small\" v-show=\"' +\n              status +\n              \"===6 && \" +\n              hun +\n              '\" @click=\"backroll(' +\n              id +\n              ')\">重新运行作业</i-button>'\n            );\n          }\n        }\n      ],\n      columns3: [\n        {\n          title: \"任务id\",\n          key: \"id\",\n          type: \"center\",\n          width: 80\n        },\n        {\n          title: \"任务序号\",\n          key: \"serialNo\",\n          type: \"center\",\n          width: 90\n        },\n        {\n          title: \"任务类型\",\n          type: \"center\",\n          width: 120,\n          render(row, column, index) {\n            let status = \"\";\n            if (row.taskType == 0) {\n              status = \"未知\";\n            } else if (row.taskType == 1) {\n              status = \"GP\";\n            } else if (row.taskType == 2) {\n              status = \"JAVA\";\n            } else if (row.taskType == 3) {\n              status = \"SPARK\";\n            } else if (row.taskType == 4) {\n              status = \"MAP-REDUCE\";\n            } else if (row.taskType == 5) {\n              status = \"FLINK\";\n            } else if (row.taskType == 6) {\n              status = \"REST-CALLKING\";\n            } else {\n              status = \"REST-POLLING\";\n            }\n            return \"<span>\" + status + \"</span> \";\n          }\n        },\n        {\n          title: \"任务描述\",\n          type: \"center\",\n          render(row, column, index) {\n            let lens = JSON.parse(row.params);\n            return lens.taskDesc;\n          }\n        },\n        {\n          title: \"任务参数\",\n          type: \"center\",\n          width: 120,\n          render(row, column, index) {\n            let String = row.params\n              .replace(/>/g, \"&gt;\")\n              .replace(/</g, \"&lt;\")\n              .replace(/ /g, \"&nbsp;\")\n              .replace(/\\\"/g, \"&quot;\")\n              .replace(/\\'/g, \"&#39;\")\n              .replace(/\\\\/g, \"\\\\\\\\\")\n              .replace(/\\n/g, \"\\\\n\")\n              .replace(/\\r/g, \"\\\\r\")\n              .replace(/:/g, \":\");\n            return \"<Tooltip content=\" + String + \">参数详情</Tooltip>\";\n          }\n        },\n        {\n          title: \"任务状态\",\n          type: \"center\",\n          width: 110,\n          render(row, column, index) {\n            let status = \"\";\n            if (row.status == 0) {\n              status = \"已创建\";\n            } else if (row.status == 1) {\n              status = \"排队中\";\n            } else if (row.status == 2) {\n              status = \"已调度\";\n            } else if (row.status == 3) {\n              status = \"已提交\";\n            } else if (row.status == 4) {\n              status = \"运行中\";\n            } else if (row.status == 5) {\n              status = \"已成功\";\n            } else if (row.status == 6) {\n              status = \"已失败\";\n            }\n            const color =\n              row.status == 5 ? \"green\" : row.status == 6 ? \"red\" : \"blue\";\n            return \"<tag color=\" + color + \" >\" + status + \"</tag>\";\n          }\n        },\n        {\n          title: \"结果数目\",\n          type: \"center\",\n\n          render(row, column, index) {\n            let status = \"\";\n            if (row.resultCount == -1) {\n              status = \"\";\n            } else {\n              status = row.resultCount;\n            }\n            return \"<span>\" + status + \"</span> \";\n          }\n        },\n        {\n          title: \"开始时间\",\n          key: \"startTime\",\n          type: \"center\"\n        },\n        {\n          title: \"更新时间\",\n          key: \"doneTime\",\n          type: \"center\"\n        },\n        {\n          title: \"操作\",\n          type: \"center\",\n          width: 295,\n          render(row, column, index) {\n            let m = row.expCode.substr(1, 1),\n              paramsExpCode = JSON.parse(row.params).expCode,\n              n = 1,\n              status = row.status,\n              idx = row.id,\n              sun = index + 1,\n              len = \"\",\n              flug= row.flug,\n              item=row,\n              newheatMapId = JSON.parse(row.params);\n            if (self.msg.body.userTasks.length) {\n              len = self.msg.body.userTasks.length;\n            }\n            let s = false,\n              k = false,\n              f = false,\n              h = false;\n            if (newheatMapId.heatMapId) {\n              h = true;\n            } else {\n              h = false;\n            }\n            if (hun) {\n              s = true;\n              k = false;\n              f = false;\n              if (paramsExpCode == \"03033\" && status == 5) {\n                s = false;\n                k = false;\n                f = true;\n              }\n            } else {\n              if (sun == len) {\n                s = true;\n                k = false;\n                f = false;\n                if (\n                  (paramsExpCode == \"02010\" && status == 5) ||\n                  (paramsExpCode == \"02011\" && status == 5) ||\n                  (paramsExpCode == \"02020\" && status == 5) ||\n                  (paramsExpCode == \"02050\" && status == 5) ||\n                  (paramsExpCode == \"02051\" && status == 5) ||\n                  (paramsExpCode == \"02052\" && status == 5)\n                ) {\n                  s = false;\n                  k = true;\n                  f = false;\n                } else if (paramsExpCode == \"03033\" && status == 5) {\n                  s = false;\n                  k = false;\n                  f = true;\n                }\n              }\n            }\n            return (\n              '<section v-if=\"' +\n              s +\n              '\">' +\n              '<p v-show=\"' +\n              m +\n              \"===2&&\" +\n              status +\n              \"===5||\" +\n              m +\n              \"===3&&\" +\n              status +\n              \"===5||\" +\n              m +\n              \"===4&&\" +\n              status +\n              \"===5||\" +\n              m +\n              \"===5&&\" +\n              status +\n              '===5\">' +\n              '<i-button type=\"primary\" size=\"small\"  v-bind:disabled=\"'+row.allDown+'\"   @click=\"allDownload(' +\n              idx+\n              ')\">全部下载</i-button>' +\n              '<i-button type=\"primary\" size=\"small\" v-bind:disabled=\"'+row.sampleDown+'\" @click=\"popOne(' +\n              idx +\n              ')\">抽样下载</i-button>' +\n              '<i-button type=\"primary\" size=\"small\" v-bind:disabled=\"'+row.topDown+'\"  @click=\"popTop(' +\n              idx +\n              ')\">Top下载</i-button>' +\n              '<i-button type=\"primary\" size=\"small\" v-bind:disabled=\"'+row.cloudDown+'\"   @click=\"swarmLoup(' +\n              index +\n              ')\">云传</i-button>' +\n              '</p><span><i-button type=\"primary\" size=\"small\" @click=\"showHeat(' +\n              index +\n              ')\" v-show=\"' +\n              m +\n              \"===6 && \" +\n              status +\n              '===5\">显示热力图</i-button><i-button type=\"primary\" size=\"small\" v-show=\"' +\n              m +\n              \"===6 && \" +\n              status +\n              \"===5 && \" +\n              h +\n              '\" @click=\"cloneUrl(' +\n              index +\n              ')\"\">复制url</i-button></span>' +\n              \"</section>\" +\n              '<p v-if=\"' +\n              k +\n              '\"><i-button type=\"primary\" size=\"small\"   @click=\"notification()\">下载需审批</i-button></p>' +\n              '<p v-if=\"' +\n              f +\n              '\">手动复制设备统计数</p>'\n            );\n          }\n        }\n      ]\n    };\n  },\n  ready() {},\n  watch: {\n    msg: function() {\n      this.data2 = this.msg.body.userJobs;\n      this.dataType = this.data2[0].name;\n      this.data3 = this.msg.body.userTasks;\n      (this.data3||[]).forEach((item,index)=>{\n          item.allDown=false;//全部下载\n          item.sampleDown=false;//抽样\n          item.topDown=false;//top下载\n          item.cloudDown=false;//云传\n        this.data3.$set(index,item);\n      });\n      \n      if (this.data3.length != 0) {\n        this.data3_pop_wrapper_ren = true;\n      } else {\n        this.data3_pop_wrapper_ren = false;\n      }\n\n      this.allArray = [];\n      this.leftArr = [];\n      let excludeCheatedIds = this.msg.body.jobDesc.excludeCheatedIds;\n      let p = this.msg.body.jobDesc.conditions;\n      for (let i = 0; i < p.length; i++) {\n        for (let j in p[i]) {\n          if (j == \"操作编码\") {\n            this.leftArr.push(p[i][\"操作编码\"]);\n          }\n        }\n        delete p[i][\"操作编码\"];\n      }\n      this.leftArr.unshift(\"刷量\");\n      p.unshift({\n        excludeCheatedIds: excludeCheatedIds\n      });\n      this.allArray = p;\n      this.$refs.loadid.activeKey = \"key1\";\n    }\n  },\n  methods: {\n    popOne(idx) {\n      this.bg1 = true;\n      this.bg2 = false;\n      this.allidx = idx;\n    },\n    popTop(idx) {\n      this.bg2 = true;\n      this.bg1 = false;\n      this.allidx = idx;\n    },\n    backroll(id) {\n      this.$Modal.confirm({\n        title: \"重新运行作业\",\n        content: \"<p>您确认要重新运行作业吗？</p>\",\n        onOk: () => {\n          let url = process.env.NODE_ENV.apiPath + \"jobManager/reExecuteJob\";\n          Vue.http\n            .get(url, {\n              params: {\n                jobId: id\n              }\n            })\n            .then(\n              response => {\n                if (!response.body.resultCode) {\n                  this.$Notice.success({\n                    title: \"重新运行作业\",\n                    desc: \"重新运行作业成功！\"\n                  });\n                } else {\n                  this.$Notice.error({\n                    title: \"重新运行作业\",\n                    desc: \"重新运行作业失败！\"\n                  });\n                }\n              },\n              response => {\n                console.log(\"请求失败\");\n              }\n            );\n        }\n      });\n    },\n    ballSuccer1() {\n      this.loader2 = true;\n      this.findItem(this.allidx,true,'sampleDown');\n      let reg = /^[0-9]*$/;\n      if (!reg.test(this.number.value)) {\n        this.$Notice.error({ title: \"输入有误\", desc: \"请输入数字！\" });\n      } else {\n        this.bg1 = false;\n        let url = process.env.NODE_ENV.apiPath + \"fileTransferManager/download\";\n        Vue.http\n          .get(url, {\n            params: {\n              taskId: this.allidx,\n              downloadType: 2,\n              sampleSize: this.number.value\n            }\n          })\n          .then(\n            response => {\n            this.loader2 = false;\n            this.findItem(this.allidx,false,'sampleDown');\n            var el = document.createElement(\"a\");\n            document.body.appendChild(el);\n            el.href = response.url;\n            el.click();\n            document.body.removeChild(el);\n          },\n          response => {\n              this.loader2 = false;\n              console.log(\"请求失败\");\n            }\n          );\n      }\n    },\n    ballSuccer2() {\n      this.loader3 = true;\n      let reg = /^[0-9]*$/;\n      if (!reg.test(this.numberTop.value)) {\n        this.$Notice.error({ title: \"输入有误\", desc: \"请输入数字！\" });\n      } else {\n        this.bg2 = false;\n        let url = process.env.NODE_ENV.apiPath + \"fileTransferManager/download\";\n        Vue.http\n          .get(url, {\n            params: {\n              taskId: this.allidx,\n              downloadType: 1,\n              sampleSize: this.numberTop.value\n            }\n          })\n          .then(\n            response => {\n              this.loader3 = false;\n              var el = document.createElement(\"a\");\n              document.body.appendChild(el);\n              el.href = response.url;\n              el.click();\n              document.body.removeChild(el);\n            },\n            response => {\n              this.loader3 = false;\n              console.log(\"请求失败\");\n            }\n          );\n      }\n    },\n    findItem(id,blean,type){\n      for(var i=0;i<this.data3.length;i++){\n          var item=this.data3[i];\n          if(item.id===id){\n              item[type]=blean;\n              this.data3.$set(i,item);\n          }\n      }\n    },\n    allDownload(id) {\n        this.findItem(id,true,'allDown');\n        this.loader1 = true;\n        let url = process.env.NODE_ENV.apiPath + \"fileTransferManager/download\";\n        let THIS=this;\n       Vue.http\n          .get(url, {\n            params: {\n              taskId: id,\n              downloadType: 1,\n              sampleSize: -1\n            }\n          })\n          .then(\n            response => {\n              this.findItem(id,false,'allDown')\n              this.loader1 = false;\n              var el = document.createElement(\"a\");\n              el.href = response.url;\n              document.body.appendChild(el);\n              el.click();\n              document.body.removeChild(el);\n            },\n            response => {\n              this.loader1 = false;\n              console.log(\"请求失败\");\n            }\n      );\n    },\n    off() {\n      this.bg2 = false;\n      this.bg1 = false;\n      this.bg3 = false;\n      this.numberTop.value = 1;\n      this.number.value = 1;\n    },\n    showHeat(index) {\n      let jobId = this.data3[index].id;\n      let params = JSON.parse(this.data3[index].params);\n      if (params.heatMapId) {\n        let id = params.heatMapId;\n        window.open(\n          \"http://yhdc.tendcloud.com/heatmap/index.html?id=\" + id + \"\",\n          \"_blank\"\n        );\n      } else {\n        layer.open({\n          type: 2,\n          title: \"热力图展示\",\n          shadeClose: true,\n          shade: 0.8,\n          area: [\"100%\", \"100%\"],\n          content:\n            \"build/td_heatmap/heatmap.html?jobId=\" +\n            jobId +\n            \"&dataType=\" +\n            encodeURIComponent(this.dataType) +\n            \"&basePath=\" +\n            process.env.NODE_ENV.apiPath // iframe的url\n        });\n      }\n    },\n    notification() {\n      this.bg3 = true;\n    },\n    tiaojian(data) {\n      let b = data instanceof Array;\n      if (b) {\n        this.allPut = data;\n      }\n      return b;\n    },\n    cloneUrl(index) {\n      let self = this;\n      let params = JSON.parse(this.data3[index].params);\n      if (params.heatMapId) {\n        let id = params.heatMapId;\n        let url = \"http://heatmap.talkingdata.com/index.html?id=\" + id + \"\";\n        let btn = document.getElementById(\"btn\");\n        btn.click();\n        let clipboard = new Clipboard(\"#btn\", {\n          text: function() {\n            return url;\n          }\n        });\n        let bg = false;\n        clipboard.on(\"success\", function(e) {\n          bg = true;\n        });\n        clipboard.on(\"error\", function(e) {\n          bg = false;\n        });\n        btn.click();\n        if (bg) {\n          self.$Notice.success({ title: \"复制路径成功\" });\n        } else {\n          self.$Notice.error({ title: \"复制路径失败\" });\n        }\n      }\n    },\n    swarmLoup(index) {\n      this.modal1 = true;\n      this.yunIndex = index;\n    },\n    yun() {\n      function getCookie(name) {\n        var arr,\n          reg = new RegExp(\"(^| )\" + name + \"=([^;]*)(;|$)\");\n        if ((arr = document.cookie.match(reg))) return unescape(arr[2]);\n        else return null;\n      }\n      let useremail = getCookie(\"useremail\");\n      let sessionemail = sessionStorage.getItem(\"sessionUser\");\n      let url = process.env.NODE_ENV.apiPath + \"ftp/upload\";\n      let email = useremail || sessionemail;\n      const form = new FormData();\n      form.append(\n        \"filepath\",\n        this.data3[this.yunIndex].outputPath + \"/result.gz\"\n      );\n      form.append(\"email\", email);\n      Vue.http.post(url, form).then(\n        response => {\n          if (response.status === 200) {\n            if (response.data.resultCode === 0) {\n              let _url = response.data.resultValue;\n              this.$Modal.confirm({\n                title: \"上传成功\",\n                okText: \"复制路径\",\n                content:\n                  '<p style=\"word-break: normal;;word-wrap: break-word\">' +\n                  \"您的文件已上传到云传,路径：\" +\n                  _url +\n                  \"</p>\",\n                loading: true,\n                onOk: () => {\n                  setTimeout(() => {\n                    this.$Modal.remove();\n                    let btn = document.getElementById(\"btn\");\n                    btn.click();\n                    let clipboard = new Clipboard(\"#btn\", {\n                      text: function() {\n                        return _url;\n                      }\n                    });\n                    let bg = false;\n                    clipboard.on(\"success\", function(e) {\n                      bg = true;\n                    });\n                    clipboard.on(\"error\", function(e) {\n                      bg = false;\n                    });\n                    btn.click();\n                    if (bg) {\n                      this.$Notice.success({ title: \"复制路径成功\" });\n                    } else {\n                      this.$Notice.error({ title: \"复制路径失败\" });\n                    }\n                  }, 800);\n                }\n              });\n            } else if (response.data.resultCode === 7) {\n              this.$Notice.error({\n                title: \"授权失败\",\n                desc: \"请先开通云传账号\"\n              });\n            } else {\n              this.$Notice.error({ title: \"上传失败\", desc: \"请重新上传！\" });\n            }\n          }\n        },\n        response => {\n          console.log(\"请求失败\");\n        }\n      );\n    }\n  }\n};\n</script>\n<style>\n.demo-spin-container {\n  display: inline-block;\n  width: 200px;\n  height: 100px;\n  position: fixed;\n  border: 1px solid #eee;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -100px;\n  z-index: 9999999;\n}\n.demo-spin-icon-load {\n  animation: ani-demo-spin 1s linear infinite;\n}\n@keyframes ani-demo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.demo-spin-col {\n  height: 100px;\n  position: relative;\n  border: 1px solid #eee;\n}\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _radonUi = __webpack_require__(199);
	
	var _clipboard = __webpack_require__(478);
	
	var _clipboard2 = _interopRequireDefault(_clipboard);
	
	var _businessUtil = __webpack_require__(84);
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//  <div>
	//     <div class="demo-spin-container" v-show="loader1">
	//         <Spin fix>
	//             <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
	//             <div>Loading</div>
	//         </Spin>
	//     </div>
	//     <div class="demo-spin-container" v-show="loader2">
	//         <Spin fix>
	//             <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
	//             <div>Loading</div>
	//         </Spin>
	//     </div>
	//     <div class="demo-spin-container" v-show="loader3">
	//         <Spin fix>
	//             <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
	//             <div>Loading</div>
	//         </Spin>
	//     </div>
	//     <section class="pop-wrapper">
	//             <Tabs type="card"   v-ref:loadid >
	//             <Tab-pane label="概要信息"   key="key1">
	//                 <!-- loading -->
	//                     <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>查看作业</span></h2>
	//                     <i-table  highlight-row border :columns="columns2" :data="data2" :content="self" ></i-table>
	//                     <section class="pop-wrapper-ren" v-show="data3_pop_wrapper_ren"> 
	//                         <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>任务详情</span></h2>
	//                         <i-table  highlight-row border :columns="columns3" :data="data3" :content="self" size="small" ></i-table>
	//                         <button id="btn" style="display:node"></button>
	//                     </section>  
	//                     <div class="popCenter"  v-show="bg1">
	//                             <h2>抽样下载 (输入数字)</h2>
	//                             <rd-number :number="number"></rd-number>
	//                             <span class="popTop"><i-button type="ghost" @click="ballSuccer1">确定</i-button></span>
	//                             <i-button type="ghost" @click="off" class="popOff">X</i-button>
	//                     </div>
	//                     <div class="popCenter"  v-show="bg2">
	//                             <h2>Top下载 (输入数字)</h2>
	//                             <rd-number :number="numberTop"></rd-number>
	//                             <span class="popTop"><i-button type="ghost" @click="ballSuccer2">确定</i-button></span>
	//                             <i-button type="ghost" @click="off" class="popOff">X</i-button>
	//                     </div>
	//                     <div class="popCenter3"  v-show="bg3">
	//                         <h2>下载需审批：</h2>
	//                         <p>明细数据下载说明请查看<a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p><i-button type="ghost" @click="off" class="popOff">X</i-button>
	//                     </div>
	//             </Tab-pane>
	//             <Tab-pane label="条件信息" key="key2">
	//                 <h2> <Icon type="ios-browsers-outline" size="18"></Icon><span>作业条件信息</span></h2>
	//                     <div class="pop-wrapper-list">
	//                     <section class="pop-wrapper-list-header"><label for="">条件名称</label><h2>条件详情</h2></section>
	//                     <section v-for="item in allArray" >
	//                         <label>{{leftArr[$index]}}</label>
	//                         <nav> 
	//                             <div v-for='(key,val) in item' track-by="$index">
	//                                 <span class="list-p1"><b>{{key}}：</b></span>
	//                                 <div class="list-p2" v-if="tiaojian(val)">
	//                                     <div v-for="val in allPut">
	//                                         <div v-for="(k,v) in val" style="display:-webkit-flex">
	//                                             <span>{{k}}：</span><div class="list-p2">{{v}}</div>
	//                                         </div>
	//                                     </div>
	//                                 </div>
	//                                 <div class="list-p2" v-else>{{val}}</div>
	//                             </div>
	//                         </nav>
	//                     </section>
	//                     </div>
	//             </Tab-pane>
	//             </Tabs>
	//             <Modal
	//                 :visible.sync="modal1"
	//                 title="提示"
	//                 @on-ok="yun"
	//                 >
	//                 <p style='text-align:center;line-height:50px;'>您确认上传到云传？</p>
	//             </Modal>
	//         </section>    
	// </div>
	//
	// </template>
	// <script>
	exports.default = {
	  props: ["msg"],
	  components: { rdNumber: _radonUi.rdNumber },
	
	  data: function data() {
	    function getCookie(name) {
	      var arr,
	          reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	      if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	    }
	    var atmJson = getCookie("atmJson"),
	        sessionAtmJson = sessionStorage.getItem("sessionAtmJson"),
	        hun = false;
	    if (atmJson) {
	      hun = JSON.parse(atmJson).admin;
	    } else if (sessionAtmJson) {
	      hun = JSON.parse(sessionAtmJson).admin;
	    }
	    var self = this;
	    return {
	      arr: [{ name: 1 }],
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
	      columns2: [{
	        title: "作业id",
	        key: "id",
	        width: 80,
	        type: "center"
	      }, {
	        title: "作业名称",
	        key: "name",
	        type: "center"
	      }, {
	        title: "页面参数",
	        type: "center",
	        width: 120,
	        render: function render(row, column, index) {
	          var String = row.params.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/ /g, "&nbsp;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/:/g, ":");
	          return "<Tooltip content=" + String + ">参数详情</Tooltip>";
	        }
	      }, {
	        title: "输出路径",
	        key: "outputPath",
	        type: "center"
	      }, {
	        title: "作业状态",
	        key: "status",
	        type: "center",
	        width: 124,
	        render: function render(row, column, index) {
	          var status = "";
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
	          var color = row.status == 5 ? "green" : row.status == 6 ? "red" : "blue";
	          return "<tag type=\"dot\" color=\"" + color + "\">" + status + "</tag>";
	        }
	      }, {
	        title: "排队次序",
	        //key: 'jobCntBefore',
	        type: "center",
	        width: 120,
	        render: function render(row, column, index) {
	          var jobCntBefore = "";
	          if (row.jobCntBefore === -1) {
	            jobCntBefore = "";
	          } else {
	            jobCntBefore = row.jobCntBefore;
	          }
	          return "<span>" + jobCntBefore + "</span>";
	        }
	      }, {
	        title: "创建时间",
	        key: "createTime",
	        type: "center"
	      }, {
	        title: "结束时间",
	        key: "doneTime",
	        type: "center"
	      }, {
	        title: "操作",
	        type: "center",
	        render: function render(row, column, index) {
	          var id = row.id,
	              status = row.status;
	          return '<i-button type="primary" size="small" v-show="' + status + "===6 && " + hun + '" @click="backroll(' + id + ')">重新运行作业</i-button>';
	        }
	      }],
	      columns3: [{
	        title: "任务id",
	        key: "id",
	        type: "center",
	        width: 80
	      }, {
	        title: "任务序号",
	        key: "serialNo",
	        type: "center",
	        width: 90
	      }, {
	        title: "任务类型",
	        type: "center",
	        width: 120,
	        render: function render(row, column, index) {
	          var status = "";
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
	      }, {
	        title: "任务描述",
	        type: "center",
	        render: function render(row, column, index) {
	          var lens = JSON.parse(row.params);
	          return lens.taskDesc;
	        }
	      }, {
	        title: "任务参数",
	        type: "center",
	        width: 120,
	        render: function render(row, column, index) {
	          var String = row.params.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/ /g, "&nbsp;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;").replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/:/g, ":");
	          return "<Tooltip content=" + String + ">参数详情</Tooltip>";
	        }
	      }, {
	        title: "任务状态",
	        type: "center",
	        width: 110,
	        render: function render(row, column, index) {
	          var status = "";
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
	          var color = row.status == 5 ? "green" : row.status == 6 ? "red" : "blue";
	          return "<tag color=" + color + " >" + status + "</tag>";
	        }
	      }, {
	        title: "结果数目",
	        type: "center",
	
	        render: function render(row, column, index) {
	          var status = "";
	          if (row.resultCount == -1) {
	            status = "";
	          } else {
	            status = row.resultCount;
	          }
	          return "<span>" + status + "</span> ";
	        }
	      }, {
	        title: "开始时间",
	        key: "startTime",
	        type: "center"
	      }, {
	        title: "更新时间",
	        key: "doneTime",
	        type: "center"
	      }, {
	        title: "操作",
	        type: "center",
	        width: 295,
	        render: function render(row, column, index) {
	          var m = row.expCode.substr(1, 1),
	              paramsExpCode = JSON.parse(row.params).expCode,
	              n = 1,
	              status = row.status,
	              idx = row.id,
	              sun = index + 1,
	              len = "",
	              flug = row.flug,
	              item = row,
	              newheatMapId = JSON.parse(row.params);
	          if (self.msg.body.userTasks.length) {
	            len = self.msg.body.userTasks.length;
	          }
	          var s = false,
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
	              if (paramsExpCode == "02010" && status == 5 || paramsExpCode == "02011" && status == 5 || paramsExpCode == "02020" && status == 5 || paramsExpCode == "02050" && status == 5 || paramsExpCode == "02051" && status == 5 || paramsExpCode == "02052" && status == 5) {
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
	          return '<section v-if="' + s + '">' + '<p v-show="' + m + "===2&&" + status + "===5||" + m + "===3&&" + status + "===5||" + m + "===4&&" + status + "===5||" + m + "===5&&" + status + '===5">' + '<i-button type="primary" size="small"  v-bind:disabled="' + row.allDown + '"   @click="allDownload(' + idx + ')">全部下载</i-button>' + '<i-button type="primary" size="small" v-bind:disabled="' + row.sampleDown + '" @click="popOne(' + idx + ')">抽样下载</i-button>' + '<i-button type="primary" size="small" v-bind:disabled="' + row.topDown + '"  @click="popTop(' + idx + ')">Top下载</i-button>' + '<i-button type="primary" size="small" v-bind:disabled="' + row.cloudDown + '"   @click="swarmLoup(' + index + ')">云传</i-button>' + '</p><span><i-button type="primary" size="small" @click="showHeat(' + index + ')" v-show="' + m + "===6 && " + status + '===5">显示热力图</i-button><i-button type="primary" size="small" v-show="' + m + "===6 && " + status + "===5 && " + h + '" @click="cloneUrl(' + index + ')"">复制url</i-button></span>' + "</section>" + '<p v-if="' + k + '"><i-button type="primary" size="small"   @click="notification()">下载需审批</i-button></p>' + '<p v-if="' + f + '">手动复制设备统计数</p>';
	        }
	      }]
	    };
	  },
	  ready: function ready() {},
	
	  watch: {
	    msg: function msg() {
	      var _this = this;
	
	      this.data2 = this.msg.body.userJobs;
	      this.dataType = this.data2[0].name;
	      this.data3 = this.msg.body.userTasks;
	      (this.data3 || []).forEach(function (item, index) {
	        item.allDown = false; //全部下载
	        item.sampleDown = false; //抽样
	        item.topDown = false; //top下载
	        item.cloudDown = false; //云传
	        _this.data3.$set(index, item);
	      });
	
	      if (this.data3.length != 0) {
	        this.data3_pop_wrapper_ren = true;
	      } else {
	        this.data3_pop_wrapper_ren = false;
	      }
	
	      this.allArray = [];
	      this.leftArr = [];
	      var excludeCheatedIds = this.msg.body.jobDesc.excludeCheatedIds;
	      var p = this.msg.body.jobDesc.conditions;
	      for (var i = 0; i < p.length; i++) {
	        for (var j in p[i]) {
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
	    popOne: function popOne(idx) {
	      this.bg1 = true;
	      this.bg2 = false;
	      this.allidx = idx;
	    },
	    popTop: function popTop(idx) {
	      this.bg2 = true;
	      this.bg1 = false;
	      this.allidx = idx;
	    },
	    backroll: function backroll(id) {
	      var _this2 = this;
	
	      this.$Modal.confirm({
	        title: "重新运行作业",
	        content: "<p>您确认要重新运行作业吗？</p>",
	        onOk: function onOk() {
	          var url = ("http://yhdc.tendcloud.com/atm_backend/") + "jobManager/reExecuteJob";
	          _vue2.default.http.get(url, {
	            params: {
	              jobId: id
	            }
	          }).then(function (response) {
	            if (!response.body.resultCode) {
	              _this2.$Notice.success({
	                title: "重新运行作业",
	                desc: "重新运行作业成功！"
	              });
	            } else {
	              _this2.$Notice.error({
	                title: "重新运行作业",
	                desc: "重新运行作业失败！"
	              });
	            }
	          }, function (response) {
	            console.log("请求失败");
	          });
	        }
	      });
	    },
	    ballSuccer1: function ballSuccer1() {
	      var _this3 = this;
	
	      this.loader2 = true;
	      this.findItem(this.allidx, true, 'sampleDown');
	      var reg = /^[0-9]*$/;
	      if (!reg.test(this.number.value)) {
	        this.$Notice.error({ title: "输入有误", desc: "请输入数字！" });
	      } else {
	        this.bg1 = false;
	        var url = ("http://yhdc.tendcloud.com/atm_backend/") + "fileTransferManager/download";
	        _vue2.default.http.get(url, {
	          params: {
	            taskId: this.allidx,
	            downloadType: 2,
	            sampleSize: this.number.value
	          }
	        }).then(function (response) {
	          _this3.loader2 = false;
	          _this3.findItem(_this3.allidx, false, 'sampleDown');
	          var el = document.createElement("a");
	          document.body.appendChild(el);
	          el.href = response.url;
	          el.click();
	          document.body.removeChild(el);
	        }, function (response) {
	          _this3.loader2 = false;
	          console.log("请求失败");
	        });
	      }
	    },
	    ballSuccer2: function ballSuccer2() {
	      var _this4 = this;
	
	      this.loader3 = true;
	      var reg = /^[0-9]*$/;
	      if (!reg.test(this.numberTop.value)) {
	        this.$Notice.error({ title: "输入有误", desc: "请输入数字！" });
	      } else {
	        this.bg2 = false;
	        var url = ("http://yhdc.tendcloud.com/atm_backend/") + "fileTransferManager/download";
	        _vue2.default.http.get(url, {
	          params: {
	            taskId: this.allidx,
	            downloadType: 1,
	            sampleSize: this.numberTop.value
	          }
	        }).then(function (response) {
	          _this4.loader3 = false;
	          var el = document.createElement("a");
	          document.body.appendChild(el);
	          el.href = response.url;
	          el.click();
	          document.body.removeChild(el);
	        }, function (response) {
	          _this4.loader3 = false;
	          console.log("请求失败");
	        });
	      }
	    },
	    findItem: function findItem(id, blean, type) {
	      for (var i = 0; i < this.data3.length; i++) {
	        var item = this.data3[i];
	        if (item.id === id) {
	          item[type] = blean;
	          this.data3.$set(i, item);
	        }
	      }
	    },
	    allDownload: function allDownload(id) {
	      var _this5 = this;
	
	      this.findItem(id, true, 'allDown');
	      this.loader1 = true;
	      var url = ("http://yhdc.tendcloud.com/atm_backend/") + "fileTransferManager/download";
	      var THIS = this;
	      _vue2.default.http.get(url, {
	        params: {
	          taskId: id,
	          downloadType: 1,
	          sampleSize: -1
	        }
	      }).then(function (response) {
	        _this5.findItem(id, false, 'allDown');
	        _this5.loader1 = false;
	        var el = document.createElement("a");
	        el.href = response.url;
	        document.body.appendChild(el);
	        el.click();
	        document.body.removeChild(el);
	      }, function (response) {
	        _this5.loader1 = false;
	        console.log("请求失败");
	      });
	    },
	    off: function off() {
	      this.bg2 = false;
	      this.bg1 = false;
	      this.bg3 = false;
	      this.numberTop.value = 1;
	      this.number.value = 1;
	    },
	    showHeat: function showHeat(index) {
	      var jobId = this.data3[index].id;
	      var params = JSON.parse(this.data3[index].params);
	      if (params.heatMapId) {
	        var id = params.heatMapId;
	        window.open("http://yhdc.tendcloud.com/heatmap/index.html?id=" + id + "", "_blank");
	      } else {
	        layer.open({
	          type: 2,
	          title: "热力图展示",
	          shadeClose: true,
	          shade: 0.8,
	          area: ["100%", "100%"],
	          content: "build/td_heatmap/heatmap.html?jobId=" + jobId + "&dataType=" + encodeURIComponent(this.dataType) + "&basePath=" + ("http://yhdc.tendcloud.com/atm_backend/") // iframe的url
	        });
	      }
	    },
	    notification: function notification() {
	      this.bg3 = true;
	    },
	    tiaojian: function tiaojian(data) {
	      var b = data instanceof Array;
	      if (b) {
	        this.allPut = data;
	      }
	      return b;
	    },
	    cloneUrl: function cloneUrl(index) {
	      var self = this;
	      var params = JSON.parse(this.data3[index].params);
	      if (params.heatMapId) {
	        var id = params.heatMapId;
	        var url = "http://heatmap.talkingdata.com/index.html?id=" + id + "";
	        var btn = document.getElementById("btn");
	        btn.click();
	        var clipboard = new _clipboard2.default("#btn", {
	          text: function text() {
	            return url;
	          }
	        });
	        var bg = false;
	        clipboard.on("success", function (e) {
	          bg = true;
	        });
	        clipboard.on("error", function (e) {
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
	    swarmLoup: function swarmLoup(index) {
	      this.modal1 = true;
	      this.yunIndex = index;
	    },
	    yun: function yun() {
	      var _this6 = this;
	
	      function getCookie(name) {
	        var arr,
	            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	        if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	      }
	      var useremail = getCookie("useremail");
	      var sessionemail = sessionStorage.getItem("sessionUser");
	      var url = ("http://yhdc.tendcloud.com/atm_backend/") + "ftp/upload";
	      var email = useremail || sessionemail;
	      var form = new FormData();
	      form.append("filepath", this.data3[this.yunIndex].outputPath + "/result.gz");
	      form.append("email", email);
	      _vue2.default.http.post(url, form).then(function (response) {
	        if (response.status === 200) {
	          if (response.data.resultCode === 0) {
	            var _url = response.data.resultValue;
	            _this6.$Modal.confirm({
	              title: "上传成功",
	              okText: "复制路径",
	              content: '<p style="word-break: normal;;word-wrap: break-word">' + "您的文件已上传到云传,路径：" + _url + "</p>",
	              loading: true,
	              onOk: function onOk() {
	                setTimeout(function () {
	                  _this6.$Modal.remove();
	                  var btn = document.getElementById("btn");
	                  btn.click();
	                  var clipboard = new _clipboard2.default("#btn", {
	                    text: function text() {
	                      return _url;
	                    }
	                  });
	                  var bg = false;
	                  clipboard.on("success", function (e) {
	                    bg = true;
	                  });
	                  clipboard.on("error", function (e) {
	                    bg = false;
	                  });
	                  btn.click();
	                  if (bg) {
	                    _this6.$Notice.success({ title: "复制路径成功" });
	                  } else {
	                    _this6.$Notice.error({ title: "复制路径失败" });
	                  }
	                }, 800);
	              }
	            });
	          } else if (response.data.resultCode === 7) {
	            _this6.$Notice.error({
	              title: "授权失败",
	              desc: "请先开通云传账号"
	            });
	          } else {
	            _this6.$Notice.error({ title: "上传失败", desc: "请重新上传！" });
	          }
	        }
	      }, function (response) {
	        console.log("请求失败");
	      });
	    }
	  }
	};
	// </script>
	// <style>
	// .demo-spin-container {
	//   display: inline-block;
	//   width: 200px;
	//   height: 100px;
	//   position: fixed;
	//   border: 1px solid #eee;
	//   top: 50%;
	//   left: 50%;
	//   margin-top: -50px;
	//   margin-left: -100px;
	//   z-index: 9999999;
	// }
	// .demo-spin-icon-load {
	//   animation: ani-demo-spin 1s linear infinite;
	// }
	// @keyframes ani-demo-spin {
	//   from {
	//     transform: rotate(0deg);
	//   }
	//   50% {
	//     transform: rotate(180deg);
	//   }
	//   to {
	//     transform: rotate(360deg);
	//   }
	// }
	// .demo-spin-col {
	//   height: 100px;
	//   position: relative;
	//   border: 1px solid #eee;
	// }
	// </style>
	/* generated by vue-loader */

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(479), __webpack_require__(481), __webpack_require__(482)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';
	
	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);
	
	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);
	
	    var _goodListener2 = _interopRequireDefault(_goodListener);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);
	
	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);
	
	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
	
	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }
	
	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
	            }
	        }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	                var _this2 = this;
	
	                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                    return _this2.onClick(e);
	                });
	            }
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                var trigger = e.delegateTarget || e.currentTarget;
	
	                if (this.clipboardAction) {
	                    this.clipboardAction = null;
	                }
	
	                this.clipboardAction = new _clipboardAction2.default({
	                    action: this.action(trigger),
	                    target: this.target(trigger),
	                    text: this.text(trigger),
	                    container: this.container,
	                    trigger: trigger,
	                    emitter: this
	                });
	            }
	        }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	                return getAttributeValue('action', trigger);
	            }
	        }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	                var selector = getAttributeValue('target', trigger);
	
	                if (selector) {
	                    return document.querySelector(selector);
	                }
	            }
	        }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	                return getAttributeValue('text', trigger);
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.listener.destroy();
	
	                if (this.clipboardAction) {
	                    this.clipboardAction.destroy();
	                    this.clipboardAction = null;
	                }
	            }
	        }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
	
	                var actions = typeof action === 'string' ? [action] : action;
	                var support = !!document.queryCommandSupported;
	
	                actions.forEach(function (action) {
	                    support = support && !!document.queryCommandSupported(action);
	                });
	
	                return support;
	            }
	        }]);
	
	        return Clipboard;
	    }(_tinyEmitter2.default);
	
	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;
	
	        if (!element.hasAttribute(attribute)) {
	            return;
	        }
	
	        return element.getAttribute(attribute);
	    }
	
	    module.exports = Clipboard;
	});

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(480)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';
	
	    var _select2 = _interopRequireDefault(_select);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);
	
	            this.resolveOptions(options);
	            this.initSelection();
	        }
	
	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = options.action;
	                this.container = options.container;
	                this.emitter = options.emitter;
	                this.target = options.target;
	                this.text = options.text;
	                this.trigger = options.trigger;
	
	                this.selectedText = '';
	            }
	        }, {
	            key: 'initSelection',
	            value: function initSelection() {
	                if (this.text) {
	                    this.selectFake();
	                } else if (this.target) {
	                    this.selectTarget();
	                }
	            }
	        }, {
	            key: 'selectFake',
	            value: function selectFake() {
	                var _this = this;
	
	                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	
	                this.removeFake();
	
	                this.fakeHandlerCallback = function () {
	                    return _this.removeFake();
	                };
	                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
	
	                this.fakeElem = document.createElement('textarea');
	                // Prevent zooming on iOS
	                this.fakeElem.style.fontSize = '12pt';
	                // Reset box model
	                this.fakeElem.style.border = '0';
	                this.fakeElem.style.padding = '0';
	                this.fakeElem.style.margin = '0';
	                // Move element out of screen horizontally
	                this.fakeElem.style.position = 'absolute';
	                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	                // Move element to the same position vertically
	                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	                this.fakeElem.style.top = yPosition + 'px';
	
	                this.fakeElem.setAttribute('readonly', '');
	                this.fakeElem.value = this.text;
	
	                this.container.appendChild(this.fakeElem);
	
	                this.selectedText = (0, _select2.default)(this.fakeElem);
	                this.copyText();
	            }
	        }, {
	            key: 'removeFake',
	            value: function removeFake() {
	                if (this.fakeHandler) {
	                    this.container.removeEventListener('click', this.fakeHandlerCallback);
	                    this.fakeHandler = null;
	                    this.fakeHandlerCallback = null;
	                }
	
	                if (this.fakeElem) {
	                    this.container.removeChild(this.fakeElem);
	                    this.fakeElem = null;
	                }
	            }
	        }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	                this.selectedText = (0, _select2.default)(this.target);
	                this.copyText();
	            }
	        }, {
	            key: 'copyText',
	            value: function copyText() {
	                var succeeded = void 0;
	
	                try {
	                    succeeded = document.execCommand(this.action);
	                } catch (err) {
	                    succeeded = false;
	                }
	
	                this.handleResult(succeeded);
	            }
	        }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	                this.emitter.emit(succeeded ? 'success' : 'error', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	                if (this.trigger) {
	                    this.trigger.focus();
	                }
	
	                window.getSelection().removeAllRanges();
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.removeFake();
	            }
	        }, {
	            key: 'action',
	            set: function set() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
	
	                this._action = action;
	
	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }
	
	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }
	
	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);
	
	        return ClipboardAction;
	    }();
	
	    module.exports = ClipboardAction;
	});

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

	function select(element) {
	    var selectedText;
	
	    if (element.nodeName === 'SELECT') {
	        element.focus();
	
	        selectedText = element.value;
	    }
	    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        var isReadOnly = element.hasAttribute('readonly');
	
	        if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	        }
	
	        element.select();
	        element.setSelectionRange(0, element.value.length);
	
	        if (!isReadOnly) {
	            element.removeAttribute('readonly');
	        }
	
	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }
	
	        var selection = window.getSelection();
	        var range = document.createRange();
	
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	
	        selectedText = selection.toString();
	    }
	
	    return selectedText;
	}
	
	module.exports = select;


/***/ }),

/***/ 481:
/***/ (function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;
	
	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }
	
	    return this;
	  },
	
	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];
	
	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }
	
	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
	
	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];
	
	    return this;
	  }
	};
	
	module.exports = E;


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

	var is = __webpack_require__(483);
	var delegate = __webpack_require__(484);
	
	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }
	
	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }
	
	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }
	
	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}
	
	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);
	
	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}
	
	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });
	
	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}
	
	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}
	
	module.exports = listen;


/***/ }),

/***/ 483:
/***/ (function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};
	
	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};
	
	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};
	
	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return type === '[object Function]';
	};


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(485);
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function _delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);
	
	    element.addEventListener(type, listenerFn, useCapture);
	
	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element|String|Array} [elements]
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(elements, selector, type, callback, useCapture) {
	    // Handle the regular Element usage
	    if (typeof elements.addEventListener === 'function') {
	        return _delegate.apply(null, arguments);
	    }
	
	    // Handle Element-less usage, it defaults to global delegation
	    if (typeof type === 'function') {
	        // Use `document` as the first parameter, then apply arguments
	        // This is a short way to .unshift `arguments` without running into deoptimizations
	        return _delegate.bind(null, document).apply(null, arguments);
	    }
	
	    // Handle Selector-based usage
	    if (typeof elements === 'string') {
	        elements = document.querySelectorAll(elements);
	    }
	
	    // Handle Array-like based usage
	    return Array.prototype.map.call(elements, function (element) {
	        return _delegate(element, selector, type, callback, useCapture);
	    });
	}
	
	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector);
	
	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}
	
	module.exports = delegate;


/***/ }),

/***/ 485:
/***/ (function(module, exports) {

	var DOCUMENT_NODE_TYPE = 9;
	
	/**
	 * A polyfill for Element.matches()
	 */
	if (typeof Element !== 'undefined' && !Element.prototype.matches) {
	    var proto = Element.prototype;
	
	    proto.matches = proto.matchesSelector ||
	                    proto.mozMatchesSelector ||
	                    proto.msMatchesSelector ||
	                    proto.oMatchesSelector ||
	                    proto.webkitMatchesSelector;
	}
	
	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest (element, selector) {
	    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	        if (typeof element.matches === 'function' &&
	            element.matches(selector)) {
	          return element;
	        }
	        element = element.parentNode;
	    }
	}
	
	module.exports = closest;


/***/ }),

/***/ 486:
/***/ (function(module, exports) {

	module.exports = "\n <div>\n    <div class=\"demo-spin-container\" v-show=\"loader1\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <div class=\"demo-spin-container\" v-show=\"loader2\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <div class=\"demo-spin-container\" v-show=\"loader3\">\n        <Spin fix>\n            <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n            <div>Loading</div>\n        </Spin>\n    </div>\n    <section class=\"pop-wrapper\">\n            <Tabs type=\"card\"   v-ref:loadid >\n            <Tab-pane label=\"概要信息\"   key=\"key1\">\n                <!-- loading -->\n                    <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>查看作业</span></h2>\n                    <i-table  highlight-row border :columns=\"columns2\" :data=\"data2\" :content=\"self\" ></i-table>\n                    <section class=\"pop-wrapper-ren\" v-show=\"data3_pop_wrapper_ren\"> \n                        <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>任务详情</span></h2>\n                        <i-table  highlight-row border :columns=\"columns3\" :data=\"data3\" :content=\"self\" size=\"small\" ></i-table>\n                        <button id=\"btn\" style=\"display:node\"></button>\n                    </section>  \n                    <div class=\"popCenter\"  v-show=\"bg1\">\n                            <h2>抽样下载 (输入数字)</h2>\n                            <rd-number :number=\"number\"></rd-number>\n                            <span class=\"popTop\"><i-button type=\"ghost\" @click=\"ballSuccer1\">确定</i-button></span>\n                            <i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n                    <div class=\"popCenter\"  v-show=\"bg2\">\n                            <h2>Top下载 (输入数字)</h2>\n                            <rd-number :number=\"numberTop\"></rd-number>\n                            <span class=\"popTop\"><i-button type=\"ghost\" @click=\"ballSuccer2\">确定</i-button></span>\n                            <i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n                    <div class=\"popCenter3\"  v-show=\"bg3\">\n                        <h2>下载需审批：</h2>\n                        <p>明细数据下载说明请查看<a href=\"http://wiki.tenddata.com/pages/viewpage.action?pageId=26808334\">流程说明</a>，如有问题请发邮件给直接领导、及何兴权(xingquan.he@tendcloud.com)。</p><i-button type=\"ghost\" @click=\"off\" class=\"popOff\">X</i-button>\n                    </div>\n            </Tab-pane>\n            <Tab-pane label=\"条件信息\" key=\"key2\">\n                <h2> <Icon type=\"ios-browsers-outline\" size=\"18\"></Icon><span>作业条件信息</span></h2>\n                    <div class=\"pop-wrapper-list\">\n                    <section class=\"pop-wrapper-list-header\"><label for=\"\">条件名称</label><h2>条件详情</h2></section>\n                    <section v-for=\"item in allArray\" >\n                        <label>{{leftArr[$index]}}</label>\n                        <nav> \n                            <div v-for='(key,val) in item' track-by=\"$index\">\n                                <span class=\"list-p1\"><b>{{key}}：</b></span>\n                                <div class=\"list-p2\" v-if=\"tiaojian(val)\">\n                                    <div v-for=\"val in allPut\">\n                                        <div v-for=\"(k,v) in val\" style=\"display:-webkit-flex\">\n                                            <span>{{k}}：</span><div class=\"list-p2\">{{v}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"list-p2\" v-else>{{val}}</div>\n                            </div>\n                        </nav>\n                    </section>\n                    </div>\n            </Tab-pane>\n            </Tabs>\n            <Modal\n                :visible.sync=\"modal1\"\n                title=\"提示\"\n                @on-ok=\"yun\"\n                >\n                <p style='text-align:center;line-height:50px;'>您确认上传到云传？</p>\n            </Modal>\n        </section>    \n</div>\n       \n";

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

	module.exports = "<!-- 数据交付 -->\n\t<div class=\"atm-ide\">\n         <div class=\"demo-spin-container\" v-show=\"loader\">\n            <Spin fix>\n                <Icon type=\"load-c\" size=18 class=\"demo-spin-icon-load\"></Icon>\n                <div>Loading</div>\n            </Spin>\n        </div>\n\t\t<div class=\"delivery_btn\">\n\t\t\t<!-- <i-input :value.sync=\"projectVal\" size=\"small\" placeholder=\"请输入项目名称...\" style=\"width: 300px\" ></i-input>\n\t\t\t<i-button type=\"primary\" @click=\"projectsubmit\"  size=\"small\" class=\"delivery-mar\">创建项目</i-button> -->\n            <i-input :value.sync=\"search\" size=\"small\" placeholder=\"请输入要搜索的内容...\" style=\"width: 300px;margin-left:10px\" @keyup.enter=\"searchPlay\"></i-input>\n            <i-button type=\"primary\"   size=\"small\" @click=\"searchPlay\" icon=\"ios-search\" class=\"delivery-mar\">搜索</i-button>\n            <i-button type=\"ghost\" icon=\"refresh\" class=\"delivery-mar\" style=\"float:right;margin-right:0px;padding:3px 15px\" @click=\"fetchData\"  class=\"delivery-mar\" title='刷新'></i-button>\n        </div>\n\t\t<i-table  highlight-row border :columns=\"columns1\" :data=\"data1\" :content=\"self\" size=\"small\" ></i-table>\n        <div class='page-footer'>\n                <Page :total='navigatePages'  @on-change=\"changePage\" :current=\"current\" :page-size='15' show-total></Page>\n\t    </div>\n\t \t<Modal\n\t        :visible.sync=\"modal1\"\n\t        :style=\"{width: '90%'}\"\n            title='查看作业详情'\n            class-name=\"vertical-center-modal\"\n            >\n           <div slot=\"footer\" class=\"deliveryFooter\"><Pop :msg='msg'><Pop></div>\n\t   </Modal>\n     </div>\n";

/***/ })

});
//# sourceMappingURL=3.chunk.js.map