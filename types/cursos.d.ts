export type Content = { 
  title: string,
  description: string,
  img: string, 
  video: string
}

export type Curso = {
  id: string;
  attributes: {
    name: string;
    description: string;
    public: boolean;
  };
  capitulos: [
    {
      name: string;
      content: Content[];
    }
  ];
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
