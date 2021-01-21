export default function ({ store, redirect }) {
  if (!store.state.isAuth) {
    return redirect('/auth/login');
  }
  if (store.state.user.role && store.state.user.role != 'customer') {
    return redirect('/auth/login');
  }
}