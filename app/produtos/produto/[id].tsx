import { router, useLocalSearchParams } from "expo-router";
import { getProdutoById } from "../../../services/produto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function ScreenProdutoId(){

    function addFvorito(){
        alert('Produto Adicionado aos Favoritos')
    };

    const {id} = useLocalSearchParams();
    const idProduto = parseInt(id as string)

    const produto = getProdutoById(idProduto);

    if(!produto) return router.back;

    return(
        <SafeAreaView style={styles.conteiner}>
            <StatusBar/>
                <View style={styles.area_infoProduto}>
                    <Image
                        style={styles.imgProduto}
                        source={{uri: produto.fotoProduto}}
                    />


                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <Text style={styles.categoriaProduto}>{produto.categoriaProduto}</Text>
                    <Text style={styles.precoProduto}>{produto.precoProduto}</Text>

                    <TouchableOpacity style={styles.btnFvorito} onPress={addFvorito}>
                        <Text style={styles.textBtn}>Adicionar aos Favoritos</Text>
                        <Image 
                            style={styles.iconFavorito}
                            source={require('../../../assets/icon_favorito.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnComprar}>
                        <Text style={styles.textBtn}>Comprar</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    area_infoProduto: {
        width: 320,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 30
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
        backgroundColor: '#dda15e',
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