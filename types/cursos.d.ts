export type Curso = {
  id: string;
  attributes: {
    name: string;
    description: string;
    banner?: {
      data: {
        attributes: {
          alternativeText: string;
          caption: string;
          name: string;
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
  };
};

export type Capitulo = {
  id: string;
  attributes: {
    name: string;
    Capitulos: {
      name: string;
    }
  }
}

export type Contenido = {
  id: string,
  text: string,
  image: any
}

export interface CursosResponse {
  cursos: {
    data: Curso[];
    meta: {
      pagination: {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
      };
    };
  };
}

export interface CapitulosResponse {
  capitulos: {
    data: Capitulo[];
  };
}

export interface ContenidosResponse {
  contenidos: {
    data: {
      id: string;
      attributes: {
        name: string;
        Capitulos: {
          name: string;
          Contenido: Contenido[];
        };
      };
    };
  };
}
