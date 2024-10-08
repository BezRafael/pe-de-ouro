import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenMenu(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View style={styles.area_suporteAjuda}>
                    <Text style={styles.tituloArea}>Suporte e Ajuda</Text>

                    <View style={styles.areaFAQ}>
                        <Text style={styles.tituloFAQ}>FAQ (Perguntas Frequentes)</Text>

                        <TouchableOpacity style={styles.btnPergunta}>
                            <Text style={styles.text_bntPergunta}>Como realizar uma Compra</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnPergunta}>
                            <Text style={styles.text_bntPergunta}>Como devolver o Produto</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnPergunta}>
                            <Text style={styles.text_bntPergunta}>Quais as formas de pagamento Aceitas</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.area_atendimentoCliente}>
                        <TouchableOpacity style={styles.btn_atendimentoSuporte}>
                            <Text style={styles.textBtn}>Atendimento via Chat (Whatsapp)</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn_atendimentoSuporte}>
                            <Text style={styles.textBtn}>Suporte via (Email)</Text>
                        </TouchableOpacity>
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
        backgroundColor: '#FEFAE0',
        padding: 10
    },

    area_suporteAjuda: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'red',
        width: '100%',
        height: '100%',
    },

    tituloArea: {
        textAlign: 'center',
        borderWidth: 5,
        borderColor: '#283618',
        borderRadius: 50,
        width: 200,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#283618'
    },

    areaFAQ: {
        borderWidth: 0,
        borderColor: '#283618',
        width: '100%',
        gap: 20
    },

    tituloFAQ: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#283618'
    },

    btnPergunta: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
    },

    text_bntPergunta: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#283618'
    },

    imgBtn: {
        borderWidth: 0,
        borderColor: 'black',
        width: 20,
        height: 20,
        marginRight: 5
    },

    area_atendimentoCliente: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        width: '100%',
        height: 120,
        gap: 20
    },

    btn_atendimentoSuporte: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#283618',
        width: 250,
        height: 30
    },

    textBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#283618'
    }
})