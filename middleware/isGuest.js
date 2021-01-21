export default function ({ store, redirect }) {
  if (store.state.isAuth) {
  	if(store.state.user.role =='admin') {
    	return redirect('/admin/dashboard');
  	} else {
  		return redirect('/customer/home');
  	}
  }
}