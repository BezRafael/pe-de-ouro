import { router, useLocalSearchParams } from "expo-router";
import { getProdutoById } from "../../services/produto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";

export default function ScreenProdutoId(){
    const {id} = useLocalSearchParams();
    const idProduto = parseInt(id as string)

    const produto = getProdutoById(idProduto)

    if(!produto) return router.back;

    return(
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.imgProduto}
                    source={{uri: produto.fotoProduto}}
                />

                <Text>{produto.nomeProduto}</Text>
                <Text>{produto.categoriaProduto}</Text>
                <Text>R${produto.precoProduto.toFixed(2)}</Text>

                <Button 
                    title="comprar"/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },


    imgProduto: {
        width: '100%',
        height: 280,
        borderRadius: 10
    },

})