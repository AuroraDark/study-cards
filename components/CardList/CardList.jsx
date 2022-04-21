import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './CardList.styles';
//import { CardListWrapper } from './CardList.styles';
import * as cards from '../test/cards.json';
import * as favoritos from '../test/favoritos.json';
import Card from '../Card/Card';
import CardsDB from '../../services/sqlite/Card'

class CardList extends React.Component {
  
  state = {
    cards: 0,
    categoriaId: this.props.categoriaId,
    categoriaNome: this.props.categoriaNome,
    cor: this.props.cor,
  }

  componentDidMount() {
    this.getCards(this.state.categoriaId);
  }

  getCards = (categoriaId) => {
    console.log(categoriaId)
    CardsDB.allCardsCategory(categoriaId).then(res => {
      this.setState({
        cards: res,
      });
    });
  }
  render(){
    const renderCard = ({item}) => {
      return (
        <Card titulo={item.titulo} resposta={item.resposta} cor={this.state.cor} id={item.id} categoriaId={item.categoriaId} categoriaNome={this.state.categoriaNome} />
      );
    }
    if (this.state.cards != 0 && Object.keys(this.state.cards).length <= 0){
      return(
      <Text style={styles.semCategoriasMensagem}>Crie um novo card.</Text>
      );
    }

    return (
      <FlatList
      horizontal = {true}
      data={this.state.cards}
      extraData={this.state}
      renderItem={renderCard}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.cardList}>
      </FlatList>
        
  );
  }
}

export default CardList;
