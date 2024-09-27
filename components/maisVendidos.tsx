import { Link } from "expo-router";
import { data_maisVendidos } from "../data/dataProduto";
import { Tipo_maisVendido } from "../types/tipo_produto";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

type Props = {
    itemProduto: Tipo_maisVendido
}

const screenWidth = Dimensions.get('window').width;

export const Exibir_maisVendidos = ({ itemProduto }: Props) => {
    return(
        <Link href={`/produto/maisVendidos/${itemProduto.id}`} asChild>
            <TouchableOpacity style={styles.area_produto}>
                <Image 
                    style={styles.img_produto}
                    source={{uri: itemProduto.fotoProduto}}
                />
                <Text style={styles.nome_produto}>{itemProduto.nomeProduto}</Text>
                <Text style={styles.categoria_produto}>{itemProduto.categoriaProduto}</Text>
                <Text style={styles.preco_produto}>R${itemProduto.precoProduto.toFixed(2)}</Text>
            </TouchableOpacity>
        </Link>

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
        borderColor: 'red',
        width: screenWidth,
        height: '100%',
    },

    img_produto: {
        borderWidth: 1,
        borderColor: 'transparent',
        width: 200,
        height: 200,
        borderRadius: 20
    },

    nome_produto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#283618'
    },

    categoria_produto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BC6C25'
    },

    preco_produto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#283618'
    },
})