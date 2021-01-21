export default function ({ store, redirect }) {
  if (store.state.isAuth && store.state.user.role && store.state.user.role != 'admin') {
    return redirect('/');
  }
}