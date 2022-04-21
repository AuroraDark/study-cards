import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnCategorias.styles';
//import { BtnCategoriasWrapper } from './BtnCategorias.styles';
import CategoriasIcon from '../../assets/icons/categorias.svg'
import { Link } from 'react-router-native'


const BtnCategorias = (props) => { 
  
  return (
    <Link to='/' component={TouchableOpacity} style={styles.button}>
      <View style={styles.view}> 
        {/*<CategoriasIcon width={20} height={20} fill={'#1A1A1A'} />*/}
        <Text style={styles.text}>Voltar</Text>
      </View>
    </Link>
  );
}

export default BtnCategorias;
