import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './PlayCards.styles';
import { verso_styles } from './Verso.styles';
//import { CardWrapper } from './Card.styles';
import { LinearGradient } from 'expo-linear-gradient';
import TurnCardIcon  from '../../assets/icons/arrows-rotate-solid.svg'
import DetalhesDB from '../../services/sqlite/Detalhes'

class CardPlay extends React.Component {

  state = {
    detalhes: [],
    id: this.props.id,
    categoriaId: this.props.categoriaId,
    cor: this.props.cor,
    titulo: this.props.titulo,
    resposta: this.props.resposta,
    isTurned: false
  }

  componentDidMount() {
    console.log("Montou")
    this.getDetalhes();
  }

  getDetalhes = () => {
    DetalhesDB.allDetalhesCard(this.state.id).then(res => {
      this.setState({
        detalhes: res,
      });
    });
  }

  render (){
  const gradientColors = getColors(this.state.cor)
  const renderDetalhe = ({item}) => {
    return (
        <View style = {verso_styles.categoryItem}>
            <Text style={verso_styles.cardTituloDetalhe}>{item.titulo}</Text>
            <Text style = {verso_styles.cardResposta}>{item.resposta}</Text>
        </View>
    );
}
  return (
    
    <View style={[styles.elevation, styles.cardBody]}>
        <LinearGradient
          // Background Linear Gradient
          colors={gradientColors}
          style={styles.cardBody}
        >
        
        {this.state.isTurned ? verso(this.state): frente(this.state)}

    <TouchableOpacity style={verso_styles.verse_button} onPress={() => this.setState({
      isTurned: this.state.isTurned ? false : true,
    })}>
      <TurnCardIcon width={40} height={40} fill={'#f2f2f2'} />
    </TouchableOpacity>
        </LinearGradient>
        </View>
    
  );

  function frente(card){
    return(
      <View style={styles.scrollView}>
    <View>
      <Text style={styles.cardTitulo}>{card.titulo}</Text>
    </View>
    </View>
    )
  }

  function verso(card){
    return(
      // Constrói a visualização do card
        <View style={verso_styles.scrollView}>
        <Text style={verso_styles.cardTitulo}>{card.titulo}</Text>
        <Text style={verso_styles.cardResposta}>{card.resposta}</Text>
        {(card.detalhes.length > 0) ? <Text style={[verso_styles.cardTitulo, {marginBottom: 10, marginTop: 15}]}>Tópicos</Text> : null}
             <FlatList
                data={card.detalhes}
                renderItem={renderDetalhe}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.cardList}>
             </FlatList>
        </View>
    );
  }
  }
}

function getColors(colorStr){
  var initialColor = colorStr.split("-")[0]
  var finalColor = colorStr.split("-")[1]
  return ["#" + initialColor, "#" + finalColor]

}

export default CardPlay;
