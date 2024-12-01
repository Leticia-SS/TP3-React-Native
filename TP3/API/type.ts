// app/types.ts
export interface Categoria {
    id: number;
    nome: string;
    descricao: string;
  }
  
  export interface Artigo {
    id: number;
    titulo: string;
    categoriaId: number;
    autor: string;
    data: string;
    conteudo: string;
  }
  
  export interface Candidatura {
    id: number;
    vaga: string;
    empresa: string;
    status: 'Aprovado' | 'Pendente' | 'Reprovado';
    candidatoId: number;
  }
  
  export interface Candidato {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    skills: string[];
  }

  export interface Repository {
    id: number;
    name: string;
    description: string | null;
    updated_at: string;
    html_url: string;
  }