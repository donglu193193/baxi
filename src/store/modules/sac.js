const app = {
	state: {
		show_resevice: false,
		show_msg: false,
		type: ''
	},
	mutations: {
		TOGGLE_SAC_RESEVICE: state => {
			state.show_reservice = !state.show_resevice;
		},
		TOGGLE_SAC_MSG: (state, type) => {
			state.show_msg = !state.show_msg;
			state.type = type;
		}
	}
}
export default app
