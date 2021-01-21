<template>
<div class="container-fluid">
<div class="row">
    <div class="col-lg-12">
        <h1>Company</h1>
        <nuxt-link to="/admin/dashboard/company/create" class="btn btn-primary float-right">Add New Company</nuxt-link>

        <div class="my-2"></div>
    </div>
    <div class="col-12">
    	<table class="table table-striped mt-3">
    	  <thead>
    	    <tr>
    	      <th scope="col">#</th>
    	      <th scope="col">Name</th>
    	      <th scope="col">Address</th>
    	      <th scope="col">Phone</th>
    	      <th scope="col">Email</th>
    	      <th scope="col">Actions</th>
    	    </tr>
    	  </thead>
    	  <tbody>
    	    <tr v-for="(company, i) in companies" :key="company.id">
    	      <th scope="row">{{ i+1 }}</th>
    	      <td>{{ company.name }}</td>
    	      <td>{{ company.address }}</td>
    	      <td>{{ company.phone }}</td>
    	      <td>{{ company.email }}</td>
    	      <td>
    	      	<nuxt-link :to="`/admin/dashboard/company/${company.id}`">edit</nuxt-link>
    	      	<a href="#" @click.prevent="destroy(company.id)">delete</a>
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
				companies: [],
			}
		},

		created() {
			this.$axios
				.get('/api/company')
				.then(({ data }) => {
					this.companies = data.data;
				})
				.catch(err => console.log(err.response));
		},

		methods: {
			destroy(id) {
				this.$axios
					.delete(`/api/company/${id}`)
					.then(res => {
						this.companies = this.companies.filter(el => el.id != id);
					})
					.catch(err => {
						console.log(err,response);
					})
			}
		}
	}
</script>