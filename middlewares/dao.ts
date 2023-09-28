import { gql, GraphQLClient } from "graphql-request";
import { CapitulosResponse, ContenidosResponse, CursosResponse } from "~/types/cursos";

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
  const query = gql`
    # Get all cursos
    query {
      cursos {
        data {
          id
          attributes {
            name
            description
            banner {
              data {
                attributes {
                  alternativeText
                  caption
                  name
                  formats
                }
              }
            }
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
};

export async function getCapitulos(id: string): Promise<CapitulosResponse> {
  const variables = {
    id
  }

  const query = gql`
  # Get curso by ID
  query ($id: ID!) {
    curso(id: $id) {
      data {
        id
        attributes {
          name
          Capitulos {
            name
          }
        }
      }
    }
  }`;

  const data = (await graphQLClient().request(query, variables)) as CapitulosResponse;
  return data;
}


export async function getContenidos(id: string, capitulo: string): Promise<ContenidosResponse> {
  const variables = {
    id,
    capitulo
  }

  const query = gql`# Get curso by ID
  # Example:
  # $id "1"
  # $capitulo "Capitulo 1"
  query ($id: ID!, $capitulo: String!) {
    curso(id: $id) {
      data {
        id
        attributes {
          name
          Capitulos(filters: { name: { eq: $capitulo } }) {
            name
            Contenido {
              id
              text
              image {
                data {
                  attributes {
                    alternativeText
                    caption
                    name
                    formats
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

  const data = (await graphQLClient().request(query, variables)) as ContenidosResponse;
  return data;
}
