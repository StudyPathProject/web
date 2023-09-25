export type Curso = {
  id: string;
  attributes: {
    name: string;
    description: string;
    banner?: string;
  };
};

export type Capitulo = {
  name: string;
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
  curso:{
    data:{
      attributes:{
        Capitulos: Capitulo[];
        name:string;
      },
      id: string;
    };
  };
}

export interface ContenidosResponse {
  curso: {
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
