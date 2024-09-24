import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenInicio(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View style={styles.area_maisVendidos}>
                    <Text style={styles.text_maisVendidos}>Mais Vendidos</Text>

                    <ScrollView>
                        
                    </ScrollView>
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
        width: '100%',
        height: 350,
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
    }
})