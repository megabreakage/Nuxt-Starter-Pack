<template>
	<div class="container p-3">
		<div class="p-3">
			<h2>Product Details</h2>
		</div>
		<div class="py-4">
			<p>Product ID: {{ product.id }}</p>
			<p>Product name: {{ product.title }}</p>
			<p>Price: Kes. {{ product.price }}</p>
		</div>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;

	const { data: product } = await useFetch(
		"https://fakestoreapi.com/products/" + id,
		{ key: id }
	);
</script>
