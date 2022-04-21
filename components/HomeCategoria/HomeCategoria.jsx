import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeCategoria.styles';
import BtnAddCard from '../BtnAdd/BtnAddCard';
import BtnPlay from '../BtnPlay/BtnPlay';
import BtnCategorias from '../BtnCategorias/BtnCategorias';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos';
import CardList from '../CardList/CardList';
import SearchIcon from '../../assets/icons/search.svg'
import { useParams, Link } from 'react-router-native'
import * as categorias from '../test/categorias.json';

const HomeCategoria = (props) => {
  const { id, cor, nome } = useParams()
  return (
    <View style={styles.home}>
      <Text style={styles.categoryText}>{nome}</Text>
      <SearchIcon width={30} height={30} fill={'#f2f2f2'} style={styles.searchIcon}/>
      <View style={styles.cardList}>
        <CardList categoriaId={id} cor={cor} categoriaNome={nome}/>
      </View>
      <BtnCategorias /> 
      <BtnAddCard categoriaId={id} cor={cor} nome={nome}/>
      <BtnPlay />
    </View>
  );
}

export default HomeCategoria;