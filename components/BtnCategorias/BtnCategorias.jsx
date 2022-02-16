import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnCategorias.styles';
//import { BtnCategoriasWrapper } from './BtnCategorias.styles';
import CategoriasIcon from '../../assets/icons/categorias.svg'


const BtnCategorias = (props) => { 
  
  return (
    <TouchableOpacity style={styles.button}>
      <CategoriasIcon width={20} height={20} fill={'#1A1A1A'} />
      <Text style={styles.text}>Categorias</Text>
    </TouchableOpacity>
  );
}

export default BtnCategorias;
