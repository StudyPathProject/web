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
