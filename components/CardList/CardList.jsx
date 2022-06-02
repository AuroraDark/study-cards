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
    cards: null,
    categoriaId: this.props.categoriaId,
    cor: this.props.cor,
    search: this.props.search
  }

  componentDidMount() {
    this.getCards(this.props.categoriaId, this.props.search);
  }

  componentDidUpdate(prevProps) {
    if(this.props.categoriaId != prevProps.categoriaId || this.props.search != prevProps.search){
      this.getCards(this.state.categoriaId, this.props.search);
    }
    
  }


  getCards = (categoriaId, search) => {
    CardsDB.allCardsCategory(categoriaId, search).then(res => {
      this.setState({
        cards: res,
      });
    });
  }
  render(){
    const renderCard = ({item}) => {
      return (
        <Card titulo={item.titulo} resposta={item.resposta} cor={this.state.cor} id={item.id} categoriaId={item.categoriaId} />
      );
    }
    if (this.state.cards != null && Object.keys(this.state.cards).length <= 0){
      return(
        <View style={styles.msgCriar}>
      <Text style={styles.semCategoriasMensagem}>Clique no</Text>
      <Text style={styles.exampleAddBtn}>+</Text>
      <Text style={styles.semCategoriasMensagem}>para adicionar um card</Text>
      </View>
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
