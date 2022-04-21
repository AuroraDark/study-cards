import React, { useState, useEffect }  from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './AddCategoria.styles';
import { useParams } from 'react-router-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoriasIcon from '../../assets/icons/categorias.svg'
import { Link } from 'react-router-native';
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CategoriasDB from '../../services/sqlite/Categoria'
import DetalhesDB from '../../services/sqlite/Detalhes'

const AddCategoria = () => {

    // Cria os states para atualizar enquanto o usuário modifica
    const [nome, setNome] = useState('')
    const [colorSelected, setColorSelected] = useState("237A57-093028")
    const colors = [
        {hexa:"237A57-093028"}, 
        {hexa:"C6426E-642B73"}, 
        {hexa:"569FF7-0052D4"},
    ]

    const renderColor = ({item}) => {
        id = item.hexa
        var isSelected = false

        if (colorSelected == item.hexa){
            isSelected = true
        }

        return (
            <TouchableOpacity style = {isSelected ? [styles.colorItem, {borderColor: "#f2f2f2", borderWidth: 2}] : styles.colorItem} onPress={() => setColorSelected(item.hexa)}>
            <LinearGradient
            // Background Linear Gradient
            colors={getColors(item.hexa)}
            style={[styles.color]}
            ></LinearGradient>
            </TouchableOpacity>
        );
    }
    
    return (

    // Constrói a visualização do card
    <View style={styles.background}>
    <View style={styles.container}>
    <Text style={styles.titulo}>Novo Deck</Text>
    <Text style={styles.subtitulo}>Um deck é um conjunto de cartas com um tema em comum. </Text>
    <Text style={styles.subtitulo}>Dê um nome ao seu deck e escolha a cor das cartas.</Text>
    <TextInput style={styles.cardNome} 
                placeholder="Nome do Deck..."
                placeholderTextColor="#666"
                multiline={true}
                onChangeText={novoNome => setNome(novoNome)}
                />
        <View style={styles.color_card}>
            <View style={styles.color_container}>
                <Text style={styles.colorText}>Cor</Text>
                <FlatList
                    data={colors}
                    renderItem={renderColor}
                    keyExtractor={item => item.hexa}
                    contentContainerStyle={styles.colorsList}>
                </FlatList>
            </View>
        <LinearGradient
            // Background Linear Gradient
            colors={getColors(colorSelected)}
            style={[styles.card_example]}
            >
                <Text style={styles.cardText}>Card</Text>
            </LinearGradient>
        </View>
    
    </View>
    <View style={styles.menu_footer}>
        <Link to={`/`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]} onPress={() => insertCategoria(nome, colorSelected)}>
            <Text style={styles.btn_text}>Salvar</Text>
        </Link>
        <Link to={`/`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_left]}>
            <Text style={styles.btn_text}>Cancelar</Text>
        </Link>
    </View>
    </View>
    )
}

/** Transforma as cores em HEXADECIMAL para construir o gradiente */
function getColors(colorStr){
    var initialColor = colorStr.split("-")[0]
    var finalColor = colorStr.split("-")[1]
    return ["#" + initialColor, "#" + finalColor]
  
}

function insertCategoria(nome, cor){
    // Adiciona Card
    var novaCategoria = {
        cor: cor,
        nome: nome
    }

    //create
    CategoriasDB.createCategoria(novaCategoria)
    .then( id => {
        console.log('Categoria created with id: '+ id)
    })
    .catch( err => console.log(err) )

}

export default AddCategoria