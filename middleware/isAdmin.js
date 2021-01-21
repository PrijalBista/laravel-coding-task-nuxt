export default function ({ store, redirect }) {
	if (!store.state.isAuth) {
		return redirect('/admin/auth/login');
	}
	if (store.state.user.role && store.state.user.role != 'admin') {
    	return redirect('/admin/auth/login');
  	}
}