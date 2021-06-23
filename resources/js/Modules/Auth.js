const auth = {
  state: () => ({
    authenticated: false,
    user: {}
  }),
  actions: {
    login(state, payload) {
      this.commit('login', payload);
    }
  },
  mutations: {
    login(state, payload) {
      state.authenticated = payload;
    }
  },
  getters: {
    isAuth : ({ authenticated } = state) => authenticated,
  },
}

export default auth;