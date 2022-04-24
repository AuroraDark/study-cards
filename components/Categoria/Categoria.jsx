import React, { useState} from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import { styles } from './Categoria.styles';
//import { CategoriasWrapper } from './Categorias.styles';
import CardsIcon from '../../assets/icons/cards.svg'
import { Link } from 'react-router-native'
import TrashIcon  from '../../assets/icons/trash-solid.svg'
import EditIcon  from '../../assets/icons/pen-solid.svg'

const Categoria = (props) => {
  color = "#" + props.cor.split("-")[0]

  const [editMode, setEditMode] = useState(false)

  const menuEditMode = () => {
    if (editMode){
      return(
        <View style={styles.edit_buttons}>
       <Link to={`/`} style={styles.edit_button}>
       <EditIcon width={20} height={20} fill={'#f2f2f2'} />
      </Link>
      <Link to={`/confirm-delete/Categoria/${props.id}/${props.id}`} style={styles.trash_button}>
        <TrashIcon width={20} height={20} fill={'#f2f2f2'} />
      </Link>
     </View>
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
    <Link to={`/home-categoria/${props.id}`} component={TouchableOpacity} underlayColor="#ffffff00" onLongPress={() => editMode ? setEditMode(false) : setEditMode(true)}>
      <View style={[styles.categoria, {borderLeftColor: color}]}>
      <Text style={styles.nome}>{props.nome}</Text>
      {menuEditMode()}
      </View>
    </Link>
  );

}

export default Categoria;
