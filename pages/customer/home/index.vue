<template>
	<div class="container">
		<h3>Customer Home !</h3>
		<div class="mt-3">
			<a href="#" @click.prevent="$store.commit('signout')"><i class="las la-sign-out-alt mr-1"></i>Sign Out</a>
		</div>
	</div>
</template>

<script>
	export default {
		middleware: ['isCustomer']
	}
</script>