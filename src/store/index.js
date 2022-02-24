import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex, axios);

const url = "https://jsonplaceholder.typicode.com/users/";

export default new Vuex.Store({
	state: {
		data: [],
	},
	mutations: {
		SAVE_USERS(state, data) {
			state.data = data;
		},
	},
	actions: {
		loadData({ commit }) {
			axios
				.get(url)
				.then((result) => {
					commit("SAVE_USERS", result.data);
				})
				.catch((error) => {
					throw new Error(`API ${error}`);
				});
		},
	},
});
