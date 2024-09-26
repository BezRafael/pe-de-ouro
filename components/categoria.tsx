import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { data_categoria } from "../data/dataCategoria";
import { Tipo_categoria } from "../types/tipo_categoria";


type Props = {
    categoria: Tipo_categoria
}

export const Exibir_categoria = ({categoria}: Props) => {
    return(
        <TouchableOpacity style={styles.areaCaregoria}>
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
        width: 320,
        height: 150,
    },

    imagem_categoria: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DDA15E',
        borderWidth: 4,
        borderRadius: 11,
        borderColor: '#283618',
        opacity: 0.9,
    },

    area_tituloCategoria: {
        height: 150,
        marginTop: -150,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo_categoria: {
        fontSize: 22,
        color: '#283618',
        fontWeight: 'bold'
    },
})