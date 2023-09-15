// import { gql, GraphQLClient } from "graphql-request";

// import { CursosResponse } from "~/types/cursos";

// export default defineEventHandler(async (event): Promise<CursosResponse> => {
//   const query = gql`
//     # Get all cursos
//     query {
//       cursos {
//         data {
//           id
//           attributes {
//             name
//             description
//             public
//           }
//         }
//         meta {
//           pagination {
//             page
//             pageSize
//             total
//             pageCount
//           }
//         }
//       }
//     }
//   `;

//   const data = (await event.context.graphql.request(query)) as CursosResponse;
//   return data;
// });
