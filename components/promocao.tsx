import { Link } from "expo-router";
import { data_promocao } from "../data/dataProduto";
import { Tipo_promocao } from "../types/tipo_produto";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

type Props = {
    itemProduto: Tipo_promocao
}

const screenWidth = Dimensions.get('window').width;

export const ExibirPromocao = ({ itemProduto }: Props) => {
    return(
        <Link href={`/produto/promocao/${itemProduto.id}`}asChild>    
            <TouchableOpacity style={styles.area_produto}>
                <Image 
                    style={styles.img_produto}
                    source={{uri: itemProduto.fotoProduto}}
                />
                <Text style={styles.nome_produto}>{itemProduto.nomeProduto}</Text>
                <Text style={styles.preco_antigo}>R${itemProduto.precoAntigo.toFixed(2)}</Text>
                <Text style={styles.novo_preco}>R${itemProduto.novoPreco.toFixed(2)}</Text>
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
        borderRadius: 20,
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

    preco_antigo:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },

    novo_preco:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#05c705'
    },
})