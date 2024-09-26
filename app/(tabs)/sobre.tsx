import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenSobre(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View style={styles.areaSuperior}>
                    <View style={styles.area_missaoVisao}></View>
                    
                </View>

                <View style={styles.areaIntermediaria}>
                    <View style={styles.area_valores}></View>
                </View>

                <View style={styles.areaInferior}></View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FEFAE0',
        gap: 10
    },

    areaSuperior: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'blue',
        width: '100%',
        height: 150
    },

    area_missaoVisao:{
        width: 150,
        borderWidth: 1,
        borderColor: 'red',
    },

    areaIntermediaria:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_valores: {
        width: 150,
        borderWidth: 1,
        borderColor: 'red',
    },

    areaInferior:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },
})