import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnPlay.styles';
//import { BtnCategoriasWrapper } from './BtnCategorias.styles';
import Play from '../../assets/icons/play-solid.svg'
import { Link } from 'react-router-native'


const BtnCategorias = (props) => { 
  
  return (
    <Link to='/' component={TouchableOpacity} style={styles.button}>
      <View style={styles.view}> 
        <Play width={35} height={35} fill={'#1A1A1A'} />
      </View>
    </Link>
  );
}

export default BtnCategorias;
