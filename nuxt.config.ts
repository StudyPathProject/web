// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],

  devtools: { enabled: true },

  app: {
    head: {
      title: "Studypath",
      meta: [{ name: "description", content: "Una nueva forma de aprender" }],
    },
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },

  buildModules: ["@nuxtjs/pwa"],

  pwa: {
    meta: {
      name: "Studypath",
      description: "Una nueva forma de aprender.",
      theme_color: "#26B89B",
      lang: "es",
      mobileApp: true,
      mobileAppIOS: true,
      /* meta options */
    },
  },

  css: ["@/assets/css/tailwind.css"],
});
