import { data_categoriaProduto } from "../data/dataCategoria";
import { data_promocao } from "../data/dataProduto";
import { data_maisVendidos } from "../data/dataProduto";


export const getMaisVendidosById = (id: number) => {
    return data_maisVendidos.find(item => item.id == id)
}

export const getPromocaoById = (id: number) => {
    return data_promocao.find(item => item.id == id)
}

export const getProdutoById = (id: number) => {
    return data_categoriaProduto.produtos.find(item => item.id == id)
}

export const getProdutoBtCategoria = (id: number) => {
    return data_categoriaProduto.produtos.filter(item => item.idCategoria === id)
}

