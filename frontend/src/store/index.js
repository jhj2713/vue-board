import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: {},
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
