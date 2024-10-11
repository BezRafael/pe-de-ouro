import { Link } from "expo-router"
import { Tipo_produto } from "../types/tipo_produto"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type Props = {
    produto: Tipo_produto
}

export const ProdutoCategoria = ({produto}: Props) => {
    return(
        <Link href={`/produtos/produto/${produto.id}`}asChild>
            <TouchableOpacity style={styles.areaProduto}>
                <Image 
                    style={styles.imagemProduto}
                    source={{uri: produto.fotoProduto}}
                />

                <View style={styles.area_infoProduto}>
                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <Text style={styles.categoriaProduto}>{produto.categoriaProduto}</Text>
                    <Text style={styles.precoProduto}>R$: {produto.precoProduto.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </Link>

    )
}

const styles = StyleSheet.create({
    areaProduto: {
        borderWidth: 2,
        borderColor: '#283618',
        flexDirection: 'row',
        borderRadius: 10
    },

    imagemProduto: {
        borderWidth: 0,
        borderColor: 'red',
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#CCCCCC',
    },

    area_infoProduto: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderWidth: 0,
        borderColor: 'red',
        backgroundColor: '#FEFAE0',
        borderRadius: 10,
    },

    nomeProduto: {
        fontSize: 18,
        color: '#283618',
        fontWeight: 'bold'
    },

    categoriaProduto: {
        fontSize: 15,
        color: '#BC6C25',
        fontWeight: 'bold'
    },

    precoProduto: {
        fontSize: 15,
        color: '#283618',
        fontWeight: 'bold'
    }
})