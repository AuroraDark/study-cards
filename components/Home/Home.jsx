import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Home.styles';
import BtnAddCategoria from '../BtnAdd/BtnAddCategoria';
import BtnCategorias from '../BtnCategorias/BtnCategorias';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos';
import CategoriasList from '../CategoriasList/CategoriasList';
import SearchIcon from '../../assets/icons/search.svg'
import * as categorias from '../test/categorias.json';

const Home = (props) => {
  return (
    <View style={styles.home}>
      <Text style={styles.categoryText}>Decks</Text>
      <SearchIcon width={30} height={30} fill={'#f2f2f2'} style={styles.searchIcon}/>
      <BtnFavoritos />
      <View style={styles.cardList}>
        <CategoriasList/>
      </View>
     <BtnAddCategoria />
    </View>
  );
}

export default Home;