import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tipo_maisVendido } from "../../types/tipo_produto";
import { Tipo_promocao } from "../../types/tipo_produto";
import { useEffect, useState } from "react";
import api from "../../services/api";


const screenWidth = Dimensions.get('window').width;

export default function ScreenInicio(){
    const [produtosMaisVendidos, setProdutosMaisVendidos] = useState<Tipo_maisVendido[]>([]);
    const [produtosPromocao, setProdutosPromocao] = useState<Tipo_promocao[]>([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                // Requisição para produtos mais vendidos
                const responseMaisVendidos = await api.get('/produtos/mais-vendidos');
                setProdutosMaisVendidos(responseMaisVendidos.data.ProdutosMaisVendidos);

                // Requisição para produtos em promoção
                const responsePromocao = await api.get('/produtos/promocao');
                setProdutosPromocao(responsePromocao.data.produtosPromocao);
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchDados();
    }, []);


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <Image style={styles.Imgslogan} source={require('../../assets/img_slogan.png')}></Image>

                <ScrollView>
                    <View style={styles.area_maisVendidos}>
                    <Text style={styles.text_maisVendidos}>Mais Vendidos</Text>
                    <FlatList
                        data={produtosMaisVendidos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Link href={`/produtos/maisVendidos/${item.id}`} asChild>
                                <TouchableOpacity style={styles.area_produto}>
                                    <Image 
                                        style={styles.img_produto}
                                        source={{uri: item.fotoProduto}}
                                    />
                                    <Text style={styles.nome_produto}>{item.nomeProduto}</Text>
                                    <Text style={styles.categoria_produto}>{item.categoriaProduto}</Text>
                                    <Text style={styles.preco_produto}>R${item.precoProduto.toFixed(2)}</Text>
                                </TouchableOpacity>
                            </Link>
                        )}
                        horizontal={true}
                    />
                    </View>

                    <View style={styles.area_promocao}>
                    <Text style={styles.text_promocao}>Promoção</Text>
                    <FlatList
                        data={produtosPromocao}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Link href={`/produtos/promocao/${item.id}`}asChild>
                                <TouchableOpacity style={styles.area_produto}>
                                    <Image 
                                        style={styles.img_produto}
                                        source={{uri: item.fotoProduto}}
                                    />
                                    <Text style={styles.nome_produto}>{item.nomeProduto}</Text>
                                    <Text style={styles.preco_antigo}>R${item.precoAntigo.toFixed(2)}</Text>
                                    <Text style={styles.novo_preco}>R${item.precoNovo.toFixed(2)}</Text>
                                </TouchableOpacity>
                            </Link>
                        )}
                        horizontal={true}
                    />
                </View>
                </ScrollView>         
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFAE0',
    },


    Imgslogan: {
        width: '100%',
        height: 250,
    },

    area_maisVendidos: {
        alignItems: 'center',
        width: screenWidth,
        height: 350,
        marginTop: 15,
        borderWidth: 0,
        borderColor: 'blue',
    },

    text_maisVendidos: {
        textAlign: 'center',
        width: 280,
        borderWidth: 5,
        borderColor: '#DDA15E',
        borderRadius: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#283618'
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

    area_promocao: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: 360,
        marginTop: 30,
        borderWidth: 0,
        borderColor: 'blue',
    },

    img_produto: {
        borderWidth: 3,
        borderColor: 'black',
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

    text_promocao: {
        textAlign: 'center',
        width: 200,
        borderWidth: 5,
        borderColor: '#DDA15E',
        borderRadius: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#283618'
    },
})


