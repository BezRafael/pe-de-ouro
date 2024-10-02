import { router, useLocalSearchParams } from "expo-router";
import { getProdutoById } from "../../../services/produto";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, StatusBar, StyleSheet, Text, View } from "react-native";

export function ScreenProdutoId(){
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

                    <Button
                        title="Comprar"
                    />
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
})