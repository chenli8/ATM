import 'iview/dist/styles/iview.css';
import 'radon-ui/dist/static/css/dist.css';
import './lib/td_heatmap/js/layer/skin/layer.css';
import './css/public.css';
import './css/fixed.css';
import './css/form.css';
import './css/console.css';
import './css/animate.css';
import './lib/gojs/BPMN.css';
import './css/delicery.css';
import iView from 'iview';
import App from './app';
import md5 from 'md5';

Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(iView);

// Vue.http.options.emulateJSON = true;

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
	// history: true
});

router.map({
	'/login': {
		component: function(resolve) {
			require(['./components/login'], resolve);
		}
	},
	'/connect': {
		component: function(resolve) {
			require(['./components/connect'], resolve);
		},
		subRoutes: {
			'/delivery': {
				component: function(resolve) {
					require(['./components/delivery'], resolve);
				}
			},
			'/monitoring': {
				component: function(resolve) {
					require(['./components/monitoring'], resolve);
				}
			},
			'/supervise': {
				component: function(resolve) {
					require(['./components/supervise'], resolve);
				}
			},
			'/establish': {
				component: function(resolve) {
					require(['./components/establish'], resolve);
				}
			},
			'/snapshot': {
				component: function(resolve) {
					require(['./components/dataSnapshot'], resolve);
				}
			},
			'/platform': {
				component: function(resolve) {
					require(['./components/platform'], resolve);
				},
			},
			'/service_jobs': {
				component: function(resolve) {
					require(['./components/service_jobs'], resolve);
				},
			},
			'/instrument': {
				component: function(resolve) {
					require(['./components/instrument'], resolve);
				},
			}
		}
	},

});

router.beforeEach(transition => {
	window.scrollTo(0, 0);

	function getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	}
	let stat = (getCookie('useremail')),
		sessionemail = sessionStorage.getItem('sessionUser');
	if(transition.to.path === '/login') {
		transition.next();
	} else {
		if(!stat && !sessionemail && transition.to.path === "/connect/delivery") {
			transition.redirect('/login');
		} else {
			transition.next();
		}
	}
});
router.redirect({
		"*": "/login",
		"/": "/connect/delivery"
	})
	// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');