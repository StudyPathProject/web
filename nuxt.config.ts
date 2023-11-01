import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxthq/ui",
    "nuxt-headlessui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/cloudinary",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    app: {
      API_BASE: process.env.API_BASE,
      // API_ENDPOINT: process.env.API_ENDPOINT!, // "http://localhost:1337/graphql",
      API_TOKEN: process.env.API_TOKEN, //   "Bearer b015996d675dab1",
      // API_UPLOADS: process.env.API_UPLOADS,
    },
  },

  app: {
    head: {
      title: "Studypath",
      meta: [{ name: "description", content: "Una nueva forma de aprender" }],
    },
  },

  vite: {
    plugins: [svgLoader()],
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
