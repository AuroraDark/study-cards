import React, { useState, useEffect }  from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './EditCategoria.styles';
import { useParams } from 'react-router-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'react-router-native';
import CategoriasDB from '../../services/sqlite/Categoria'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

const EditCategoria = (props) => {

    // Cria os states para atualizar enquanto o usuário modifica
    const [nome, setNome] = useState('')
    const [colorSelected, setColorSelected] = useState("")
    const colors = [
        {hexa:"C6426E-512DA8"},
        {hexa:"005C97-363795"},
        {hexa:"ff8c00-C02425"},
        {hexa:"237A57-093028"}, 
        {hexa:"267871-136a8a"},
        {hexa:"8093a2-304352"}, 
        {hexa:"BE5869-403A3E"},
        {hexa:"e35d5b-e53935"},
    ]

    const id = props.params.id

    useEffect(() => {
        console.log(id)
        CategoriasDB.findCategoria(id).then(res => {
            console.log(res)
            setNome(res.nome)
            setColorSelected(res.cor)
          });
    },[])

    const renderColor = ({item}) => {
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
    <Text style={styles.titulo}>Editar Deck</Text>
    <TextInput style={styles.cardNome} 
                placeholder="Nome do Deck..."
                placeholderTextColor="#666"
                multiline={true}
                value={nome}
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
        <Link to={`/`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]} onPress={() => updateCategoria(nome, colorSelected, id)}>
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

function updateCategoria(nome, cor, id){
    // Adiciona Card
    var novaCategoria = {
        id: id,
        cor: cor,
        nome: nome
    }

    //create
    CategoriasDB.updateCategoria(novaCategoria)
    .then( id => {
        console.log('Categoria atualizada: '+ id)
    })
    .catch( err => console.log(err) )

}

export default withParams(EditCategoria)