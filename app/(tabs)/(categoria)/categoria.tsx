import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data_categoria } from "../../../data/dataCategoria";
import { Tipo_categoria } from "../../../types/tipo_categoria";
import { Exibir_categoria } from "../../../components/categoria";

export default function ScreenInicio(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <FlatList 
                    data={data_categoria}
                    keyExtractor={(item) => item.id.toLocaleString()}
                    renderItem={({item}: {item:Tipo_categoria}) => (
                            <Exibir_categoria categoria={item}/>
                    )}
                    contentContainerStyle={styles.flatlist}
                />
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
        gap: 20,
        borderWidth: 0,
        borderColor: 'red',
        height: '100%',
        justifyContent: 'center'
    },
})