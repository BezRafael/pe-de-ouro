import { data_maisVendidos } from "../data/dataProduto";
import { Tipo_maisVendido } from "../types/tipo_produto";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

type Props = {
    itemProduto: Tipo_maisVendido
}

const screenWidth = Dimensions.get('window').width;

export const Exibir_maisVendidos = ({ itemProduto }: Props) => {
    return(
        <TouchableOpacity style={styles.area_produto}>
            <Image 
                style={styles.img_produto}
                source={{uri: itemProduto.fotoProduto}}
            />
            <Text style={styles.nome_produto}>{itemProduto.nomeProduto}</Text>
            <Text style={styles.categoria_produto}>{itemProduto.categoriaProduto}</Text>
            <Text style={styles.preco_produto}>{itemProduto.precoProduto.toFixed(2)}</Text>
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
        borderWidth: 0,
        borderColor: 'transparent',
        width: screenWidth,
        height: '100%',
    },

    img_produto: {
        borderWidth: 1,
        borderColor: 'transparent',
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