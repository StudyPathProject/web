import { gql, GraphQLClient } from "graphql-request";
import { CursosResponse } from "~/types/cursos";

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

const graphQLClient = () => {
  const env = useRuntimeConfig();
  return new GraphQLClient(env.app.API_ENDPOINT!, {
    headers: {
      authorization: env.app.API_TOKEN!,
    },
  });
};

export async function getCursos(): Promise<CursosResponse> {
  const env = useRuntimeConfig();

  const query = gql`
    # Get all cursos
    query {
      cursos {
        data {
          id
          attributes {
            name
            description
            public
          }
        }
        meta {
          pagination {
            page
            pageSize
            total
            pageCount
          }
        }
      }
    }
  `;

  const data = (await graphQLClient().request(query)) as CursosResponse;
  return data;
}
