<template>
	<div>
		<p>Product ID is: {{ slug }}</p>
	</div>
</template>

<script setup>
	const { slug } = useRoute().params;
</script>
