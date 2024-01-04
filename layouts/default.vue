<template>
	<div>
		<header>
			<nav>
				<ul>
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink :to="{ name: 'products' }">Products</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<div>
			<slot />
		</div>

		<footer>
			<div class="container">
				<div class="col-md-12">
					<hr />
				</div>
				<div class="p-3 text-center">Copyright IOSync @ 2024</div>
			</div>
		</footer>
	</div>
</template>

<script setup></script>