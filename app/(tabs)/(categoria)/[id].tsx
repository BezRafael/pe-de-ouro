import { router, useLocalSearchParams } from "expo-router";
import { getCategoriaById } from "../../../services/categoria";
import { getProdutoByCategoria } from "../../../services/produto";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import { ProdutoCategoria } from "../../../components/produtoCategoria";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenProduto_categoria() {
    const {id} = useLocalSearchParams();
    const idCategoria = parseInt(id as string);
    const categoria = getCategoriaById(idCategoria);

    if(!categoria) return router.back;

    const produtos = getProdutoByCategoria(idCategoria);

    return(
        <SafeAreaView style={styles.conteiner}>
            <StatusBar/>
                <View>
                    <FlatList 
                        data={produtos}
                        renderItem={({ item }) => <ProdutoCategoria produto={item} />}
                        keyExtractor={( item ) => item.id.toString()}
                        contentContainerStyle={styles.flatlist}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        paddingLeft: 5,
        paddingRight: 5
    },

    flatlist: {
        marginTop: 30,
        gap: 10
    }

})