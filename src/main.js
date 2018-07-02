// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import echarts from 'echarts'
Vue.use(echarts)
// import QRcode from 'qrcodejs2'
import VueQriously from 'vue-qriously' //二维码
Vue.use(VueQriously)
import VueClipboard from 'vue-clipboard2' //复制
Vue.use(VueClipboard)
// import Home from '.src/components/Home'
import VueResource from 'vue-resource'
import '@/style/index.css'
import '@/style/index1.css'
import '@/style/home.css'
import '@/style/reset.css'
// import '@/style/index.scss'
/* 导入 自定义 请求 */
import * as api from '@/js/fetch'
Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
Vue.prototype.$delete= api.del;
Vue.prototype.$put= api.put;
// 引入i18n国际化插件  
import i18n from './i18n/i18n';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Stomp from 'webstomp-client'

import store from '@/store'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

api.get("login/language?cs=CN").then(res=>{
// this.$message({
//    	type: 'success',
//    	message: res.msg
//  	});
})
if(sessionStorage.getItem('token')){
	store.state.token = sessionStorage.getItem('token');
}
Vue.use(VueResource)
Vue.config.productionTip = false

var socket = new SockJS('http://192.168.0.106:8080/webSocketServer');
// console.log("--------------------------------"+socket)
var stompClient = Stomp.over(socket);
Vue.prototype.$sock = stompClient;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App }
})
