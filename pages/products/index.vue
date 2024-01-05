<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div class v-for="product in products" :key="product.id">
				<NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
