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
    categoria: string,
    precoAntigo: number,
    precoNovo: number,
}

export type Tipo_produto = {
    id: number;
    idCategoria: number;
    fotoProduto: string;
    nomeProduto: string;
    categoriaProduto: string;
    precoProduto: number;
}