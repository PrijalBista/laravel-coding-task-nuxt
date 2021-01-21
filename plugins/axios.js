export default function ({ $axios, app, store, error }) {
  $axios.onRequest((config) => {
    if (store.state.access_token) {
      config.headers.common['Authorization'] =
        'Bearer ' + store.state.access_token;
    }
  });

  $axios.onError((err) => {
    if (err.response.status == 401) {
      store.commit('signout');
    } else if (err.response.status == 404) {
      error({
        statusCode: 404,
        message: 'This page could not be found',
      });
    }
  });
}