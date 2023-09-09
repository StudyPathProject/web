// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },

  runtimeConfig: {
    app: {
      API_TOKEN:
        "Bearer b015996d675dab1f6fe2fd69a8edc7db614b8e455aa3cfe81225634f0f167f39a5e946ee021ff452ba609c9cc36e896afd31ed00aa3a7b488d7a718149f3490fcd2a3daae0d2351537c41de617c8486752fe455196d66640550642ce40e07ecea35b29be9b001a69dd982032bf8dd6fe6225e0ce44a2c767de16729a3024da93",
      API_ENDPOINT: "http://localhost:1337/graphql",
    },
  },

  app: {
    head: {
      title: "Studypath",
      meta: [{ name: "description", content: "Una nueva forma de aprender" }],
    },
  },

  // transpile: {}
  // postcss: {
  //   postcssOptions: {
  //     plugins: {
  //       tailwindcss: {},
  //       autoprefixer: {},
  //     },
  //   },
  // },
  // loaders: {
  //   vue: {
  //     prettify: false,
  //   },
  // },
  // },

  // buildModules: ["@nuxtjs/pwa"],

  // pwa: {
  //   meta: {
  //     name: "Studypath",
  //     description: "Una nueva forma de aprender.",
  //     theme_color: "#26B89B",
  //     lang: "es",
  //     mobileApp: true,
  //     mobileAppIOS: true,
  //     /* meta options */
  //   },

  //   manifest: {
  //     name: "Studypath",
  //     lang: "es",
  //     description: "Una nueva forma de aprender.",
  //     useWebmanifestExtension: false,
  //     theme_color: "#26B89B",
  //   },
  // },

  // css: ["@/assets/css/tailwind.css"],

  // graphql: {
  //   /**
  //    * An Object of your GraphQL clients
  //    */
  //   clients: {
  //     default: {
  //       /**
  //        * The client endpoint url
  //        */
  //       endpoint: "http://localhost:1337/graphql",
  //       /**
  //        * Per-client options overrides
  //        * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
  //        */
  //       options: {
  //         headers: {
  //           authorization:
  //             "Bearer b015996d675dab1f6fe2fd69a8edc7db614b8e455aa3cfe81225634f0f167f39a5e946ee021ff452ba609c9cc36e896afd31ed00aa3a7b488d7a718149f3490fcd2a3daae0d2351537c41de617c8486752fe455196d66640550642ce40e07ecea35b29be9b001a69dd982032bf8dd6fe6225e0ce44a2c767de16729a3024da93",
  //         },
  //       },
  //     },
  //     secondClient: {
  //       // ...client config
  //     },
  //     // ...your other clients
  //   },

  //   /**
  //    * Options
  //    * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
  //    */
  //   options: {
  //     method: "get", // Default to `POST`
  //   },

  //   /**
  //    * Optional
  //    * default: true (this includes cross-fetch/polyfill before creating the graphql client)
  //    */
  //   useFetchPolyfill: true,

  //   /**
  //    * Optional
  //    * default: false (this includes graphql-tag for node_modules folder)
  //    */
  //   includeNodeModules: true,
  // },
});
