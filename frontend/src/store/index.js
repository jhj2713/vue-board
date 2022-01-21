import { createStore } from "vuex";

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
