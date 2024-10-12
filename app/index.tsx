import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, StatusBar, View, Pressable } from "react-native";
import IniciarCompras from "../services/telaInicial";


export default function Screen() {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>

            <Pressable onPress={IniciarCompras}>
                <View style={styles.areaText}>
                    <Text style={styles.tituloLoja}>Pé de Ouro</Text>
                    <Text style={styles.sloganLoja}>Conforto que vale Ouro</Text>
                </View>

                <View style={styles.area_imagemLoja}>
                    <View style={styles.parteSuperior}>
                        <Image 
                        style={styles.imgBrilho}
                        source={require('../assets/brilha.png')}/>
                        <Image 
                        style={styles.imgBrilho}
                        source={require('../assets/brilha.png')}/>
                    </View>

                    <View style={styles.parteInferior}>
                        <Image 
                        style={styles.imgLoja}
                        source={require('../assets/sapatos.png')}/>
                    </View>
                </View>

                <Text style={styles.textAviso}>Clique na Tela para Continuar</Text>
            </Pressable>
            
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

    areaText: {
        width: 310,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#283618',
        borderWidth: 1,
        borderColor: 'transparent',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderRadius: 0
    },

    tituloLoja: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#DDA15E'
    },

    sloganLoja: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DDA15E'
    },

    area_imagemLoja: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 310,
        height: 220,
        backgroundColor: '#283618',      
        borderBottomRightRadius: 300,
        borderBottomLeftRadius: 30,
        borderWidth: 5,
        borderColor: 'transparent',
    },

    parteSuperior: {
        width: 240,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'transparent',
    },

    parteInferior: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },

    imgBrilho: {
        width: 80,
        height: 83,
    },

    imgLoja: {
        width: 120,
        height: 120,
    },

    textAviso: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: 'bold',
        color:'#283618',
        width: 300,
        borderWidth: 1,
        borderColor: 'transparent',
        textAlign: 'center'
    }
})