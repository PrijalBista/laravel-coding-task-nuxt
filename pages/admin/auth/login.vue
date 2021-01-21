<template>
	<div>
		<div class="container">
		  <div class="row justify-content-sm-center align-items-center full-height">
		    <div class="col-sm-6 col-md-4">

		      <div class="card border-info text-center">
		        <div class="card-header">
		          Sign in to continue
		        </div>
		        <div class="card-body">
		          <h4 class="text-center">Admin</h4>
		          <form class="form-signin" @submit.prevent="login">
		            <input type="email" class="form-control mb-2" placeholder="Email" required autofocus v-model="email">
		            <input type="password" class="form-control mb-2" placeholder="Password" required v-model="password">
		            <div class="text text-danger py-2" v-if="error" ><small>{{ error }} !</small></div>
		            <button class="btn btn-lg btn-primary btn-block mb-1" type="submit">Sign in</button>
		          </form>
		      	  <nuxt-link to="/admin/auth/register" class="float-right mt-2">Create Account</nuxt-link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

	</div>
</template>
<script>
	export default {
		middleware: ['isGuest'],

		data() {
			return {
				email: 'johndoe@example.org',
				password: '12345678',
				error: '',
			}
		},

		methods: {
			login() {
				console.log('logging in');
				this.$axios
					.post('/api/auth/login', { email:this.email, password:this.password })
					.then( ({ data }) => {
						this.$store.commit('setAuth', data);
						if(data.user.role == 'admin') {
							this.$router.replace('/admin/dashboard');
						} else {
							this.$router.replace('/customer/home');
						}
					})
					.catch(err => {
						console.log(err.response)
						if(err.response.data.error) {
							this.error = err.response.data.error;
						}
					});
			}
		},
	}
</script>
<style scoped>
	.full-height {
		height: 99vh;
	}
</style>