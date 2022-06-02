import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './PlayCards.styles';
import { verso_styles } from './Verso.styles';
//import { CardWrapper } from './Card.styles';
import { LinearGradient } from 'expo-linear-gradient';
import TurnCardIcon  from '../../assets/icons/arrows-rotate-solid.svg'
import DetalhesDB from '../../services/sqlite/Detalhes'
import { vh } from 'react-native-expo-viewport-units';

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
    this.setState({isTurned: false})
  }

  getDetalhes = () => {
    DetalhesDB.allDetalhesCard(this.state.id).then(res => {
      this.setState({
        detalhes: res,
        isTurned: false
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
            {(card.detalhes.length > 0) ? <Text style={[verso_styles.cardTitulo, {marginBottom: 10, marginTop: 15}]}>Tópicos</Text> : null}
        </View>
    );
}
  return (
    
    <ScrollView vertical scrollEnabled style={[styles.elevation, styles.cardBody]}>
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
      </ScrollView>
    
  );

  function frente(card){
    return(
      <View style={styles.scrollView}>
      <Text style={styles.cardTitulo}>{card.titulo}</Text>
    </View>
    )
  }

  function verso(card){

    const TitleCard = () => {
      return(
        <View style={{flex:1, width:vw(100)}}>
            <Text style={verso_styles.cardTitulo}>{card.titulo}</Text>
            <Text style={verso_styles.cardResposta}>{card.resposta}</Text>
        </View>
      )
    }
    return(
      // Constrói a visualização do card
        <FlatList 
          data={card.detalhes}
          renderItem={renderDetalhe}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.cardList}
          >
        </FlatList>
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
