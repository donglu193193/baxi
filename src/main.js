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

api.get("login/language?cs=CN").then(res=>{})
if(sessionStorage.getItem('token')){
	store.state.token = sessionStorage.getItem('token');
}
Vue.use(VueResource)
Vue.config.productionTip = false

var socket = new SockJS('http://192.168.0.105:8080/webSocketServer');
// console.log("--------------------------------"+socket)
var reg1 = /http.*\,\ss/;
var reg2 = /short\_name.*\,\si/;
var stompClient = Stomp.over(socket);
Vue.prototype.$sock = stompClient;
stompClient.connect({}, frame => {
	stompClient.send('/app/getIndex', JSON.stringify({}));
	stompClient.subscribe(`/topic/getIndex`, data => { //主页查询市场
	  var arr = [];
	  var res = JSON.parse(data.body).data;
	  for (var i = 0; i < res.length; i++) {
	    arr[i] = {};
	    for (var k in res[i]) {
	      arr[i].children = res[i][k];
	      arr[i].mark_url = reg1.exec(k)[0].replace(', s', '');
	      arr[i].short_name = reg2.exec(k)[0].replace(', i', '').replace('short_name=', '');
	    }
	  }
	  store.state.home_arr = arr;
	});
	console.log(localStorage.getItem('basisName'))
	if(localStorage.getItem('basisName') + '' !== 'null'){
		console.log(1)
		stompClient.send('/app/findAllPrizeByBasisName', JSON.stringify({ //根据主市场查询子市场专业交易
	        tradeMarket: localStorage.getItem('basisName'),
	  	}));
	}
	// var aa;
	// store.state.obj.tradeMarket = aa;
	// stompClient.send('/app/newDealPrize', JSON.stringify({ //最新成交
 //        tradeMarket: aa,
 //      }));
      // store.state.obj.tradeMarket = aa;
      // console.log( store.state.obj.tradeMarket)
 //      stompClient.send('/app/findUserIdAndVirtualIdByTotal', JSON.stringify({ //查询钱包实体
 //        tradeMarket: aa,
 //        id: sessionStorage.getItem("token")
 //      }));
      // stompClient.send('/app/historyEntrust', JSON.stringify({ //历史委托
      //   tradeMarket: localStorage.getItem('basisName'),
      //   id: sessionStorage.getItem("token")
      // }));
      // stompClient.send('/app/underway', JSON.stringify({ //委托交易
      //   tradeMarket: localStorage.getItem('basisName'),
      //   id: sessionStorage.getItem("token")
      // }));
      // stompClient.send('/app/buyShwo', JSON.stringify({ //买单显示
      //   tradeMarket: localStorage.getItem('basisName'),
      // }));
      // stompClient.send('/app/sellShwo', JSON.stringify({ //卖单显示
      //   tradeMarket: localStorage.getItem('basisName'),
      // }));
	stompClient.subscribe(`/topic/findAllPrizeByBasisName`, data => { //根据主市场查询子市场
		var dataObj =JSON.parse(data.body).data;
		if(dataObj.basisName !== store.state.basisName){
			return
		}
		store.state.tab_list = dataObj.data;
		console.log(dataObj.data)
        for(var i=0;i<store.state.header_list.length;i++){
          if(store.state.header_list[i].basis_name == JSON.parse(data.body).data.basisName){
            store.state.tab_list = JSON.parse(data.body).data.data;
          }
        }
        var aa = store.state.tab_list[0].tradeMarket;
        var bb = store.state.tab_list[0].zhuMarkUrl;
        var cc = store.state.tab_list[0].ziMarkUrl;
        var dd = store.state.tab_list[0].sumamount;
        var ee = store.state.tab_list[0].newPrize;
        var ff = store.state.tab_list[0].increasePrize;
        var arr = aa.split("_");
        store.state.tab_list.trade=arr[0];
        store.state.tab_list.market=arr[1];
        store.state.tab_list.url1 = bb;
        store.state.tab_list.url2 = cc;
        store.state.tab_list.sumamount = dd;
        store.state.tab_list.newPrize = ee;
        store.state.tab_list.increasePrize = ff;
        // if (store.state.tab_list.length) {
        //   Vue.prototype.getMarket(store.state.tab_list[0].tradeMarket, store.state.tab_list[0].zhuMarkUrl, store.state.tab_list[0].ziMarkUrl, store.state.tab_list[0].sumamount, store.state.tab_list[0].newPrize, store.state.tab_list[0].increasePrize)
        // }
      });
      stompClient.subscribe(`/topic/findUserIdAndVirtualIdByTotal`, data => { //根据币种id和当前登录用户id查询钱包实体
      	store.state.totalObj = JSON.parse(data.body).data
        // if (JSON.parse(data.body).data === 403) {
        //   $(".buyOrSell").text("请登录");
        //   $(".remainder").text("--")
        // }
        var vv = JSON.parse(data.body).data;
        var arr = Object.keys(vv);
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
          newArr[i] = {};
          newArr[i].vName = arr[i];
          newArr[i].attr = vv[arr[i]];
        }
        store.state.tab_list.zhuMarket = newArr[1].vName;
        store.state.tab_list.ziMarket = newArr[0].vName;
        store.state.tab_list.zhuVtotal = newArr[1].attr.vTotal;
        store.state.tab_list.ziVtotal = newArr[0].attr.vTotal;
        store.state.tab_list.zhuFrozenTotal = newArr[1].attr.frozenTotal;
        store.state.tab_list.ziFrozenTotal = newArr[0].attr.frozenTotal;
      });
      stompClient.subscribe(`/topic/newDealPrize`, data => { //最新交易
        this.tableData1 = JSON.parse(data.body).data;
      });
      stompClient.subscribe(`/topic/historyEntrust`, data => { //历史交易
        store.state.arr = JSON.parse(data.body).data;
      });
      stompClient.subscribe(`/topic/underway`, data => { //委托交易
        var entrustObj = JSON.parse(data.body).data;
        console.log(JSON.parse(data.body).data)
        if(entrustObj.id !== localStorage.getItem('token')){
        	return
        }
        store.state.arr1 = JSON.parse(data.body).data[0];
	      // if(localStorage.getItem('token') == entrustObj.id){
	      //   store.state.arr1 = JSON.parse(data.body).data;
	      // }
        console.log(store.state.arr1)
      });
      stompClient.subscribe(`/topic/buyShwo`, data => { //买单显示
        store.state.arr2 = JSON.parse(data.body).data;
      });
      stompClient.subscribe(`/topic/sellShwo`, data => { //买单显示
        store.state.arr3 = JSON.parse(data.body).data;
      });
});

Vue.prototype.getMarket = function(aa, bb, cc, dd, ee, ff) {
      store.state.obj.tradeMarket = aa;
      store.state.obj.zhuMarkUrl = bb;
      store.state.obj.ziMarkUrl = cc;
      store.state.obj.sumamount = dd;
      store.state.obj.newPrize = ee;
      store.state.obj.increasePrize = ff;
      stompClient.send('/app/newDealPrize', JSON.stringify({ //最新成交
        tradeMarket: aa,
      }));
      store.state.obj.tradeMarket = aa;
      stompClient.send('/app/findUserIdAndVirtualIdByTotal', JSON.stringify({ //查询钱包实体
        tradeMarket: aa,
        id: sessionStorage.getItem("token")
      }));
      stompClient.send('/app/historyEntrust', JSON.stringify({ //历史委托
        tradeMarket: aa,
        id: sessionStorage.getItem("token")
      }));
      stompClient.send('/app/underway', JSON.stringify({ //委托交易
        tradeMarket: aa,
        id: sessionStorage.getItem("token")
      }));
      stompClient.send('/app/buyShwo', JSON.stringify({ //买单显示
        tradeMarket: aa,
      }));
      stompClient.send('/app/sellShwo', JSON.stringify({ //卖单显示
        tradeMarket: aa,
      }));

    },

// Vue.prototype.$sock = stompClient;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App }
})
