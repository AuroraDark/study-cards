import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ConfirmDelete.styles';
//import { BtnAddWrapper } from './BtnAdd.styles';
import DetalhesDB from '../../services/sqlite/Detalhes'
import CategoriaDB from '../../services/sqlite/Categoria'
import CardsDB from '../../services/sqlite/Card'
import { Link, useParams } from 'react-router-native'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ConfirmDelete extends React.Component {

  state = {
    who: this.props.params.who,
    categoriaId: this.props.params.categoriaId,
    categoria: {},
    card: {},
    id: this.props.params.id
  }

  componentDidMount() {
    this.getCategoria(this.state.categoriaId);
  }
  
  getCategoria = (categoriaId) => {
    CategoriaDB.findCategoria(categoriaId).then(res => {
      this.setState({
        categoria: res,
      });
      if(this.state.who == "Card"){
        this.getCard(this.state.id)
      }
    }).catch(err=>err);
  }

  getCard = (id) => {
    CardsDB.findCard(id).then(res => {
      this.setState({
        card: res,
      });
      console.log(this.state.card)
    }).catch(err=>err);
  }

  render() {
  const {who, categoriaId, categoria, card, id} = this.state
  return(
    <View style={styles.backgroud}>
      <View style={styles.modal}>
        <Text style={styles.categoryText}>Deseja realmente excluir {(who == "Card") ? `o card "${card.titulo}"?` : `a categoria "${categoria.nome}"?`}</Text>
   <View style={styles.btn_container}>
    <Link to={(who == "Card") ? `/home-categoria/${categoriaId}` : `/`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_left]} onPress={() => (who == "Card") ? deleteCard(id) : null}>
        <Text style={styles.btn_text}>Sim</Text>
    </Link>
    <Link to={who == "Card" ? `/home-categoria/${categoriaId}` : `/`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]}>
        <Text style={styles.btn_text}>Não, voltar</Text>
    </Link>
   </View>
      </View>
  </View>
  )
}
}



function deleteCard(cardId){

  //delete
  CardsDB.removeCard(cardId)
  .then( id => {
      console.log('Card deleted with id: '+ id)
      deleteDetalhes(cardId)
  })
  .catch( err => console.log(err) )

  
}

function deleteDetalhes(cardId){

  //delete
  DetalhesDB.removeDetalhe(cardId)
  .then( cardId => {
      console.log('Detalhes deleted with cardId: '+ cardId)
  })
  .catch( err => console.log(err) )

  
}

export default withParams(ConfirmDelete);
