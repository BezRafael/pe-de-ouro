import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenSobre(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                
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
                            <View style={styles.area_redeSociais}>
                                <Text style={styles.titulo_redeSociais}>Redes Sociais</Text>

                                <Text style={styles.links}>Instagram: @pedeouro</Text>
                            </View>
                        </View>

                        <View style={styles.areaInferior}>
                            <View style={styles.area_desenvolvedor}>
                                <Image 
                                    style={styles.img_desenvovedor}
                                    source={{uri: 'https://avatars.githubusercontent.com/u/155703891?v=4'}}
                                />

                                <View style={styles.as}>
                                    <Text style={styles.nomeDesenvolvedor}>Desenvolvedor: Rafael</Text>
                                    <Text style={styles.links}>Email: rafaelb120934@gmail.com</Text>
                                    <Text style={styles.links}>Linkedin: Rafael Bezerra</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        justifyContent: 'center',
    },

    containerAreas: {
        gap: 10,
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
        backgroundColor: '#283618',
        borderRadius: 20,
        marginLeft: 10,
        gap: 2
    },

    titulo_missaoVisao: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    paragrafo_missaoVisao: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FEFAE0'
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
        backgroundColor: '#283618',
        marginRight: 10,
        gap: 2
    },

    titulo_valores: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    paragrafo_valores: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    areaIntermediaria2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        backgroundColor: '#283618',
        marginLeft: 10,
        gap: 2
    },

    titulo_redeSociais: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FEFAE0'
    },

    areaInferior:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'blue',
        width: '100%',
        height: 150 
    },

    area_desenvolvedor: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 90 ,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#283618',
        backgroundColor: '#283618',
        marginLeft: 10,
        gap: 10 
    },

    img_desenvovedor: {
        width: 50,
        height: 50,
        borderWidth: 0,
        borderColor: 'red',
        borderRadius: 50
    },

    as: {
        gap: 10,
        flexDirection: 'column'
    }, 

    nomeDesenvolvedor: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FEFAE0'
    },

    links: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,
        color: '#FEFAE0'
    }
})