import { gql, GraphQLClient } from "graphql-request";
import {
  CapitulosResponse,
  ContenidosResponse,
  CursosResponse,
} from "~/types/cursos";
import { useAuthStore } from "~/stores/auth";

const graphQLClient = () => {
  const env = useRuntimeConfig();
  const authStore = useAuthStore();
  const jwt = "Bearer " + authStore.getJWT;

  if (!authStore.getJWT) return false;

  return new GraphQLClient(env.app.API_ENDPOINT!, {
    headers: {
      Authorization: jwt,
    },
  });
};

async function Query<T>(q: string, vars?: any): Promise<T | false> {
  const client = graphQLClient();
  if (client) return await client.request(q, vars);
  return false;
}

export async function getCursos() {
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

  const data = await Query<CursosResponse>(query);
  return data;
}

export async function getCapitulos(id: string) {
  const variables = {
    id,
  };

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
    }
  `;

  const data = await Query<CapitulosResponse>(query, variables);
  return data;
}

export async function getContenidos(id: string, capitulo: string) {
  const variables = {
    id,
    capitulo,
  };

  const query = gql`
    # Get curso by ID
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
    }
  `;

  const data = await Query<ContenidosResponse>(query, variables);
  return data;
}
