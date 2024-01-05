<template>
	<div class="container p-3 text-center">
		<h2>Hello Nuxt3</h2>
	</div>
</template>

<script setup>
	useHead({
		title: "Home | Nuxt App",
		meta: [
			{
				name: "description",
				content:
					"Welcome to our Next Starter Pack | A is a Beginner'n s Guide to the initial installation and basic setup of a Nuxt App project",
			},
			{
				name: "keywords",
				content:
					"welcome, installation nuxt, starter, beginner, guide, tutorial, app, basic, setup",
			},
		],
	});
</script>