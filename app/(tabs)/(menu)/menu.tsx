import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenMenu(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />

                <TouchableOpacity style={styles.btnSuporte}>
                    <Text style={styles.textSuporte}>Suporte e Ajuda</Text>
                </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFAE0',
        gap: 30
    },

    btnSuporte: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 80,
        backgroundColor: '#dda15e',
        borderRadius: 10
    },

    textSuporte: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#283618'
    },
})