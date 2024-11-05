import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Tipo_categoria } from "../../../types/tipo_categoria";
import { Link } from "expo-router";

export default function ScreenCategoria(){
    const [categorias, setCategorias] = useState<Tipo_categoria[]>([]);

  useEffect(() => {
    // Carregar as categorias da API ao montar o componente
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/categorias');
        setCategorias(response.data.categorias);
      } catch (error) {
        console.log('Erro ao buscar categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar />                
                <View style={styles.container}>
                    <FlatList
                        data={categorias}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Link href={`/(categoria)/${item.id}`} asChild>
                                <TouchableOpacity style={styles.areaCaregoria}>
                                    <Image 
                                        style={styles.imagem_categoria}
                                        source={{uri: item.imagemCategoria}}
                                    />
                                    <View style={styles.area_tituloCategoria}>
                                        <Text style={styles.titulo_categoria}>{item.tituloCategoria}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Link>
                    )}
                    contentContainerStyle={styles.flatlist}
                    horizontal={false}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FEFAE0'
    },

    flatlist: {
        gap: 15,
        borderWidth: 0,
        borderColor: 'red',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    
    
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
        color: '#283618',
        fontWeight: 'bold'
    },
})