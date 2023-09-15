export type Curso = {
  id: string;
  attributes: {
    name: string;
    description: string;
    banner?: string;
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
