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
		      	  <a href="#" class="float-right mt-2">Create Account</a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
				error: '',
			}
		},

		methods: {
			login() {
				console.log('logging in');
				this.$axios
					.post('/api/auth/login', { email:this.email, password:this.password })
					.then(res => console.log(res))
					.catch(err => {
						console.log(err.response)
						if(err.response.data.error) {
							this.error = err.response.data.error;
						}
					});
			}
		}
	}
</script>
<style scoped>
	.full-height {
		height: 99vh;
	}
</style>