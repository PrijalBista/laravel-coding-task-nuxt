<template>
<div class="container-fluid">
<div class="row">
    <div class="col-lg-12">
        <h1>Dashboard</h1>
        <div class="my-2"></div>
        <div class="badges">
        	<div class="custom-card card-1">
        		<div class="d-flex justify-content-around">
        			<i class="las la-users-cog"></i>
        			<div>
        				Customers <br/>
        				{{ data.customers }}
        			</div>
        		</div>
        	</div>
        	<div class="custom-card card-2">
        		<div class="d-flex justify-content-around">
        			<i class="las la-building"></i>
        			<div>
        				Companies <br/>
        				{{ data.companies }}
        			</div>
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
					customers: 0,
					companies: 0,
				}
			}
		},
		created() {
			this.$axios
				.get('/api/admin/dashboard')
				.then(({data}) => {
					console.log(data);
					this.data = data;
				})
				.catch(err => console.log(err.response));
		}
	}
</script>

<style scoped>
	.custom-card {
		display: inline-block;
		width: 200px;
		padding: 10px 20px;
	}
	.custom-card i {
		font-size: 40px;
	}
	.card-1 {
		background-color: #1C4E80;
		color: #fff;
	}
	.card-2 {
		background-color: #EA6A47;
		color: #fff;
	}
</style>