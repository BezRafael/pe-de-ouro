import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllCategorias } from "../../../services/categoria";
import { Exibir_categoria } from "../../../components/categoria";

export default function ScreenCategoria(){
    const categorias = getAllCategorias();

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />                
                <View style={styles.areaList}>
                    <FlatList 
                            data={categorias}
                            renderItem={({ item }) => <Exibir_categoria categoria={item}/>}
                            keyExtractor={( item ) => item.id.toString()}
                            contentContainerStyle={styles.flatlist}
                    />
              </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FEFAE0'
    },

    areaList: {
        flex: 1
    },

    flatlist: {
        gap: 15,
        borderWidth: 0,
        borderColor: 'red',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
})