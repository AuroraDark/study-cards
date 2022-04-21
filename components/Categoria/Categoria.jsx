import React, { useState} from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { styles } from './Categoria.styles';
//import { CategoriasWrapper } from './Categorias.styles';
import CardsIcon from '../../assets/icons/cards.svg'
import { Link } from 'react-router-native'

const Categoria = (props) => {
  color = "#" + props.cor.split("-")[0]

  let [editMode, setEditMode] = useState(false)

  const menuEditMode = () => {
    if (editMode){
      return(
        <TouchableOpacity><Text style={styles.nome}>Deletar</Text></TouchableOpacity>
      )
    } else {
      return(
        <View style={styles.quantCards}>
          <CardsIcon width={20} height={20} fill={'#f2f2f2'} />
          <Text style={styles.textQuantCards}>{props.quantCards}</Text>
        </View>
      )
    }
  }

  return(
    <Link to={`/home-categoria/${props.id}`} component={TouchableOpacity} onLongPress={() => editMode ? setEditMode(false) : setEditMode(true)}>
      <View style={[styles.categoria, {borderLeftColor: color}]}>
      <Text style={styles.nome}>{props.nome}</Text>
      {menuEditMode()}
      </View>
    </Link>
  );

}

export default Categoria;
