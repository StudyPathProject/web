// import { GraphQLClient } from "graphql-request";

// const env = useRuntimeConfig();

// const config = {
//   endpoint: env.private.API_ENDPOINT!,
//   /**
//    * Per-client options overrides
//    * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
//    */
//   options: {
//     headers: {
//       authorization: env.private.API_TOKEN!,
//     },
//   },
// };

// const graphQLClient = new GraphQLClient(config.endpoint, {
//   method: "GET",
//   headers: {
//     Authorization: config.options.headers.authorization,
//   },
// }).setHeader("Authorization", config.options.headers.authorization);

// export default defineEventHandler((event) => {
//   event.context.graphql = graphQLClient;
// });
