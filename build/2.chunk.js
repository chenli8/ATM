webpackJsonp([2,14],Array(72).concat([
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(73)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\connect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
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
	  var id = "_v-38301c3c/connect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _menu = __webpack_require__(74);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _main = __webpack_require__(78);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _store = __webpack_require__(80);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	    store: _store2.default, // 译注：简写，等效于 store: store
	    components: {
	        Menu: _menu2.default,
	        Main: _main2.default
	    },
	    ready: function ready() {
	        this.connect();
	    },
	
	    methods: {
	        connect: function connect() {
	            var _this = this;
	
	            function getCookie(name) {
	                var arr,
	                    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	                if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	            }
	            var useremail = getCookie('useremail'),
	                //cook
	            userpassword = getCookie('userpassword'),
	                //cook
	            userjson = getCookie('atmJson'),
	                //cook
	            sessionemail = sessionStorage.getItem('sessionUser'),
	                //seccess
	            sessionPassword = sessionStorage.getItem('sessionPassword'),
	                //seccess
	            sessionAtmJson = sessionStorage.getItem('sessionAtmJson'),
	                //seccess
	            a = userpassword || sessionemail ? true : false;
	            //没有用户名跳转登录页
	            if (!a) {
	                this.$router.go("/login");
	            } else {
	                var url = ("http://yhdc.tendcloud.com/atm_backend/") + "systemManager/login";
	                var email = '',
	                    pwd = '',
	                    jsonString = '',
	                    k = '';
	                if (useremail) {
	                    email = useremail;
	                    pwd = userpassword;
	                    jsonString = userjson;
	                    k = 1;
	                } else if (sessionemail) {
	                    email = sessionemail;
	                    pwd = sessionPassword;
	                    jsonString = sessionAtmJson;
	                    k = 2;
	                }
	                Vue.http.post(url, {
	                    email: email,
	                    password: pwd
	                }, { emulateJSON: true }).then(function (response) {
	                    if (response.body.resultValue != jsonString) {
	                        var _getCookie = function _getCookie(name) {
	                            var arr,
	                                reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	                            if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	                        };
	
	                        var delCookie = function delCookie(name) {
	                            var exp = new Date();
	                            exp.setTime(exp.getTime() - 1);
	                            var cval = _getCookie(name);
	                            if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	                        };
	
	                        delCookie('useremail');
	                        delCookie('userpassword');
	                        delCookie('atmJson');
	                        sessionStorage.removeItem('sessionUser');
	                        sessionStorage.removeItem('sessionPassword');
	                        sessionStorage.removeItem('sessionAtmJson');
	
	                        _this.$router.go("/login");
	                    }
	                }, function (response) {
	                    console.log('请求数据失败');
	                });
	            } //
	        }
	    }
	    // </script>
	
	    /* generated by vue-loader */
	
	}; // <template>
	//     <div id='app'>
	//         <menu></menu>
	//         <main></main>
	//     </div>
	// </template>
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(75)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\components\\menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(76)
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
	  var id = "_v-580d7117/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//     <div class='menu-left' id='menu'>
	//         <img src='../images/logo/logo1.png' style='width:100px;margin:17px 0px 0px 5px;' />
	//         <ul @click.stop='setSelected'>
	//             <li v-for='item in config.data' class='trans' :class='{active:item.path.indexOf(selected)!=-1}'>
	//                 <a v-link="{ path:item.path }">{{item.name}}</a>
	//             </li>
	//         </ul>
	//         <section class="outLogin">
	//            <p>
	//                <label for="" >用户名：</label>
	//                <span>{{cookies}}</span>
	//                <i-button type="ghost" @click="handbook" style='margin-left:10px'>用户使用手册</i-button>
	//                <i-button type="ghost" @click="changePwd" style='margin:0 10px'>修改密码</i-button> <i-button type="ghost" @click="outLogin" >退出</i-button>
	//             </p> 
	//         </section>
	//         <Modal
	//             :visible.sync="modal1"
	//             :style="{width: '40%'}"
	//             :on-cancel='outGo()'
	//             title="修改密码"
	//             >
	//             <div style='padding-left:70px'>
	//                 <p style='padding-bottom:10px'>
	//                    <label for=""><Icon type="android-person"></Icon> 用户名：{{cookies}}</label>
	//                 </p>
	//                  <i-form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
	//                     <Form-item prop="user">
	//                         <i-input type="password" :value.sync="formInline.user" placeholder="old password">
	//                             <Icon type="ios-locked-outline" slot="prepend"></Icon>
	//                         </i-input>
	//                     </Form-item>
	//                     <Form-item prop="password">
	//                         <i-input type="password" :value.sync="formInline.password" placeholder="new password">
	//                             <Icon type="ios-locked-outline" slot="prepend"></Icon>
	//                         </i-input>
	//                     </Form-item>
	//                 </i-form>
	//             </div>
	//             <div slot="footer">
	//                   <i-button type="primary" @click="handleSubmit('formInline')">确定修改</i-button>
	//             </div>
	//          </Modal>
	//     </div>
	//
	// </template>
	// <script>
	var md5 = __webpack_require__(46);
	//import MenuConfig from '../config/menu.config';
	exports.default = {
	    data: function data() {
	        return {
	            formInline: {
	                user: '',
	                password: ''
	            },
	            ruleInline: {
	                user: [{ required: true, message: '请填写旧密码', trigger: 'blur' }],
	                password: [{ required: true, message: '请填写新密码', trigger: 'blur' }, { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }]
	            },
	            selected: '',
	            config: '',
	            cookies: '',
	            modal1: false
	        };
	    },
	    ready: function ready() {
	        this.init();
	    },
	
	    methods: {
	        init: function init() {
	            this.getCookie();
	            this.setSelected();
	        },
	        getCookie: function getCookie() {
	            function getCookie(name) {
	                var arr,
	                    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	                if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	            }
	            var useremail = getCookie('useremail'),
	                sessionemail = sessionStorage.getItem('sessionUser'),
	                atmJson = getCookie('atmJson'),
	                sessionAtmJson = sessionStorage.getItem('sessionAtmJson'),
	                arrname = [],
	                arrurl = [];
	            if (atmJson) {
	                this.cookies = useremail;
	                if (JSON.parse(atmJson).menus) {
	                    var atm = JSON.parse(atmJson).menus;
	                    for (var i = 0; i < atm.length; i++) {
	                        arrname.push(atm[i].name);
	                        arrurl.push(atm[i].url);
	                    }
	                }
	            } else if (sessionAtmJson) {
	                this.cookies = sessionemail;
	                if (JSON.parse(sessionAtmJson).menus) {
	                    var _atm = JSON.parse(sessionAtmJson).menus;
	                    for (var i = 0; i < _atm.length; i++) {
	                        arrname.push(_atm[i].name);
	                        arrurl.push(_atm[i].url);
	                    }
	                }
	            }
	            var data = [];
	            for (var i = 0; i < arrname.length; i++) {
	                data.push({ name: arrname[i], path: arrurl[i] });
	            }
	            //data.push({name:'小工具',path:'instrument'});
	            var obj = {};
	            obj.data = data;
	            this.config = obj;
	        },
	
	        /**
	         * 激活左侧菜单选中项
	         */
	        setSelected: function setSelected() {
	            var hash = window.location.hash;
	            this.selected = this.config.selected;
	            for (var i = 0, len = this.config.data.length; i < len; i++) {
	                var data = this.config.data[i];
	                if (hash.indexOf(data.path) != -1) {
	                    this.selected = data.path;
	                    return 0;
	                }
	            }
	        },
	        outLogin: function outLogin() {
	            delCookie('useremail');
	            delCookie('userpassword');
	            delCookie('atmJson');
	            sessionStorage.removeItem('sessionUser');
	            sessionStorage.removeItem('sessionPassword');
	            sessionStorage.removeItem('sessionAtmJson');
	            function getCookie(name) {
	                var arr,
	                    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	                if (arr = document.cookie.match(reg)) return unescape(arr[2]);else return null;
	            }
	            function delCookie(name) {
	                var exp = new Date();
	                exp.setTime(exp.getTime() - 1);
	                var cval = getCookie(name);
	                if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	            }
	            this.$router.go("/login");
	        },
	        changePwd: function changePwd() {
	            this.modal1 = true;
	        },
	        outGo: function outGo() {
	            this.formInline.user = '';
	            this.formInline.password = '';
	        },
	        handleSubmit: function handleSubmit(name) {
	            var _this = this;
	
	            this.$refs[name].validate(function (valid) {
	                if (valid) {
	                    var url = ("http://yhdc.tendcloud.com/atm_backend/") + "systemManager/user/updatePassword";
	                    Vue.http.post(url, {
	                        email: _this.cookies,
	                        oldPass: md5(_this.formInline.user),
	                        newPass: md5(_this.formInline.password)
	                    }, { emulateJSON: true }).then(function (response) {
	                        if (response.body.resultCode === 0) {
	                            _this.$Notice.success({ title: '修改密码成功', desc: '返回登录页重新登陆' });
	                            _this.outLogin();
	                        } else {
	                            _this.$Notice.error({ title: '修改密码失败', desc: '修改密码失败' });
	                        }
	                    }, function (response) {
	                        console.log('请求不到数据');
	                    });
	                }
	            });
	        },
	        handbook: function handbook() {
	            window.open('http://wiki.tenddata.com/pages/viewpage.action?pageId=26084143', '_blank');
	        }
	    }
	    // </script>
	
	    /* generated by vue-loader */
	
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "\n\n<div class='menu-left' id='menu'>\n    <img src='" + __webpack_require__(77) + "' style='width:100px;margin:17px 0px 0px 5px;' />\n    <ul @click.stop='setSelected'>\n        <li v-for='item in config.data' class='trans' :class='{active:item.path.indexOf(selected)!=-1}'>\n            <a v-link=\"{ path:item.path }\">{{item.name}}</a>\n        </li>\n    </ul>\n    <section class=\"outLogin\">\n       <p>\n           <label for=\"\" >用户名：</label>\n           <span>{{cookies}}</span>\n           <i-button type=\"ghost\" @click=\"handbook\" style='margin-left:10px'>用户使用手册</i-button>\n           <i-button type=\"ghost\" @click=\"changePwd\" style='margin:0 10px'>修改密码</i-button> <i-button type=\"ghost\" @click=\"outLogin\" >退出</i-button>\n        </p> \n    </section>\n    <Modal\n        :visible.sync=\"modal1\"\n        :style=\"{width: '40%'}\"\n        :on-cancel='outGo()'\n        title=\"修改密码\"\n        >\n        <div style='padding-left:70px'>\n            <p style='padding-bottom:10px'>\n               <label for=\"\"><Icon type=\"android-person\"></Icon> 用户名：{{cookies}}</label>\n            </p>\n             <i-form v-ref:form-inline :model=\"formInline\" :rules=\"ruleInline\" inline>\n                <Form-item prop=\"user\">\n                    <i-input type=\"password\" :value.sync=\"formInline.user\" placeholder=\"old password\">\n                        <Icon type=\"ios-locked-outline\" slot=\"prepend\"></Icon>\n                    </i-input>\n                </Form-item>\n                <Form-item prop=\"password\">\n                    <i-input type=\"password\" :value.sync=\"formInline.password\" placeholder=\"new password\">\n                        <Icon type=\"ios-locked-outline\" slot=\"prepend\"></Icon>\n                    </i-input>\n                </Form-item>\n            </i-form>\n        </div>\n        <div slot=\"footer\">\n              <i-button type=\"primary\" @click=\"handleSubmit('formInline')\">确定修改</i-button>\n        </div>\n     </Modal>\n</div>\n\n";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAAA+CAMAAACMeifMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0U5Q0Q0Q0VGRUY0MTFFNjkzNDRENDA5NUNEMjQzMzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0U5Q0Q0Q0RGRUY0MTFFNjkzNDRENDA5NUNEMjQzMzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4QzRBNTk2MzE0NTExRTZBODNEODMzMTdEQ0U1QkFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4QzRBNTk3MzE0NTExRTZBODNEODMzMTdEQ0U1QkFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1CKrUAAAAIRQTFRF////LYzwLfW+brD1e7f2iL73VKHzOZPx1+n8iPnae/nW5fH9VPfKbvjStfvoMvXA3P30d7X1kcP3ZPjPO5Txg/nZYffO/P3/OZLxyPzuPZXx0v3xXabz3Oz89vr+g7v2lvreePnV6vP96fP9W6XzqtH5cfjTuvzqMI7wrfvmtdb6////4lD6NwAAACx0Uk5T/////////////////////////////////////////////////////////wDH1gmMAAACs0lEQVR42uzcaVPcMAwG4BdalrYchV7c0Ite+v//r9tmhiEbSZYd23ES6dOy8TjeJ97IRxaQR2LACcbTISLc7RkdIkOpEeuiA7LZrYwOyGe3Ljogo53TOZ2FDshp53RO1wzdNEND5mTqxxFax747GV0dPeZUi6BDNbmRdGiPrjheMh2C1ezSnb7exuez7au7dwd8fMtKB7NA63Rv9v/F2xtcXO8J8Woc3aD51s8/jg5j6GCn2/+Co70ydIELmZlOv0LaXS2Z7qQ8nZjMstNREh1apqNl0X3s6H5UobPaZaFDOh1MdFcd3Snuf0l0X8vRQctvZLj78KdMo0MkHX6+Pz7+9Hv74s/tZrO57LQ+bJ7i+2PqoExuKJv5+HSolJycrh8vOrqXOXYolIYqc1zuzYj16u6oUExsUf/uiNnRwUyH0Blz0FFjdKR0MFi/sKXo0O+7rdOF+qJSct10QuZlxlmm4c3uBTDnfObLUIMuatpj6w9BnuBoKJaOdumoAp18aH50cDqnS6KLPPmQDrOh46rX+ozxphtLR306ap+Orz4wYSpHh9nQSdWH9wPTduAkOqX7oc3BCcx0SKRDPB0q0iUPiXv1qnRyydDmjZ1uOIdojI6Zcg2zo0THlMxNh1nQgZs3armEnI5tWZiOTHTqWr5KR/xyTSt0KEcnpJYl0nE8prnFouiSNhNhxrJN0pZNh4J04l6qnY7YDaYm6Ng1czMWYtYP1F4fnNw0RwelZYA1TWB1dOJsi3088OnvwQgQ0XSIpqM0uvPD//FQ4dFE5Zj0HJfcEOSgo1F0xZ/qVI9Lj0lY6eKT7ozojItEQTpUoKOW6OQCgZyilAzSIZKO2qOLWiYl4SEemjT81zpT0JHTOV1tOnK6RDpyOsr783WnS4Zb33+cyFmj03k4ndM1F38FGACgiICuqeJehgAAAABJRU5ErkJggg=="

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(79)
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
	  var id = "_v-7b89a471/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div  class='main-content'>\n   <router-view></router-view>\n</div> \n";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(81);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _id = __webpack_require__(82);
	
	var _id2 = _interopRequireDefault(_id);
	
	var _id3 = __webpack_require__(86);
	
	var _id4 = _interopRequireDefault(_id3);
	
	var _location = __webpack_require__(87);
	
	var _location2 = _interopRequireDefault(_location);
	
	var _location3 = __webpack_require__(88);
	
	var _location4 = _interopRequireDefault(_location3);
	
	var _equipment = __webpack_require__(89);
	
	var _equipment2 = _interopRequireDefault(_equipment);
	
	var _equipment3 = __webpack_require__(128);
	
	var _equipment4 = _interopRequireDefault(_equipment3);
	
	var _equipmentPro = __webpack_require__(129);
	
	var _equipmentPro2 = _interopRequireDefault(_equipmentPro);
	
	var _equipmentPro3 = __webpack_require__(130);
	
	var _equipmentPro4 = _interopRequireDefault(_equipmentPro3);
	
	var _region = __webpack_require__(131);
	
	var _region2 = _interopRequireDefault(_region);
	
	var _region3 = __webpack_require__(132);
	
	var _region4 = _interopRequireDefault(_region3);
	
	var _tag = __webpack_require__(133);
	
	var _tag2 = _interopRequireDefault(_tag);
	
	var _tag3 = __webpack_require__(134);
	
	var _tag4 = _interopRequireDefault(_tag3);
	
	var _app = __webpack_require__(135);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _app3 = __webpack_require__(136);
	
	var _app4 = _interopRequireDefault(_app3);
	
	var _appType = __webpack_require__(137);
	
	var _appType2 = _interopRequireDefault(_appType);
	
	var _appType3 = __webpack_require__(138);
	
	var _appType4 = _interopRequireDefault(_appType3);
	
	var _outregion = __webpack_require__(139);
	
	var _outregion2 = _interopRequireDefault(_outregion);
	
	var _outregion3 = __webpack_require__(140);
	
	var _outregion4 = _interopRequireDefault(_outregion3);
	
	var _outtag = __webpack_require__(141);
	
	var _outtag2 = _interopRequireDefault(_outtag);
	
	var _outtag3 = __webpack_require__(142);
	
	var _outtag4 = _interopRequireDefault(_outtag3);
	
	var _brush = __webpack_require__(143);
	
	var _brush2 = _interopRequireDefault(_brush);
	
	var _brush3 = __webpack_require__(144);
	
	var _brush4 = _interopRequireDefault(_brush3);
	
	var _idformout = __webpack_require__(145);
	
	var _idformout2 = _interopRequireDefault(_idformout);
	
	var _idformout3 = __webpack_require__(146);
	
	var _idformout4 = _interopRequireDefault(_idformout3);
	
	var _struct = __webpack_require__(147);
	
	var _struct2 = _interopRequireDefault(_struct);
	
	var _struct3 = __webpack_require__(148);
	
	var _struct4 = _interopRequireDefault(_struct3);
	
	var _behavior = __webpack_require__(149);
	
	var _behavior2 = _interopRequireDefault(_behavior);
	
	var _behavior3 = __webpack_require__(150);
	
	var _behavior4 = _interopRequireDefault(_behavior3);
	
	var _putregion = __webpack_require__(151);
	
	var _putregion2 = _interopRequireDefault(_putregion);
	
	var _putregion3 = __webpack_require__(152);
	
	var _putregion4 = _interopRequireDefault(_putregion3);
	
	var _puttag = __webpack_require__(153);
	
	var _puttag2 = _interopRequireDefault(_puttag);
	
	var _puttag3 = __webpack_require__(154);
	
	var _puttag4 = _interopRequireDefault(_puttag3);
	
	var _outbehavior = __webpack_require__(155);
	
	var _outbehavior2 = _interopRequireDefault(_outbehavior);
	
	var _outbehavior3 = __webpack_require__(156);
	
	var _outbehavior4 = _interopRequireDefault(_outbehavior3);
	
	var _outlocation = __webpack_require__(157);
	
	var _outlocation2 = _interopRequireDefault(_outlocation);
	
	var _outlocation3 = __webpack_require__(158);
	
	var _outlocation4 = _interopRequireDefault(_outlocation3);
	
	var _putlocation = __webpack_require__(159);
	
	var _putlocation2 = _interopRequireDefault(_putlocation);
	
	var _putlocation3 = __webpack_require__(160);
	
	var _putlocation4 = _interopRequireDefault(_putlocation3);
	
	var _hot = __webpack_require__(161);
	
	var _hot2 = _interopRequireDefault(_hot);
	
	var _hot3 = __webpack_require__(162);
	
	var _hot4 = _interopRequireDefault(_hot3);
	
	var _active = __webpack_require__(163);
	
	var _active2 = _interopRequireDefault(_active);
	
	var _active3 = __webpack_require__(164);
	
	var _active4 = _interopRequireDefault(_active3);
	
	var _outactive = __webpack_require__(165);
	
	var _outactive2 = _interopRequireDefault(_outactive);
	
	var _outactive3 = __webpack_require__(166);
	
	var _outactive4 = _interopRequireDefault(_outactive3);
	
	var _poi = __webpack_require__(167);
	
	var _poi2 = _interopRequireDefault(_poi);
	
	var _poi3 = __webpack_require__(168);
	
	var _poi4 = _interopRequireDefault(_poi3);
	
	var _separating = __webpack_require__(169);
	
	var _separating2 = _interopRequireDefault(_separating);
	
	var _separating3 = __webpack_require__(170);
	
	var _separating4 = _interopRequireDefault(_separating3);
	
	var _poiFilter = __webpack_require__(171);
	
	var _poiFilter2 = _interopRequireDefault(_poiFilter);
	
	var _poiFilter3 = __webpack_require__(172);
	
	var _poiFilter4 = _interopRequireDefault(_poiFilter3);
	
	var _outpoiFilter = __webpack_require__(173);
	
	var _outpoiFilter2 = _interopRequireDefault(_outpoiFilter);
	
	var _outpoiFilter3 = __webpack_require__(174);
	
	var _outpoiFilter4 = _interopRequireDefault(_outpoiFilter3);
	
	var _putpoiFilter = __webpack_require__(175);
	
	var _putpoiFilter2 = _interopRequireDefault(_putpoiFilter);
	
	var _putpoiFilter3 = __webpack_require__(176);
	
	var _putpoiFilter4 = _interopRequireDefault(_putpoiFilter3);
	
	var _digpoiFilter = __webpack_require__(177);
	
	var _digpoiFilter2 = _interopRequireDefault(_digpoiFilter);
	
	var _digpoiFilter3 = __webpack_require__(178);
	
	var _digpoiFilter4 = _interopRequireDefault(_digpoiFilter3);
	
	var _ghetto = __webpack_require__(179);
	
	var _ghetto2 = _interopRequireDefault(_ghetto);
	
	var _ghetto3 = __webpack_require__(180);
	
	var _ghetto4 = _interopRequireDefault(_ghetto3);
	
	var _place = __webpack_require__(181);
	
	var _place2 = _interopRequireDefault(_place);
	
	var _place3 = __webpack_require__(182);
	
	var _place4 = _interopRequireDefault(_place3);
	
	var _reside = __webpack_require__(183);
	
	var _reside2 = _interopRequireDefault(_reside);
	
	var _reside3 = __webpack_require__(184);
	
	var _reside4 = _interopRequireDefault(_reside3);
	
	var _subdistrict = __webpack_require__(185);
	
	var _subdistrict2 = _interopRequireDefault(_subdistrict);
	
	var _subdistrict3 = __webpack_require__(186);
	
	var _subdistrict4 = _interopRequireDefault(_subdistrict3);
	
	var _putsubdistrict = __webpack_require__(187);
	
	var _putsubdistrict2 = _interopRequireDefault(_putsubdistrict);
	
	var _putsubdistrict3 = __webpack_require__(188);
	
	var _putsubdistrict4 = _interopRequireDefault(_putsubdistrict3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.use(_vuex2.default);
	
	exports.default = new _vuex2.default.Store({
	    modules: {
	        idForm: _id2.default,
	        idConsole: _id4.default,
	        locationForm: _location2.default,
	        locationConsole: _location4.default,
	        equipmentForm: _equipment2.default,
	        equipmentConsole: _equipment4.default,
	        equipmentProForm: _equipmentPro2.default,
	        equipmentProConsole: _equipmentPro4.default,
	        regionForm: _region2.default,
	        regionConsole: _region4.default,
	        tagForm: _tag2.default,
	        tagConsole: _tag4.default,
	        appForm: _app2.default,
	        appConsole: _app4.default,
	        appTypeForm: _appType2.default,
	        appTypeConsole: _appType4.default,
	        outRegionForm: _outregion2.default,
	        outRegionConsole: _outregion4.default,
	        outTagForm: _outtag2.default,
	        outTagConsole: _outtag4.default,
	        brushForm: _brush2.default,
	        brushConsole: _brush4.default,
	        idFormOutForm: _idformout2.default,
	        idFormOutConsole: _idformout4.default,
	        structForm: _struct2.default,
	        structConsole: _struct4.default,
	        behaviorForm: _behavior2.default,
	        behaviorConsole: _behavior4.default,
	        putRegionForm: _putregion2.default,
	        putRegionConsole: _putregion4.default,
	        putTagForm: _puttag2.default,
	        putTagConsole: _puttag4.default,
	        outBehaviorForm: _outbehavior2.default,
	        outBehaviorConsole: _outbehavior4.default,
	        outLocationForm: _outlocation2.default,
	        outLocationConsole: _outlocation4.default,
	        putLocationForm: _putlocation2.default,
	        putLocationConsole: _putlocation4.default,
	        hotForm: _hot2.default,
	        hotConsole: _hot4.default,
	        activeForm: _active2.default,
	        activeConsole: _active4.default,
	        outActiveForm: _outactive2.default,
	        outActiveConsole: _outactive4.default,
	        outPoiForm: _poi2.default,
	        outPoiConsole: _poi4.default,
	        separatingForm: _separating2.default,
	        outSeparatingConsole: _separating4.default,
	        poiFilterForm: _poiFilter2.default,
	        poiFilterConsole: _poiFilter4.default,
	        outPoiFilterForm: _outpoiFilter2.default,
	        outPoiFilterConsole: _outpoiFilter4.default,
	        putPoiFilterForm: _putpoiFilter2.default,
	        putPoiFilterConsole: _putpoiFilter4.default,
	        digPoiFilterForm: _digpoiFilter2.default,
	        digPoiFilterConsole: _digpoiFilter4.default,
	        ghettoForm: _ghetto2.default,
	        ghettoConsole: _ghetto4.default,
	        placeForm: _place2.default,
	        placeConsole: _place4.default,
	        resideForm: _reside2.default,
	        resideConsole: _reside4.default,
	        subdistrictForm: _subdistrict2.default,
	        subdistrictConsole: _subdistrict4.default,
	        putSubdistrictForm: _putsubdistrict2.default,
	        putSubdistrictConsole: _putsubdistrict4.default
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v0.8.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  var createClass = function () {
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
	
	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	
	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */
	
	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            existing.push(obj[key]);
	          } else {
	            prev[key] = [prev[key], obj[key]];
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }
	
	  /**
	   * Deep clone an object. Faster than JSON.parse(JSON.stringify()).
	   *
	   * @param {*} obj
	   * @return {*}
	   */
	
	  function deepClone(obj) {
	    if (Array.isArray(obj)) {
	      return obj.map(deepClone);
	    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	      var cloned = {};
	      var keys = Object.keys(obj);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        var key = keys[i];
	        cloned[key] = deepClone(obj[key]);
	      }
	      return cloned;
	    } else {
	      return obj;
	    }
	  }
	
	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */
	
	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }
	
	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }
	
	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	  var devtoolMiddleware = {
	    onInit: function onInit(state, store) {
	      if (!hook) return;
	      hook.emit('vuex:init', store);
	      hook.on('vuex:travel-to-state', function (targetState) {
	        store._dispatching = true;
	        store._vm.state = targetState;
	        store._dispatching = false;
	      });
	    },
	    onMutation: function onMutation(mutation, state) {
	      if (!hook) return;
	      hook.emit('vuex:mutation', mutation, state);
	    }
	  };
	
	  function override (Vue) {
	    var version = Number(Vue.version.split('.')[0]);
	
	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }
	
	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */
	
	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection
	
	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option
	
	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }
	
	    /**
	     * Setter for all getter properties.
	     */
	
	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }
	
	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */
	
	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }
	
	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */
	
	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;
	
	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }
	
	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */
	
	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }
	
	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }
	
	  var Vue = void 0;
	  var uid = 0;
	
	  var Store = function () {
	
	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} middlewares
	     *        - {Boolean} strict
	     */
	
	    function Store() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$middlewares = _ref.middlewares;
	      var middlewares = _ref$middlewares === undefined ? [] : _ref$middlewares;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);
	
	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      this._setupMiddlewares(middlewares, state);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	    }
	
	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */
	
	    createClass(Store, [{
	      key: 'dispatch',
	
	
	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */
	
	      value: function dispatch(type) {
	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }
	
	        var silent = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          payload = [type.payload];
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var mutation = this._mutations[type];
	        var state = this.state;
	        if (mutation) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(mutation)) {
	            mutation.forEach(function (m) {
	              return m.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            mutation.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) this._applyMiddlewares(type, payload);
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }
	
	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */
	
	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this2 = this;
	
	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this2.state);
	        }, cb, options);
	      }
	
	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */
	
	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;
	
	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }
	
	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */
	
	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        Object.keys(modules).forEach(function (key) {
	          Vue.set(state, key, modules[key].state || {});
	        });
	      }
	
	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */
	
	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        var allMutations = [this._rootMutations];
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];
	          if (!module || !module.mutations) return;
	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }
	
	              original.apply(undefined, [state[key]].concat(args));
	            };
	          });
	          allMutations.push(mutations);
	        });
	        this._mutations = mergeObjects(allMutations);
	      }
	
	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */
	
	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this3 = this;
	
	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this3._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	
	      /**
	       * Setup the middlewares. The devtools middleware is always
	       * included, since it does nothing if no devtool is detected.
	       *
	       * A middleware can demand the state it receives to be
	       * "snapshots", i.e. deep clones of the actual state tree.
	       *
	       * @param {Array} middlewares
	       * @param {Object} state
	       */
	
	    }, {
	      key: '_setupMiddlewares',
	      value: function _setupMiddlewares(middlewares, state) {
	        var _this4 = this;
	
	        this._middlewares = [devtoolMiddleware].concat(middlewares);
	        this._needSnapshots = middlewares.some(function (m) {
	          return m.snapshot;
	        });
	        if (this._needSnapshots) {
	          console.log('[vuex] One or more of your middlewares are taking state snapshots ' + 'for each mutation. Make sure to use them only during development.');
	        }
	        var initialSnapshot = this._prevSnapshot = this._needSnapshots ? deepClone(state) : null;
	        // call init hooks
	        this._middlewares.forEach(function (m) {
	          if (m.onInit) {
	            m.onInit(m.snapshot ? initialSnapshot : state, _this4);
	          }
	        });
	      }
	
	      /**
	       * Apply the middlewares on a given mutation.
	       *
	       * @param {String} type
	       * @param {Array} payload
	       */
	
	    }, {
	      key: '_applyMiddlewares',
	      value: function _applyMiddlewares(type, payload) {
	        var _this5 = this;
	
	        var state = this.state;
	        var prevSnapshot = this._prevSnapshot;
	        var snapshot = void 0,
	            clonedPayload = void 0;
	        if (this._needSnapshots) {
	          snapshot = this._prevSnapshot = deepClone(state);
	          clonedPayload = deepClone(payload);
	        }
	        this._middlewares.forEach(function (m) {
	          if (m.onMutation) {
	            if (m.snapshot) {
	              m.onMutation({ type: type, payload: clonedPayload }, snapshot, prevSnapshot, _this5);
	            } else {
	              m.onMutation({ type: type, payload: payload }, state, _this5);
	            }
	          }
	        });
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Vuex root state is read only.');
	      }
	    }]);
	    return Store;
	  }();
	
	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }
	
	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }
	
	  var index = {
	    Store: Store,
	    install: install
	  };
	
	  return index;
	
	}));

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newDeviceList = _businessUtil.deviceList.slice(0, _businessUtil.deviceList.length - 1);
	
	var newMd5DeviceList1 = _businessUtil.md5DeviceList.slice(0, 4);
	var newMd5DeviceList2 = _businessUtil.md5DeviceList.slice(5);
	var newMd5DeviceList = newMd5DeviceList1.concat(newMd5DeviceList2);
	var state = {
	    formName: 'idForm',
	    //选中项-显示Label
	    selectedLabel: '',
	    //选中项-显示文字
	    selectedText: '',
	    //选中项-ID
	    selectedId: 0,
	    //数据格式-显示文字
	    listLabel: '数据格式',
	    //数据格式-集合
	    deviceList: newDeviceList,
	    //MD5哈希过的数据格式-显示文字
	    md5Label: 'MD5哈希过的数据格式',
	    //MD5哈希过的数据格式-集合
	    md5DeviceList: newMd5DeviceList,
	    //上传文件
	    fileLabel: '上传文件',
	    //上传路经
	    fileList: [],
	    //文件名
	    fileListname: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: ''
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_IDFORM, function (state) {
	    state.selectedLabel = '';
	    state.selectedText = '';
	    state.selectedId = 0;
	    state.fileList = [];
	    state.submitData = {};
	    state.fileListname = [];
	    state.html = "";
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_IDFORM_SELECTED, function (state, item) {
	    state.selectedLabel = item.label;
	    state.selectedText = item.text;
	    state.selectedId = item.id;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_IDFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_IDFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_IDFORM, function (state) {
	    if (state.fileList.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0138
	        };
	    } else if (state.selectedId < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0139
	        };
	    } else {
	        state.submitData = {
	            expType: 'uploadFilter',
	            exps: [{
	                inputPath: state.fileList.length ? state.fileList[0] : '',
	                inputId: state.selectedId,
	                expCode: '01000'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**---------------------------ID form--------------------------------------------------------------**/
	// 删除
	var DELETE_IDFORM = exports.DELETE_IDFORM = 'DELETE_IDFORM';
	// 修改选中项
	var UPDATE_IDFORM_SELECTED = exports.UPDATE_IDFORM_SELECTED = 'UPDATE_IDFORM_SELECTED';
	// 上传文件
	var ADD_IDFORM_FILE = exports.ADD_IDFORM_FILE = 'ADD_IDFORM_FILE';
	// 删除文件
	var DELETE_IDFORM_FILE = exports.DELETE_IDFORM_FILE = 'DELETE_IDFORM_FILE';
	// 提交数据
	var SUBMIT_IDFORM = exports.SUBMIT_IDFORM = 'SUBMIT_IDFORM';
	/**---------------------------ID console-----------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_IDCONSOLE = exports.SWITCH_IDCONSOLE = 'SWITCH_IDCONSOLE';
	
	/**---------------------------位置条件 form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_LOCATIONFORM_DATETYPE = exports.UPDATE_LOCATIONFORM_DATETYPE = 'UPDATE_LOCATIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_LOCATIONFORM_DATE = exports.UPDATE_LOCATIONFORM_DATE = 'UPDATE_LOCATIONFORM_DATE';
	// 修改位置类型
	var UPDATE_LOCATIONFORM_LOCATIONTYPE = exports.UPDATE_LOCATIONFORM_LOCATIONTYPE = 'UPDATE_LOCATIONFORM_LOCATIONTYPE';
	// 修改坐标类型
	var UPDATE_LOCATIONFORM_COORDINARYTYPE = exports.UPDATE_LOCATIONFORM_COORDINARYTYPE = 'UPDATE_LOCATIONFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_LOCATIONFORM_TIME = exports.ADD_LOCATIONFORM_TIME = 'ADD_LOCATIONFORM_TIME';
	// 删除小时段
	var DELETE_LOCATIONFORM_TIME = exports.DELETE_LOCATIONFORM_TIME = 'DELETE_LOCATIONFORM_TIME';
	//城市下拉框检索条件发生变化
	var UPDATE_LOCATION_FILTERSELECTED = exports.UPDATE_LOCATION_FILTERSELECTED = 'UPDATE_LOCATION_FILTERSELECTED';
	//城市选中下拉框一项
	var ADD_LOCATION_AREAITEM = exports.ADD_LOCATION_AREAITEM = 'ADD_LOCATION_AREAITEM';
	//城市删除选中项
	var DELETE_LOCATION_AREAITEM = exports.DELETE_LOCATION_AREAITEM = 'DELETE_LOCATION_AREAITEM';
	// 上传文件
	var ADD_LOCATIONFORM_FILE = exports.ADD_LOCATIONFORM_FILE = 'ADD_LOCATIONFORM_FILE';
	// 删除文件
	var DELETE_LOCATIONFORM_FILE = exports.DELETE_LOCATIONFORM_FILE = 'DELETE_LOCATIONFORM_FILE';
	// 删除
	var DELETE_LOCATIONFORM = exports.DELETE_LOCATIONFORM = 'DELETE_LOCATIONFORM';
	// 提交数据
	var SUBMIT_LOCATIONFORM = exports.SUBMIT_LOCATIONFORM = 'SUBMIT_LOCATIONFORM';
	/**---------------------------位置条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_LOCATIONCONSOLE = exports.SWITCH_LOCATIONCONSOLE = 'SWITCH_LOCATIONCONSOLE';
	
	/**---------------------------设备属性 form-------------------------------------------------------**/
	// 修改选中项
	var UPDATE_EQUIPMENTFORM_SELECTED = exports.UPDATE_EQUIPMENTFORM_SELECTED = 'UPDATE_EQUIPMENTFORM_SELECTED';
	// 删除
	var DELETE_EQUIPMENTFORM = exports.DELETE_EQUIPMENTFORM = 'DELETE_EQUIPMENTFORM';
	/**---------------------------设备属性 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_EQUIPMENTCONSOLE = exports.SWITCH_EQUIPMENTCONSOLE = 'SWITCH_EQUIPMENTCONSOLE';
	
	/**---------------------------设备属性筛选条件 form-------------------------------------------------------**/
	// 修改设备属性类型
	var UPDATE_EQUIPMENTPROFORM_TYPESELECTED = exports.UPDATE_EQUIPMENTPROFORM_TYPESELECTED = 'UPDATE_EQUIPMENTPROFORM_TYPESELECTED';
	// 选中下拉框一项
	var ADD_EQUIPMENTPROFORM_ITEM = exports.ADD_EQUIPMENTPROFORM_ITEM = 'ADD_EQUIPMENTPROFORM_ITEM';
	// 修改下拉列表选中项
	var UPDATE_EQUIPMENTPROFORM_FILTERSELECTED = exports.UPDATE_EQUIPMENTPROFORM_FILTERSELECTED = 'UPDATE_EQUIPMENTPROFORM_FILTERSELECTED';
	// 删除选中项
	var DELETE_EQUIPMENTPROFORM_ITEM = exports.DELETE_EQUIPMENTPROFORM_ITEM = 'DELETE_EQUIPMENTPROFORM_ITEM';
	// 删除
	var DELETE_EQUIPMENTPROFORM = exports.DELETE_EQUIPMENTPROFORM = 'DELETE_EQUIPMENTPROFORM';
	// 提交数据
	var SUBMIT_EQUIPMENTPROFORM = exports.SUBMIT_EQUIPMENTPROFORM = 'SUBMIT_EQUIPMENTPROFORM';
	
	/**---------------------------设备属性筛选条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_EQUIPMENTPROCONSOLE = exports.SWITCH_EQUIPMENTPROCONSOLE = 'SWITCH_EQUIPMENTPROCONSOLE';
	
	/**---------------------------地域行为筛选条件 form-------------------------------------------------------**/
	// 修改地域行为属性类型
	var UPDATE_REGIONFORM_REGIONTYPE = exports.UPDATE_REGIONFORM_REGIONTYPE = 'UPDATE_REGIONFORM_REGIONTYPE';
	// 修改日期类型
	var UPDATE_REGIONFORM_DATETYPE = exports.UPDATE_REGIONFORM_DATETYPE = 'UPDATE_REGIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_REGIONFORM_DATE = exports.UPDATE_REGIONFORM_DATE = 'UPDATE_REGIONFORM_DATE';
	// 修改地域选中项
	var UPDATE_REGIONFORM_AREATYPE = exports.UPDATE_REGIONFORM_AREATYPE = 'UPDATE_REGIONFORM_AREATYPE';
	// 修改下拉列表选中项
	var UPDATE_REGIONFORM_FILTERSELECTED = exports.UPDATE_REGIONFORM_FILTERSELECTED = 'UPDATE_REGIONFORM_FILTERSELECTED';
	// 选中下拉框一项
	var ADD_REGIONFORM_AREAITEM = exports.ADD_REGIONFORM_AREAITEM = 'ADD_REGIONFORM_AREAITEM';
	// 删除选中项
	var DELETE_REGIONFORM_AREAITEM = exports.DELETE_REGIONFORM_AREAITEM = 'DELETE_REGIONFORM_AREAITEM';
	// 删除
	var DELETE_REGIONFORM = exports.DELETE_REGIONFORM = 'DELETE_REGIONFORM';
	// 提交数据
	var SUBMIT_REGIONFORM = exports.SUBMIT_REGIONFORM = 'SUBMIT_REGIONFORM';
	
	/**---------------------------地域行为筛选条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_REGIONCONSOLE = exports.SWITCH_REGIONCONSOLE = 'SWITCH_REGIONCONSOLE';
	
	/**---------------------------标签筛选条件 form-----------------------------------------------------------**/
	// 获取所有标签
	var GET_TAGFORM_DATA = exports.GET_TAGFORM_DATA = 'GET_TAGFORM_DATA';
	// 修改选中标签
	var UPDATE_TAGFORM_SELECTED = exports.UPDATE_TAGFORM_SELECTED = 'UPDATE_TAGFORM_SELECTED';
	// 删除
	var DELETE_TAGFORM = exports.DELETE_TAGFORM = 'DELETE_TAGFORM';
	//修改表达式选项
	var UPDATE_EXPRESSIONFORM_SELECTED = exports.UPDATE_EXPRESSIONFORM_SELECTED = 'UPDATE_EXPRESSIONFORM_SELECTED';
	// 提交数据
	var SUBMIT_TAGFORM = exports.SUBMIT_TAGFORM = 'SUBMIT_TAGFORM';
	/**---------------------------标签筛选条件 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_TAGCONSOLE = exports.SWITCH_TAGCONSOLE = 'SWITCH_TAGCONSOLE';
	
	/**---------------------------app筛选条件 form----------------------------------------------------------**/
	// 修改应用行为类型
	var UPDATE_APPFORM_TYPE = exports.UPDATE_APPFORM_TYPE = 'UPDATE_APPFORM_TYPE';
	// 修改日期类型
	var UPDATE_APPFORM_DATETYPE = exports.UPDATE_APPFORM_DATETYPE = 'UPDATE_APPFORM_DATETYPE';
	// 修改日期
	var UPDATE_APPFORM_DATE = exports.UPDATE_APPFORM_DATE = 'UPDATE_APPFORM_DATE';
	// 修改应用选中项
	var UPDATE_APPFORM_QUERYTYPE = exports.UPDATE_APPFORM_QUERYTYPE = 'UPDATE_APPFORM_QUERYTYPE';
	// 修改下拉列表选中项
	var UPDATE_APPFORM_FILTERSELECTED = exports.UPDATE_APPFORM_FILTERSELECTED = 'UPDATE_APPFORM_FILTERSELECTED';
	// 选中下拉框一项
	var ADD_APPFORM_ITEM = exports.ADD_APPFORM_ITEM = 'ADD_APPFORM_ITEM';
	// 删除选中项
	var DELETE_APPFORM_ITEM = exports.DELETE_APPFORM_ITEM = 'DELETE_APPFORM_ITEM';
	// and / or
	var UPDATE_APP_OR_FORM = exports.UPDATE_APP_OR_FORM = 'UPDATE_APP_OR_FORM';
	// 筛选方式
	var UPDATE_APP_SELECTIVITY_FORM = exports.UPDATE_APP_SELECTIVITY_FORM = 'UPDATE_APP_SELECTIVITY_FORM';
	//上传文件
	var ADD_APPFORM_FILE = exports.ADD_APPFORM_FILE = 'ADD_APPFORM_FILE';
	//删除文件
	var DELETE_APPFORM_FILE = exports.DELETE_APPFORM_FILE = 'DELETE_APPFORM_FILE';
	// 删除
	var DELETE_APPFORM = exports.DELETE_APPFORM = 'DELETE_APPFORM';
	// 提交数据
	var SUBMIT_APPFORM = exports.SUBMIT_APPFORM = 'SUBMIT_APPFORM';
	
	/**---------------------------app筛选条件 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_APPCONSOLE = exports.SWITCH_APPCONSOLE = 'SWITCH_APPCONSOLE';
	
	/**---------------------------app分类筛选条件 form----------------------------------------------------------**/
	// 修改应用行为类型
	var UPDATE_APPTYPEFORM_TYPE = exports.UPDATE_APPTYPEFORM_TYPE = 'UPDATE_APPTYPEFORM_TYPE';
	// 修改日期类型
	var UPDATE_APPTYPEFORM_DATETYPE = exports.UPDATE_APPTYPEFORM_DATETYPE = 'UPDATE_APPTYPEFORM_DATETYPE';
	// 修改日期
	var UPDATE_APPTYPEFORM_DATE = exports.UPDATE_APPTYPEFORM_DATE = 'UPDATE_APPTYPEFORM_DATE';
	// 修改下拉列表选中项
	var UPDATE_APPTYPEFORM_FILTERSELECTED = exports.UPDATE_APPTYPEFORM_FILTERSELECTED = 'UPDATE_APPTYPEFORM_FILTERSELECTED';
	// 选中下拉框一项
	var ADD_APPTYPEFORM_ITEM = exports.ADD_APPTYPEFORM_ITEM = 'ADD_APPTYPEFORM_ITEM';
	// 删除选中项
	var DELETE_APPTYPEFORM_ITEM = exports.DELETE_APPTYPEFORM_ITEM = 'DELETE_APPTYPEFORM_ITEM';
	// 删除
	var DELETE_APPTYPEFORM = exports.DELETE_APPTYPEFORM = 'DELETE_APPTYPEFORM';
	// 提交数据
	var SUBMIT_APPTYPEFORM = exports.SUBMIT_APPTYPEFORM = 'SUBMIT_APPTYPEFORM';
	
	/**---------------------------app分类筛选条件 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_APPTYPECONSOLE = exports.SWITCH_APPTYPECONSOLE = 'SWITCH_APPTYPECONSOLE';
	
	/**---------------------------输出地域行为筛选条件 form-------------------------------------------------------**/
	// 修改地域行为属性类型
	var UPDATE_OUTREGIONFORM_REGIONTYPE = exports.UPDATE_OUTREGIONFORM_REGIONTYPE = 'UPDATE_OUTREGIONFORM_REGIONTYPE';
	// 修改日期类型
	var UPDATE_OUTREGIONFORM_DATETYPE = exports.UPDATE_OUTREGIONFORM_DATETYPE = 'UPDATE_OUTREGIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_OUTREGIONFORM_DATE = exports.UPDATE_OUTREGIONFORM_DATE = 'UPDATE_OUTREGIONFORM_DATE';
	// 修改地域选中项
	var UPDATE_OUTREGIONFORM_AREATYPE = exports.UPDATE_OUTREGIONFORM_AREATYPE = 'UPDATE_OUTREGIONFORM_AREATYPE';
	// 删除
	var DELETE_OUTREGIONFORM = exports.DELETE_OUTREGIONFORM = 'DELETE_OUTREGIONFORM';
	// 提交数据
	var SUBMIT_OUTREGIONFORM = exports.SUBMIT_OUTREGIONFORM = 'SUBMIT_OUTREGIONFORM';
	
	/**---------------------------输出地域行为筛选条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_OUTREGIONCONSOLE = exports.SWITCH_OUTREGIONCONSOLE = 'SWITCH_OUTREGIONCONSOLE';
	
	/**---------------------------输出标签筛选条件 form-----------------------------------------------------------**/
	// 获取所有标签
	var GET_OUTTAGFORM_DATA = exports.GET_OUTTAGFORM_DATA = 'GET_OUTTAGFORM_DATA';
	// 修改选中标签
	var UPDATE_OUTTAGFORM_SELECTED = exports.UPDATE_OUTTAGFORM_SELECTED = 'UPDATE_OUTTAGFORM_SELECTED';
	// 删除
	var DELETE_OUTTAGFORM = exports.DELETE_OUTTAGFORM = 'DELETE_OUTTAGFORM';
	// 提交数据
	var SUBMIT_OUTTAGFORM = exports.SUBMIT_OUTTAGFORM = 'SUBMIT_OUTTAGFORM';
	/**---------------------------输出标签筛选条件 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_OUTTAGCONSOLE = exports.SWITCH_OUTTAGCONSOLE = 'SWITCH_OUTTAGCONSOLE';
	
	/**---------------------------过滤筛选条件 -----------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_BRUSHTYPECONSOLE = exports.SWITCH_BRUSHTYPECONSOLE = 'SWITCH_BRUSHTYPECONSOLE';
	//提交
	var SUBMIT_BRUSHFORM = exports.SUBMIT_BRUSHFORM = 'SUBMIT_BRUSHFORM';
	//删除
	var DELETE_BRUSHFORM = exports.DELETE_BRUSHFORM = 'DELETE_BRUSHFORM';
	//更新单选
	var UPDATE_BRUSHFORM = exports.UPDATE_BRUSHFORM = 'UPDATE_BRUSHFORM';
	
	/**---------------------------设备明细红色 form-------------------------------------------------------**/
	// 修改选中项
	var UPDATE_IDFORMOUTFORM_SELECTED = exports.UPDATE_IDFORMOUTFORM_SELECTED = 'UPDATE_IDFORMOUTFORM_SELECTED';
	// 删除
	var DELETE_IDFORMOUTFORM = exports.DELETE_IDFORMOUTFORM = 'DELETE_IDFORMOUTFORM';
	//提交
	var SUBMIT_IDFORMOUTFORM = exports.SUBMIT_IDFORMOUTFORM = 'SUBMIT_IDFORMOUTFORM';
	
	// 控制台-打开|关闭面板
	var SWITCH_IDFORMOUTCONSOLE = exports.SWITCH_IDFORMOUTCONSOLE = 'SWITCH_IDFORMOUTCONSOLE';
	
	/**---------------------------设备属性红色 form-------------------------------------------------------**/
	// 修改选中项
	var UPDATE_STRUCTFORM_SELECTED = exports.UPDATE_STRUCTFORM_SELECTED = 'UPDATE_STRUCTFORM_SELECTED';
	// 删除
	var DELETE_STRUCTFORM = exports.DELETE_STRUCTFORM = 'DELETE_STRUCTFORM';
	//提交
	var SUBMIT_STRUCTFORM = exports.SUBMIT_STRUCTFORM = 'SUBMIT_STRUCTFORM';
	// 控制台-打开|关闭面板
	var SWITCH_STRUCTCONSOLE = exports.SWITCH_STRUCTCONSOLE = 'SWITCH_STRUCTCONSOLE';
	
	/**---------------------------[输出统计]行为属性红色 form-------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_BEHAVIORFORM_DATETYPE = exports.UPDATE_BEHAVIORFORM_DATETYPE = 'UPDATE_BEHAVIORFORM_DATETYPE';
	// 修改日期
	var UPDATE_BEHAVIORFORM_DATE = exports.UPDATE_BEHAVIORFORM_DATE = 'UPDATE_BEHAVIORFORM_DATE';
	// 更改
	var UPDATE_BEHAVIORFORM_COORDINARYTYPE = exports.UPDATE_BEHAVIORFORM_COORDINARYTYPE = 'UPDATE_BEHAVIORFORM_COORDINARYTYPE';
	//下拉框检索条件发生变化
	var UPDATE_BEHAVIORFORM_FILTERSELECTED = exports.UPDATE_BEHAVIORFORM_FILTERSELECTED = 'UPDATE_BEHAVIORFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_BEHAVIORFORM_ITEM = exports.ADD_BEHAVIORFORM_ITEM = 'ADD_BEHAVIORFORM_ITEM';
	//删除选中项
	var DELETE_BEHAVIORFORM_ITEM = exports.DELETE_BEHAVIORFORM_ITEM = 'DELETE_BEHAVIORFORM_ITEM';
	// 删除
	var DELETE_BEHAVIORFORM = exports.DELETE_BEHAVIORFORM = 'DELETE_BEHAVIORFORM';
	// 提交数据
	var SUBMIT_BEHAVIORFORM = exports.SUBMIT_BEHAVIORFORM = 'SUBMIT_BEHAVIORFORM';
	// 控制台-打开|关闭面板
	var SWITCH_BEHAVIORCONSOLE = exports.SWITCH_BEHAVIORCONSOLE = 'SWITCH_BEHAVIORCONSOLE';
	
	/**---------------------------[输出明细 ]行为属性红色 form-------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_OUTBEHAVIORFORM_DATETYPE = exports.UPDATE_OUTBEHAVIORFORM_DATETYPE = 'UPDATE_OUTBEHAVIORFORM_DATETYPE';
	// 修改日期
	var UPDATE_OUTBEHAVIORFORM_DATE = exports.UPDATE_OUTBEHAVIORFORM_DATE = 'UPDATE_OUTBEHAVIORFORM_DATE';
	// 更改
	var UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE = exports.UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE = 'UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE';
	//下拉框检索条件发生变化
	var UPDATE_OUTBEHAVIORFORM_FILTERSELECTED = exports.UPDATE_OUTBEHAVIORFORM_FILTERSELECTED = 'UPDATE_OUTBEHAVIORFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_OUTBEHAVIORFORM_ITEM = exports.ADD_OUTBEHAVIORFORM_ITEM = 'ADD_OUTBEHAVIORFORM_ITEM';
	//删除选中项
	var DELETE_OUTBEHAVIORFORM_ITEM = exports.DELETE_OUTBEHAVIORFORM_ITEM = 'DELETE_OUTBEHAVIORFORM_ITEM';
	// 删除
	var DELETE_OUTBEHAVIORFORM = exports.DELETE_OUTBEHAVIORFORM = 'DELETE_OUTBEHAVIORFORM';
	// 提交数据
	var SUBMIT_OUTBEHAVIORFORM = exports.SUBMIT_OUTBEHAVIORFORM = 'SUBMIT_OUTBEHAVIORFORM';
	// 控制台-打开|关闭面板
	var SWITCH_OUTBEHAVIORCONSOLE = exports.SWITCH_OUTBEHAVIORCONSOLE = 'SWITCH_OUTBEHAVIORCONSOLE';
	
	/**---------------------------统计输出 地域行为 form-------------------------------------------------------**/
	// 修改地域行为属性类型
	var UPDATE_PUTREGIONFORM_REGIONTYPE = exports.UPDATE_PUTREGIONFORM_REGIONTYPE = 'UPDATE_PUTREGIONFORM_REGIONTYPE';
	// 修改日期类型
	var UPDATE_PUTREGIONFORM_DATETYPE = exports.UPDATE_PUTREGIONFORM_DATETYPE = 'UPDATE_PUTREGIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_PUTREGIONFORM_DATE = exports.UPDATE_PUTREGIONFORM_DATE = 'UPDATE_PUTREGIONFORM_DATE';
	// 修改地域选中项
	var UPDATE_PUTREGIONFORM_AREATYPE = exports.UPDATE_PUTREGIONFORM_AREATYPE = 'UPDATE_PUTREGIONFORM_AREATYPE';
	// 删除
	var DELETE_PUTREGIONFORM = exports.DELETE_PUTREGIONFORM = 'DELETE_PUTREGIONFORM';
	// 提交数据
	var SUBMIT_PUTREGIONFORM = exports.SUBMIT_PUTREGIONFORM = 'SUBMIT_PUTREGIONFORM';
	
	/**---------------------------统计输出 地域行为 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_PUTREGIONCONSOLE = exports.SWITCH_PUTREGIONCONSOLE = 'SWITCH_PUTREGIONCONSOLE';
	
	/**---------------------------统计输出 标签 form-----------------------------------------------------------**/
	// 获取所有标签
	var GET_PUTTAGFORM_DATA = exports.GET_PUTTAGFORM_DATA = 'GET_PUTTAGFORM_DATA';
	// 修改选中标签
	var UPDATE_PUTTAGFORM_SELECTED = exports.UPDATE_PUTTAGFORM_SELECTED = 'UPDATE_PUTTAGFORM_SELECTED';
	// 删除
	var DELETE_PUTTAGFORM = exports.DELETE_PUTTAGFORM = 'DELETE_PUTTAGFORM';
	// 提交数据
	var SUBMIT_PUTTAGFORM = exports.SUBMIT_PUTTAGFORM = 'SUBMIT_PUTTAGFORM';
	/**---------------------------统计输出 标签 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_PUTTAGCONSOLE = exports.SWITCH_PUTTAGCONSOLE = 'SWITCH_PUTTAGCONSOLE';
	
	/**---------------------------[输出明细] 统计位置 form-------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_OUTLOCATIONFORM_DATETYPE = exports.UPDATE_OUTLOCATIONFORM_DATETYPE = 'UPDATE_OUTLOCATIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_OUTLOCATIONFORM_DATE = exports.UPDATE_OUTLOCATIONFORM_DATE = 'UPDATE_OUTLOCATIONRFOM_DATE';
	// 删除
	var DELETE_OUTLOCATIONFORM = exports.DELETE_OUTLOCATIONFORM = 'DELETE_OUTLOCATIONFORM';
	// 提交数据
	var SUBMIT_OUTLOCATIONFORM = exports.SUBMIT_OUTLOCATIONFORM = 'SUBMIT_OUTLOCATIONFORM';
	//城市下拉框检索条件发生变化
	var UPDATE_OUTLOCATION_FILTERSELECTED = exports.UPDATE_OUTLOCATION_FILTERSELECTED = 'UPDATE_OUTLOCATION_FILTERSELECTED';
	//城市选中下拉框一项
	var ADD_OUTLOCATION_AREAITEM = exports.ADD_OUTLOCATION_AREAITEM = 'ADD_OUTLOCATION_AREAITEM';
	//城市删除选中项
	var DELETE_OUTLOCATION_AREAITEM = exports.DELETE_OUTLOCATION_AREAITEM = 'DELETE_OUTLOCATION_AREAITEM';
	// 控制台-打开|关闭面板
	var SWITCH_OUTLOCATIONCONSOLE = exports.SWITCH_OUTLOCATIONCONSOLE = 'SWITCH_OUTLOCATIONCONSOLE';
	
	/**---------------------------[输出明细]  输出圈中位置明细 表单 form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_PUTLOCATIONFORM_DATETYPE = exports.UPDATE_PUTLOCATIONFORM_DATETYPE = 'UPDATE_PUTLOCATIONFORM_DATETYPE';
	// 修改日期
	var UPDATE_PUTLOCATIONFORM_DATE = exports.UPDATE_PUTLOCATIONFORM_DATE = 'UPDATE_PUTLOCATIONFORM_DATE';
	// 修改位置类型
	var UPDATE_PUTLOCATIONFORM_LOCATIONTYPE = exports.UPDATE_PUTLOCATIONFORM_LOCATIONTYPE = 'UPDATE_PUTLOCATIONFORM_LOCATIONTYPE';
	// 修改坐标类型
	var UPDATE_PUTLOCATIONFORM_COORDINARYTYPE = exports.UPDATE_PUTLOCATIONFORM_COORDINARYTYPE = 'UPDATE_PUTLOCATIONFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_PUTLOCATIONFORM_TIME = exports.ADD_PUTLOCATIONFORM_TIME = 'ADD_PUTLOCATIONFORM_TIME';
	// 删除小时段
	var DELETE_PUTLOCATIONFORM_TIME = exports.DELETE_PUTLOCATIONFORM_TIME = 'DELETE_PUTLOCATIONFORM_TIME';
	// 上传文件
	var ADD_PUTLOCATIONFORM_FILE = exports.ADD_PUTLOCATIONFORM_FILE = 'ADD_PUTLOCATIONFORM_FILE';
	// 删除文件
	var DELETE_PUTLOCATIONFORM_FILE = exports.DELETE_PUTLOCATIONFORM_FILE = 'DELETE_PUTLOCATIONFORM_FILE';
	// 删除
	var DELETE_PUTLOCATIONFORM = exports.DELETE_PUTLOCATIONFORM = 'DELETE_PUTLOCATIONFORM';
	// 提交
	var SUBMIT_PUTLOCATIONFORM = exports.SUBMIT_PUTLOCATIONFORM = 'SUBMIT_PUTLOCATIONFORM';
	//城市下拉框检索条件发生变化
	var UPDATE_PUTLOCATION_FILTERSELECTED = exports.UPDATE_PUTLOCATION_FILTERSELECTED = 'UPDATE_PUTLOCATION_FILTERSELECTED';
	//城市选中下拉框一项
	var ADD_PUTLOCATION_AREAITEM = exports.ADD_PUTLOCATION_AREAITEM = 'ADD_PUTLOCATION_AREAITEM';
	//城市删除选中项
	var DELETE_PUTLOCATION_AREAITEM = exports.DELETE_PUTLOCATION_AREAITEM = 'DELETE_PUTLOCATION_AREAITEM';
	
	/**---------------------------[输出明细]  输出圈中位置明细 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_PUTLOCATIONCONSOLE = exports.SWITCH_PUTLOCATIONCONSOLE = 'SWITCH_PUTLOCATIONCONSOLE';
	
	/**---------------------------[输出明细] 热力图 form----------------------------------------------------------**/
	
	// 修改日期类型
	var UPDATE_HOTFORM_DATETYPE = exports.UPDATE_HOTFORM_DATETYPE = 'UPDATE_HOTFORM_DATETYPE';
	// 修改日期
	var UPDATE_HOTFORM_DATE = exports.UPDATE_HOTFORM_DATE = 'UPDATE_HOTFORM_DATE';
	// 修改下拉列表选中项
	var UPDATE_HOTFORM_FILTERSELECTED = exports.UPDATE_HOTFORM_FILTERSELECTED = 'UPDATE_HOTFORM_FILTERSELECTED';
	// 选中下拉框一项
	var ADD_HOTFORM_ITEM = exports.ADD_HOTFORM_ITEM = 'ADD_HOTFORM_ITEM';
	// 删除选中项
	var DELETE_HOTFORM_ITEM = exports.DELETE_HOTFORM_ITEM = 'DELETE_HOTFORM_ITEM';
	// 删除
	var DELETE_HOTFORM = exports.DELETE_HOTFORM = 'DELETE_HOTFORM';
	//城市下拉框检索条件发生变化
	var UPDATE_HOT_FILTERSELECTED = exports.UPDATE_HOT_FILTERSELECTED = 'UPDATE_HOT_FILTERSELECTED';
	//城市选中下拉框一项
	var ADD_HOT_AREAITEM = exports.ADD_HOT_AREAITEM = 'ADD_HOT_AREAITEM';
	//城市删除选中项
	var DELETE_HOT_AREAITEM = exports.DELETE_HOT_AREAITEM = 'DELETE_HOT_AREAITEM';
	// 提交数据
	var SUBMIT_HOTFORM = exports.SUBMIT_HOTFORM = 'SUBMIT_HOTFORM';
	
	/**---------------------------[输出明细] 热力图 console-------------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_HOTCONSOLE = exports.SWITCH_HOTCONSOLE = 'SWITCH_HOTCONSOLE';
	
	/**---------------------------[筛选]  活跃设备 表单 form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_ACTIVEFORM_DATETYPE = exports.UPDATE_ACTIVEFORM_DATETYPE = 'UPDATE_ACTIVEFORM_DATETYPE';
	// 修改日期
	var UPDATE_ACTIVEFORM_DATE = exports.UPDATE_ACTIVEFORM_DATE = 'UPDATE_ACTIVEFORM_DATE';
	//修改活跃统计类型
	var UPDATE_ACTIVEFORM_LOCATIONTYPE = exports.UPDATE_ACTIVEFORM_LOCATIONTYPE = 'UPDATE_ACTIVEFORM_LOCATIONTYPE';
	// 新增小时段
	var ADD_ACTIVEFORM_TIME = exports.ADD_ACTIVEFORM_TIME = 'ADD_ACTIVEFORM_TIME';
	// 删除小时段
	var DELETE_ACTIVEFORM_TIME = exports.DELETE_ACTIVEFORM_TIME = 'DELETE_ACTIVEFORM_TIME';
	// 删除
	var DELETE_ACTIVEFORM = exports.DELETE_ACTIVEFORM = 'DELETE_ACTIVEFORM';
	// 提交
	var SUBMIT_ACTIVEFORM = exports.SUBMIT_ACTIVEFORM = 'SUBMIT_ACTIVEFORM';
	//设备活跃类型
	var UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE = exports.UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE = 'UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE';
	//TAB切换
	var UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE = exports.UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE = 'UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE';
	
	/**---------------------------[筛选]  活跃设备 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_ACTIVECONSOLE = exports.SWITCH_ACTIVECONSOLE = 'SWITCH_ACTIVECONSOLE';
	
	/**---------------------------[统计]  活跃统计 表单 form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_OUTACTIVEFORM_DATETYPE = exports.UPDATE_OUTACTIVEFORM_DATETYPE = 'UPDATE_OUTACTIVEFORM_DATETYPE';
	// 修改日期
	var UPDATE_OUTACTIVEFORM_DATE = exports.UPDATE_OUTACTIVEFORM_DATE = 'UPDATE_OUTACTIVEFORM_DATE';
	//修改活跃统计类型
	var UPDATE_OUTACTIVEFORM_LOCATIONTYPE = exports.UPDATE_OUTACTIVEFORM_LOCATIONTYPE = 'UPDATE_OUTACTIVEFORM_LOCATIONTYPE';
	//设备类型统计
	var UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE = exports.UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE = 'UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE';
	// 删除
	var DELETE_OUTACTIVEFORM = exports.DELETE_OUTACTIVEFORM = 'DELETE_OUTACTIVEFORM';
	// 提交
	var SUBMIT_OUTACTIVEFORM = exports.SUBMIT_OUTACTIVEFORM = 'SUBMIT_OUTACTIVEFORM';
	/**---------------------------[统计]  活跃统计 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_OUTACTIVECONSOLE = exports.SWITCH_OUTACTIVECONSOLE = 'SWITCH_OUTACTIVECONSOLE';
	
	//输入位置
	var UPDATELOCATIONTYPE = exports.UPDATELOCATIONTYPE = 'UPDATELOCATIONTYPE';
	//输出圈中位置
	var UPDATEPUTLOCATION = exports.UPDATEPUTLOCATION = 'UPDATEPUTLOCATION';
	//筛选poi
	var UPDATEPOIFILTERTYPE = exports.UPDATEPOIFILTERTYPE = 'UPDATEPOIFILTERTYPE';
	//poi明细
	var UPDATEOUTPOIFILTERTYPE = exports.UPDATEOUTPOIFILTERTYPE = 'UPDATEOUTPOIFILTERTYPE';
	//poi统计
	var UPDATEPUTPOIFILTERTYPE = exports.UPDATEPUTPOIFILTERTYPE = 'UPDATEPUTPOIFILTERTYPE';
	//工作地居住地
	var UPDATEGHETTOTYPE = exports.UPDATEGHETTOTYPE = 'UPDATEGHETTOTYPE';
	
	/**---------------------------已经删除  [统计]  输出POI 表单 form---------------------------------------------------------**/
	// 删除
	var DELETE_OUTPOIFORM = exports.DELETE_OUTPOIFORM = 'DELETE_OUTPOIFORM';
	//更新建任务
	var UPDATE_POIFORMLISTLABEL = exports.UPDATE_POIFORMLISTLABEL = 'UPDATE_POIFORMLISTLABEL';
	//更坐标格式选中项
	var UPDATE_POIFORM_COORDINATE = exports.UPDATE_POIFORM_COORDINATE = 'UPDATE_POIFORM_COORDINATE';
	//更查询内容
	var UPDATE_POIFORM_INQUIRY = exports.UPDATE_POIFORM_INQUIRY = 'UPDATE_POIFORM_INQUIRY';
	//更时间类型
	var UPDATE_POIFORM_WITHIN = exports.UPDATE_POIFORM_WITHIN = 'UPDATE_POIFORM_WITHIN';
	//更城市类型-省
	var UPDATE_POIFORM_WITHINPROVINCE = exports.UPDATE_POIFORM_WITHINPROVINCE = 'UPDATE_POIFORM_WITHINPROVINCE';
	//更城市类型-市
	var UPDATE_POIFORM_CITY = exports.UPDATE_POIFORM_CITY = 'UPDATE_POIFORM_CITY';
	//更新时间选段
	var UPDATE_TIME_PERICOPE = exports.UPDATE_TIME_PERICOPE = 'UPDATE_TIME_PERICOPE';
	//删除时间选段
	var DELETE_TIME_PERICOPE = exports.DELETE_TIME_PERICOPE = 'DELETE_TIME_PERICOPE';
	//更城市类型-区
	var UPDATE_POIFORM_AREA = exports.UPDATE_POIFORM_AREA = 'UPDATE_POIFORM_AREA';
	//更新周边半径
	var UPDATE_POIFORM_RADIUS = exports.UPDATE_POIFORM_RADIUS = 'UPDATE_POIFORM_RADIUS';
	//获取所有标签
	var GET_POIFORM_DATA = exports.GET_POIFORM_DATA = 'GET_POIFORM_DATA';
	//修改选中标签
	var UPDATE_POIFORM_SELECTED = exports.UPDATE_POIFORM_SELECTED = 'UPDATE_POIFORM_SELECTED';
	//请求城市
	var GET_POIFORM_DATA_CITY = exports.GET_POIFORM_DATA_CITY = 'GET_POIFORM_DATA_CITY';
	//最后清空树对象
	var DESTROYED_POIFORM_SELECTED = exports.DESTROYED_POIFORM_SELECTED = 'DESTROYED_POIFORM_SELECTED';
	
	/**---------------------------[统计]  输出POI console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_OUTPOICONSOLE = exports.SWITCH_OUTPOICONSOLE = 'SWITCH_OUTPOICONSOLE';
	
	/**---------------------------[统计]  筛选设备统计 表单 form---------------------------------------------------------**/
	var SUBMIT_SEPARATINGFORM = exports.SUBMIT_SEPARATINGFORM = 'SUBMIT_SEPARATINGFORM';
	/**---------------------------[统计]  筛选设备统计 console-----------------------------------------------------**/
	var SWITCH_SEPARATINGCONSOLE = exports.SWITCH_SEPARATINGCONSOLE = 'SWITCH_SEPARATINGCONSOLE';
	
	/**---------------------------筛选poiFilter  form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_POIFILTERFORM_DATETYPE = exports.UPDATE_POIFILTERFORM_DATETYPE = 'UPDATE_POIFILTERFORM_DATETYPE';
	// 修改日期
	var UPDATE_POIFILTERFORM_DATE = exports.UPDATE_POIFILTERFORM_DATE = 'UPDATE_POIFILTERFORM_DATE';
	//修改工作日
	var UPDATE_POIFILTERWORKINGDAY_TYPE = exports.UPDATE_POIFILTERWORKINGDAY_TYPE = 'UPDATE_POIFILTERWORKINGDAY_TYPE';
	// 修改位置类型
	var UPDATE_POIFILTERFORM_TYPE = exports.UPDATE_POIFILTERFORM_TYPE = 'UPDATE_POIFILTERFORM_TYPE';
	// 修改坐标类型
	var UPDATE_POIFILTERFORM_COORDINARYTYPE = exports.UPDATE_POIFILTERFORM_COORDINARYTYPE = 'UPDATE_POIFILTERFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_POIFILTERFORM_TIME = exports.ADD_POIFILTERFORM_TIME = 'ADD_POIFILTERFORM_TIME';
	// 删除小时段
	var DELETE_POIFILTERFORM_TIME = exports.DELETE_POIFILTERFORM_TIME = 'DELETE_POIFILTERFORM_TIME';
	//poi列表下拉框检索条件发生变化
	var UPDATE_POIFILTER_FILTERSELECTED = exports.UPDATE_POIFILTER_FILTERSELECTED = 'UPDATE_POIFILTER_FILTERSELECTED';
	//poi列表选中下拉框一项
	var ADD_POIFILTER_AREAITEM = exports.ADD_POIFILTER_AREAITEM = 'ADD_POIFILTER_AREAITEM';
	//poi列表删除选中项
	var DELETE_POIFILTER_AREAITEM = exports.DELETE_POIFILTER_AREAITEM = 'DELETE_POIFILTER_AREAITEM';
	// 【】Tag
	//poi类型列表下拉框检索条件发生变化
	var UPDATE_TAGPOIFILTER_FILTERSELECTED = exports.UPDATE_TAGPOIFILTER_FILTERSELECTED = 'UPDATE_TAGPOIFILTER_FILTERSELECTED';
	//poi类型列表选中下拉框一项
	var ADD_TAGPOIFILTER_AREAITEM = exports.ADD_TAGPOIFILTER_AREAITEM = 'ADD_TAGPOIFILTER_AREAITEM';
	//poi类型列表删除选中项
	var DELETE_TAGPOIFILTER_AREAITEM = exports.DELETE_TAGPOIFILTER_AREAITEM = 'DELETE_TAGPOIFILTER_AREAITEM';
	// 修改二选一选中项
	var UPDATE_POIFILTERSELECTIVITY_TYPE = exports.UPDATE_POIFILTERSELECTIVITY_TYPE = 'UPDATE_POIFILTERSELECTIVITY_TYPE';
	// 上传文件
	var ADD_POIFILTERFORM_FILE = exports.ADD_POIFILTERFORM_FILE = 'ADD_POIFILTERFORM_FILE';
	// 删除文件
	var DELETE_POIFILTERFORM_FILE = exports.DELETE_POIFILTERFORM_FILE = 'DELETE_POIFILTERFORM_FILE';
	// 删除
	var DELETE_POIFILTERFORM = exports.DELETE_POIFILTERFORM = 'DELETE_POIFILTERFORM';
	// 提交数据
	var SUBMIT_POIFILTERFORM = exports.SUBMIT_POIFILTERFORM = 'SUBMIT_POIFILTERFORM';
	//修改城市
	var UPDATE_VALUEPOIFILTERFORM_TYPE = exports.UPDATE_VALUEPOIFILTERFORM_TYPE = 'UPDATE_VALUEPOIFILTERFORM_TYPE';
	/**---------------------------位置条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_POIFILTERCONSOLE = exports.SWITCH_POIFILTERCONSOLE = 'SWITCH_POIFILTERCONSOLE';
	
	/**---------------------------【明细】poiFilter  form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_OUTPOIFILTERFORM_DATETYPE = exports.UPDATE_OUTPOIFILTERFORM_DATETYPE = 'UPDATE_OUTPOIFILTERFORM_DATETYPE';
	// 修改日期
	var UPDATE_OUTPOIFILTERFORM_DATE = exports.UPDATE_OUTPOIFILTERFORM_DATE = 'UPDATE_OUTPOIFILTERFORM_DATE';
	//修改工作日
	var UPDATE_OUTPOIFILTERWORKINGDAY_TYPE = exports.UPDATE_OUTPOIFILTERWORKINGDAY_TYPE = 'UPDATE_OUTPOIFILTERWORKINGDAY_TYPE';
	// 修改位置类型
	var UPDATE_OUTPOIFILTERFORM_TYPE = exports.UPDATE_OUTPOIFILTERFORM_TYPE = 'UPDATE_OUTPOIFILTERFORM_TYPE';
	// 修改坐标类型
	var UPDATE_OUTPOIFILTERFORM_COORDINARYTYPE = exports.UPDATE_OUTPOIFILTERFORM_COORDINARYTYPE = 'UPDATE_OUTPOIFILTERFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_OUTPOIFILTERFORM_TIME = exports.ADD_OUTPOIFILTERFORM_TIME = 'ADD_OUTPOIFILTERFORM_TIME';
	// 删除小时段
	var DELETE_OUTPOIFILTERFORM_TIME = exports.DELETE_OUTPOIFILTERFORM_TIME = 'DELETE_OUTPOIFILTERFORM_TIME';
	//poi列表下拉框检索条件发生变化
	var UPDATE_OUTPOIFILTER_FILTERSELECTED = exports.UPDATE_OUTPOIFILTER_FILTERSELECTED = 'UPDATE_OUTPOIFILTER_FILTERSELECTED';
	//poi列表选中下拉框一项
	var ADD_OUTPOIFILTER_AREAITEM = exports.ADD_OUTPOIFILTER_AREAITEM = 'ADD_OUTPOIFILTER_AREAITEM';
	//poi列表删除选中项
	var DELETE_OUTPOIFILTER_AREAITEM = exports.DELETE_OUTPOIFILTER_AREAITEM = 'DELETE_OUTPOIFILTER_AREAITEM';
	// 【】Tag
	//poi类型列表下拉框检索条件发生变化
	var UPDATE_TAGOUTPOIFILTER_FILTERSELECTED = exports.UPDATE_TAGOUTPOIFILTER_FILTERSELECTED = 'UPDATE_TAGOUTPOIFILTER_FILTERSELECTED';
	//poi类型列表选中下拉框一项
	var ADD_TAGOUTPOIFILTER_AREAITEM = exports.ADD_TAGOUTPOIFILTER_AREAITEM = 'ADD_TAGOUTPOIFILTER_AREAITEM';
	//poi类型列表删除选中项
	var DELETE_TAGOUTPOIFILTER_AREAITEM = exports.DELETE_TAGOUTPOIFILTER_AREAITEM = 'DELETE_TAGOUTPOIFILTER_AREAITEM';
	// 修改二选一选中项
	var UPDATE_OUTPOIFILTERSELECTIVITY_TYPE = exports.UPDATE_OUTPOIFILTERSELECTIVITY_TYPE = 'UPDATE_OUTPOIFILTERSELECTIVITY_TYPE';
	// 上传文件
	var ADD_OUTPOIFILTERFORM_FILE = exports.ADD_OUTPOIFILTERFORM_FILE = 'ADD_OUTPOIFILTERFORM_FILE';
	// 删除文件
	var DELETE_OUTPOIFILTERFORM_FILE = exports.DELETE_OUTPOIFILTERFORM_FILE = 'DELETE_OUTPOIFILTERFORM_FILE';
	// 删除
	var DELETE_OUTPOIFILTERFORM = exports.DELETE_OUTPOIFILTERFORM = 'DELETE_OUTPOIFILTERFORM';
	// 提交数据
	var SUBMIT_OUTPOIFILTERFORM = exports.SUBMIT_OUTPOIFILTERFORM = 'SUBMIT_OUTPOIFILTERFORM';
	//修改城市
	var UPDATE_VALUEOUTPOIFILTERFORM_TYPE = exports.UPDATE_VALUEOUTPOIFILTERFORM_TYPE = 'UPDATE_VALUEOUTPOIFILTERFORM_TYPE';
	/**---------------------------明细poi条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_OUTPOIFILTERCONSOLE = exports.SWITCH_OUTPOIFILTERCONSOLE = 'SWITCH_OUTPOIFILTERCONSOLE';
	
	/**---------------------------【统计】poiFilter  form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_PUTPOIFILTERFORM_DATETYPE = exports.UPDATE_PUTPOIFILTERFORM_DATETYPE = 'UPDATE_PUTPOIFILTERFORM_DATETYPE';
	// 修改日期
	var UPDATE_PUTPOIFILTERFORM_DATE = exports.UPDATE_PUTPOIFILTERFORM_DATE = 'UPDATE_PUTPOIFILTERFORM_DATE';
	//修改工作日
	var UPDATE_PUTPOIFILTERWORKINGDAY_TYPE = exports.UPDATE_PUTPOIFILTERWORKINGDAY_TYPE = 'UPDATE_PUTPOIFILTERWORKINGDAY_TYPE';
	// 修改位置类型
	var UPDATE_PUTPOIFILTERFORM_TYPE = exports.UPDATE_PUTPOIFILTERFORM_TYPE = 'UPDATE_PUTPOIFILTERFORM_TYPE';
	// 修改坐标类型
	var UPDATE_PUTPOIFILTERFORM_COORDINARYTYPE = exports.UPDATE_PUTPOIFILTERFORM_COORDINARYTYPE = 'UPDATE_PUTPOIFILTERFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_PUTPOIFILTERFORM_TIME = exports.ADD_PUTPOIFILTERFORM_TIME = 'ADD_PUTPOIFILTERFORM_TIME';
	// 删除小时段
	var DELETE_PUTPOIFILTERFORM_TIME = exports.DELETE_PUTPOIFILTERFORM_TIME = 'DELETE_PUTPOIFILTERFORM_TIME';
	//poi列表下拉框检索条件发生变化
	var UPDATE_PUTPOIFILTER_FILTERSELECTED = exports.UPDATE_PUTPOIFILTER_FILTERSELECTED = 'UPDATE_PUTPOIFILTER_FILTERSELECTED';
	//poi列表选中下拉框一项
	var ADD_PUTPOIFILTER_AREAITEM = exports.ADD_PUTPOIFILTER_AREAITEM = 'ADD_PUTPOIFILTER_AREAITEM';
	//poi列表删除选中项
	var DELETE_PUTPOIFILTER_AREAITEM = exports.DELETE_PUTPOIFILTER_AREAITEM = 'DELETE_PUTPOIFILTER_AREAITEM';
	// 【】Tag
	//poi类型列表下拉框检索条件发生变化
	var UPDATE_TAGPUTPOIFILTER_FILTERSELECTED = exports.UPDATE_TAGPUTPOIFILTER_FILTERSELECTED = 'UPDATE_TAGPUTPOIFILTER_FILTERSELECTED';
	//poi类型列表选中下拉框一项
	var ADD_TAGPUTPOIFILTER_AREAITEM = exports.ADD_TAGPUTPOIFILTER_AREAITEM = 'ADD_TAGPUTPOIFILTER_AREAITEM';
	//poi类型列表删除选中项
	var DELETE_TAGPUTPOIFILTER_AREAITEM = exports.DELETE_TAGPUTPOIFILTER_AREAITEM = 'DELETE_TAGPUTPOIFILTER_AREAITEM';
	// 修改二选一选中项
	var UPDATE_PUTPOIFILTERSELECTIVITY_TYPE = exports.UPDATE_PUTPOIFILTERSELECTIVITY_TYPE = 'UPDATE_PUTPOIFILTERSELECTIVITY_TYPE';
	// 上传文件
	var ADD_PUTPOIFILTERFORM_FILE = exports.ADD_PUTPOIFILTERFORM_FILE = 'ADD_PUTPOIFILTERFORM_FILE';
	// 删除文件
	var DELETE_PUTPOIFILTERFORM_FILE = exports.DELETE_PUTPOIFILTERFORM_FILE = 'DELETE_PUTPOIFILTERFORM_FILE';
	// 删除
	var DELETE_PUTPOIFILTERFORM = exports.DELETE_PUTPOIFILTERFORM = 'DELETE_PUTPOIFILTERFORM';
	// 提交数据
	var SUBMIT_PUTPOIFILTERFORM = exports.SUBMIT_PUTPOIFILTERFORM = 'SUBMIT_PUTPOIFILTERFORM';
	//修改城市
	var UPDATE_VALUEPUTPOIFILTERFORM_TYPE = exports.UPDATE_VALUEPUTPOIFILTERFORM_TYPE = 'UPDATE_VALUEPUTPOIFILTERFORM_TYPE';
	/**---------------------------统计poi条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_PUTPOIFILTERCONSOLE = exports.SWITCH_PUTPOIFILTERCONSOLE = 'SWITCH_PUTPOIFILTERCONSOLE';
	
	/**---------------------------【分类统计】poiFilter  form---------------------------------------------------------**/
	// 修改日期类型
	var UPDATE_DIGPOIFILTERFORM_DATETYPE = exports.UPDATE_DIGPOIFILTERFORM_DATETYPE = 'UPDATE_DIGPOIFILTERFORM_DATETYPE';
	// 修改日期
	var UPDATE_DIGPOIFILTERFORM_DATE = exports.UPDATE_DIGPOIFILTERFORM_DATE = 'UPDATE_DIGPOIFILTERFORM_DATE';
	//修改工作日
	var UPDATE_DIGPOIFILTERWORKINGDAY_TYPE = exports.UPDATE_DIGPOIFILTERWORKINGDAY_TYPE = 'UPDATE_DIGPOIFILTERWORKINGDAY_TYPE';
	// 修改位置类型
	var UPDATE_DIGPOIFILTERFORM_TYPE = exports.UPDATE_DIGPOIFILTERFORM_TYPE = 'UPDATE_DIGPOIFILTERFORM_TYPE';
	// 修改坐标类型
	var UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE = exports.UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE = 'UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE';
	// 新增小时段
	var ADD_DIGPOIFILTERFORM_TIME = exports.ADD_DIGPOIFILTERFORM_TIME = 'ADD_DIGPOIFILTERFORM_TIME';
	// 删除小时段
	var DELETE_DIGPOIFILTERFORM_TIME = exports.DELETE_DIGPOIFILTERFORM_TIME = 'DELETE_DIGPOIFILTERFORM_TIME';
	//poi列表下拉框检索条件发生变化
	var UPDATE_DIGPOIFILTER_FILTERSELECTED = exports.UPDATE_DIGPOIFILTER_FILTERSELECTED = 'UPDATE_DIGPOIFILTER_FILTERSELECTED';
	//poi列表选中下拉框一项
	var ADD_DIGPOIFILTER_AREAITEM = exports.ADD_DIGPOIFILTER_AREAITEM = 'ADD_DIGPOIFILTER_AREAITEM';
	//poi列表删除选中项
	var DELETE_DIGPOIFILTER_AREAITEM = exports.DELETE_DIGPOIFILTER_AREAITEM = 'DELETE_DIGPOIFILTER_AREAITEM';
	// 【】Tag
	//poi类型列表下拉框检索条件发生变化
	var UPDATE_TAGDIGPOIFILTER_FILTERSELECTED = exports.UPDATE_TAGDIGPOIFILTER_FILTERSELECTED = 'UPDATE_TAGDIGPOIFILTER_FILTERSELECTED';
	//poi类型列表选中下拉框一项
	var ADD_TAGDIGPOIFILTER_AREAITEM = exports.ADD_TAGDIGPOIFILTER_AREAITEM = 'ADD_TAGDIGPOIFILTER_AREAITEM';
	//poi类型列表删除选中项
	var DELETE_TAGDIGPOIFILTER_AREAITEM = exports.DELETE_TAGDIGPOIFILTER_AREAITEM = 'DELETE_TAGDIGPOIFILTER_AREAITEM';
	// 修改二选一选中项
	var UPDATE_DIGPOIFILTERSELECTIVITY_TYPE = exports.UPDATE_DIGPOIFILTERSELECTIVITY_TYPE = 'UPDATE_DIGPOIFILTERSELECTIVITY_TYPE';
	// 上传文件
	var ADD_DIGPOIFILTERFORM_FILE = exports.ADD_DIGPOIFILTERFORM_FILE = 'ADD_DIGPOIFILTERFORM_FILE';
	// 删除文件
	var DELETE_DIGPOIFILTERFORM_FILE = exports.DELETE_DIGPOIFILTERFORM_FILE = 'DELETE_DIGPOIFILTERFORM_FILE';
	// 删除
	var DELETE_DIGPOIFILTERFORM = exports.DELETE_DIGPOIFILTERFORM = 'DELETE_DIGPOIFILTERFORM';
	// 提交数据
	var SUBMIT_DIGPOIFILTERFORM = exports.SUBMIT_DIGPOIFILTERFORM = 'SUBMIT_DIGPOIFILTERFORM';
	//修改城市
	var UPDATE_VALUEDIGPOIFILTERFORM_TYPE = exports.UPDATE_VALUEDIGPOIFILTERFORM_TYPE = 'UPDATE_VALUEDIGPOIFILTERFORM_TYPE';
	/**---------------------------统计poi条件 console-----------------------------------------------------**/
	// 控制台-打开|关闭面板
	var SWITCH_DIGPOIFILTERCONSOLE = exports.SWITCH_DIGPOIFILTERCONSOLE = 'SWITCH_DIGPOIFILTERCONSOLE';
	
	//--------------------------【筛选】----工作地 居住地-------------------//
	
	
	//修改日期类型
	var UPDATE_GHETTOFORM_DATETYPE = exports.UPDATE_GHETTOFORM_DATETYPE = 'UPDATE_GHETTOFORM_DATETYPE';
	//修改日期
	var UPDATE_GHETTOFORM_DATE = exports.UPDATE_GHETTOFORM_DATE = 'UPDATE_GHETTOFORM_DATE';
	//修改位置类型
	var UPDATE_GHETTOFORM_LOCATIONTYPE = exports.UPDATE_GHETTOFORM_LOCATIONTYPE = 'UPDATE_GHETTOFORM_LOCATIONTYPE';
	//修改坐标类型
	var UPDATE_GHETTOFORM_COORDINARYTYPE = exports.UPDATE_GHETTOFORM_COORDINARYTYPE = 'UPDATE_GHETTOFORM_COORDINARYTYPE';
	// 上传文件
	var ADD_GHETTOFORM_FILE = exports.ADD_GHETTOFORM_FILE = 'ADD_GHETTOFORM_FILE';
	// 删除上传文件
	var DELETE_GHETTOFORM_FILE = exports.DELETE_GHETTOFORM_FILE = 'DELETE_GHETTOFORM_FILE';
	//删除
	var DELETE_GHETTOFORM = exports.DELETE_GHETTOFORM = 'DELETE_GHETTOFORM';
	// 提交数据
	var SUBMIT_GHETTOFORM = exports.SUBMIT_GHETTOFORM = 'SUBMIT_GHETTOFORM';
	// 控制台-打开|关闭面板
	var SWITCH_GHETTOCONSOLE = exports.SWITCH_GHETTOCONSOLE = 'SWITCH_GHETTOCONSOLE';
	////工作地 居住地
	var UPADATEGHETTOFORMTYPE = exports.UPADATEGHETTOFORMTYPE = 'UPADATEGHETTOFORMTYPE';
	//城市
	var UPADATEGHETTOFOCITYLIST = exports.UPADATEGHETTOFOCITYLIST = 'UPADATEGHETTOFOCITYLIST';
	//添加
	var ADD_GHETTOFORM_AREAITEM = exports.ADD_GHETTOFORM_AREAITEM = 'ADD_GHETTOFORM_AREAITEM';
	//删除
	var DELETE_GHETTOFORM_AREAITEM = exports.DELETE_GHETTOFORM_AREAITEM = 'DELETE_GHETTOFORM_AREAITEM';
	//通勤半径
	var UPADATEGHETTOFORADIUS = exports.UPADATEGHETTOFORADIUS = 'UPADATEGHETTOFORADIUS';
	
	//--------------------------【明细】----工作地 居住地-------------------//
	//单选
	var UPDATE_PLACEFORM = exports.UPDATE_PLACEFORM = 'UPDATE_PLACEFORM';
	//修改日期类型
	var UPDATE_PLACEFORM_DATETYPE = exports.UPDATE_PLACEFORM_DATETYPE = 'UPDATE_PLACEFORM_DATETYPE';
	//修改日期
	var UPDATE_PLACEFORM_DATE = exports.UPDATE_PLACEFORM_DATE = 'UPDATE_PLACEFORM_DATE';
	//工作地城市
	//下拉框检索条件发生变化
	var UPDATE_PLACEFORM_FILTERSELECTED = exports.UPDATE_PLACEFORM_FILTERSELECTED = 'UPDATE_PLACEFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_PLACEFORM_AREAITEM = exports.ADD_PLACEFORM_AREAITEM = 'ADD_PLACEFORM_AREAITEM';
	//删除选中项
	var DELETE_PLACEFORM_AREAITEM = exports.DELETE_PLACEFORM_AREAITEM = 'DELETE_PLACEFORM_AREAITEM';
	//居住地城市
	//下拉框检索条件发生变化
	var UPDATE_NEWPLACEFORM_FILTERSELECTED = exports.UPDATE_NEWPLACEFORM_FILTERSELECTED = 'UPDATE_NEWPLACEFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_NEWPLACEFORM_AREAITEM = exports.ADD_NEWPLACEFORM_AREAITEM = 'ADD_NEWPLACEFORM_AREAITEM';
	//删除选中项
	var DELETE_NEWPLACEFORM_AREAITEM = exports.DELETE_NEWPLACEFORM_AREAITEM = 'DELETE_NEWPLACEFORM_AREAITEM';
	//通勤半径
	var UPADATEPLACEFORADIUS = exports.UPADATEPLACEFORADIUS = 'UPADATEPLACEFORADIUS';
	//删除
	var DELETE_PLACEFORM = exports.DELETE_PLACEFORM = 'DELETE_PLACEFORM';
	//提交数据
	var SUBMIT_PLACEFORM = exports.SUBMIT_PLACEFORM = 'SUBMIT_PLACEFORM';
	// 控制台-打开|关闭面板
	var SWITCH_PLACECONSOLE = exports.SWITCH_PLACECONSOLE = 'SWITCH_PLACECONSOLE';
	
	//--------------------------【统计】----工作地 居住地-------------------//
	//单选
	var UPDATE_RESIDEFORM = exports.UPDATE_RESIDEFORM = 'UPDATE_RESIDEFORM';
	//修改日期类型
	var UPDATE_RESIDEFORM_DATETYPE = exports.UPDATE_RESIDEFORM_DATETYPE = 'UPDATE_RESIDEFORM_DATETYPE';
	//修改日期
	var UPDATE_RESIDEFORM_DATE = exports.UPDATE_RESIDEFORM_DATE = 'UPDATE_RESIDEFORM_DATE';
	//工作地城市
	//下拉框检索条件发生变化
	var UPDATE_RESIDEFORM_FILTERSELECTED = exports.UPDATE_RESIDEFORM_FILTERSELECTED = 'UPDATE_RESIDEFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_RESIDEFORM_AREAITEM = exports.ADD_RESIDEFORM_AREAITEM = 'ADD_RESIDEFORM_AREAITEM';
	//删除选中项
	var DELETE_RESIDEFORM_AREAITEM = exports.DELETE_RESIDEFORM_AREAITEM = 'DELETE_RESIDEFORM_AREAITEM';
	//通勤半径
	var UPADATERESIDEFORADIUS = exports.UPADATERESIDEFORADIUS = 'UPADATERESIDEFORADIUS';
	//区域类型
	var UPDATE_RESIDEGROUPBYFORM = exports.UPDATE_RESIDEGROUPBYFORM = 'UPDATE_RESIDEGROUPBYFORM';
	//删除
	var DELETE_RESIDEFORM = exports.DELETE_RESIDEFORM = 'DELETE_RESIDEFORM';
	//提交数据
	var SUBMIT_RESIDEFORM = exports.SUBMIT_RESIDEFORM = 'SUBMIT_RESIDEFORM';
	// 控制台-打开|关闭面板
	var SWITCH_RESIDECONSOLE = exports.SWITCH_RESIDECONSOLE = 'SWITCH_RESIDECONSOLE';
	
	//***********************************************************小区明细***********************************************************************//
	// 修改日期类型
	var UPDATE_SUBDISTRICTFORM_DATETYPE = exports.UPDATE_SUBDISTRICTFORM_DATETYPE = 'UPDATE_SUBDISTRICTFORM_DATETYPE';
	// 修改日期
	var UPDATE_SUBDISTRICTFORM_DATE = exports.UPDATE_SUBDISTRICTFORM_DATE = 'UPDATE_SUBDISTRICTFORM_DATE';
	//下拉框检索条件发生变化
	var UPDATE_SUBDISTRICTFORM_FILTERSELECTED = exports.UPDATE_SUBDISTRICTFORM_FILTERSELECTED = 'UPDATE_SUBDISTRICTFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_SUBDISTRICTFORM_ITEM = exports.ADD_SUBDISTRICTFORM_ITEM = 'ADD_SUBDISTRICTFORM_ITEM';
	//删除选中项
	var DELETE_SUBDISTRICTFORM_ITEM = exports.DELETE_SUBDISTRICTFORM_ITEM = 'DELETE_SUBDISTRICTFORM_ITEM';
	// 删除
	var DELETE_SUBDISTRICTFORM = exports.DELETE_SUBDISTRICTFORM = 'DELETE_SUBDISTRICTFORM';
	//提交数据
	var SUBMIT_SUBDISTRICTFORM = exports.SUBMIT_SUBDISTRICTFORM = 'SUBMIT_SUBDISTRICTFORM';
	// 控制台-打开|关闭面板
	var SWITCH_SUBDISTRICTCONSOLE = exports.SWITCH_SUBDISTRICTCONSOLE = 'SWITCH_SUBDISTRICTCONSOLE';
	
	//***********************************************************小区统计***********************************************************************//
	// 修改日期类型
	var UPDATE_PUTSUBDISTRICTFORM_DATETYPE = exports.UPDATE_PUTSUBDISTRICTFORM_DATETYPE = 'UPDATE_PUTSUBDISTRICTFORM_DATETYPE';
	// 修改日期
	var UPDATE_PUTSUBDISTRICTFORM_DATE = exports.UPDATE_PUTSUBDISTRICTFORM_DATE = 'UPDATE_PUTSUBDISTRICTFORM_DATE';
	//下拉框检索条件发生变化
	var UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED = exports.UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED = 'UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED';
	//选中下拉框一项
	var ADD_PUTSUBDISTRICTFORM_ITEM = exports.ADD_PUTSUBDISTRICTFORM_ITEM = 'ADD_PUTSUBDISTRICTFORM_ITEM';
	//删除选中项
	var DELETE_PUTSUBDISTRICTFORM_ITEM = exports.DELETE_PUTSUBDISTRICTFORM_ITEM = 'DELETE_PUTSUBDISTRICTFORM_ITEM';
	// 删除
	var DELETE_PUTSUBDISTRICTFORM = exports.DELETE_PUTSUBDISTRICTFORM = 'DELETE_PUTSUBDISTRICTFORM';
	//提交数据
	var SUBMIT_PUTSUBDISTRICTFORM = exports.SUBMIT_PUTSUBDISTRICTFORM = 'SUBMIT_PUTSUBDISTRICTFORM';
	// 控制台-打开|关闭面板
	var SWITCH_PUTSUBDISTRICTCONSOLE = exports.SWITCH_PUTSUBDISTRICTCONSOLE = 'SWITCH_PUTSUBDISTRICTCONSOLE';

/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* 提示消息*/
	//100M(1024*1024*100)
	var APP_0097 = exports.APP_0097 = 104857600;
	var APP_0098 = exports.APP_0098 = '(格式为.txt或.csv或.rar小于100M,可上传一个文件)';
	var APP_0099 = exports.APP_0099 = '.txt,.csv,.rar';
	var APP_0100 = exports.APP_0100 = '文件过大,请重新上传!';
	var APP_0101 = exports.APP_0101 = '上传成功!';
	var APP_0111 = exports.APP_0111 = '(默认全选)';
	var APP_0112 = exports.APP_0112 = '1.中心点加半径记录格式:经度,纬度,半径(米) 2.上传围栏记录格式:经度1,纬度1;经度2,纬度2;经度3,纬度3;经度4,纬度4(围栏必须是闭环,至少包含4个经纬度信息,且第一个经纬度与最后一个经纬度必须一致) 3.选择围栏的面积最大不超过180k㎡';
	
	var APP_0113 = exports.APP_0113 = '位置--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_01131 = exports.APP_01131 = '位置--选择城市:请选择一个或多个城市';
	var APP_0114 = exports.APP_0114 = '位置--上传文件:未上传文件或文件上传格式有误';
	
	var APP_0115 = exports.APP_0115 = '筛选-行政区划--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0116 = exports.APP_0116 = '筛选-行政区划--根据所选地域检索:不能为空';
	
	var APP_0117 = exports.APP_0117 = '应用筛选--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0118 = exports.APP_0118 = '应用筛选--根据所选应用检索:不能为空';
	var APP_01181 = exports.APP_01181 = '应用筛选--上传文件:未上传文件或文件上传格式有误';
	
	var APP_0119 = exports.APP_0119 = '应用分类--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0120 = exports.APP_0120 = '应用分类--选择应用分类:不能为空';
	
	var APP_0121 = exports.APP_0121 = '活跃设备--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_01211 = exports.APP_01211 = '筛选--活跃设备--选择时间：起始日与结束日跨度不能超过31天';
	var APP_01212 = exports.APP_01212 = '筛选--活跃设备--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_01213 = exports.APP_01213 = '筛选--活跃设备--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	var APP_0122 = exports.APP_0122 = '筛选--标签:不能为空';
	
	var APP_0123 = exports.APP_0123 = '圈中位置--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_01241 = exports.APP_01241 = '圈中位置--城市范围:请选择一个或多个城市';
	var APP_0124 = exports.APP_0124 = '圈中位置--上传文件:未上传文件或文件上传格式不对';
	
	var APP_0125 = exports.APP_0125 = '输出--标签明细:不能为空';
	
	var APP_0126 = exports.APP_0126 = 'APP明细--选择时间:日期不能为空或起始范围不能大于结束范围';
	
	var APP_0127 = exports.APP_0127 = '输出位置--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_01271 = exports.APP_01271 = '输出位置--城市范围 :请选择一个或多个城市';
	
	var APP_0128 = exports.APP_0128 = '输出-行政区划--选择时间:日期不能为空或起始范围不能大于结束范围';
	
	var APP_0129 = exports.APP_0129 = 'APP统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	
	var APP_0130 = exports.APP_0130 = '行政区划统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	
	var APP_0131 = exports.APP_0131 = '输出--标签统计:不能为空';
	
	var APP_0132 = exports.APP_0132 = '活跃统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_01321 = exports.APP_01321 = '输出统计--活跃统计--选择时间：起始日与结束日跨度不能超过31天';
	var APP_01322 = exports.APP_01322 = '输出统计--活跃统计--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_01323 = exports.APP_01323 = '输出统计--活跃统计--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0133 = exports.APP_0133 = '热力图--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0134 = exports.APP_0134 = '热力图--热力图中心城市中文名称:不能为空';
	var APP_01341 = exports.APP_01341 = '热力图--城市范围:请选择一个或多个城市';
	
	var APP_0135 = exports.APP_0135 = '设备属性统计:未选中设备';
	
	var APP_0136 = exports.APP_0136 = '筛选设备属性:未选中设备';
	
	var APP_0137 = exports.APP_0137 = '输出设备属性:未选中设备';
	
	var APP_0138 = exports.APP_0138 = 'id匹配--上传文件:未上传文件或文件上传格式不对';
	var APP_0139 = exports.APP_0139 = 'id匹配--数据格式/MD5哈希过的数据格式:未进行选择';
	
	var APP_0140 = exports.APP_0140 = '筛选--位置--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0141 = exports.APP_0141 = '筛选--位置--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0142 = exports.APP_0142 = '筛选--位置--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0143 = exports.APP_0143 = '筛选--行政区划--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0144 = exports.APP_0144 = '筛选--行政区划--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0145 = exports.APP_0145 = '筛选--行政区划--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0146 = exports.APP_0146 = '筛选--应用筛选--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0147 = exports.APP_0147 = '筛选--应用筛选--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0148 = exports.APP_0148 = '筛选--应用筛选--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0149 = exports.APP_0149 = '筛选--应用分类--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0150 = exports.APP_0150 = '筛选--应用分类--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0151 = exports.APP_0151 = '筛选--应用分类--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0152 = exports.APP_0152 = '输出明细--行政区划--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0153 = exports.APP_0153 = '输出明细--行政区划--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0154 = exports.APP_0154 = '输出明细--行政区划--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0155 = exports.APP_0155 = '输出明细--APP明细--选择时间：日期范围仅支持T+2或更早日期';
	var APP_0156 = exports.APP_0156 = '输出明细--APP明细--选择时间：结束周必须选择上周（含）或更早周范围';
	var APP_0157 = exports.APP_0157 = '输出明细--APP明细--选择时间：结束月必须选择上月（含）或更早月范围';
	
	var APP_0158 = exports.APP_0158 = '输出明细--输出位置--选择时间：日期范围仅支持T+2或更早日期';
	var APP_0159 = exports.APP_0159 = '输出明细--输出位置--选择时间：结束周必须选择上周（含）或更早周范围';
	var APP_0160 = exports.APP_0160 = '输出明细--输出位置--选择时间：结束月必须选择上月（含）或更早月范围';
	
	var APP_0161 = exports.APP_0161 = '输出明细--圈中位置--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0162 = exports.APP_0162 = '输出明细--圈中位置--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0163 = exports.APP_0163 = '输出明细--圈中位置--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0164 = exports.APP_0164 = '输出明细--热力图--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0165 = exports.APP_0165 = '输出明细--热力图--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0166 = exports.APP_0166 = '输出明细--热力图--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0167 = exports.APP_0167 = '输出统计--行政区划统计--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0168 = exports.APP_0168 = '输出统计--行政区划统计--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0169 = exports.APP_0169 = '输出统计--行政区划统计--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0170 = exports.APP_0170 = '输出统计--APP统计--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0171 = exports.APP_0171 = '输出统计--APP统计--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0172 = exports.APP_0172 = '输出统计--APP统计--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	
	var APP_0173 = exports.APP_0173 = '筛选POI--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0174 = exports.APP_0174 = '筛选POI--选择POI列表:请选择一个或多个';
	var APP_0175 = exports.APP_0175 = '筛选POI--上传文件:未上传文件或文件上传格式有误';
	var APP_0176 = exports.APP_0176 = '筛选POI--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0177 = exports.APP_0177 = '筛选POI--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0178 = exports.APP_0178 = '筛选POI--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	var APP_0180 = exports.APP_0180 = '筛选POI--选择城市:请选择一个或多个城市';
	var APP_0181 = exports.APP_0181 = '筛选POI--POI类型列表:不能为空,且最多选择5个标签';
	
	var APP_0182 = exports.APP_0182 = 'POI明细--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0183 = exports.APP_0183 = 'POI明细--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0184 = exports.APP_0184 = 'POI明细--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0185 = exports.APP_0185 = 'POI明细--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	var APP_0186 = exports.APP_0186 = 'POI明细--选择城市:请选择一个或多个城市';
	var APP_0187 = exports.APP_0187 = 'POI明细--POI类型列表:不能为空,且最多选择5个标签';
	var APP_0188 = exports.APP_0188 = 'POI明细--选择POI列表:请选择一个或多个';
	var APP_0189 = exports.APP_0189 = 'POI明细--上传文件:未上传文件或文件上传格式有误';
	
	var APP_0190 = exports.APP_0190 = 'POI统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0191 = exports.APP_0191 = 'POI统计--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0192 = exports.APP_0192 = 'POI统计--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0193 = exports.APP_0193 = 'POI统计--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	var APP_0194 = exports.APP_0194 = 'POI统计--选择城市:请选择一个或多个城市';
	var APP_0195 = exports.APP_0195 = 'POI统计--POI类型列表:不能为空,且最多选择5个标签';
	var APP_0196 = exports.APP_0196 = 'POI统计--选择POI列表:请选择一个或多个';
	var APP_0197 = exports.APP_0197 = 'POI统计--上传文件:未上传文件或文件上传格式有误';
	
	var APP_0198 = exports.APP_0198 = 'POI统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0199 = exports.APP_0199 = 'POI统计--选择时间：起始日与结束日跨度不能超过31天';
	var APP_0200 = exports.APP_0200 = 'POI统计--选择时间：起始周与结束周跨度不能超过8个周，结束周必须选择上周（含）或更早周范围';
	var APP_0201 = exports.APP_0201 = 'POI统计--选择时间：起始月与结束月跨度不能超过3个月，结束月必须选择上月（含）或更早月范围';
	var APP_0202 = exports.APP_0202 = 'POI统计--选择城市:请选择一个或多个城市';
	var APP_0203 = exports.APP_0203 = 'POI统计--POI类型列表:不能为空,且最多选择5个标签';
	
	var APP_0204 = exports.APP_0204 = '筛选--工作地居住地--选择时间:日期不能为空';
	var APP_0205 = exports.APP_0205 = '筛选--工作地居住地--城市:城市不能为空';
	var APP_0206 = exports.APP_0206 = '筛选--工作地居住地--上传文件:未上传文件或文件上传格式有误';
	var APP_0209 = exports.APP_0209 = '筛选--工作地居住地--通勤半径:输入有误';
	
	var APP_0207 = exports.APP_0207 = '输出明细--工作地居住地--选择时间:日期不能为空';
	var APP_0210 = exports.APP_0210 = '输出明细--工作地居住地--通勤半径:输入有误';
	
	var APP_0208 = exports.APP_0208 = '输出统计--工作地居住地--选择时间:日期不能为空';
	var APP_0211 = exports.APP_0211 = '输出统计--工作地居住地--通勤半径:输入有误';
	
	var APP_0212 = exports.APP_0212 = '输出小区明细--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0213 = exports.APP_0213 = '输出小区明细--所在城市列表:请选择一个或多个城市';
	
	var APP_0214 = exports.APP_0214 = '输出小区统计--选择时间:日期不能为空或起始范围不能大于结束范围';
	var APP_0215 = exports.APP_0215 = '输出小区统计--所在城市列表:请选择一个或多个城市';

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: 'ID匹配条件',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_IDCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'locationForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //选择城市
	    cityLabel: '城市范围',
	    //城市下拉请求后数组
	    filterAreaList: [],
	    //城市选中项数组
	    selectedFilterAreaList: []
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATELOCATIONTYPE, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_LOCATIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_LOCATIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_LOCATIONFORM_LOCATIONTYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_LOCATIONFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_LOCATIONFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_LOCATION_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_LOCATION_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_LOCATION_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_LOCATIONFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_LOCATIONFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_LOCATIONFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_LOCATIONFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_LOCATIONFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0113
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0140
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0141
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0142
	        };
	    } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_01131
	        };
	    } else if (state.fileList.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0114
	        };
	    } else {
	        state.submitData = {
	            'expType': 'locationFilter',
	            'exps': [{
	                'areaCodeList': cityIds.substring(0, cityIds.length - 1),
	                'hourSegments': hourSegments,
	                'coordinateType': state.selectedCoordinaryType.id,
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'uploadType': state.selectedLocationType.id,
	                'inputPath': state.fileList.length ? state.fileList[0] : '',
	                'expCode': state.selectedLocationType.id === _businessUtil.locationTypeList[0].id ? '01010' : state.selectedLocationType.id === _businessUtil.locationTypeList[1].id ? '01011' : '01012'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '位置条件',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_LOCATIONCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getIterator2 = __webpack_require__(90);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//设备类型
	var EQUIPMENTTYPE = ['normal', 'md5'];
	var state = {
	    formName: 'equipmentForm',
	    //选中项
	    selectedArr: [],
	    //MD5设备选中项
	    selectedMD5Arr: [],
	    //设备ID-显示文字
	    listLabel: '设备ID',
	    //设备ID-集合
	    list: [{
	        id: 21,
	        name: 'TDID',
	        type: EQUIPMENTTYPE[0]
	    }, {
	        id: 31,
	        name: 'MAC',
	        type: EQUIPMENTTYPE[0]
	    }, {
	        id: 41,
	        name: 'IMEI',
	        type: EQUIPMENTTYPE[0]
	    }, {
	        id: 61,
	        name: 'IDFA',
	        type: EQUIPMENTTYPE[0]
	    }, {
	        id: 71,
	        name: 'AndroidID',
	        type: EQUIPMENTTYPE[0]
	    }, {
	        id: 81,
	        name: 'IMSI',
	        type: EQUIPMENTTYPE[0]
	    }],
	    //MD5设备ID-显示文字
	    md5Label: 'MD5设备ID',
	    //MD5设备ID-集合
	    md5List: [{
	        id: 32,
	        name: 'MAC',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 33,
	        name: 'MAC(大写)',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 42,
	        name: 'IMEI',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 43,
	        name: 'IMEI(大写)',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 44,
	        name: '截取前14位IMEI',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 51,
	        name: 'PhoneNumber',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 62,
	        name: 'IDFA',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 63,
	        name: 'IDFA(大写)',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 72,
	        name: 'AndroidID',
	        type: EQUIPMENTTYPE[1]
	    }, {
	        id: 73,
	        name: 'AndroidID(大写)',
	        type: EQUIPMENTTYPE[1]
	    }]
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_EQUIPMENTFORM_SELECTED, function (state, item) {
	    //正常设备
	    if (item.type === EQUIPMENTTYPE[0]) {
	        if (!state.selectedArr.length) {
	            state.selectedArr.push(item);
	        } else {
	            var index = 0,
	                selectedIndex = -1;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = (0, _getIterator3.default)(state.selectedArr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var it = _step.value;
	
	                    if (it.id === item.id) {
	                        selectedIndex = index;
	                        break;
	                    }
	                    index++;
	                }
	                //存在则取消选中项
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            selectedIndex === -1 ? state.selectedArr.push(item) : state.selectedArr.splice(selectedIndex, 1);
	        }
	    } else {
	        if (!state.selectedMD5Arr.length) {
	            state.selectedMD5Arr.push(item);
	        } else {
	            var _index = 0,
	                _selectedIndex = -1;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(state.selectedMD5Arr), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _it = _step2.value;
	
	                    if (_it.id === item.id) {
	                        _selectedIndex = _index;
	                        break;
	                    }
	                    _index++;
	                }
	                //存在则取消选中项
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            _selectedIndex === -1 ? state.selectedMD5Arr.push(item) : state.selectedMD5Arr.splice(_selectedIndex, 1);
	        }
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_EQUIPMENTFORM, function (state) {
	    state.selectedArr = [];
	    state.selectedMD5Arr = [];
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	__webpack_require__(123);
	module.exports = __webpack_require__(125);


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(63);
	var get = __webpack_require__(126);
	module.exports = __webpack_require__(58).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};


/***/ }),
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '设备属性',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_EQUIPMENTCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_businessUtil.equipmentProList[0].name = '机型';
	var FILTERLIST = 'filterList';
	var filterListIndexs = {};
	
	var setFilterList = function setFilterList() {
	    var list = [];
	    _businessUtil.equipmentProList.forEach(function (obj, index) {
	        list.$set(index, []);
	        filterListIndexs[obj.id] = index;
	    });
	    return list;
	};
	
	var state = {
	    formName: 'equipmentProForm',
	    //设备属性-显示文字
	    listLabel: '设备属性',
	    filterListIndexs: filterListIndexs,
	    //设备属性-集合
	    equipmentProList: _businessUtil.equipmentProList,
	    selectedLabel: '已选设备属性集合',
	    //已选设备属性集合
	    selectedList: [],
	    filterLabel: '根据所选设备属性检索',
	    filterList: setFilterList(),
	    //根据已选设备分类对应具体数据集合
	    selectedFilterList: setFilterList(),
	    //提交数据
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_EQUIPMENTPROFORM_TYPESELECTED, function (state, item) {
	    var index = state.selectedList.indexOf(item);
	    if (index !== -1) {
	        state.selectedList.splice(index, 1);
	        state.filterList[filterListIndexs[item.id]] = [];
	        state.selectedFilterList.$set(filterListIndexs[item.id], []);
	    } else {
	        state.selectedList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_EQUIPMENTPROFORM_FILTERSELECTED, function (state, data, typeId) {
	    state.filterList.$set(filterListIndexs[typeId], data);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_EQUIPMENTPROFORM_ITEM, function (state, item, typeId) {
	    if (typeId) {
	        state.selectedFilterList[filterListIndexs[typeId]].push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_EQUIPMENTPROFORM_ITEM, function (state, item, typeId) {
	    var index = -1,
	        selectedList = state.selectedFilterList[filterListIndexs[typeId]];
	    for (var i = 0, len = selectedList.length; i < len; i++) {
	        if (selectedList[i].code === item.code) {
	            index = i;
	            break;
	        }
	    }
	    selectedList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_EQUIPMENTPROFORM, function (state) {
	    state.selectedList = [];
	    state.selectedFilterList = setFilterList();
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_EQUIPMENTPROFORM, function (state) {
	    var exps = [];
	    state.selectedList.forEach(function (obj) {
	        var list = state.selectedFilterList[filterListIndexs[obj.id]];
	        if (list.length) {
	            var dataList = '';
	            list.forEach(function (item) {
	                dataList += item.code + ',';
	            });
	            exps.push({
	                dataType: obj.id,
	                dataList: dataList.substring(0, dataList.length - 1),
	                expCode: '01030'
	            });
	        }
	    });
	    if (exps.length == 0) {
	        state.submitData = {
	            error: _appMessages.APP_0136
	        };
	    } else {
	        state.submitData = {
	            expType: 'deviceFilter',
	            exps: exps
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '设备属性筛选',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_EQUIPMENTPROCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var resetArea = function resetArea(state) {
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	};
	var reset = function reset(state) {
	    state.selectedRegionType = _businessUtil.regionTypeList[0];
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedAreaType = _businessUtil.areaTypeList[0];
	    resetArea(state);
	    resetDate(state);
	};
	var state = {
	    formName: 'regionForm',
	    regionTypeLabel: '行政区划类型',
	    //地域行为类型集合
	    regionTypeList: _businessUtil.regionTypeList,
	    //选中地域行为类型
	    selectedRegionType: _businessUtil.regionTypeList[0],
	    showDateType: true,
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择地域
	    areaTypeLabel: '选择地域',
	    //地域类型集合
	    areaTypeList: _businessUtil.areaTypeList,
	    //选中地域类型
	    selectedAreaType: _businessUtil.areaTypeList[0],
	    // 根据所选地域检索
	    filterAreaLabel: '根据所选地域检索',
	    filterAreaList: [],
	    selectedFilterAreaList: [],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_REGIONFORM_REGIONTYPE, function (state, item) {
	    reset(state);
	    state.selectedRegionType = item;
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            state.selectedDateType = locaDateInfo.typeList[2];
	            state.selectedAreaType = _businessUtil.areaTypeList[1];
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            state.selectedAreaType = _businessUtil.areaTypeList[2];
	            state.showDateType = false;
	            break;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_REGIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_REGIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_REGIONFORM_AREATYPE, function (state, item) {
	    state.selectedAreaType = item;
	    resetArea(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_REGIONFORM_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_REGIONFORM_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_REGIONFORM_AREAITEM, function (state, item) {
	    state.selectedFilterAreaList.splice(item, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_REGIONFORM, function (state) {
	    reset(state);
	    state.showDateType = true;
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_REGIONFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    var data = {
	        'expType': 'areaFilter',
	        'exps': [{
	            'type': state.selectedRegionType.id,
	            'areaType': state.selectedAreaType.id,
	            'areaCodeList': cityIds.substring(0, cityIds.length - 1)
	        }]
	    };
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].timeType = state.selectedDateType.id;
	            data.exps[0].expCode = '01050';
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].expCode = '01051';
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            data.exps[0].expCode = '01052';
	            break;
	    }
	    state.submitData = {};
	    if (state.selectedRegionType != _businessUtil.regionTypeList[2]) {
	        if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	            state.submitData = {
	                error: _appMessages.APP_0115
	            };
	        } else if (!syncId && state.selectedDateType.id == 1) {
	            state.submitData = {
	                error: _appMessages.APP_0143
	            };
	        } else if (!syncId && state.selectedDateType.id == 2) {
	            state.submitData = {
	                error: _appMessages.APP_0144
	            };
	        } else if (!syncId && state.selectedDateType.id == 3) {
	            state.submitData = {
	                error: _appMessages.APP_0145
	            };
	        } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	            state.submitData = {
	                error: _appMessages.APP_0116
	            };
	        } else {
	            state.submitData = data;
	        }
	    } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_0116
	        };
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '行政区划筛选',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_REGIONCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	var _businessUtil = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    formName: 'tagForm',
	    tagLabel: '选择标签',
	    tagList: {},
	    //选中标签
	    tagListSelected: [],
	    //表达式选择
	    expression: '表达式选择',
	    //单选数组
	    tagExpressionList: _businessUtil.tagExpressionList,
	    //默认选中项
	    selectedId: 1,
	    tagExpressionName: _businessUtil.tagExpressionList[0].name,
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_TAGFORM_DATA, function (state, data) {
	    state.tagList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TAGFORM_SELECTED, function (state, arr) {
	    var list = [];
	    arr.forEach(function (obj) {
	        var index = -1;
	        for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	            var selectedObj = state.tagListSelected[i];
	            if (selectedObj.id === obj.id) {
	                index = i;
	                state.tagListSelected.splice(index, 1);
	                --i;
	                --len;
	            }
	        }
	        if (obj.checked) {
	            list.push(obj);
	        }
	    });
	    state.tagListSelected = state.tagListSelected.concat(list);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_EXPRESSIONFORM_SELECTED, function (state, data) {
	    state.selectedId = data.id;
	    state.tagExpressionName = data.name;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TAGFORM, function (state) {
	    state.tagListSelected = [];
	    state.selectedId = 1, state.tagExpressionName = _businessUtil.tagExpressionList[0].name, state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_TAGFORM, function (state) {
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.id + ',';
	    });
	    if (state.tagListSelected.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0122
	        };
	    } else {
	        state.submitData = {
	            expType: 'tagFilter',
	            exps: [{
	                opType: state.tagExpressionName,
	                codeList: codeListStr.substring(0, codeListStr.length - 1),
	                expCode: '01060'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '标签筛选',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_TAGCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var state = {
	    formName: 'appForm',
	    behaviorTypeLabel: '应用行为',
	    behaviorTypeList: _businessUtil.behaviorTypeList,
	    selectedBehaviorType: _businessUtil.behaviorTypeList[0],
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    appQueryTypeLabel: '选择应用',
	    //选择应用类型集合
	    appQueryTypeList: _businessUtil.appQueryTypeList,
	    //选中应用类型
	    selectedAppQueryType: _businessUtil.appQueryTypeList[0],
	    // 根据所选应用检索
	    filterAppLabel: '根据所选应用检索',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    //and or
	    expression: '表达式选择',
	    selectedId: 1,
	    tagExpressionList: _businessUtil.tagExpressionList,
	    appExpressionName: _businessUtil.tagExpressionList[0].name,
	    //二选一  筛选方式
	    selectivityLabel: '筛选方式',
	    selectedIdSelectivity: 1,
	    appSelectivityList: _businessUtil.appSelectivityList,
	    //上传路经
	    fileList: [],
	    fileLabel: '上传文件',
	    //文件名
	    fileListname: [],
	    //根路径输出位置
	    html: '',
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPFORM_TYPE, function (state, item) {
	    state.selectedBehaviorType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPFORM_QUERYTYPE, function (state, item) {
	    state.selectedAppQueryType = item;
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPFORM_FILTERSELECTED, function (state, data) {
	    var arr = [];
	    for (var i = 0; i < data.length; i++) {
	        var str = '' + data[i].appName + ',' + data[i].packageName + ',' + data[i].platform + '';
	        arr.push({ appName: str, hash: data[i].hash, packageName: data[i].packageName, platform: data[i].platform });
	    }
	    state.filterAppList = arr;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_APPFORM_ITEM, function (state, item) {
	    if (item.appName) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_APPFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].hash == item.hash) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APP_OR_FORM, function (state, data) {
	    state.selectedId = data.id;
	    state.appExpressionName = data.name;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APP_SELECTIVITY_FORM, function (state, data) {
	    state.selectedIdSelectivity = data.id;
	    state.fileListname = [];
	    state.fileList = [];
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.selectedAppQueryType = _businessUtil.appQueryTypeList[0];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_APPFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_APPFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_APPFORM, function (state) {
	    resetDate(state);
	    state.selectedBehaviorType = _businessUtil.behaviorTypeList[0];
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedAppQueryType = _businessUtil.appQueryTypeList[0];
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.appExpressionName = _businessUtil.tagExpressionList[0].name;
	    state.submitData = {};
	    state.html = "";
	    state.fileListname = [];
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_APPFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var appIds = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        appIds += item.hash + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0117
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0146
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0147
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0148
	        };
	    } else if (state.selectedIdSelectivity === 1) {
	        if (state.selectedFilterAppList.length < 1) {
	            state.submitData = {
	                error: _appMessages.APP_0118
	            };
	        } else {
	            change();
	        }
	    } else if (state.selectedIdSelectivity === 2) {
	        if (state.fileList.length === 0) {
	            state.submitData = {
	                error: _appMessages.APP_01181
	            };
	        } else {
	            change();
	        }
	    } else {
	        change();
	    }
	    function change() {
	        state.submitData = {
	            expType: 'appFilter',
	            exps: [{
	                opType: state.appExpressionName,
	                type: state.selectedBehaviorType.id,
	                startTime: state.selectedStartDate,
	                endTime: state.selectedEndDate,
	                timeType: state.selectedDateType.id,
	                appIds: appIds.length ? appIds.substring(0, appIds.length - 1) : '',
	                inputPath: state.fileList.length ? state.fileList[0] : '',
	                expCode: state.selectedBehaviorType.id === _businessUtil.behaviorTypeList[0].id ? '01071' : '01070'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '应用筛选',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_APPCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var state = {
	    formName: 'appTypeForm',
	    behaviorTypeLabel: '应用行为',
	    behaviorTypeList: _businessUtil.behaviorTypeList,
	    selectedBehaviorType: _businessUtil.behaviorTypeList[0],
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    appQueryTypeLabel: '选择应用分类',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPTYPEFORM_TYPE, function (state, item) {
	    state.selectedBehaviorType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPTYPEFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPTYPEFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_APPTYPEFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_APPTYPEFORM_ITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_APPTYPEFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_APPTYPEFORM, function (state) {
	    resetDate(state);
	    state.selectedBehaviorType = _businessUtil.behaviorTypeList[0];
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_APPTYPEFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var appTypes = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        appTypes += item.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0119
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0149
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0150
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0151
	        };
	    } else if (state.selectedFilterAppList.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0120
	        };
	    } else {
	        state.submitData = {
	            expType: 'appTypeFilter',
	            exps: [{
	                type: state.selectedBehaviorType.id,
	                startTime: state.selectedStartDate,
	                endTime: state.selectedEndDate,
	                timeType: state.selectedDateType.id,
	                appTypes: appTypes.substring(0, appTypes.length - 1),
	                expCode: state.selectedBehaviorType.id === _businessUtil.behaviorTypeList[0].id ? '01081' : '01080'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '应用分类筛选',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_APPTYPECONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var reset = function reset(state) {
	    state.selectedRegionType = _businessUtil.regionTypeList[0];
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedAreaType = _businessUtil.areaTypeList[0];
	    resetDate(state);
	};
	var state = {
	    formName: 'outRegionForm',
	    regionTypeLabel: '行政区划类型',
	    //地域行为类型集合
	    regionTypeList: _businessUtil.regionTypeList,
	    //选中地域行为类型
	    selectedRegionType: _businessUtil.regionTypeList[0],
	    showDateType: true,
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择地域
	    areaTypeLabel: '选择地域',
	    //地域类型集合
	    areaTypeList: _businessUtil.areaTypeList,
	    //选中地域类型
	    selectedAreaType: _businessUtil.areaTypeList[0],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTREGIONFORM_REGIONTYPE, function (state, item) {
	    reset(state);
	    state.selectedRegionType = item;
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            state.selectedDateType = locaDateInfo.typeList[2];
	            state.selectedAreaType = _businessUtil.areaTypeList[1];
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            state.selectedAreaType = _businessUtil.areaTypeList[1];
	            state.showDateType = false;
	            break;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTREGIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTREGIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTREGIONFORM_AREATYPE, function (state, item) {
	    state.selectedAreaType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTREGIONFORM, function (state) {
	    reset(state);
	    state.showDateType = true;
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTREGIONFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var data = {
	        'expType': 'outputDetail',
	        'exps': [{
	            'type': state.selectedRegionType.id,
	            'areaType': state.selectedAreaType.id
	        }]
	    };
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].timeType = state.selectedDateType.id;
	            data.exps[0].expCode = '02040';
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].expCode = '02041';
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            data.exps[0].expCode = '02042';
	            break;
	    }
	    state.submitData = {};
	    if (state.selectedRegionType != _businessUtil.regionTypeList[2]) {
	        if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	            state.submitData = {
	                error: _appMessages.APP_0128
	            };
	        } else if (!syncId && state.selectedDateType.id == 1) {
	            state.submitData = {
	                error: _appMessages.APP_0152
	            };
	        } else if (!syncId && state.selectedDateType.id == 2) {
	            state.submitData = {
	                error: _appMessages.APP_0153
	            };
	        } else if (!syncId && state.selectedDateType.id == 3) {
	            state.submitData = {
	                error: _appMessages.APP_0154
	            };
	        } else {
	            state.submitData = data;
	        }
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '行政区划',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTREGIONCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    formName: 'outTagForm',
	    tagLabel: '选择标签',
	    tagList: {},
	    //选中标签
	    tagListSelected: [],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_OUTTAGFORM_DATA, function (state, data) {
	    state.tagList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTTAGFORM_SELECTED, function (state, arr) {
	    var list = [];
	    arr.forEach(function (obj) {
	        var index = -1;
	        for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	            var selectedObj = state.tagListSelected[i];
	            if (selectedObj.id === obj.id) {
	                index = i;
	                state.tagListSelected.splice(index, 1);
	                --i;
	                --len;
	            }
	        }
	        if (obj.checked) {
	            list.push(obj);
	        }
	    });
	    state.tagListSelected = state.tagListSelected.concat(list);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTTAGFORM, function (state) {
	    state.tagListSelected = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTTAGFORM, function (state) {
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.id + ',';
	    });
	    if (state.tagListSelected.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0125
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputDetail',
	            'exps': [{
	                'type': 'tag',
	                'codeList': codeListStr.substring(0, codeListStr.length - 1),
	                'expCode': '02030'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '标签明细',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTTAGCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    formName: 'brushForm',
	    //选中项-显示文字
	    selectedText: "过滤刷量设备",
	    //选中项-ID
	    selectedId: 1,
	    //数据格式-显示文字
	    listLabel: "过滤刷量选项",
	    //数组
	    brushList: _businessUtil.brushList,
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_BRUSHFORM, function (state) {
	    state.selectedText = '过滤刷量设备';
	    state.selectedId = 1;
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_BRUSHFORM, function (state) {
	    state.submitData = {
	        "excludeCheatedIds": state.selectedId
	    };
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_BRUSHFORM, function (state, item) {
	    state.selectedText = item.text;
	    state.selectedId = item.id;
	}), _mutations);
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '过滤刷量匹配条件',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_BRUSHTYPECONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getIterator2 = __webpack_require__(90);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _mutations;
	//设备类型
	
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	var _businessUtil = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EQUIPMENTTYPE = ['normal', 'md5', 'she'];
	for (var i = 0; i < _businessUtil.deviceList.length; i++) {
	    _businessUtil.deviceList[i].type = EQUIPMENTTYPE[0];
	}
	//临时修改
	var newdeviceList = _businessUtil.deviceList.slice(0, 1);
	for (var _i = 0; _i < _businessUtil.md5DeviceList.length; _i++) {
	    _businessUtil.md5DeviceList[_i].type = EQUIPMENTTYPE[1];
	}
	for (var _i2 = 0; _i2 < _businessUtil.equipmentProList.length; _i2++) {
	    _businessUtil.equipmentProList[_i2].type = EQUIPMENTTYPE[2];
	}
	var removeone = _businessUtil.equipmentProList.slice(1);
	var newList = removeone.concat([{
	    id: 96,
	    name: '标准机型',
	    type: EQUIPMENTTYPE[2]
	}, {
	    id: 102,
	    name: '第一次活跃时间',
	    type: EQUIPMENTTYPE[2]
	}, {
	    id: 103,
	    name: '最后一次活跃时间',
	    type: EQUIPMENTTYPE[2]
	}]);
	var state = {
	    formName: 'idformoutForm',
	    //提交数据
	    submitData: {},
	    //选中项
	    selectedArr: [],
	    //MD5设备选中项
	    selectedMD5Arr: [],
	    //设备选中项
	    selectedsheArr: [],
	    //设备ID-显示文字
	    listLabel: '设备ID',
	    //提交时用的id
	    submitid: [],
	    //设备ID-集合
	    deviceList: newdeviceList,
	    //MD5设备ID-显示文字
	    md5Label: 'MD5设备ID',
	    //MD5设备ID-集合
	    md5DeviceList: _businessUtil.md5DeviceList,
	    //设备属性ID-显示文字
	    sheLabel: '设备属性',
	    //设备属性ID-集合
	    sheList: newList
	
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_IDFORMOUTFORM_SELECTED, function (state, item) {
	    //正常设备
	    if (item.type === EQUIPMENTTYPE[0]) {
	        change(state.selectedArr);
	    } else if (item.type === EQUIPMENTTYPE[2]) {
	        change(state.selectedsheArr);
	    } else {
	        change(state.selectedMD5Arr);
	    }
	    function change(k) {
	        if (!k.length) {
	            k.push(item);
	            state.submitid.push(item.id);
	        } else {
	            var arr = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = (0, _getIterator3.default)(k), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var it = _step.value;
	
	                    arr.push(it.id);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            if (arr.indexOf(item.id) !== -1) {
	                k.splice(arr.indexOf(item.id), 1);
	            } else {
	                k.push(item);
	            }
	            if (state.submitid.indexOf(item.id) !== -1) {
	                state.submitid.splice(state.submitid.indexOf(item.id), 1);
	            } else {
	                state.submitid.push(item.id);
	            }
	        }
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_IDFORMOUTFORM, function (state) {
	    state.selectedArr = [];
	    state.selectedMD5Arr = [];
	    state.selectedsheArr = [];
	    state.submitData = {};
	    state.submitid = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_IDFORMOUTFORM, function (state) {
	    var str = state.submitid.join(","); /*&&state.selectedsheArr.length==0&&state.selectedMD5Arr.length==0*/
	    if (str == 0) {
	
	        state.submitData = {
	            error: _appMessages.APP_0137
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputDetail',
	            'exps': [{
	                'outputFilter': str,
	                'type': 'device',
	                'expCode': '02000'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '设备ID/属性',
	    //false关闭|true打开
	    switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_IDFORMOUTCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	var _businessUtil = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arr = _businessUtil.equipmentProList.slice(1);
	arr.unshift({ id: 96, name: '标准机型' });
	//arr=arr.slice(0,8) 
	var state = {
	    formName: 'structForm',
	    //选中项-显示Label
	    selectedLabel: '',
	    //选中项-显示文字
	    selectedText: '',
	    //选中项-ID
	    selectedId: 0,
	    //数据格式-显示文字
	    listLabel: '统计维度',
	    //数据格式-集合
	    list: arr,
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_STRUCTFORM, function (state) {
	    state.selectedLabel = '';
	    state.selectedText = '';
	    state.selectedId = 0;
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_STRUCTFORM_SELECTED, function (state, item) {
	    state.selectedLabel = item.label;
	    state.selectedText = item.text;
	    state.selectedId = item.id;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_STRUCTFORM, function (state) {
	    if (state.selectedId == 0) {
	        state.submitData = {
	            error: _appMessages.APP_0135
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': 'device',
	                'dimType': state.selectedId,
	                'expCode': '03000'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '设备属性统计',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_STRUCTCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'behaviorForm',
	    dateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '输出类型',
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    behaviorTypeList: _businessUtil.behaviorTypeList,
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.behaviorTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.behaviorTypeList[0],
	    appQueryTypeLabel: '选择应用分类',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_BEHAVIORFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_BEHAVIORFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_BEHAVIORFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_BEHAVIORFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_BEHAVIORFORM_ITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_BEHAVIORFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_BEHAVIORFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedCoordinaryType = _businessUtil.behaviorTypeList[0];
	    state.submitData = {};
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_BEHAVIORFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var appTypes = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        appTypes += item.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0129
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0170
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0171
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0172
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': state.selectedCoordinaryType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'timeType': state.selectedDateType.id,
	                'appTypes': appTypes.substring(0, appTypes.length - 1),
	                'expCode': state.selectedCoordinaryType.id === _businessUtil.behaviorTypeList[0].id ? '03032' : '03030'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: 'APP统计',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_BEHAVIORCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var reset = function reset(state) {
	    state.selectedRegionType = _businessUtil.regionTypeList[0];
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedAreaType = _businessUtil.areaTypeList[0];
	    resetDate(state);
	};
	var state = {
	    formName: 'putRegionForm',
	    regionTypeLabel: '行政区划类型',
	    //地域行为类型集合
	    regionTypeList: _businessUtil.regionTypeList,
	    //选中地域行为类型
	    selectedRegionType: _businessUtil.regionTypeList[0],
	    showDateType: true,
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择地域
	    areaTypeLabel: '选择地域',
	    //地域类型集合
	    areaTypeList: _businessUtil.areaTypeList,
	    //选中地域类型
	    selectedAreaType: _businessUtil.areaTypeList[0],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTREGIONFORM_REGIONTYPE, function (state, item) {
	    reset(state);
	    state.selectedRegionType = item;
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            state.selectedDateType = locaDateInfo.typeList[2];
	            state.selectedAreaType = _businessUtil.areaTypeList[1];
	            state.showDateType = true;
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            state.selectedAreaType = _businessUtil.areaTypeList[1];
	            state.showDateType = false;
	            break;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTREGIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTREGIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTREGIONFORM_AREATYPE, function (state, item) {
	    state.selectedAreaType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTREGIONFORM, function (state) {
	    reset(state);
	    state.showDateType = true;
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PUTREGIONFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var data = {
	        'expType': 'outputStatics',
	        'exps': [{
	            'type': state.selectedRegionType.id,
	            'dimType': state.selectedAreaType.id
	        }]
	    };
	    switch (state.selectedRegionType.id) {
	        case _businessUtil.regionTypeList[0].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].timeType = state.selectedDateType.id;
	            data.exps[0].expCode = '03020';
	            break;
	        case _businessUtil.regionTypeList[1].id:
	            data.exps[0].startTime = state.selectedStartDate;
	            data.exps[0].endTime = state.selectedEndDate;
	            data.exps[0].expCode = '03021';
	            break;
	        case _businessUtil.regionTypeList[2].id:
	            data.exps[0].expCode = '03022';
	            break;
	    }
	    state.submitData = {};
	    if (state.selectedRegionType != _businessUtil.regionTypeList[2]) {
	        if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	            state.submitData = {
	                error: _appMessages.APP_0130
	            };
	        } else if (!syncId && state.selectedDateType.id == 1) {
	            state.submitData = {
	                error: _appMessages.APP_0167
	            };
	        } else if (!syncId && state.selectedDateType.id == 2) {
	            state.submitData = {
	                error: _appMessages.APP_0168
	            };
	        } else if (!syncId && state.selectedDateType.id == 3) {
	            state.submitData = {
	                error: _appMessages.APP_0169
	            };
	        } else {
	            state.submitData = data;
	        }
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '行政区划统计',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PUTREGIONCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    formName: 'putTagForm',
	    tagLabel: '选择标签',
	    tagList: {},
	    //选中标签
	    tagListSelected: [],
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_PUTTAGFORM_DATA, function (state, data) {
	    state.tagList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTTAGFORM_SELECTED, function (state, arr) {
	    var list = [];
	    arr.forEach(function (obj) {
	        var index = -1;
	        for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	            var selectedObj = state.tagListSelected[i];
	            if (selectedObj.id === obj.id) {
	                index = i;
	                state.tagListSelected.splice(index, 1);
	                --i;
	                --len;
	            }
	        }
	        if (obj.checked) {
	            list.push(obj);
	        }
	    });
	    state.tagListSelected = state.tagListSelected.concat(list);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTTAGFORM, function (state) {
	    state.tagListSelected = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PUTTAGFORM, function (state) {
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.id + ',';
	    });
	    if (state.tagListSelected.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0131
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': 'tag',
	                'codeList': codeListStr.substring(0, codeListStr.length - 1),
	                'expCode': '03031'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '标签统计',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PUTTAGCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'outBehaviorForm',
	    dateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '输出类型',
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    behaviorTypeList: _businessUtil.behaviorTypeList,
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.behaviorTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.behaviorTypeList[0],
	    appQueryTypeLabel: '选择应用分类',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTBEHAVIORFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTBEHAVIORFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTBEHAVIORFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_OUTBEHAVIORFORM_ITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTBEHAVIORFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTBEHAVIORFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedCoordinaryType = _businessUtil.behaviorTypeList[0];
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTBEHAVIORFORM, function (state) {
	    state.selectedEndDate = state.selectedStartDate;
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var appTypes = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        appTypes += item.code + ',';
	    });
	    var data = {
	        expType: 'outputDetail',
	        exps: [{
	            'type': state.selectedCoordinaryType.id,
	            'startTime': state.selectedStartDate,
	            'endTime': state.selectedStartDate,
	            'timeType': state.selectedDateType.id,
	            'appTypes': appTypes.substring(0, appTypes.length - 1)
	        }]
	    };
	    switch (state.selectedCoordinaryType.id) {
	        case _businessUtil.behaviorTypeList[0].id:
	            data.exps[0].expCode = '02011';
	            break;
	        case _businessUtil.behaviorTypeList[1].id:
	            data.exps[0].expCode = '02010';
	            break;
	    }
	
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0126
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0155
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0156
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0157
	        };
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: 'APP明细',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTBEHAVIORCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _state, _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	
	var state = (_state = {
	    formName: 'outLocationForm',
	    dateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '输出类型',
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: ''
	}, (0, _defineProperty3.default)(_state, 'timeLabel', '时间范围'), (0, _defineProperty3.default)(_state, 'cityLabel', '城市范围'), (0, _defineProperty3.default)(_state, 'filterAreaList', []), (0, _defineProperty3.default)(_state, 'selectedFilterAreaList', []), (0, _defineProperty3.default)(_state, 'submitData', {}), _state);
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTLOCATIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTLOCATIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTLOCATION_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_OUTLOCATION_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	        for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	            var obj = state.selectedFilterAreaList[i];
	            if (obj.code === '-1') {
	                state.selectedFilterAreaList = state.selectedFilterAreaList.slice(i, i + 1);
	                break;
	            }
	        }
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTLOCATION_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTLOCATIONFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.submitData = {};
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTLOCATIONFORM, function (state) {
	    state.selectedEndDate = state.selectedStartDate;
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0127
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0158
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0159
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0160
	        };
	    } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_01271
	        };
	    } else {
	        state.submitData = {
	            'expType': 'outputDetail',
	            'exps': [{
	                'areaCodeList': cityIds.substring(0, cityIds.length - 1),
	                'type': 'location',
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedStartDate,
	                'timeType': state.selectedDateType.id,
	                'coordinateType': '1',
	                'expCode': '02020'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '输出位置',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTLOCATIONCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'putLocationForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传路经
	    fileList: [],
	    //上传文件名
	    fileListname: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    fenceUpload: false,
	    //选择城市
	    cityLabel: '城市范围',
	    //城市下拉请求后数组
	    filterAreaList: [],
	    //城市选中项数组
	    selectedFilterAreaList: []
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATEPUTLOCATION, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTLOCATIONFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTLOCATIONFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTLOCATIONFORM_LOCATIONTYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTLOCATIONFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTLOCATIONFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTLOCATIONFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTLOCATIONFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTLOCATIONFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTLOCATIONFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.submitData = {};
	    state.html = "";
	    state.fileListname = [];
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTLOCATION_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTLOCATION_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	        for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	            var obj = state.selectedFilterAreaList[i];
	            if (obj.code === '-1') {
	                state.selectedFilterAreaList = state.selectedFilterAreaList.slice(i, i + 1);
	                break;
	            }
	        }
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTLOCATION_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PUTLOCATIONFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0123
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0161
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0162
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0163
	        };
	    } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_01241
	        };
	    } else if (state.fileList.length < 1) {
	        state.submitData = {
	            error: _appMessages.APP_0124
	        };
	    } else {
	        state.submitData = {
	            expType: 'outputDetail',
	            exps: [{
	                'areaCodeList': cityIds.substring(0, cityIds.length - 1),
	                'type': state.selectedLocationType.id == 1 ? 'coordinateByCycle' : 'coordinateByFence',
	                'outputCoordinateType': '1',
	                'hourSegments': hourSegments,
	                'inputCoordinateType': state.selectedCoordinaryType.id,
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'inputPath': state.fileList.length ? state.fileList[0] : '',
	                'expCode': state.selectedLocationType.id === _businessUtil.locationTypeList[0].id ? '02050' : state.selectedLocationType.id === _businessUtil.locationTypeList[1].id ? '02051' : '02052'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '圈中位置',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PUTLOCATIONCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetDate = function resetDate(state) {
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	};
	var state = {
	    formName: 'hotForm',
	    locaDateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    appQueryTypeLabel: '热力图中心城市中文名称',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    datatime: [3],
	    submitData: {},
	    //选择城市
	    cityLabel: '城市范围',
	    //城市下拉请求后数组
	    filterAreaList: [],
	    //城市选中项数组
	    selectedFilterAreaList: []
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_HOTFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    resetDate(state);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_HOTFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_HOTFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_HOTFORM_ITEM, function (state, item) {
	
	    if (item.code) {
	        state.selectedFilterAppList.pop();
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_HOTFORM_ITEM, function (state, item) {
	    state.selectedFilterAppList.splice(state.selectedFilterAppList.indexOf(item), 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_HOTFORM, function (state) {
	    resetDate(state);
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.submitData = {};
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_HOT_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_HOT_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	        for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	            var obj = state.selectedFilterAreaList[i];
	            if (obj.code === '-1') {
	                state.selectedFilterAreaList = state.selectedFilterAreaList.slice(i, i + 1);
	                break;
	            }
	        }
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_HOT_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_HOTFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var appTypes = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        appTypes += item.name + ',';
	    });
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0133
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0164
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0165
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0166
	        };
	    } else if (cityIds.substring(0, cityIds.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_01341
	        };
	    } else if (appTypes.substring(0, appTypes.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_0134
	        };
	    } else {
	        state.submitData = {
	            expType: 'outputChart',
	            exps: [{
	                'areaCodeList': cityIds.substring(0, cityIds.length - 1),
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'timeType': state.selectedDateType.id,
	                'city': appTypes.substring(0, appTypes.length - 1),
	                'coordinateType': '1',
	                'expCode': '04000'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '输出热力图统计',
	    //false关闭|true打开
	    switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_HOTCONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'activeForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    activeTypelist: _businessUtil.activeTypelist,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选中位置类型
	    behaviorTypeLabel: "活跃统计类型",
	    //坐标类型集合
	    behaviorTypeList: _businessUtil.activeTypelist,
	    //选中坐标类型
	    selectedBehaviorType: _businessUtil.activeTypelist[0],
	    //设备活跃类型
	    activeBehaviorLabel: '设备活跃类型',
	    //设备活跃类型
	    activeBehaviorList: _businessUtil.activeBehaviorList,
	    //选中设备活跃类型
	    activeBehaviorType: _businessUtil.activeBehaviorList[0],
	    //tab记录
	    active_TabId: 0,
	    //提交
	    submitData: {},
	    async: false
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_ACTIVEFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_ACTIVEFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_ACTIVEFORM_LOCATIONTYPE, function (state, item) {
	    state.selectedBehaviorType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE, function (state, item) {
	    state.activeBehaviorType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE, function (state, item) {
	    state.active_TabId = item;
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedBehaviorType = _businessUtil.activeTypelist[0];
	    state.activeBehaviorType = _businessUtil.activeBehaviorList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    if (item == '1') {
	        state.async = true;
	    } else {
	        state.async = false;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_ACTIVEFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_ACTIVEFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        if (state.selectedTimeList[i].id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_ACTIVEFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedBehaviorType = _businessUtil.activeTypelist[0];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_ACTIVEFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : '';
	    if (state.selectedBehaviorType.id === _businessUtil.activeTypelist[0].id) {
	        hourSegments = "";
	    }
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0121
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_01211
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_01212
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_01213
	        };
	    } else {
	        //活跃行为0  活跃属性1
	        if (state.active_TabId === 0) {
	            state.submitData = {
	                expType: 'activeFilter',
	                exps: [{
	                    'hourSegments': hourSegments,
	                    'activeType': state.selectedBehaviorType.id,
	                    'timeType': state.selectedDateType.id,
	                    'startTime': state.selectedStartDate,
	                    'endTime': state.selectedEndDate,
	                    'expCode': state.selectedBehaviorType.id === _businessUtil.activeTypelist[0].id ? '01040' : '01041'
	                }]
	            };
	        } else {
	            state.submitData = {
	                expType: 'activeBehaviorFilter',
	                exps: [{
	                    'activeBehaviorType': state.activeBehaviorType.id,
	                    'timeType': state.selectedDateType.id,
	                    'startTime': state.selectedStartDate,
	                    'endTime': state.selectedEndDate,
	                    'expCode': '01091'
	                }]
	            };
	        }
	    }
	}), _mutations);
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '活跃设备',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_ACTIVECONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'outActiveForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    locaDateInfo: locaDateInfo,
	    activeTypelist: _businessUtil.activeTypelist,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选中位置类型
	    behaviorTypeLabel: "活跃统计类型",
	    //坐标类型集合
	    behaviorTypeList: _businessUtil.activeTypelist,
	    //选中坐标类型
	    selectedBehaviorType: _businessUtil.activeTypelist[0],
	    //设备统计类型lebel
	    groupTypeLabel: '设备统计类型',
	    //设备统计类型
	    groupTypeList: _businessUtil.groupTypeList,
	    //选中设备统计类型
	    groupType: _businessUtil.groupTypeList[0],
	    //提交
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTACTIVEFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTACTIVEFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTACTIVEFORM_LOCATIONTYPE, function (state, item) {
	    state.selectedBehaviorType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE, function (state, item) {
	    state.groupType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTACTIVEFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedBehaviorType = _businessUtil.activeTypelist[0];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTACTIVEFORM, function (state) {
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0132
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_01321
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_01322
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_01323
	        };
	    } else {
	        state.submitData = {
	            expType: 'outputStatics',
	            exps: [{
	                'type': state.selectedBehaviorType.id === _businessUtil.activeTypelist[0].id ? 'active' : 'activeByHour',
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'groupByType': state.groupType.id,
	                'expCode': state.selectedBehaviorType.id === _businessUtil.activeTypelist[0].id ? '03010' : '03011'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '活跃统计',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTACTIVECONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	//设备类型
	
	
	var _mutationTypes = __webpack_require__(83);
	
	var _appMessages = __webpack_require__(85);
	
	var _businessUtil = __webpack_require__(84);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reset = function reset(state) {
	    state.withinId = '';
	    state.withinText = '';
	    state.Province = '';
	    state.City = '';
	    state.Area = '';
	    state.districtArr = [];
	    state.peripheryRadiuNumber = '';
	    state.timePericopeArr = [];
	    state.poiListSelected = [];
	};
	var state = {
	    formName: 'poiFormoutForm',
	    //新建任务-显示文字
	    listLabel: '新建任务',
	    //新建任务-内容
	    listConnect: '',
	    //坐标格式-label
	    coordinateLabel: '坐标格式',
	    //坐标id
	    coordinateId: 0,
	    //坐标格式数组
	    coordinateList: _businessUtil.coordinateList,
	    //坐标格式选中项 内容
	    coordinateText: '',
	    //查询内容-label
	    inquiry: '查询内容',
	    //查询内容-数组
	    inquiryList: _businessUtil.inquiryList,
	    //查询内容id
	    inquiryId: 0,
	    //查询内容-选中项 内容
	    inquiryText: '',
	    //【pol排名】
	    //时间类型-label
	    within: '时间类型',
	    //时间类型id
	    withinId: 0,
	    //时间类型-数组
	    withinList: _businessUtil.withinList,
	    //时间类型-选中内容
	    withinText: '',
	    //城市区域
	    district: '城市区域',
	    //城市区域-选中项数组
	    districtArr: [],
	    //省
	    Province: '',
	    //市
	    City: '',
	    //区
	    Area: '',
	    //时间选段-labeL
	    timePericope: '时间选段',
	    //时间选段数组
	    timePericopeArr: [],
	    //【周边poi】
	    //周边半径-label
	    peripheryRadius: '周边半径',
	    //存储peripheryRadius
	    peripheryRadiuNumber: '',
	    //查询内容-label
	    inquiryConnect: '查询内容',
	    //POI排名(TOP1000倒序排列)
	    community: false,
	    //点击周边POI--显示
	    circumjacent: false,
	    //获取所有标签
	    tagList: [],
	    //选中标签
	    poiListSelected: [],
	    //获取城市数组
	    provinceList: [],
	    cityListArr: [],
	    areaListArr: []
	    //提交时用的id
	    /*  submitid:[],
	      //提交数据
	      submitData:{},*/
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTPOIFORM, function (state) {
	    state.listConnect = '';
	    state.coordinateText = '';
	    state.coordinateId = '';
	    state.inquiryText = '';
	    state.inquiryId = '';
	    state.withinText = '';
	    state.community = false;
	    state.circumjacent = false;
	    reset(state);
	    /* state.submitData={};
	     state.submitid=[];*/
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORMLISTLABEL, function (state, item) {
	    state.listConnect = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_COORDINATE, function (state, item) {
	    state.coordinateText = item.text;
	    state.coordinateId = item.id;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_INQUIRY, function (state, item) {
	    state.inquiryText = item.text;
	    state.inquiryId = item.id;
	    if (item.id === 1) {
	        state.community = false;
	        state.circumjacent = false;
	        state.withinId = 0;
	        reset(state);
	    } else if (item.id === 2) {
	        state.community = false;
	        state.circumjacent = true;
	        state.withinId = 0;
	        state.withinText = '';
	        state.Province = '';
	        state.City = '';
	        state.Area = '';
	        state.districtArr = [];
	        state.timePericopeArr = [];
	    } else if (item.id === 3) {
	        state.community = true;
	        state.circumjacent = true;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_WITHIN, function (state, item) {
	    state.withinText = item.text;
	    state.withinId = item.id;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_WITHINPROVINCE, function (state, item) {
	    state.Province = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_CITY, function (state, item) {
	    state.City = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_AREA, function (state, item, list) {
	    state.districtArr = item;
	    state.Area = list;
	    console.log(state.districtArr);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_RADIUS, function (state, item) {
	    state.peripheryRadiuNumber = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TIME_PERICOPE, function (state, hour, index, end) {
	    var obj = {
	        hour: hour,
	        index: index,
	        end: end
	    };
	    state.timePericopeArr.splice(index, 1, obj);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TIME_PERICOPE, function (state, item) {
	    state.timePericopeArr.splice(item, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_POIFORM_DATA, function (state, item) {
	    state.tagList = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_POIFORM_DATA_CITY, function (state, item) {
	    state.provinceList = item.province;
	    state.cityListArr = item.city;
	    state.areaListArr = item.area;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFORM_SELECTED, function (state, arr) {
	    var list = [];
	    arr.forEach(function (obj) {
	        var index = -1;
	        for (var i = 0, len = state.poiListSelected.length; i < len; i++) {
	            var selectedObj = state.poiListSelected[i];
	            if (selectedObj.id === obj.id) {
	                index = i;
	                state.poiListSelected.splice(index, 1);
	                --i;
	                --len;
	            }
	        }
	        if (obj.checked) {
	            list.push(obj);
	        }
	    });
	    state.poiListSelected = state.poiListSelected.concat(list);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DESTROYED_POIFORM_SELECTED, function (state) {
	    state.tagList = {};
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    title: '输出POI',
	    //false关闭|true打开
	    switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTPOICONSOLE, function (state, sw) {
	    state.switch = sw;
	});
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
	    formName: 'separatingForm',
	    title: '筛选设备统计',
	    submitData: {}
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SUBMIT_SEPARATINGFORM, function (state) {
	    state.submitData = {
	        "expType": "outputStatics",
	        "exps": [{
	            "type": "deviceCount", "expCode": "03033"
	        }]
	    };
	});
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '筛选设备统计',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_SEPARATINGCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'poiFilterForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //是否工作日
	    workingDaylabel: '是否工作日',
	    //工作日选中id
	    workingDayType: 0,
	    //工作日
	    workingDayList: _businessUtil.workingDayList,
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择POI类型
	    tagLabel: '选择POI类型',
	    //poi类型列表
	    filterTagAreaList: [],
	    //poi类型列表 选中数组
	    tagListSelected: [],
	    //二选一
	    selectivitylabel: '选择POI',
	    //二选一选中项
	    selectivityId: _businessUtil.selectivityList[0],
	    //二选一arr
	    selectivityList: _businessUtil.selectivityList,
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //poilabel
	    poilabel: '模糊搜索POI',
	    //POI列表数组
	    filterAreaList: [],
	    //POI列表选中项数组
	    selectedFilterAreaList: [],
	    //选择城市
	    cityLabel: '城市范围',
	    //城市数组
	    source: _businessUtil.source,
	    //城市选中项
	    cityValue: '',
	    //提示信息
	    promptingMessage: false
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATEPOIFILTERTYPE, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    if (item.id === 1) {
	        state.workingDayType = 0;
	    } else {
	        state.workingDayType = _businessUtil.workingDayList[0];
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERFORM_TYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_POIFILTERFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TAGPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterTagAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_TAGPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        if (state.tagListSelected.length + 1 > 5) {
	            state.promptingMessage = true;
	        }
	        state.tagListSelected.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TAGPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	        var obj = state.tagListSelected[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    if (state.tagListSelected.length - 1 <= 5) {
	        state.promptingMessage = false;
	    }
	    state.tagListSelected.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_POIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_POIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_POIFILTERFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_POIFILTERFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_POIFILTERFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERWORKINGDAY_TYPE, function (state, item) {
	    state.workingDayType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_POIFILTERSELECTIVITY_TYPE, function (state, item) {
	    state.selectivityId = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	    state.selectedFilterAreaList = [];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0]; //选中坐标类型
	    state.selectedLocationType = _businessUtil.locationTypeList[0]; //选中位置类型
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_VALUEPOIFILTERFORM_TYPE, function (state, item) {
	    if (item) {
	        state.cityValue = item;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_POIFILTERFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	    state.workingDayType = 0;
	    state.tagListSelected = [];
	    state.selectivityId = _businessUtil.selectivityList[0];
	    state.cityValue = '';
	    state.filterTagAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_POIFILTERFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    //poi列表  不是城市
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0173
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0176
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0177
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0178
	        };
	    } else if (!state.cityValue) {
	        state.submitData = {
	            error: _appMessages.APP_0180
	        };
	    } else if (state.tagListSelected.length === 0 || state.tagListSelected.length > 5) {
	        //  poi类型列表
	        state.submitData = {
	            error: _appMessages.APP_0181
	        };
	    } else if (state.selectivityId.id === 1) {
	        if (cityIds.substring(0, cityIds.length - 1) == '') {
	            //poi列表
	            state.submitData = {
	                error: _appMessages.APP_0174
	            };
	        } else {
	            change();
	        }
	    } else if (state.selectivityId.id === 2) {
	        if (state.fileList.length < 1) {
	            state.submitData = {
	                error: _appMessages.APP_0175
	            };
	        } else {
	            change();
	        }
	    } else {
	        change();
	    }
	    function change() {
	        var data = {
	            'expType': 'poiFilter',
	            'exps': [{
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'poiTypes': codeListStr,
	                'hourSegments': hourSegments,
	                'city': state.cityValue.code,
	                'expCode': '01090'
	            }]
	        };
	        if (state.selectivityId.id === 1) {
	            data.exps[0].poiList = cityIds.substring(0, cityIds.length - 1); //poi   
	        } else if (state.selectivityId.id === 2) {
	            data.exps[0].uploadType = state.selectedLocationType.id;
	            data.exps[0].inputPath = state.fileList.length ? state.fileList[0] : '';
	            if (state.selectedLocationType.id !== _businessUtil.locationTypeList[2].id) {
	                data.exps[0].coordinateType = state.selectedCoordinaryType.id;
	            }
	        }
	        if (state.workingDayType !== 0) {
	            data.exps[0].isWeekday = state.workingDayType.id;
	        }
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '筛选POI',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_POIFILTERCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'outpoiFilterForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //是否工作日
	    workingDaylabel: '是否工作日',
	    //工作日选中id
	    workingDayType: 0,
	    //工作日
	    workingDayList: _businessUtil.workingDayList,
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择POI类型
	    tagLabel: '选择POI类型',
	    //poi类型列表
	    filterTagAreaList: [],
	    //poi类型列表 选中数组
	    tagListSelected: [],
	    //二选一
	    selectivitylabel: '选择POI',
	    //二选一选中项
	    selectivityId: _businessUtil.selectivityList[0],
	    //二选一arr
	    selectivityList: _businessUtil.selectivityList,
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //poilabel
	    poilabel: '模糊搜索POI',
	    //POI列表数组
	    filterAreaList: [],
	    //POI列表选中项数组
	    selectedFilterAreaList: [],
	    //选择城市
	    cityLabel: '城市范围',
	    //城市数组
	    source: _businessUtil.source,
	    //城市选中项
	    cityValue: '',
	    promptingMessage: false
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATEOUTPOIFILTERTYPE, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    if (item.id === 1) {
	        state.workingDayType = 0;
	    } else {
	        state.workingDayType = _businessUtil.workingDayList[0];
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERFORM_TYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_OUTPOIFILTERFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TAGOUTPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterTagAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_TAGOUTPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        if (state.tagListSelected.length + 1 > 5) {
	            state.promptingMessage = true;
	        }
	        state.tagListSelected.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TAGOUTPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	        var obj = state.tagListSelected[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    if (state.tagListSelected.length - 1 <= 5) {
	        state.promptingMessage = false;
	    }
	    state.tagListSelected.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_OUTPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTPOIFILTERFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_OUTPOIFILTERFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTPOIFILTERFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERWORKINGDAY_TYPE, function (state, item) {
	    state.workingDayType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_OUTPOIFILTERSELECTIVITY_TYPE, function (state, item) {
	    state.selectivityId = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	    state.selectedFilterAreaList = [];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0]; //选中坐标类型
	    state.selectedLocationType = _businessUtil.locationTypeList[0]; //选中位置类型
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_VALUEOUTPOIFILTERFORM_TYPE, function (state, item) {
	    if (item) {
	        state.cityValue = item;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_OUTPOIFILTERFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	    state.workingDayType = 0;
	    state.tagListSelected = [];
	    state.selectivityId = _businessUtil.selectivityList[0];
	    state.cityValue = '';
	    state.filterTagAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_OUTPOIFILTERFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    //poi列表  不是城市
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0182
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0183
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0184
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0185
	        };
	    } else if (!state.cityValue) {
	        state.submitData = {
	            error: _appMessages.APP_0186
	        };
	    } else if (state.tagListSelected.length === 0 || state.tagListSelected.length > 5) {
	        // poi类型列表
	        state.submitData = {
	            error: _appMessages.APP_0187
	        };
	    } else if (state.selectivityId.id === 1) {
	        if (cityIds.substring(0, cityIds.length - 1) == '') {
	            //poi列表
	            state.submitData = {
	                error: _appMessages.APP_0188
	            };
	        } else {
	            change();
	        }
	    } else if (state.selectivityId.id === 2) {
	        if (state.fileList.length < 1) {
	            state.submitData = {
	                error: _appMessages.APP_0189
	            };
	        } else {
	            change();
	        }
	    } else {
	        change();
	    }
	    function change() {
	        var data = {
	            'expType': 'outputDetail',
	            'exps': [{
	                'type': 'poi',
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'poiTypes': codeListStr,
	                'hourSegments': hourSegments,
	                'city': state.cityValue.code,
	                'expCode': '02060'
	            }]
	        };
	        if (state.selectivityId.id === 1) {
	            data.exps[0].poiList = cityIds.substring(0, cityIds.length - 1); //poi   
	        } else if (state.selectivityId.id === 2) {
	            data.exps[0].uploadType = state.selectedLocationType.id;
	            data.exps[0].inputPath = state.fileList.length ? state.fileList[0] : '';
	            if (state.selectedLocationType.id !== _businessUtil.locationTypeList[2].id) {
	                data.exps[0].coordinateType = state.selectedCoordinaryType.id;
	            }
	        }
	        if (state.workingDayType !== 0) {
	            data.exps[0].isWeekday = state.workingDayType.id;
	        }
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: 'POI明细',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_OUTPOIFILTERCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'putpoiFilterForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //是否工作日
	    workingDaylabel: '是否工作日',
	    //工作日选中id
	    workingDayType: 0,
	    //工作日
	    workingDayList: _businessUtil.workingDayList,
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择POI类型
	    tagLabel: '选择POI类型',
	    //标签树
	    //poi类型列表
	    filterTagAreaList: [],
	    //poi类型列表 选中数组
	    tagListSelected: [],
	    //二选一
	    selectivitylabel: '选择POI',
	    //二选一选中项
	    selectivityId: _businessUtil.selectivityList[0],
	    //二选一arr
	    selectivityList: _businessUtil.selectivityList,
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //poilabel
	    poilabel: '模糊搜索POI',
	    //POI列表数组
	    filterAreaList: [],
	    //POI列表选中项数组
	    selectedFilterAreaList: [],
	    //选择城市
	    cityLabel: '城市范围',
	    //城市数组
	    source: _businessUtil.source,
	    //城市选中项
	    cityValue: '',
	    //提示信息
	    promptingMessage: false
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATEPUTPOIFILTERTYPE, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    if (item.id === 1) {
	        state.workingDayType = 0;
	    } else {
	        state.workingDayType = _businessUtil.workingDayList[0];
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERFORM_TYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTPOIFILTERFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TAGPUTPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterTagAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_TAGPUTPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        if (state.tagListSelected.length + 1 > 5) {
	            state.promptingMessage = true;
	        }
	        state.tagListSelected.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TAGPUTPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	        var obj = state.tagListSelected[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    if (state.tagListSelected.length - 1 <= 5) {
	        state.promptingMessage = false;
	    }
	    state.tagListSelected.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTPOIFILTERFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTPOIFILTERFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTPOIFILTERFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERWORKINGDAY_TYPE, function (state, item) {
	    state.workingDayType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTPOIFILTERSELECTIVITY_TYPE, function (state, item) {
	    state.selectivityId = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	    state.selectedFilterAreaList = [];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0]; //选中坐标类型
	    state.selectedLocationType = _businessUtil.locationTypeList[0]; //选中位置类型
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_VALUEPUTPOIFILTERFORM_TYPE, function (state, item) {
	    if (item) {
	        state.cityValue = item;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTPOIFILTERFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	    state.workingDayType = 0;
	    state.tagListSelected = [];
	    state.selectivityId = _businessUtil.selectivityList[0];
	    state.cityValue = '';
	    state.filterTagAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PUTPOIFILTERFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    //poi列表  不是城市
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0190
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0191
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0192
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0193
	        };
	    } else if (!state.cityValue) {
	        state.submitData = {
	            error: _appMessages.APP_0194
	        };
	    } else if (state.tagListSelected.length === 0 || state.tagListSelected.length > 5) {
	        //  poi类型列表
	        state.submitData = {
	            error: _appMessages.APP_0195
	        };
	    } else if (state.selectivityId.id === 1) {
	        if (cityIds.substring(0, cityIds.length - 1) == '') {
	            //poi列表
	            state.submitData = {
	                error: _appMessages.APP_0196
	            };
	        } else {
	            change();
	        }
	    } else if (state.selectivityId.id === 2) {
	        if (state.fileList.length < 1) {
	            state.submitData = {
	                error: _appMessages.APP_0197
	            };
	        } else {
	            change();
	        }
	    } else {
	        change();
	    }
	    function change() {
	        var data = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': 'poi',
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'poiTypes': codeListStr,
	                'hourSegments': hourSegments,
	                'city': state.cityValue.code,
	                'expCode': '03035'
	            }]
	        };
	        if (state.selectivityId.id === 1) {
	            data.exps[0].poiList = cityIds.substring(0, cityIds.length - 1); //poi   
	        } else if (state.selectivityId.id === 2) {
	            data.exps[0].uploadType = state.selectedLocationType.id;
	            data.exps[0].inputPath = state.fileList.length ? state.fileList[0] : '';
	            if (state.selectedLocationType.id !== _businessUtil.locationTypeList[2].id) {
	                data.exps[0].coordinateType = state.selectedCoordinaryType.id;
	            }
	        }
	        if (state.workingDayType !== 0) {
	            data.exps[0].isWeekday = state.workingDayType.id;
	        }
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '统计POI',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PUTPOIFILTERCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'digpoiFilterForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[0],
	    //是否工作日
	    workingDaylabel: '是否工作日',
	    //工作日选中id
	    workingDayType: 0,
	    //工作日
	    workingDayList: _businessUtil.workingDayList,
	    timeLabel: '选择小时段',
	    //选择小时段
	    timeList: (0, _businessUtil.timeList)(),
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //选择POI类型
	    tagLabel: '选择POI类型',
	    //poi类型列表
	    filterTagAreaList: [],
	    //poi类型列表 选中数组
	    tagListSelected: [],
	    //二选一
	    selectivitylabel: '选择POI',
	    //二选一选中项
	    selectivityId: _businessUtil.selectivityList[0],
	    //二选一arr
	    selectivityList: _businessUtil.selectivityList,
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationTypeList: _businessUtil.locationTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //提交数据
	    submitData: {},
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //poilabel
	    poilabel: '模糊搜索POI',
	    //POI列表数组
	    filterAreaList: [],
	    //POI列表选中项数组
	    selectedFilterAreaList: [],
	    //选择城市
	    cityLabel: '城市范围',
	    //城市数组
	    source: _businessUtil.source,
	    //城市选中项
	    cityValue: '',
	    animate: false,
	    //提示信息
	    promptingMessage: false
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	    if (item.id === 1) {
	        state.workingDayType = 0;
	    } else {
	        state.workingDayType = _businessUtil.workingDayList[0];
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERFORM_TYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_DIGPOIFILTERFORM_TIME, function (state, item) {
	    state.selectedTimeList.push(item);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_DIGPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_DIGPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedFilterAreaList.length; i < len; i++) {
	        var obj = state.selectedFilterAreaList[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_DIGPOIFILTERFORM_TIME, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.selectedTimeList.length; i < len; i++) {
	        var obj = state.selectedTimeList[i];
	        if (obj.id === item.id) {
	            index = i;
	            break;
	        }
	    }
	    state.selectedTimeList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_DIGPOIFILTERFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_DIGPOIFILTERFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERWORKINGDAY_TYPE, function (state, item) {
	    state.workingDayType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_TAGDIGPOIFILTER_FILTERSELECTED, function (state, data) {
	    state.filterTagAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_TAGDIGPOIFILTER_AREAITEM, function (state, item) {
	    if (item.code) {
	        if (state.tagListSelected.length + 1 > 5) {
	            state.promptingMessage = true;
	        }
	        state.tagListSelected.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_TAGDIGPOIFILTER_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0, len = state.tagListSelected.length; i < len; i++) {
	        var obj = state.tagListSelected[i];
	        if (obj.name === item.name) {
	            index = i;
	            break;
	        }
	    }
	    if (state.tagListSelected.length - 1 <= 5) {
	        state.promptingMessage = false;
	    }
	    state.tagListSelected.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_DIGPOIFILTERSELECTIVITY_TYPE, function (state, item) {
	    state.selectivityId = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.fenceUpload = false;
	    state.selectedFilterAreaList = [];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0]; //选中坐标类型
	    state.selectedLocationType = _businessUtil.locationTypeList[0]; //选中位置类型
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_VALUEDIGPOIFILTERFORM_TYPE, function (state, item) {
	    if (item) {
	        state.cityValue = item;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_DIGPOIFILTERFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[0];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationTypeList[0];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	    state.workingDayType = 0;
	    state.tagListSelected = [];
	    state.selectivityId = _businessUtil.selectivityList[0];
	    state.cityValue = '';
	    state.filterTagAreaList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_DIGPOIFILTERFORM, function (state) {
	    //位置类型(选择围栏)
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    if (state.selectedLocationType.id === _businessUtil.locationTypeList[2].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    }
	    var hourSegments = '';
	    state.selectedTimeList.forEach(function (obj) {
	        hourSegments += obj.id + ',';
	    });
	    hourSegments = hourSegments ? hourSegments.substring(0, hourSegments.length - 1) : _businessUtil.TIMESTR;
	    //poi列表  不是城市
	    var cityIds = '';
	    state.selectedFilterAreaList.forEach(function (item) {
	        cityIds += item.code + ',';
	    });
	    var codeListStr = '';
	    state.tagListSelected.forEach(function (obj) {
	        codeListStr += obj.code + ',';
	    });
	    if (!state.selectedStartDate || !state.selectedEndDate || state.selectedStartDate > state.selectedEndDate) {
	        state.submitData = {
	            error: _appMessages.APP_0198
	        };
	    } else if (!syncId && state.selectedDateType.id == 1) {
	        state.submitData = {
	            error: _appMessages.APP_0199
	        };
	    } else if (!syncId && state.selectedDateType.id == 2) {
	        state.submitData = {
	            error: _appMessages.APP_0200
	        };
	    } else if (!syncId && state.selectedDateType.id == 3) {
	        state.submitData = {
	            error: _appMessages.APP_0201
	        };
	    } else if (!state.cityValue) {
	        state.submitData = {
	            error: _appMessages.APP_0202
	        };
	    } else if (state.tagListSelected.length === 0 || state.tagListSelected.length > 5) {
	        //  poi类型列表
	        state.submitData = {
	            error: _appMessages.APP_0203
	        };
	    } /*else if(state.selectivityId.id===1){
	             if(cityIds.substring(0,cityIds.length-1)==''){//poi列表
	                 state.submitData={
	                        error:APP_0188
	                 }
	              }else{
	                 change()
	              }
	      }else if(state.selectivityId.id===2){
	         if(state.fileList.length<1){
	             state.submitData={
	                    error:APP_0189
	             }
	         }else{
	             change()
	         }
	      }*/else {
	            change();
	        }
	    function change() {
	        var data = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': 'poiType',
	                'timeType': state.selectedDateType.id,
	                'startTime': state.selectedStartDate,
	                'endTime': state.selectedEndDate,
	                'poiTypes': codeListStr,
	                'hourSegments': hourSegments,
	                'city': state.cityValue.code,
	                'expCode': '03034'
	            }]
	            /* if(state.selectivityId.id===1){
	                     data.exps[0].poiList=cityIds.substring(0,cityIds.length-1);//poi   
	             }else if(state.selectivityId.id===2){
	                     data.exps[0].uploadType=state.selectedLocationType.id;
	                     data.exps[0].inputPath=state.fileList.length?state.fileList[0]:''; 
	                     if(state.selectedLocationType.id!==locationTypeList[2].id){
	                         data.exps[0].coordinateType=state.selectedCoordinaryType.id;
	                     }
	             }*/
	        };if (state.workingDayType !== 0) {
	            data.exps[0].isWeekday = state.workingDayType.id;
	        }
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: 'POI分类统计',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_DIGPOIFILTERCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'ghettoForm',
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    //位置类型
	    locationTypeLabel: '位置类型',
	    //位置类型集合
	    locationGhettoTypeList: _businessUtil.locationGhettoTypeList,
	    //选中位置类型
	    selectedLocationType: _businessUtil.locationGhettoTypeList[0],
	    //坐标类型label
	    coordinaryTypeLabel: '坐标类型',
	    //坐标类型集合
	    coordinaryTypeList: _businessUtil.coordinaryTypeList,
	    //选中坐标类型
	    selectedCoordinaryType: _businessUtil.coordinaryTypeList[0],
	    //上传文件
	    fileLabel: '上传文件',
	    //上传文件名
	    fileListname: [],
	    //上传路经
	    fileList: [],
	    //根路径输出位置
	    html: '',
	    //下载围栏按钮是否显示 
	    fenceUpload: false,
	    //筛选类型
	    filterTypeLabel: '筛选类型',
	    //工作地 居住地
	    filterTypeList: _businessUtil.filterTypeList,
	    //默认选中项
	    selectedFilterTypeType: _businessUtil.filterTypeList[0],
	    //通勤半径
	    radiustLabel: '通勤半径',
	    //通勤半径值
	    radius: '',
	    //城市
	    cityListLabel: '城市',
	    filterGhettoList: [],
	    selectedFilterGhettoList: [],
	    //提交数据
	    submitData: {}
	};
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATEGHETTOTYPE, function (state, item) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(item);
	    state.fileListname.push(item);
	    state.fenceUpload = true;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_GHETTOFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_GHETTOFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_GHETTOFORM_LOCATIONTYPE, function (state, item) {
	    state.selectedLocationType = item;
	    state.fileListname = [];
	    state.fileList = [];
	    state.html = '';
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_GHETTOFORM_COORDINARYTYPE, function (state, item) {
	    state.selectedCoordinaryType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_GHETTOFORM_FILE, function (state, newFile) {
	    state.fileList = [];
	    state.fileListname = [];
	    state.fileList.push(newFile.basePath);
	    state.fileListname.push(newFile.fileName);
	    state.html = newFile.html;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_GHETTOFORM_FILE, function (state, newFileName) {
	    if (state.fileListname.indexOf(newFileName) !== -1) {
	        state.fileListname.splice(newFileName, 1);
	    }
	    state.fileList = [];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPADATEGHETTOFORMTYPE, function (state, item) {
	    state.selectedFilterTypeType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPADATEGHETTOFOCITYLIST, function (state, data) {
	    state.filterGhettoList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_GHETTOFORM_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterGhettoList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_GHETTOFORM_AREAITEM, function (state, item) {
	    state.selectedFilterGhettoList.splice(item, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPADATEGHETTOFORADIUS, function (state, radioState, radioEnd) {
	    if (!radioState && !radioEnd) {
	        state.radius = '';
	    } else {
	        state.radius = radioState + '<' + radioEnd;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_GHETTOFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.selectedTimeList = [];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.selectedLocationType = _businessUtil.locationGhettoTypeList[0];
	    state.fileList = [];
	    state.fileListname = [];
	    state.submitData = {};
	    state.html = '';
	    state.fenceUpload = false;
	    state.selectedFilterTypeType = _businessUtil.filterTypeList[0];
	    state.radius = '';
	    state.filterGhettoList = [];
	    state.selectedFilterGhettoList = [];
	    state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[0];
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_GHETTOFORM, function (state) {
	    var cityList = '';
	    state.selectedFilterGhettoList.forEach(function (item) {
	        cityList += item.code + ',';
	    });
	    if (state.selectedLocationType.id === _businessUtil.locationGhettoTypeList[3].id) {
	        state.selectedCoordinaryType = _businessUtil.coordinaryTypeList[1];
	        if (window.allPath) {
	            state.fileList.pop();
	            state.fileList.push(window.allPath);
	            state.html = window.upLoadPath;
	        }
	    } else if (state.selectedLocationType.id === _businessUtil.locationGhettoTypeList[0].id) {
	        state.selectedCoordinaryType.id = '';
	    }
	    //判断是否上传文件正确
	    var sum = true;
	    if (state.selectedLocationType.id !== _businessUtil.locationGhettoTypeList[0].id) {
	        if (state.fileList.length < 1) {
	            sum = false;
	        } else {
	            sum = true;
	        }
	    }
	    var arr = state.radius.split('<');
	    var newradius = true;
	    var reg = /^[0-9]*$/g;
	    var reg1 = /^[0-9]*$/g;
	    if (arr[0] || arr[1]) {
	        if (arr[1] && arr[0]) {
	            if (arr[1] > arr[0]) {
	                if (reg.test(arr[0]) && reg1.test(arr[1]) && arr[0] >= 0 && arr[1] >= 0) {
	                    newradius = true;
	                } else {
	                    newradius = false;
	                }
	            } else {
	                newradius = false;
	            }
	        } else if (arr[0] && !reg.test(arr[0])) {
	            newradius = false;
	        } else if (arr[1] && !reg.test(arr[1])) {
	            newradius = false;
	        } else {
	            newradius = true;
	        }
	    }
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0204
	        };
	    } else if (cityList.length === 0) {
	        state.submitData = {
	            error: _appMessages.APP_0205
	        };
	    } else if (!newradius) {
	        state.submitData = {
	            error: _appMessages.APP_0209
	        };
	    } else if (!sum) {
	        //上传文件
	        state.submitData = {
	            error: _appMessages.APP_0206
	        };
	    } else {
	        state.submitData = {
	            'expType': 'workHomeCityFilter',
	            'exps': [{
	                'filterType': state.selectedFilterTypeType.id,
	                'month': state.selectedStartDate,
	                'cityList': cityList,
	                'radius': state.radius.replace('<', '-'),
	                'fenceType': state.selectedLocationType.id,
	                'coordinateType': state.selectedCoordinaryType.id,
	                'inputPath': state.fileList.length ? state.fileList[0] : '',
	                'expCode': '01092'
	            }]
	        };
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '工作地居住地',
		//false关闭|true打开
		switch: false
	};
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_GHETTOCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetArea = function resetArea(state) {
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	    state.filterPlaceList = [];
	    state.selectedFilterPlaceList = [];
	};
	var state = {
	    formName: 'placeForm',
	    //选中项-显示文字
	    selectedText: "工作地居住地",
	    //选中项-ID
	    selectedId: _businessUtil.placeList[0],
	    //数据格式-显示文字
	    listLabel: "输出类型",
	    //数组
	    placeList: _businessUtil.placeList,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    // 工作地城市
	    filterAreaLabel: '工作地城市',
	    filterAreaList: [],
	    selectedFilterAreaList: [],
	    // 居住地城市
	    filterPlaceLabel: '居住地城市',
	    filterPlaceList: [],
	    selectedFilterPlaceList: [],
	    //通勤半径
	    radiustLabel: '通勤半径',
	    radius: '',
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PLACEFORM, function (state, item) {
	    state.selectedId = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PLACEFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PLACEFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PLACEFORM_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PLACEFORM_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_NEWPLACEFORM_AREAITEM, function (state, item) {
	    state.selectedFilterPlaceList.splice(item, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_NEWPLACEFORM_FILTERSELECTED, function (state, data) {
	    state.filterPlaceList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_NEWPLACEFORM_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterPlaceList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PLACEFORM_AREAITEM, function (state, item) {
	    state.selectedFilterAreaList.splice(item, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPADATEPLACEFORADIUS, function (state, radioState, radioEnd) {
	    if (!radioState && !radioEnd) {
	        state.radius = '';
	    } else {
	        state.radius = radioState + '<' + radioEnd;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PLACEFORM, function (state) {
	    state.selectedId = _businessUtil.placeList[0];
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.radius = '';
	    resetArea(state);
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PLACEFORM, function (state) {
	    var arr = state.radius.split('<');
	    var newradius = true;
	    var reg = /^[0-9]*$/g;
	    var reg1 = /^[0-9]*$/g;
	    if (arr[0] || arr[1]) {
	        if (arr[1] && arr[0]) {
	            if (arr[1] > arr[0]) {
	                if (reg.test(arr[0]) && reg1.test(arr[1]) && arr[0] >= 0 && arr[1] >= 0) {
	                    newradius = true;
	                } else {
	                    newradius = false;
	                }
	            } else {
	                newradius = false;
	            }
	        } else if (arr[0] && !reg.test(arr[0])) {
	            newradius = false;
	        } else if (arr[1] && !reg.test(arr[1])) {
	            newradius = false;
	        } else {
	            newradius = true;
	        }
	    }
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0207
	        };
	    } else if (!newradius) {
	        state.submitData = {
	            error: _appMessages.APP_0210
	        };
	    } else {
	        var workCityList = '';
	        var homeCityList = '';
	        state.selectedFilterAreaList.forEach(function (item) {
	            workCityList += item.code + ',';
	        });
	        state.selectedFilterPlaceList.forEach(function (item) {
	            homeCityList += item.code + ',';
	        });
	        state.submitData = {
	            'expType': 'outputDetail',
	            'exps': [{
	                'type': 'workHomeCity',
	                'filterType': state.selectedId.id,
	                'month': state.selectedStartDate,
	                'workCityList': workCityList,
	                'homeCityList': homeCityList,
	                'radius': state.radius.replace('<', '-'),
	                'expCode': '02061'
	            }]
	        };
	    }
	}), _mutations);
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '工作地居住地',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PLACECONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var resetArea = function resetArea(state) {
	    state.filterAreaList = [];
	    state.selectedFilterAreaList = [];
	};
	var state = {
	    formName: 'resideForm',
	    //选中项-显示文字
	    selectedText: "工作地居住地",
	    //选中项-ID
	    selectedId: _businessUtil.resideList[0],
	    //数据格式-显示文字
	    listLabel: "输出类型",
	    //数组
	    resideList: _businessUtil.resideList,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    selectedTimeList: [],
	    locaDateInfo: locaDateInfo,
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    // 工作地城市
	    filterAreaLabel: '城市',
	    filterAreaList: [],
	    selectedFilterAreaList: [],
	    //通勤半径
	    radiustLabel: '通勤半径',
	    radius: '',
	    groupByTypeLbel: '区域类型',
	    domainList: _businessUtil.domainList,
	    groupByType: _businessUtil.domainList[0],
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_RESIDEFORM, function (state, item) {
	    state.selectedId = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_RESIDEFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_RESIDEFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_RESIDEFORM_FILTERSELECTED, function (state, data) {
	    state.filterAreaList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_RESIDEFORM_AREAITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAreaList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_RESIDEFORM_AREAITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAreaList.length; i++) {
	        if (state.selectedFilterAreaList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAreaList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPADATERESIDEFORADIUS, function (state, radioState, radioEnd) {
	    if (!radioState && !radioEnd) {
	        state.radius = '';
	    } else {
	        state.radius = radioState + '<' + radioEnd;
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_RESIDEGROUPBYFORM, function (state, item) {
	    state.groupByType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_RESIDEFORM, function (state) {
	    state.selectedId = _businessUtil.resideList[0];
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.groupByType = _businessUtil.domainList[0];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.radius = '';
	    resetArea(state);
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_RESIDEFORM, function (state) {
	    var arr = state.radius.split('<');
	    var newradius = true;
	    var reg = /^[0-9]*$/g;
	    var reg1 = /^[0-9]*$/g;
	    if (arr[0] || arr[1]) {
	        if (arr[1] && arr[0]) {
	            if (arr[1] > arr[0]) {
	                if (reg.test(arr[0]) && reg1.test(arr[1]) && arr[0] >= 0 && arr[1] >= 0) {
	                    newradius = true;
	                } else {
	                    newradius = false;
	                }
	            } else {
	                newradius = false;
	            }
	        } else if (arr[0] && !reg.test(arr[0])) {
	            newradius = false;
	        } else if (arr[1] && !reg.test(arr[1])) {
	            newradius = false;
	        } else {
	            newradius = true;
	        }
	    }
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0208
	        };
	    } else if (!newradius) {
	        state.submitData = {
	            error: _appMessages.APP_0211
	        };
	    } else {
	        var cityList = '';
	        state.selectedFilterAreaList.forEach(function (item) {
	            cityList += item.code + ',';
	        });
	        state.submitData = {
	            'expType': 'outputStatics',
	            'exps': [{
	                'type': 'workHomeCity',
	                'dimType': state.selectedId.id,
	                'month': state.selectedStartDate,
	                'cityList': cityList,
	                'radius': state.radius.replace('<', '-'),
	                'groupByType': state.groupByType.id,
	                'expCode': '03036'
	            }]
	        };
	    }
	}), _mutations);
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '工作地居住地',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_RESIDECONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'subdistrictForm',
	    dateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    timeLabel: '输出类型',
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    appQueryTypeLabel: '所在城市列表',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_SUBDISTRICTFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_SUBDISTRICTFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_SUBDISTRICTFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_SUBDISTRICTFORM_ITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_SUBDISTRICTFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_SUBDISTRICTFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_SUBDISTRICTFORM, function (state) {
	    state.selectedEndDate = state.selectedStartDate;
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var cityList = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        cityList += item.code + ',';
	    });
	    var data = {
	        expType: 'outputDetail',
	        exps: [{
	            "type": "residenceCommunity",
	            'month': state.selectedStartDate,
	            'cityList': cityList.substring(0, cityList.length - 1),
	            'expCode': '02062'
	        }]
	    };
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0212
	        };
	    } else if (cityList.substring(0, cityList.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_0213
	        };
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '小区明细',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_SUBDISTRICTCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(83);
	
	var _businessUtil = __webpack_require__(84);
	
	var _appMessages = __webpack_require__(85);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locaDateInfo = (0, _businessUtil.dateInfo)();
	var state = {
	    formName: 'putsubdistrictForm',
	    dateInfo: locaDateInfo,
	    //选中日期类型
	    selectedDateType: locaDateInfo.typeList[2],
	    timeLabel: '输出类型',
	    //选中日期范围
	    selectedStartDate: '',
	    selectedEndDate: '',
	    appQueryTypeLabel: '所在城市列表',
	    filterAppList: [],
	    selectedFilterAppList: [],
	    //提交数据
	    submitData: {}
	};
	
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTSUBDISTRICTFORM_DATETYPE, function (state, item) {
	    state.selectedDateType = item;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTSUBDISTRICTFORM_DATE, function (state, item) {
	    item.options.tag.indexOf('start') != -1 ? state.selectedStartDate = item.value : state.selectedEndDate = item.value;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED, function (state, data) {
	    state.filterAppList = data;
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_PUTSUBDISTRICTFORM_ITEM, function (state, item) {
	    if (item.code) {
	        state.selectedFilterAppList.push(item);
	    }
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTSUBDISTRICTFORM_ITEM, function (state, item) {
	    var index = -1;
	    for (var i = 0; i < state.selectedFilterAppList.length; i++) {
	        if (state.selectedFilterAppList[i].code == item.code) {
	            index = i;
	        }
	    }
	    state.selectedFilterAppList.splice(index, 1);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DELETE_PUTSUBDISTRICTFORM, function (state) {
	    state.selectedDateType = locaDateInfo.typeList[2];
	    state.selectedStartDate = '';
	    state.selectedEndDate = '';
	    state.filterAppList = [];
	    state.selectedFilterAppList = [];
	    state.submitData = {};
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.SUBMIT_PUTSUBDISTRICTFORM, function (state) {
	    state.selectedEndDate = state.selectedStartDate;
	    var syncId = (0, _businessUtil.getWeek)(state.selectedStartDate, state.selectedEndDate, state.selectedDateType.id);
	    var cityList = '';
	    state.selectedFilterAppList.forEach(function (item) {
	        cityList += item.code + ',';
	    });
	    var data = {
	        expType: 'outputStatics',
	        exps: [{
	            "type": "residenceCommunity",
	            'month': state.selectedStartDate,
	            'cityList': cityList.substring(0, cityList.length - 1),
	            'expCode': '03037'
	        }]
	    };
	    if (!state.selectedStartDate) {
	        state.submitData = {
	            error: _appMessages.APP_0214
	        };
	    } else if (cityList.substring(0, cityList.length - 1) == '') {
	        state.submitData = {
	            error: _appMessages.APP_0215
	        };
	    } else {
	        state.submitData = data;
	    }
	}), _mutations);
	
	exports.default = {
	    state: state,
	    mutations: mutations
	};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _defineProperty2 = __webpack_require__(52);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutationTypes = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var state = {
		title: '小区统计',
		//false关闭|true打开
		switch: false
	};
	
	var mutations = (0, _defineProperty3.default)({}, _mutationTypes.SWITCH_PUTSUBDISTRICTCONSOLE, function (state, sw) {
		state.switch = sw;
	});
	
	exports.default = {
		state: state,
		mutations: mutations
	};

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = "\n<div id='app'>\n    <menu></menu>\n    <main></main>\n</div>\n";

/***/ })
]));
//# sourceMappingURL=2.chunk.js.map