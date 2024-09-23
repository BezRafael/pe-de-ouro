import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, StatusBar, View } from "react-native";


export default function Screen() {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>

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
        width: 350,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#283618',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderRadius: 0
    },

    tituloLoja: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: 'yellow'
    },

    sloganLoja: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: 'yellow'
    },

    area_imagemLoja: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 300,
        backgroundColor: '#283618',      
        borderBottomRightRadius: 300,
        borderBottomLeftRadius: 30,
        gap: 20
    },

    parteSuperior: {
        width: 200,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    parteInferior: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgBrilho: {
        width: 80,
        height: 83,
    },

    imgLoja: {
        width: 120,
        height: 120,
    },
})