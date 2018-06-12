const app = {
	state: {
		show_detail:false,
		show_error:false,
		show_dropdown:false,
		show_user:false,
		show_set:false,
		show_enter:false,
	},
	mutations: {
		TOGGLE_TRAN_DETAIL: state => {
			state.show_detail = !state.show_detail
		},
		TOGGLE_TRAN_ERROR: state => {
			state.show_error = !state.show_error
		},
		TOGGLE_TRAN_DROPDOWN: state => {
			state.show_dropdown = !state.show_dropdown
		},
		TOGGLE_TRAN_USER:state=>{
			state.show_user=!state.show_user
		},
		TOGGLE_TRAN_SET:state=>{
			state.show_set=!state.show_set
		},
		TOGGLE_TRAN_ENTER:state=>{
			state.show_enter=!state.show_enter
		},
		
	},
	actions:{
		
	}
}

export default app
