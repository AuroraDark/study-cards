import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnAdd.styles';
//import { BtnAddWrapper } from './BtnAdd.styles';

const BtnAdd = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.plus}>+</Text>
    </TouchableOpacity>  
  );  
}

export default BtnAdd;
