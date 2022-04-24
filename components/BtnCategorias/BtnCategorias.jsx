import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnCategorias.styles';
//import { BtnCategoriasWrapper } from './BtnCategorias.styles';
import BackIcon from '../../assets/icons/chevron-left-solid.svg'
import { Link } from 'react-router-native'


const BtnCategorias = (props) => { 
  
  return (
    <Link to='/' component={TouchableOpacity} style={[styles.button]}>
      <View style={styles.view}> 
        <BackIcon width={30} height={30} fill={'#1a1a1a'} />
      </View>
    </Link>
  );
}

export default BtnCategorias;
