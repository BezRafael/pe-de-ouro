import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link, useLocalSearchParams } from "expo-router";
import { Tipo_produto } from "../../../types/tipo_produto";

export default function ScreenProdutosPorCategoria() {
    const { id } = useLocalSearchParams(); // Obtendo o ID da categoria da URL
    const [produtos, setProdutos] = useState<Tipo_produto[]>([]);

    useEffect(() => {
        // Função para buscar produtos da categoria
        const fetchProdutos = async () => {
            if (id) { // Verifica se o id está definido
                try {
                    const response = await api.get(`/categoria/${id}`);
                    setProdutos(response.data.produtos); // Ajuste conforme a resposta da sua API
                } catch (error) {
                    console.log('Erro ao buscar produtos da categoria:', error);
                }
            }
        };

        fetchProdutos();
    }, [id]);

    return (
        <SafeAreaView style={styles.conteiner}>
            <StatusBar />
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/produtos/produto/${item.id}`} asChild>
                        <TouchableOpacity style={styles.areaProduto}>
                            <Image 
                                style={styles.imagemProduto}
                                source={{uri: item.fotoProduto}}
                            />

                            <View style={styles.area_infoProduto}>
                                <Text style={styles.nomeProduto}>{item.nomeProduto}</Text>
                                <Text style={styles.categoriaProduto}>{item.categoriaProduto}</Text>
                                <Text style={styles.precoProduto}>R$: {item.precoProduto.toFixed(2)}</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                )}
                contentContainerStyle={styles.flatlist}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        paddingLeft: 5,
        paddingRight: 5
    },

    flatlist: {
        borderWidth: 0,
        borderColor: 'blue',
        gap: 10,
        paddingTop: 10,
        paddingBottom: 10   
    },

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