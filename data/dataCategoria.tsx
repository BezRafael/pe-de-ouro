import { Tipo_categoria } from "../types/tipo_categoria";
import { Tipo_produto } from "../types/tipo_produto";


type Tipo_categoriaProduto = {
    categorias: Tipo_categoria[],
    produtos: Tipo_produto[]
};

export const data_categoriaProduto: Tipo_categoriaProduto = {
    categorias: [
        {
            id: 1,
            tituloCategoria: 'Masculinos',
            imagemCategoria: 'a'
        },
        {
            id: 2,
            tituloCategoria: 'Femininos',
            imagemCategoria: 'a'
        },
        {
            id: 3,
            tituloCategoria: 'Infantil',
            imagemCategoria: 'a'
        }
    ],
    produtos: [
        {
            id: 1,
            idCategoria: 1,
            fotoProduto: 'https://converse.com.br/media/catalog/product/c/t/ct00010002_a_107x1_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
            nomeProduto: 'Chuck Taylor All Star Preto',
            categoriaProduto: 'Masculino',
            precoProduto: 259.90
        },
        {
            id: 2,
            idCategoria: 1,
            fotoProduto: 'https://converse.com.br/media/catalog/product/c/t/ct00010002_a_107x1_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
            nomeProduto: 'Chuck Taylor All Star Preto',
            categoriaProduto: 'Masculino',
            precoProduto: 259.90
        },
        {
            id: 3,
            idCategoria: 1,
            fotoProduto: 'https://converse.com.br/media/catalog/product/c/t/ct00010002_a_107x1_5.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
            nomeProduto: 'Chuck Taylor All Star Preto',
            categoriaProduto: 'Masculino',
            precoProduto: 259.90
        }
    ]
}
