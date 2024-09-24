import { dataProduto } from "../data/dataProduto";
import { TipoProduto } from "../tipos/tipoProdutos";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
    itemProduto: TipoProduto
}

export const ExibirProdutos = ({ itemProduto }: Props) => {
    return(
        <TouchableOpacity style={styles.area_produto}>
            <Image 
                style={styles.img_produto}
                source={{uri: itemProduto.fotoProduto}}
            />
            <Text style={styles.nome_produto}>{itemProduto.nomeProduto}</Text>
            <Text style={styles.categoria_produto}>{itemProduto.categoriaProduto}</Text>
            <Text style={styles.preco_produto}>{itemProduto.precoProduto}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFAE0'
    },

    area_produto: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        width: 350,
        height: '100%',
    },

    img_produto: {
        borderWidth: 1,
        borderColor: '#BC6C25',
        width: 300,
        height: 300
    },

    nome_produto: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#283618'
    },

    categoria_produto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DDA15E'
    },

    preco_produto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#283618'
    },
})