---
App: NuxtApp
Description: Starter Pack
Author: Martin Njuguna
Date: 04 January 2024
Latest Revision: 05 January 2024
---

# NUXT3: The IntuitiveVue Framework - Starter Pack

---

Table of Contents

- [NUXT3: The IntuitiveVue Framework - Starter Pack](#nuxt3-the-intuitivevue-framework---starter-pack)
  - [Introduction](#introduction)
    - [About](#about)
    - [What is Nuxt?](#what-is-nuxt)
    - [Pre-requisites](#pre-requisites)
      - [1. Setup requirements](#1-setup-requirements)
      - [2. Knowledge requirements](#2-knowledge-requirements)
  - [Installation and Setup](#installation-and-setup)
    - [Initial Setup](#initial-setup)
    - [Style Addition](#style-addition)
      - [1. Bootstrap 5](#1-bootstrap-5)
      - [2. Tailwind CSS](#2-tailwind-css)
    - [Adding Pages and Routes](#adding-pages-and-routes)
    - [Adding Layouts](#adding-layouts)
    - [Creating Links](#creating-links)
      - [Creating Error Pages](#creating-error-pages)
      - [Adding Meta-data \& useHead](#adding-meta-data--usehead)
    - [Reference Tutorials](#reference-tutorials)

---

## Introduction

### About

This is a Beginner's Guide to the initial installation and basic setup of a Nuxt App project

### What is Nuxt?

Nuxt.js is a server-side rendering (SSR) framework for Vue.js that allows you to build universal web applications.

Nuxt lets you write Vue components in a way that makes sense. Every repetitive task is automated, so you can focus on writing your full-stack Vue application with confidence.

---

### Pre-requisites

#### 1. Setup requirements

- A development computer ;-),
- Working internet connection,
- Latest version of [Node](https://nodejs.org/en/download/current) installed &
- IDE installed e.g [VS Code](https://code.visualstudio.com/download).

#### 2. Knowledge requirements

- Good understanding of [JavaScript](https://www.w3schools.com/js/) & [VueJs](https://www.w3schools.com/vue/index.php)

---

## Installation and Setup

### Initial Setup

1. Open your terminal and navigate to where you need to install your first Nuxt3 Application.
2. Create a new app using this command:

   ```bash
   dev@breakage:~$ npx nuxi@latest init 'Your Nuxt3 App Name'
   ```

3. Navigate to the project folder and install the project dependencies using this command:

   ```bash
   dev@breakage:~$ npm install
   ```

---

### Style Addition

#### 1. Bootstrap 5

1. Install Bootstrap 5 using this command:

   ```bash
   dev@breakage:~$ npm install bootstrap@latest
   ```

2. Create a `assets` folder in your root project and `css` folder in `assets.
3. Create `bootstrap.scss` in `css` folder and add the following import:

   ```css
   @import "bootstrap/scss/bootstrap";
   ```

4. Create `plugins` folder in the root of your project, create `bootstrap.js` file and add the following code:

   ```js
   import "bootstrap/dist/js/bootstrap.bundle";

   import { defineNuxtPlugin } from "nuxt";

   export default defineNuxtPlugin(() => {
     // Your plugin logic goes here
   });
   ```

5. Open `nuxt.config.ts` and add `css` & `plugins` following code:

   ```ts
   export default defineNuxtConfig({
     devtools: { enabled: true },
     css: ["~/assets/css/bootstrap.scss"],
     plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
   });
   ```

6. In case the build compiles with errors install the following dependencies:

   ```bash
   dev@breakage:~$ npm install sass sass-loader fibers postcss postcss-loader autoprefixer
   ```

---

#### 2. Tailwind CSS

1. Add [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs) to the project using this command:

   ```bash
   dev@breakage:~$ npm install @nuxtjs/tailwindcss
   ```

   Alternatively:

   ```bash
   dev@breakage:~$ npm install -D tailwindcss postcss autoprefixer
   dev@breakage:~$ npx tailwindcss init
   ```

2. Open `nuxt.config.ts` and add modules under `defineNuxtConfig()` as below:

   ```js
   export default defineNuxtConfig({
     modules: ["@nuxtjs/tailwindcss"],
   });
   ```

3. Create the `tailwind.config.js` file by running the following command:

   ```bash
   dev@breakage:~$ npx tailwindcss init
   ```

4. For a custome TailwindCSS create a file in `assets/css` call it `tailwind.css`; make sure to add the @tailwind directives for each of Tailwind’s layer types (base, components, and utilities) as below:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

### Adding Pages and Routes

1. To add pages; create a folder called `pages` in the root and add your .vue pages. This also creates routes based on the structure of your pages folder. `e.g pages/about.vue` will create a URL as: `http:localhost:8000/about`
   • Creating subfolders will create URLs with subfolders as well.
2. To add parameters to url use the subfolders and create a .vue page as: `pages/products/[id].vue`.
   • `id` in this case will represent the parameter that is being passed.
   • To access the parameters passed in the component, destructure `params` from `useRoute()` composable on the current url to grab the `id` as below:
   **NB**: The name of the parameter should be as named in the page file `[id].vue`

   ```js
   <script setup>const {id} = useRoute().params;</script>
   ```

---

### Adding Layouts

1. To add Layouts; create a folder in the root called `layouts` and add `default.vue`. Nuxt reads this file as the master file for your app layout.
   • In case you need a different layout, create a .vue file in the `layouts` folder and name it accordingly e.g `products.vue`.
   • To apply a different layout on a page, pass an object in `definePageMeta()` and add the layout in the object as below:

   ```js
      <script setup>
            definePageMeta({
                  layout: 'products'
            })

            const { id} = useRoute.params;
      </script>
   ```

2. To add all of them.

---

### Creating Links

1. Use `NuxtLink` to create links. NuxtLink comes bundled with a number of features to enable vue routing and show active links.
   e.g

   ```html
   <header>
     <nav>
       <ul>
         <li>
           <NuxtLink to="/">Home</NuxtLink>
           <NuxtLink to="/about">About</NuxtLink>
           <NuxtLink to="/products">Products</NuxtLink>
         </li>
       </ul>
     </nav>
   </header>
   ```

---

#### Creating Error Pages

1. Create `error.vue` file in the root of the project.
2. Define the `error` prop as below to make the data available in template:

   ```vue
   <template>
     <div>
       <h1>{{ error.statusCode }}</h1>
       <h4>Oops!</h4>
       <p>{{ error.message }}</p>
     </div>
   </template>

   <script setup>
   defineProps(["error"]);
   </script>
   ```

   - In case a product is not found, create a checker on the product details page and throw `createError()` as below:

   ```js
   <script setup>
      const { id } = useRoute().params;

      const { data: product } = await useFetch(
         "https://fakestoreapi.com/products/" + id,
         { key: id }
      );

      if(!product.value){
         throw createError({ statusCode: 404, statusMessage: 'Product not found'});
      }
   </script>
   ```

---

#### Adding Meta-data & useHead

1. To add meta-data & external libraries globally add the data in nuxt.config.js.
   e.g

   ```ts
   export default defineNuxtConfig({
     devtools: { enabled: true },
     modules: ["@nuxtjs/tailwindcss"],
     app: {
       head: {
         title: "Nuxt Starter Pack",
         meta: [
           {
             name: "description",
             content:
               "A is a Beginner'n s Guide to the initial installation and basic setup of a Nuxt App project",
           },
           {
             name: "keywords",
             content: "nuxt, starter, beginner, guide, tutorial",
           },
           { name: "author", content: "IOSync Limited" },
         ],
         link: [
           {
             rel: "stylesheet",
             href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css",
           },
         ],
       },
     },
   });
   ```

2. To make dynamic meta-data per page apply using the `useHead()` composable as follows:

   ```js
   <script setup>
      useHead({
         title: 'Nuxt App | Home',
         meta: [
            {
             name: "description",
             content:
               "Welcome to our Next Starter Pack | A is a Beginner'n s Guide to the initial installation and basic setup of a Nuxt App project",
            },
            {
             name: "keywords",
             content:
               "welcome, installation, nuxt, starter, beginner, guide, tutorial, app, basic, setup",
           },
         ]
      })
   </script>
   ```

3. Alternatively, you can override the defaults in `nuxt.config.ts` by using `<Head></Head>` components in template as below:

   ```js
   <template>
      <div>
         <Head>
            <Title> Nuxt3 | Start Pack</Title>
            <Meta name="description" :content="product.description"
         </Head>
      </div>
   </template>
   ```

---

### Reference Tutorials

1. [Nuxt3](https://youtu.be/dvanqBUoxhc?si=7fgu-BG12Z6nt-W1)
2. [Tailwind CSS](https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=2)
3. [VueJs](https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=2)

---
