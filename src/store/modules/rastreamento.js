const app = {
	state: {
		show_detail:false,
		show_error:false,
		show_dropdown:false,
	},
	mutations: {
		TOGGLE_RASTREAMENTO_DETAIL: state => {
			state.show_detail = !state.show_detail
		},
		TOGGLE_RASTREAMENTO_ERROR: state => {
			state.show_error = !state.show_error
		},
		TOGGLE_RASTREAMENTO_DROPDOWN: state => {
			state.show_dropdown = !state.show_dropdown
		},
	},
	actions:{
		
	}
}

export default app
