import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './Card.styles';
import { verso_styles } from './Verso.styles';
//import { CardWrapper } from './Card.styles';
import { LinearGradient } from 'expo-linear-gradient';
import LampIconOn from '../../assets/icons/lamp-on.svg';
import LampIconOff from '../../assets/icons/lamp-off.svg';
import StarIcon from '../../assets/icons/star.svg';
import TurnCardIcon  from '../../assets/icons/repeat-solid.svg'
import TrashIcon  from '../../assets/icons/trash-solid.svg'
import CardsDB from '../../services/sqlite/Card'
import DetalhesDB from '../../services/sqlite/Detalhes'
import { Link } from 'react-router-native';

class Card extends React.Component {

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
    
      <View style={[styles.cardBody, styles.elevation]}>
        <LinearGradient
          // Background Linear Gradient
          colors={gradientColors}
          style={styles.cardBody}
        >
        
        {this.state.isTurned ? verso(this.state): frente(this.state)}
    <Link to={`/confirm-delete/Card/${this.state.categoriaId}/${this.state.id}`} style={verso_styles.trash_button}>
      <TrashIcon width={20} height={20} fill={'#f2f2f2'} />
    </Link>

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

export default Card;
