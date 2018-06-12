const app = {
	state: {
		show_error: false,
		show_del: false,
		show_message: false
	},
	mutations: {
		TOGGLE_ALL_ARROR: state => {
			state.show_error = !state.show_error
		},
		TOGGLE_ALL_DEL: state => {
			state.show_del = !state.show_del
		},
		TOGGLE_ALL_MESSAGE: state => {
			console.log(state.show_message)
			state.show_message = !state.show_message
		}
	},
	actions: {

	}
}
export default app
