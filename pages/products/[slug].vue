<template>
	<div class="container p-3 text-center">
		<div class="p-3">
			<h2>Product Details</h2>
		</div>
		<div class="py-4">
			<p>Product ID is: {{ slug }}</p>
		</div>
	</div>
</template>

<script setup>
	const { slug } = useRoute().params;
</script>
