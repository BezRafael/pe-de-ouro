import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { dataProduto } from "../../data/dataProduto";
import { TipoProduto } from "../../tipos/tipoProdutos";
import { ExibirProdutos } from "../../components/produto";

export default function ScreenInicio(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View style={styles.area_maisVendidos}>
                    <Text style={styles.text_maisVendidos}>Mais Vendidos</Text>

                        
                        <FlatList 
                            data={dataProduto}
                            keyExtractor={(item) => item.id.toLocaleString()}
                            renderItem={({item}: {item:TipoProduto}) => (
                                <ExibirProdutos itemProduto={item}/>
                            )}
                        />
                        
                </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFAE0'
    },

    area_maisVendidos: {
        alignItems: 'center',
        width: '100%',
        height: 450,
        borderWidth: 1,
        borderColor: "#BC6C25"
    },

    text_maisVendidos: {
        textAlign: 'center',
        width:'100%',
        backgroundColor: '#283618',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#DDA15E'
    },
})