<template>
    <div>
        <h2>List of all products</h2>
        <p>
            <ul>
            <li> <NuxtLink to="product/coffee-table"> Product 1</NuxtLink> </li>
            <br />
            <li> <NuxtLink to="product/google-pixel-6a"> Product 2</NuxtLink> </li>
            <br />
            <li> <NuxtLink to="product/iphone-15-pro-max"> Product 3</NuxtLink> </li>
            </ul>
        </p>
    </div>
</template>

<script setup>
const { slug } = useRoute().params;
</script>
