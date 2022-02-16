import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BtnFavoritos.styles';
//import { BtnFavoritosWrapper } from './BtnFavoritos.styles';
import StarIconFav from '../../assets/icons/starFav.svg'

const BtnFavoritos = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <StarIconFav width={20} height={20} fill={'#1A1A1A'} />
      <Text style={styles.text}>Favoritos</Text>
    </TouchableOpacity>
  );
}


export default BtnFavoritos;
