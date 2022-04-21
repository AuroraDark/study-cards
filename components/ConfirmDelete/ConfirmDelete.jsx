import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ConfirmDelete.styles';
//import { BtnAddWrapper } from './BtnAdd.styles';
import { useParams, Link } from 'react-router-native';
import CardsDB from '../../services/sqlite/Card'
import DetalhesDB from '../../services/sqlite/Detalhes'

const ConfirmDelete = (props) => {

  const { who, categoriaId, categoriaNome, cor, nome, id } = useParams()
  console.log(props)
  "/home-categoria/:id/:cor/:nome"
  return(
    <View style={styles.backgroud}>
      <View style={styles.modal}>
        <Text style={styles.categoryText}>Deseja realmente excluir {(who == "Card") ? `o card "${nome}"?` : `a categoria "${nome}"?`}</Text>
   <View style={styles.btn_container}>
    <Link to={(who == "Card") ? `/home-categoria/${categoriaId}/${cor}/${categoriaNome}` : `/home-categoria/${id}/${cor}/${categoriaNome}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_left]} onPress={() => (who == "Card") ? deleteCard(id) : null}>
        <Text style={styles.btn_text}>Sim</Text>
    </Link>
    <Link to={who == "Card" ? `/home-categoria/${categoriaId}/${cor}/${categoriaNome}` : `/home-categoria/${id}/${cor}/${categoriaNome}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]}>
        <Text style={styles.btn_text}>Não, voltar</Text>
    </Link>
   </View>
      </View>
  </View>
  );
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

export default ConfirmDelete;
