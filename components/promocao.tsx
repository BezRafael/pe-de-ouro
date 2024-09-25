import { data_promocao } from "../data/dataProduto";
import { Tipo_promocao } from "../types/tipo_produto";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

type Props = {
    itemProduto: Tipo_promocao
}

const screenWidth = Dimensions.get('window').width;

export const ExibirPromocao = ({ itemProduto }: Props) => {
    return(
        <TouchableOpacity style={styles.area_produto}>
            <Image 
                style={styles.img_produto}
                source={{uri: itemProduto.fotoProduto}}
            />
            <Text style={styles.nome_produto}>{itemProduto.nomeProduto}</Text>
            <Text style={styles.preco_antigo}>{itemProduto.precoAntigo.toFixed(2)}</Text>
            <Text style={styles.novo_preco}>{itemProduto.novoPreco.toFixed(2)}</Text>
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
        borderRadius: 20,
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

    preco_antigo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fc545471'
    },

    novo_preco:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#05c705'
    },
})