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
  Contenido: Contenido[];
};

export type Contenido = {
  id: string;
  text: string;
  image: {
    data: Image[];
  };
  video: {
    data: Image[];
  };
};

export type Format = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
};

export type Image = {
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    formats: {
      large: Format;
      medium: Format;
      small: Format;
      thumbnail: Format;
    };
  };
};

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
  curso: {
    data: {
      attributes: {
        Capitulos: Capitulo[];
        name: string;
      };
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
        }[];
      };
    };
  };
}
