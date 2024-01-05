<template>
	<div class="container mx-auto p-4 text-center">
		<h1>{{ error.statusCode }}</h1>
		<h4>Oops!</h4>
		<p>{{ error.message }}</p>
		<button class="btn my-7" @click="handleError">Go Back Home</button>
	</div>
</template>

<script setup>
	defineProps(["error"]);

	const handleError = () =>
		clearError({
			redirect: "/",
		});
</script>

<style lang="css" scoped>
</style>