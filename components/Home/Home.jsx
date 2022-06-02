import React, { useState, useEffect } from 'react';
import { View, Text,  TextInput } from 'react-native';
import { styles } from './Home.styles';
import BtnAddCategoria from '../BtnAdd/BtnAddCategoria';
import BtnCategorias from '../BtnCategorias/BtnCategorias';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos';
import CategoriasList from '../CategoriasList/CategoriasList';
import SearchIcon from '../../assets/icons/search.svg'
import * as categorias from '../test/categorias.json';

const Home = (props) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.home}>
      <TextInput style={[styles.searchInput]} 
        placeholder="Pesquisar Deck"
        placeholderTextColor="#454545"
        onChangeText={text => setSearch(text)} 
        /> 
        
      <SearchIcon width={25} height={25} fill={'#f2f2f2'} style={styles.searchIcon}/>
      <Text style={styles.categoryText}>Decks</Text>
      <View style={styles.cardList}>
        <CategoriasList search={search}/>
      </View>
     <BtnAddCategoria />
    </View>
  );
}

export default Home;