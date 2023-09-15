// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },

  runtimeConfig: {
    app: {
      API_TOKEN: process.env.API_TOKEN!, //   "Bearer b015996d675dab1",
      API_ENDPOINT: process.env.API_ENDPOINT!, // "http://localhost:1337/graphql",
      API_UPLOADS: process.env.API_UPLOADS!,
    },
  },

  app: {
    head: {
      title: "Studypath",
      meta: [{ name: "description", content: "Una nueva forma de aprender" }],
    },
  },
});
