<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-between">
				<ul class="flex gap-4">
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink :to="{ name: 'products' }" class="btn">Products</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<div class="container mx-auto p-4">
			<slot />
		</div>

		<footer>
			<div class="container mx-auto p-4">
				<div>
					<hr />
				</div>
				<div class="p-4 text-center">Copyright IOSync @ 2024</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
</script>