const app = {
	state: {
		show_order: false,
		show_inform: false,
		show_detail: false,
		show_alist: false,
	},
	mutations: {
		TOOGLE_EXPEDIC_ORDER: state => {
			state.show_order = !state.show_order
		},
		TOOGLE_EXPEDIC_INFORM: state => {
			state.show_inform = !state.show_inform
		},
		TOOGLE_EXPEDIC_DETAIL: state => {
			state.show_detail = !state.show_detail
		},
		TOOGLE_EXPEDIC_ALIST: state => {
			state.show_alist = !state.show_alist
		},
	},
	actions: {

	}
}
export default app