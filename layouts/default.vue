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
			<div>Copyright IOSync @ 2024</div>
		</footer>
	</div>
</template>

<script setup></script>