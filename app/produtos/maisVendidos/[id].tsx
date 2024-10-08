import { router, useLocalSearchParams } from "expo-router";
import { getMaisVendidosById } from "../../../services/produto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenProdutoId(){

    function addFvorito(){
        alert('Produto Adicionado aos Favoritos')
    };

    const {id} = useLocalSearchParams();
    const idProduto = parseInt(id as string)

    const produto = getMaisVendidosById(idProduto)

    if(!produto) return router.back;

    return(
        <SafeAreaView style={styles.container}>
            
                <View style={styles.area_infoProduto}>
                    <Image
                        style={styles.imgProduto}
                        source={{uri: produto.fotoProduto}}
                    />

                    <Text style={styles.nomeProduto}>{produto.nomeProduto}</Text>
                    <Text style={styles.categoriaProduto}>{produto.categoriaProduto}</Text>
                    <Text style={styles.precoProduto}>R${produto.precoProduto.toFixed(2)}</Text>

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
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#283618'
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
        color: '#dda15e'
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