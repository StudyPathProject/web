export type Curso = {
  id: string;
  attributes: {
    name: string;
    description: string;
    public: boolean;
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
