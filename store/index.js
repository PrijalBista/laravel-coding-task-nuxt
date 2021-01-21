export const state = () => ({
  isAuth: false,
  user: null,
  access_token: null,
});

export const mutations = {
  init(state) {
    state.isAuth = !(localStorage.getItem('authUser') === null);
    let authUser = localStorage.getItem('authUser');
    if (authUser) {
      authUser = JSON.parse(authUser);
      state.user = authUser.user;
      state.access_token = authUser.access_token;
    }
  },

  signout(state) {
    localStorage.removeItem('authUser');
    state.isAuth = false;
    state.user = null;
    state.access_token = null;
    this.$router.push('/admin/auth/login');
  },

  setAuth(state, payload) {
    if (!state.user) {
      state.user = payload.user;
      state.access_token = payload.access_token;
      state.isAuth = true;
      localStorage.setItem(
        'authUser',
        JSON.stringify({
          access_token: state.access_token,
          user: state.user,
        })
      );
    }
  },
}