import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/js/fetch'
Vue.prototype.$get = api.get;
// import app from './modules/app'
// import user from './modules/user'
// import product from './modules/product'
// import tran from './modules/tran'
// import order from './modules/order'
// import expedic from './modules/expedic'
// import integral from './modules/integral'
// import sac from './modules/sac'
// import getters from './getters'
// import fornecedor from './modules/fornecedor'
// import rastreamento from './modules/rastreamento' //物流最终
// import all from './modules/all' //通用

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: null,
		user:{

		},
		obj:{
			tradeMarket:'',
			virtualId:'',
			username:''
		},
		arr:[],
		arr1:[],
		arr2:[],
		arr3:[],
		home_arr:[],
		userDate:{
			hasRealValidate:'',
			isValid:''
		},
		header_list:[],
		tab_list:[],
		basisName:'',
		tradeMarket:'',
		totalObj:''

	},
	getters :{
		token: state => state.token,
	},
	mutations: {
		SET_TOKEN(state,token,user_data){
			state.token = token;
			state.user = user_data;
			sessionStorage.setItem('token',token);
			sessionStorage.setItem('user',JSON.stringify(user_data));
		},

    },
  	actions: {

	 }
})
export default store
