<template>
    <div>
        <h2>List of all products</h2>
        <p>
            <ul>
                <li> <NuxtLink to="products/coffee-table"> Product 1</NuxtLink> </li>
                <br />
                <li> <NuxtLink to="products/google-pixel-6a"> Product 2</NuxtLink> </li>
                <br />
                <li> <NuxtLink to="products/iphone-15-pro-max"> Product 3</NuxtLink> </li>
                <br />
                <li> <NuxtLink :to="products/sony-bravia"> Product 4</NuxtLink> </li>
            </ul>
        </p>
    </div>
</template>

<script setup>
const { slug } = useRoute().params;
</script>
