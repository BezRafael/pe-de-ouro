import { data_categoriaProduto } from "../data/dataCategoria";

export const getCategoriaById = (id: number) => {
    return data_categoriaProduto.categorias.find(item => item.id === id);
}

export const getAllCategorias = () => {
    return data_categoriaProduto.categorias;
}