const app = {
	state: {
		show_conva: false,
		show_walmart: false, //威尔玛
		show_bw: false,
		show_loga: false,
		show_tiny: false,
		show_tran: false,
		show_jadlog: false,
		show_bra: false
	},
	mutations: {
		TOOGLE_INTEGRAL_CONVA: state => {
			state.show_conva = !state.show_conva
		},
		TOOGLE_INTEGRAL_WALMART: state => {
			state.show_walmart = !state.show_walmart
		},
		TOOGLE_INTEGRAL_B2W: state => {
			state.show_bw = !state.show_bw
		},
		TOOGLE_INTEGRAL_LOGA: state => {
			state.show_loga = !state.show_loga
		},
		TOOGLE_INTEGRAL_TINY: state => {
			state.show_tiny = !state.show_tiny
		},
		TOOGLE_INTEGRAL_TRAN: state => {
			state.show_tran = !state.show_tiran
		},
		TOOGLE_INTEGRAL_JADLOG: state => {
			state.show_jadlog = !state.show_jadlog
		},
		TOOGLE_INTEGRAL_BAR: state => {
			state.show_bra = !state.show_bra
		},

	}
}
export default app
