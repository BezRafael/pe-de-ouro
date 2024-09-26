import { data_categoriaProduto } from "../data/dataCategoria";

export const getProdutoById = (id: number) => {
    return data_categoriaProduto.produtos.find(item => item.id == id)
}

export const getProdutoBtCategoria = (id: number) => {
    return data_categoriaProduto.produtos.filter(item => item.idCategoria === id)
}

