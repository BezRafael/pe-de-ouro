export type Tipo_maisVendido = {
    id: number;
    fotoProduto: string;
    nomeProduto: string;
    categoriaProduto: string;
    precoProduto: number;
}


export type Tipo_promocao = {
    id : number;
    fotoProduto: string,
    nomeProduto: string,
    categoria: String,
    precoAntigo: number,
    novoPreco: number,
}

export type Tipo_produto = {
    id: number;
    idCategoria: number;
    fotoProduto: string;
    nomeProduto: string;
    categoriaProduto: string;
    precoProduto: number;
}