<template>
<div class="container-fluid">
<div class="row">
    <div class="col-lg-12">
        <h1>Customers</h1>
        <nuxt-link to="/admin/dashboard/customer/create" class="btn btn-primary float-right">Add New Customer</nuxt-link>

        <div class="my-2"></div>
    </div>
    <div class="col-12">
    	<table class="table table-striped mt-3">
    	  <thead>
    	    <tr>
    	      <th scope="col">#</th>
    	      <th scope="col">Name</th>
    	      <th scope="col">Email</th>
    	      <th scope="col">DOB</th>
    	      <th scope="col">Country</th>
    	      <th scope="col">Profession</th>
    	    </tr>
    	  </thead>
    	  <tbody>
    	    <tr v-for="(customer, i) in customers" :key="customer.id">
    	      <th scope="row">{{ i+1 }}</th>
    	      <td>{{ customer.name }}</td>
    	      <td>{{ customer.email }}</td>
    	      <td>{{ customer.dob }}</td>
              <td>{{ customer.country }}</td>
    	      <td>{{ customer.profession }}</td>
    	      <td>
    	      	<nuxt-link :to="`/admin/dashboard/customer/${customer.id}`"><i class="las la-edit"></i></nuxt-link>
    	      	<a href="#" @click.prevent="destroy(customer.id)"><i class="las la-trash"></i></a>
    	      </td>
    	    </tr>
    	  </tbody>
    	</table>
    </div>
</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				customers: [],
			}
		},

		created() {
			this.$axios
				.get('/api/customer')
				.then(({ data }) => {
					this.customers = data.data;
				})
				.catch(err => console.log(err.response));
		},

		methods: {
			destroy(id) {
				this.$axios
					.delete(`/api/customer/${id}`)
					.then(res => {
						this.customers = this.customers.filter(el => el.id != id);
					})
					.catch(err => {
						console.log(err,response);
					})
			}
		}
	}
</script>