import { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenMenu(){

const [areaShow1, setAreaShow1] = useState(false)
const [areaShow2, setAreaShow2] = useState(false)
const [areaShow3, setAreaShow3] = useState(false)
const [areaShow4, setAreaShow4] = useState(false)

function mostrar1(){
    setAreaShow1(!areaShow1)
}

 function mostrar2(){
    setAreaShow2(!areaShow2)
}

 function mostrar3(){
    setAreaShow3(!areaShow3)
}

function mostrar4(){
    setAreaShow4(!areaShow4)
}


    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />
                <View style={styles.area_suporteAjuda}>
                    <Text style={styles.tituloArea}>Suporte e Ajuda</Text>

                    <View style={styles.areaFAQ}>
                        <Text style={styles.tituloFAQ}>FAQ (Perguntas Frequentes)</Text>

                        <TouchableOpacity style={styles.btnPergunta} onPress={mostrar1}>
                            <Text style={styles.text_bntPergunta}>Como realizar uma Compra</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>

                        {areaShow1 === true ?
                          <View style={styles.area_maisInfo}>
                            <Text style={styles.text_maisInfo}>
                               * Navegue pelas seções do app, como "Início" ou "Categorias", e explore os produtos disponíveis.
                            </Text> 
                            <Text style={styles.text_maisInfo}>* Ao encontrar o produto desejado, clique nele para ver mais detalhes.</Text> 
                            <Text style={styles.text_maisInfo}>* Clique em Comprar. E você será redirecionado ao chat do Whatsapp.</Text> 
                            <Text style={styles.text_maisInfo}>* Nele você irá inserir informações como: "dados de entrega e escolha o método de pagamento".</Text> 
                            <Text style={styles.text_maisInfo}>* Após confirmar todos essses passos. Seu compra será finalizada.</Text>
                          </View>
                          : null
                        }


                        <TouchableOpacity style={styles.btnPergunta} onPress={mostrar2}>
                            <Text style={styles.text_bntPergunta}>Como devolver o Produto</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>

                        {areaShow2 === true ?
                          <View style={styles.area_maisInfo}>
                            <Text style={styles.text_maisInfo}>
                               * Primeiramente, clique no botão Atendimento via (Chat) ou Suporte via (Email)
                            </Text> 
                            <Text style={styles.text_maisInfo}>* Fale com o atendente para saber como funciona a devolução de acordo com sua Situação.</Text> 
                            <Text style={styles.text_maisInfo}>* Lembrando que, a devolução só será possível caso o produto ainda possua sua etiqueta e esteja em boas condições.</Text>
                          </View>
                          : null
                        }


                        <TouchableOpacity style={styles.btnPergunta} onPress={mostrar3}>
                            <Text style={styles.text_bntPergunta}>Quais as formas de pagamento Aceitas</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>


                        {areaShow3 === true ?
                          <View style={styles.area_maisInfo}>
                            <Text style={styles.text_maisInfo}>* Cartões de Crédito;</Text> 
                            <Text style={styles.text_maisInfo}>* Cartões de Débito;</Text> 
                            <Text style={styles.text_maisInfo}>* Pix.</Text> 
                          </View>
                          : null
                        }


                        <TouchableOpacity style={styles.btnPergunta} onPress={mostrar4}>
                            <Text style={styles.text_bntPergunta}>Locais de Entrega</Text>
                            <Image 
                                style={styles.imgBtn}
                                source={require('../../../assets/icon_setaParaBaixo.png')}
                            />
                        </TouchableOpacity>


                        {areaShow4 === true ?
                          <View style={styles.area_maisInfo}>
                            <Text style={styles.text_maisInfo}>* Entragamos por Toda Natal</Text> 
                            <Text style={styles.text_maisInfo}>* Lembrando que o valor do frete é ajustado de acordo com o local de entrega.</Text>  
                          </View>
                          : null
                        }


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

    area_maisInfo:{
        width: '100%',
        backgroundColor: '#283618',
        borderRadius: 20,
        padding: 10,
        gap: 10
    },
    
    text_maisInfo: {
        textAlign: 'justify',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
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