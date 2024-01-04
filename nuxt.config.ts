// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/bootstrap.scss"],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
});
