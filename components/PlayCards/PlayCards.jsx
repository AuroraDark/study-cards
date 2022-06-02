import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './PlayCards.styles';
import { verso_styles } from './Verso.styles';
//import { CardWrapper } from './Card.styles';
import { LinearGradient } from 'expo-linear-gradient';
import TrashIcon  from '../../assets/icons/trash-solid.svg'
import PlayDB from '../../services/sqlite/PlayDB'
import CardDB from '../../services/sqlite/Card'
import CategoriaDB from '../../services/sqlite/Categoria'
import { Link, useParams } from 'react-router-native';
import CheckIcon from '../../assets/icons/check-solid.svg'
import XMarkIcon from '../../assets/icons/xmark-solid.svg'
import BackIcon from '../../assets/icons/chevron-left-solid.svg'
import TurnCardIcon  from '../../assets/icons/repeat-solid.svg'
import ResetIcon  from '../../assets/icons/rotate-right-solid.svg'
import DetalhesDB from '../../services/sqlite/Detalhes'
import { vw } from 'react-native-expo-viewport-units';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class PlayCards extends React.Component {

  state = {
    categoriaId: this.props.params.categoriaId,
    clicked: false,
    card: 0,
    categoria: 0,
    isTurned: false,
    detalhes: []
  }

  componentDidMount() {
    this.createPlay();
  }

  componentDidUpdate(){
    if(this.state.clicked){
      console.log("click")
      this.setState({clicked: false})
      this.setState({isTurned: false})
      this.createPlay();
    }
  }
  
  createPlay = () => {
    console.log(this.state.categoriaId)
    PlayDB.createPlay(this.state.categoriaId).then(idPlay => {
      PlayDB.selectNextCard(this.state.categoriaId).then(nextCard => {
        CardDB.findCard(nextCard.cardId).then(playCard => {
          console.log(playCard)
          this.setState({
            card: playCard
          });
          CategoriaDB.findCategoria(this.state.categoriaId).then(categoriaObj => {
            this.setState({
              categoria: categoriaObj
            });
            console.log(categoriaObj);
            DetalhesDB.allDetalhesCard(nextCard.cardId).then(detalhes => {
              this.setState({
                detalhes: detalhes,
              });
              console.log(detalhes)
            });
          })
        })
      });
    });
  }

  render (){
  
  const renderDetalhe = ({item}) => {
    return (
        <View style = {verso_styles.categoryItem}>
            <Text style={verso_styles.cardTituloDetalhe}>{item.titulo}</Text>
            <Text style = {verso_styles.cardResposta}>{item.resposta}</Text>
        </View>
    );
}

    if (this.state.categoria != 0 && this.state.card != 0 && !this.state.clicked){
      return(
        <View style={styles.container}>
           <Link to={`/play-cards/${this.state.categoriaId}/${this.state.card.id}`} component={TouchableOpacity} onPress={() => {resetaPlay(this.state.categoriaId); this.setState({clicked: true})}} style={[styles.btn_layout, styles.btn_reset]}>
                <ResetIcon width={20} height={20} fill={'#1a1a1a'} />
            </Link>
          <Link to={`/home-categoria/${this.state.categoriaId}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_back]}>
                 <BackIcon width={30} height={30} fill={'#1a1a1a'} />
                </Link>
          <ScrollView horizontal style={styles.scrollViewTitle}><Text style={styles.nomeCategoria}>{this.state.categoria.nome}</Text></ScrollView>
          <View style={[styles.elevation, styles.cardBody]}>
        <LinearGradient
          // Background Linear Gradient
          colors={getColors(this.state.categoria.cor)}
          style={styles.cardBody}
        >
        
        {this.state.isTurned ? verso(this.state.card, this.state.detalhes): frente(this.state.card)}

    <TouchableOpacity style={verso_styles.verse_button} onPress={() => this.setState({
      isTurned: this.state.isTurned ? false : true,
    })}>
      <TurnCardIcon width={40} height={40} fill={'#f2f2f2'} />
    </TouchableOpacity>
        </LinearGradient>
        </View>
          <Link to={`/play-cards/${this.state.categoriaId}/${this.state.card.id}`} component={TouchableOpacity} onPress={() => {updatePlay(this.state.card.id, 2,this.state.categoriaId); this.setState({clicked: true})}} style={[styles.btn_layout, styles.btn_right]}>
                <CheckIcon width={45} height={45} fill={'#f2f2f2'} />
            </Link>
            <Link to={`/play-cards/${this.state.categoriaId}/${this.state.card.id}`} component={TouchableOpacity} onPress={() => {updatePlay(this.state.card.id, 1, this.state.categoriaId);this.setState({clicked: true})}} style={[styles.btn_layout, styles.btn_left]}>
              <XMarkIcon width={45} height={45} fill={'#f2f2f2'} />
            </Link>
        </View>
       );

    }else{ 
      return(
        <View style={styles.container}>
          <Link to={`/home-categoria/${this.state.categoriaId}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_left]}>
                    <Text style={styles.btn_text}>Cancelar</Text>
                </Link>
        </View>
       );
    }

    function frente(card){
      return(
        <View style={styles.scrollView}>
      <View>
        <Text style={styles.cardTitulo}>{card.titulo}</Text>
      </View>
      </View>
      )
    }
  
    function verso(card, detalhes){
      
      const TitleCard = () => {
        return(
          <View style={{flex:1, width: "100%"}}>
              <Text style={verso_styles.cardTitulo}>{card.titulo}</Text>
              <Text style={verso_styles.cardResposta}>{card.resposta}</Text>
              {(detalhes.length > 0) ? <Text style={[verso_styles.cardTitulo, {marginBottom: 10, marginTop: 15}]}>Tópicos</Text> : null}
          </View>
        )
      }
      return(
        // Constrói a visualização do card
          <View style={verso_styles.scrollView}>
               <FlatList
                  data={detalhes}
                  renderItem={renderDetalhe}
                  keyExtractor={item => item.id}
                  contentContainerStyle={styles.cardList}
                  ListHeaderComponent={TitleCard}
                  >
               </FlatList>
          </View>
      );
    }
   

   }
}


function updatePlay(cardId, status, categoriaId) {
  //update
  PlayDB.updatePlay(cardId, categoriaId, status)
    .then( updated => console.log('Updated plays: '+ updated) )
    .catch( err => console.log(err))
}

function resetaPlay(categoriaId) {
  //update
  PlayDB.resetaPlay(categoriaId)
    .then( updated => console.log('Updated plays: '+ updated) )
    .catch( err => console.log(err))
}

function getColors(colorStr){
  var initialColor = colorStr.split("-")[0]
  var finalColor = colorStr.split("-")[1]
  return ["#" + initialColor, "#" + finalColor]

}


export default withParams(PlayCards);
