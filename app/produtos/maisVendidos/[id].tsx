import { router, useLocalSearchParams } from "expo-router";
import { getMaisVendidosById } from "../../../services/produto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ScreenProdutoId(){
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

                    <Button 
                        title="comprar"/>
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
        color: '#BC6C25'
    },

    precoProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

})