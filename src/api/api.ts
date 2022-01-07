import axios from "axios";
import { ICategoria } from "../interfaces/categoria.interface";
import { IPost } from "../interfaces/post.interface";

export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const buscaPost = async (postID: string): Promise<IPost> => {
  const resposta = await api.get<IPost>(`/posts/${postID}`);
  return resposta.data;
}

export const buscaPosts = async (categoria?: string, subcategoria?: string): Promise<IPost[]> => {
  let url = '/posts/';
  if(categoria) url =  `/posts?categoria=${categoria}`;
  if(subcategoria) url = `${url}&subcategoria=${subcategoria}`;
  
  const resposta = await api.get<IPost[]>(url);
  return resposta.data;
}

export const buscaCategorias = async (): Promise<ICategoria[]> => {
  const resposta = await api.get<ICategoria[]>('/categorias');
  return resposta.data;
}

export const buscaCategoria = async (categoria: string): Promise<string[]> => {
  const resposta = await api.get<ICategoria>(`/categorias/${categoria}`);
  return resposta.data.subcategorias;
}
