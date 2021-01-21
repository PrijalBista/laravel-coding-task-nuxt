<template>
	<div>
		<div class="container">
		  <div class="row justify-content-sm-center align-items-center full-height">
		    <div class="col-sm-6 col-md-4">

		      <div class="card border-info text-center">
		        <div class="card-header">
		          Register Admin
		        </div>
		        <div class="card-body">
		          <h4 class="text-center">Admin</h4>
		          <form class="form-signin" @submit.prevent="login">
		          	<div class="form-group">
		            	<input type="text" class="form-control mb-2" placeholder="Name" required v-model="name" :class="{ 'is-invalid': errors.name }">
		          		<div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
		          	</div>
		          	<div class="form-group">
		            	<input type="email" class="form-control mb-2" placeholder="Email" required autofocus v-model="email" :class="{ 'is-invalid': errors.email }">
		          		<div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
		          	</div>
		          	<div class="form-group">
		            	<input type="password" class="form-control mb-2" placeholder="Password" required v-model="password" :class="{ 'is-invalid': errors.password }">
		          		<div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
		          	</div>
		          	<div class="form-group">
		            	<input type="password" class="form-control mb-2" placeholder="Password" required v-model="password_confirmation">
		          	</div>
		            <button class="btn btn-lg btn-primary btn-block mb-1" type="submit">Register</button>
		          </form>
		      	  <nuxt-link to="/admin/auth/login" class="float-right mt-2">Sign in</nuxt-link>
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
				name:'',
				email: '',
				password: '',
				password_confirmation: '',
				errors: {},
			}
		},

		methods: {
			login() {
				this.$axios
					.post('/api/auth/register', { name:this.name, email:this.email, password:this.password,  password_confirmation:this.password_confirmation })
					.then( ({ data }) => {
						this.$store.commit('setAuth', data);
						this.$router.replace('/admin/auth/login');
					})
					.catch(err => {
						this.errors = err.response.data.errors;
						console.log(this.errors);
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