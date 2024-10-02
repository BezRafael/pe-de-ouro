import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenSobre(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <ScrollView>
                    <View style={styles.containerAreas}>
                        <View style={styles.areaSuperior}>
                            <View style={styles.area_missaoVisao}>
                                <Text style={styles.titulo_missaoVisao}>Missão e Visão</Text>

                                <Text style={styles.paragrafo_missaoVisao}>
                                    "Nossa missão é calçar o mundo com sapatos que combinam 
                                    design inovador e conforto incomparável. Acreditamos que 
                                    você merece o melhor, e é isso que entregamos em cada produto."
                                </Text>
                            </View>
                        </View>

                        <View style={styles.areaIntermediaria}>
                            <View style={styles.area_valores}>
                                <Text style={styles.titulo_valores}>Valores</Text>

                                <Text style={styles.paragrafo_valores}>
                                "Na Pé de Ouro, prezamos por qualidade, responsabilidade e 
                                inovação. Utilizamos materiais de alta durabilidade e processos 
                                sustentáveis para criar sapatos que fazem a diferença no seu dia 
                                a dia."
                                </Text>
                            </View>
                        </View>

                        <View style={styles.areaIntermediaria2}>
                            <View style={styles.area_compromisso}>
                                <Text style={styles.titulo_compromisso}>Compromisso</Text>

                                <Text style={styles.paragrafo_compromisso}>
                                "Nosso compromisso é garantir a sua satisfação. Estamos sempre 
                                prontos para ouvir você e oferecer a melhor experiência em cada 
                                compra."
                                </Text>
                            </View>
                        </View>

                        <View style={styles.areaIntermediaria3}>
                            <View style={styles.area_redeSociais}>
                                <Text style={styles.titulo_redeSociais}>Redes Sociais</Text>

                                <Text style={styles.links}>Instagram: @pedeouro</Text>
                            </View>
                        </View>

                        <View style={styles.areaInferior}>
                            <View style={styles.area_desenvolvedor}>
                                <Image 
                                    style={styles.img_desenvovedor}
                                    source={{uri: 'a'}}
                                />

                                <View style={styles.as}>
                                    <Text style={styles.nomeDesenvolvedor}>Desenvolvedor: Rafael</Text>
                                    <Text style={styles.links}>Email: rafaelb120934@gmail.com</Text>
                                    <Text style={styles.links}>Linkedin: Rafael Bezerra</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFAE0',
    },

    containerAreas: {
        gap: 30,
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'green',
        paddingTop: 10,
        paddingBottom: 10,
    },

    areaSuperior: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150
    },

    area_missaoVisao:{
        justifyContent: 'center',
        width: 180,
        borderWidth: 1,
        borderColor: '#283618',
        borderRadius: 20,
        marginLeft: 10,
        gap: 2
    },

    titulo_missaoVisao: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    paragrafo_missaoVisao: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    areaIntermediaria:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_valores: {
        justifyContent: 'center',
        width: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#283618',
        marginRight: 10,
        gap: 2
    },

    titulo_valores: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    paragrafo_valores: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    areaIntermediaria2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_compromisso: {
        justifyContent: 'center',
        width: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#283618',
        marginLeft: 10,
        gap: 2
    },

    titulo_compromisso: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    paragrafo_compromisso: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    areaIntermediaria3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_redeSociais: {
        justifyContent: 'center',
        width: 180,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#283618',
        marginRight: 10,
        gap: 2
    },

    titulo_redeSociais: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#283618'
    },

    areaInferior:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_desenvolvedor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#283618',
        marginLeft: 10,
        gap: 10 
    },

    img_desenvovedor: {
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: 'red'
    },

    as: {
        gap: 10,
        flexDirection: 'column'
    }, 

    nomeDesenvolvedor: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#283618'
    },

    links: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#283618'
    }
})