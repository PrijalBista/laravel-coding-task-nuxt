export default function ({ app, store }) {
  console.log('Initialization');
  store.commit('init');
}