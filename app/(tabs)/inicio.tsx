import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data_maisVendidos, data_promocao } from "../../data/dataProduto";
import { Tipo_maisVendido } from "../../types/tipo_produto";
import { Tipo_promocao } from "../../types/tipo_produto";
import { Exibir_maisVendidos } from "../../components/maisVendidos";
import { ExibirPromocao } from "../../components/promocao";


const screenWidth = Dimensions.get('window').width;

export default function ScreenInicio(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
             
            <Image 
                style={styles.imgInicial}
            />

                <ScrollView>
                    <View style={styles.area_maisVendidos}>
                        <Text style={styles.text_maisVendidos}>MAIS VENDIDOS</Text>
                            <FlatList 
                                data={data_maisVendidos}
                                keyExtractor={(item) => item.id.toLocaleString()}
                                renderItem={({item}: {item:Tipo_maisVendido}) => (
                                    <Exibir_maisVendidos itemProduto={item}/>
                                )}
                                horizontal={true}
                                snapToAlignment="center"
                                decelerationRate={'fast'}
                                pagingEnabled={true}
                            />
                    </View>

                    <View style={styles.area_promocao}>
                        <Text style={styles.text_promocao}>PROMOCÃO</Text>
                            <FlatList 
                                data={data_promocao}
                                keyExtractor={(item) => item.id.toLocaleString()}
                                renderItem={({item}: {item:Tipo_promocao}) => (
                                    <ExibirPromocao itemProduto={item}/>
                                )}
                                horizontal={true}
                                snapToAlignment="center"
                                decelerationRate={'fast'}
                                pagingEnabled={true}
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
        backgroundColor: '#FEFAE0'
    },


    imgInicial: {
        width: '100%',
        height: 200,
        backgroundColor: '#283618',
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

    area_promocao: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: 360,
        marginTop: 30,
        borderWidth: 0,
        borderColor: 'blue',
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