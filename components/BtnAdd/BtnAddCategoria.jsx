import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnAdd.styles';
//import { BtnAddWrapper } from './BtnAdd.styles';
import { Link } from 'react-router-native';

const BtnAddCategoria = (props) => {
    return (
      <Link to={`/add-categoria`} component={TouchableOpacity} style={styles.button_categoria}>
          <Text style={styles.plus_categoria}>+</Text>
      </Link > 
      );   
}

export default BtnAddCategoria;
