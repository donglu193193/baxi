const app = {
	state: {
		show_unbind: false,
		show_market: false,
		show_ml: false,
		show_delete: false,
		show_entrda: false,
		show_edit: false,
	},
	mutations: {
		TOGGLE_ML: state => {
			state.show_ml = !state.show_ml
		},
		TOGGLE_UNBIND: state => {
			state.show_unbind = !state.show_unbind
		},
		TOGGLE_MARKET: state => {
			state.show_market = !state.show_market
		},
		TOGGLE_DELETE: state => {
			state.show_delete = !state.show_delete
		},
		TOGGLE_ENTRDA: state => {
			state.show_entrda = !state.show_entrda
		},
		TOGGLE_EDIT: state => {
			state.show_edit = !state.show_edit
		},
	}
}

export default app
