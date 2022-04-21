import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnAdd.styles';
//import { BtnAddWrapper } from './BtnAdd.styles';
import { Link } from 'react-router-native';

const BtnAddCard = (props) => {
  
    return (
      <Link to={`/add-card/${props.categoriaId}/${props.cor}/${props.nome}`} component={TouchableOpacity} style={styles.button}>
          <Text style={styles.plus}>+</Text>
      </Link > 
      );
}

export default BtnAddCard;
