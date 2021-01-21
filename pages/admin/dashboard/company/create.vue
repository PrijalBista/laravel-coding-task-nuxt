<template>
	<div class="container-fluid">
	<div class="row">
	    <div class="col-lg-12">
	        <h1 class="mb-5">Company / Create <small><span class="badge badge-info" @click="$router.back()">Back</span></small></h1>

	        <div class="row">
	        	<div class="col-12 col-md-8">
	        		<div class="card px-3 py-5">
		        		<form @submit.prevent="submit">
			        		<div class="form-group">
			        		  <label for="name">Company Name</label>
			        		  <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Company Name" v-model="data.name" :class="{ 'is-invalid': errors.name }" >
			        		  <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="address">Company Address</label>
			        		  <input type="text" class="form-control" id="address" aria-describedby="address" placeholder="Enter Company Address" v-model="data.address" :class="{ 'is-invalid': errors.address }">
			        		  <div class="invalid-feedback" v-if="errors.address">{{ errors.address[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="phone">Company Phone</label>
			        		  <input type="text" class="form-control" id="phone" aria-describedby="phone" placeholder="Enter Company Phone" v-model="data.phone" :class="{ 'is-invalid': errors.phone }" >
			        		  <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
			        		</div>
			        		<div class="form-group">
			        		  <label for="email">Company Email</label>
			        		  <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter Company Email" v-model="data.email" :class="{ 'is-invalid': errors.email }">
			        		  <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
			        		</div>

			        		<button type="submit" class="btn btn-primary">Add Company</button>
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
					address: '',
					phone: '',
					email: '',
				},
				errors: {},
			}
		},

		methods: {
			submit() {
				this.$axios
					.post('/api/company', this.data)
					.then(({data})=> {
						console.log('sucess', data);
						this.$router.push('/admin/dashboard/company');
					})
					.catch(err => {
						this.errors = err.response.data.errors;
						console.log(this.errors);
					});
			}
		}
	}
</script>