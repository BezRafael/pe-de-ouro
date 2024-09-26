import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenCategoria(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View>
                    <Text>Tela Categoria</Text>
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
})