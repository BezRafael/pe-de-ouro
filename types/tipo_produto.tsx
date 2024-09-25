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
    precoAntigo: number,
    novoPreco: number,
}