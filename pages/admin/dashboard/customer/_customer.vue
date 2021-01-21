<template>
	<div class="container-fluid">
	<div class="row">
	    <div class="col-lg-12">
	        <h1 class="mb-5">Customer / Create <small><span class="badge badge-info" @click="$router.back()"><i class="las la-arrow-left"></i>Back</span></small></h1>
	        <div class="row">
	        	<div class="col-12 col-md-8">
	        		<div class="card px-3 py-5">
		        		<form @submit.prevent="submit">
			        		<div class="form-group">
			        		  <label for="name">Customer Name</label>
			        		  <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Customer Name" v-model="data.name" :class="{ 'is-invalid': errors.name }" >
			        		  <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="dob">Date Of Birth</label>
			        		  <input type="date" class="form-control" id="dob" aria-describedby="dob" placeholder="Enter Customer dob" v-model="data.dob" :class="{ 'is-invalid': errors.dob }">
			        		  <div class="invalid-feedback" v-if="errors.dob">{{ errors.dob[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="email">Customer Email</label>
			        		  <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter Customer Email" v-model="data.email" :class="{ 'is-invalid': errors.email }" disabled>
			        		  <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="country">Country</label>
			        		  <input type="text" class="form-control" id="country" aria-describedby="country" placeholder="Enter Customer country" v-model="data.country" :class="{ 'is-invalid': errors.country }">
			        		  <div class="invalid-feedback" v-if="errors.country">{{ errors.country[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="profession">Profession</label>
			        		  <input type="text" class="form-control" id="profession" aria-describedby="profession" placeholder="Enter Customer profession" v-model="data.profession" :class="{ 'is-invalid': errors.profession }">
			        		  <div class="invalid-feedback" v-if="errors.profession">{{ errors.profession[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="new_password">New Password</label>
			        		  <input type="text" class="form-control" id="new_password" aria-describedby="new_password" placeholder="Enter Customer New password" v-model="data.new_password" :class="{ 'is-invalid': errors.new_password }">
			        		  <div class="invalid-feedback" v-if="errors.new_password">{{ errors.new_password[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="new_password_confirmation">Confirm Password</label>
			        		  <input type="text" class="form-control" id="new_password_confirmation" aria-describedby="new_password_confirmation" placeholder="Confirm Password" v-model="data.new_password_confirmation" :class="{ 'is-invalid': errors.new_password_confirmation }">
			        		  <div class="invalid-feedback" v-if="errors.new_password_confirmation">{{ errors.new_password_confirmation[0] }}</div>
			        		</div>

			        		<button type="submit" class="btn btn-primary">Update Customer</button>
		        		</form>
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
				data: {
					name: '',
					email: '',
					dob: '',
					country: '',
					profession: '',
					password: '',
					password_confirmation: '',
					role: 'customer',
				},
				errors: {},
			}
		},

		created() {
			this.$axios
				.get(`/api/customer/${this.$route.params.customer}`)
				.then(({ data }) => {
					this.data.name = data.name;
					this.data.email = data.email;
					this.data.dob = data.dob;
					this.data.country = data.country;
					this.data.profession = data.profession;
				})
				.catch(err => console.log(err.response));
		},

		methods: {
			submit() {
				this.$axios
					.put(`/api/customer/${this.$route.params.customer}`, this.data)
					.then(({data})=> {
						this.$router.push('/admin/dashboard/customer');
					})
					.catch(err => {
						this.errors = err.response.data.errors;
					});
			}
		}
	}
</script>