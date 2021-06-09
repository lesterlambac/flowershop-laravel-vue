const auth = {
  state: () => ({
    authenticated: false,
    user: {}
  }),
  actions: {

  },
  mutations: {

  },
  getters: {
    isAuth : ({ authenticated } = state) => authenticated,
  },
}

export default auth;