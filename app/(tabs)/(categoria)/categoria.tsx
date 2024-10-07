import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAllCategorias } from "../../../services/categoria";
import { Exibir_categoria } from "../../../components/categoria";

export default function ScreenCategoria(){
    const categorias = getAllCategorias();

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />                
                <ScrollView>   
                    <FlatList 
                            data={categorias}
                            renderItem={({ item }) => <Exibir_categoria categoria={item}/>}
                            keyExtractor={( item ) => item.id.toString()}
                            contentContainerStyle={styles.flatlist}
                    />
                </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FEFAE0'
    },

    flatlist: {
        height: '100%',
        gap: 15,
        borderWidth: 0,
        borderColor: 'red',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
})