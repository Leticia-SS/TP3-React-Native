import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.npoint.io/6e1a701b7a05775a3f62',
});

export const fetchCategorias = async () => {
  const response = await api.get('/categorias');
  return response.data;
};

export const fetchArtigos = async () => {
  const response = await api.get('/artigos');
  return response.data;
};

export const fetchCandidaturas = async () => {
    const response = await api.get('/candidaturas');
    return response.data;
  };

  export const fetchCandidados = async () => {
    const response = await api.get('/candidados');
    return response.data;
  };

// link para meu json https://api.npoint.io/6e1a701b7a05775a3f62