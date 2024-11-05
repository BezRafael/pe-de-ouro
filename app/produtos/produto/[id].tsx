import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Tipo_produto } from "../../../types/tipo_produto";
import api from "../../../services/api";
import Voltar from "../../../services/voltar";

export default function ScreenProdutoIndividual() {
    const { id } = useLocalSearchParams(); // Obtendo o ID do produto da URL
    const [produto, setProduto] = useState<Tipo_produto | null>(null);

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await api.get(`/produtos/produto/${id}`);
                setProduto(response.data.produto);
            } catch (error) {
                console.log('Erro ao buscar produto:', error);
            }
        };

        if (id) {
            fetchProduto();
        }
    }, [id]);

    if (!produto) {
        return <Text>Carregando...</Text>;
    }

    return (
        <SafeAreaView style={styles.conteiner}>
            <StatusBar/>

                <TouchableOpacity style={styles.btnVoltar} onPress={Voltar}>
                    <Image 
                        style={styles.iconVoltar}
                        source={require('../../../assets/icon_voltar.png')}
                    />
                </TouchableOpacity>

                <View style={styles.area_infoProduto}>
                    <Image
                        style={styles.imgProduto}
                        source={{uri: produto.fotoProduto}}
                    />

                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <Text style={styles.categoriaProduto}>{produto.categoriaProduto}</Text>
                    <Text style={styles.precoProduto}>R${produto.precoProduto}</Text>

                    <TouchableOpacity style={styles.btnComprar}>
                        <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#283618'
    },


    btnVoltar:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#dda15e',
        marginRight: 280
    },

    iconVoltar:{
        borderWidth: 0,
        borderColor: 'black',
        width: 40,
        height: 40
    },

    area_infoProduto: {
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgProduto: {
        width: 300,
        height: 300,
        borderRadius: 10
    },

    nomeProduto:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    categoriaProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#BC6C25'
    },

    precoProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    btnFvorito:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        width: 230,
        height: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10,
        marginTop: 15,
        gap: 5
    },

    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#283618'
    },

    iconFavorito: {
        width: 25,
        height: 25
    },

    btnComprar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#dda15e',
        marginTop: 30
    }
})
  