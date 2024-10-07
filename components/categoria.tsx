import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { data_categoriaProduto } from "../data/dataCategoria";
import { Tipo_categoria } from "../types/tipo_categoria";
import { router } from "expo-router";


type Props = {
    categoria: Tipo_categoria
}

export const Exibir_categoria = ({categoria}: Props) => {

    const click = () => {
        router.navigate(`/(categoria)/${categoria.id}`)
    }


    return(
        <TouchableOpacity style={styles.areaCaregoria} onPress={click}>
            <Image 
                style={styles.imagem_categoria}
                source={{uri: categoria.imagemCategoria}}
            />
            <View style={styles.area_tituloCategoria}>
                <Text style={styles.titulo_categoria}>{categoria.tituloCategoria}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    areaCaregoria: {
        width: 350,
        height: 180,
        borderBottomWidth: 3,
        borderRadius: 10,
        borderColor: '#283618',
    },

    imagem_categoria: {
        width: 200,
        height: '100%',
        opacity: 0.5,
        borderRadius: 5,
    },

    area_tituloCategoria: {
        height: 150,
        marginTop: -165,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo_categoria: {
        marginLeft: 120,
        fontSize: 22,
        color: '',
        fontWeight: 'bold'
    },
})