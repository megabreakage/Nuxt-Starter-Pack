// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Start Pack",
      meta: [
        {
          name: "description",
          content:
            "A is a Beginner'n s Guide to the initial installation and basic setup of a Nuxt App project",
        },
        {
          name: "keywords",
          content:
            "nuxt, starter, beginner, guide, tutorial, app, basic, setup",
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
