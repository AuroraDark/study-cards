import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './CardList.styles';
//import { CardListWrapper } from './CardList.styles';
import * as cards from '../test/cards.json';
import * as favoritos from '../test/favoritos.json';
import Card from '../Card/Card';

const CardList = (props) => {

  const renderCard = ({item}) => {

    return (
      <Card titulo={item.titulo} dica={item.dica} cor={item.cor} id={item.cardId}/>
    );
  }

  return (
      <FlatList
      horizontal = {true}
      data={getCardsByCategoryId(props.categoryId)}
      renderItem={renderCard}
      keyExtractor={item => item.cardId}
      contentContainerStyle={styles.cardList}>
      </FlatList>
  );
}

function getCardsByCategoryId(categoryId) {
  var cardsObj = [];

  if(categoryId == "a"){
    for(var i=0; i < (Object.keys(cards).length - 1) ; i++){
        cardsObj.push(cards[i]);
    } 
  }else if(categoryId == "f"){
    let favoritosIds = getFavoritosCardIds()
    
    var array = ["pal1", "pal2", "pal3"]
    for(var pos in favoritosIds){

      for(var i=0; i < (Object.keys(cards).length - 1); i++){

        if(cards[i].cardId == favoritosIds[pos]){
          console.log(cards[i].titulo)
          cardsObj.push(cards[i])
        }
      }
    }
    
  }else{
    for(var i=0; i < (Object.keys(cards).length - 1); i++){
      if(cards[i].categoriaId == categoryId){
        cardsObj.push(cards[i])
      }
    }
  }

  return cardsObj
}

function getFavoritosCardIds(){
  var favoritosIds = []
  for(var i=0; i < (Object.keys(favoritos).length - 1); i++){
    favoritosIds.push(favoritos[i].cardId)
  }
  return favoritosIds
}

export default CardList;
