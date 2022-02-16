import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Home.styles';
import BtnAdd from '../BtnAdd/BtnAdd';
import BtnCategorias from '../BtnCategorias/BtnCategorias';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos';
import CardList from '../CardList/CardList';
import SearchIcon from '../../assets/icons/search.svg'
import * as categorias from '../test/categorias.json';

const Home = (props) => {
  var categoryName = getCategoryName(props.route.params.categoryId) 
  return (
    <View style={styles.home}>
      <Text style={styles.categoryText}>{categoryName}</Text>
      <SearchIcon width={30} height={30} fill={'#f2f2f2'} style={styles.searchIcon}/>
      <BtnFavoritos />
      <View style={styles.cardList}>
        <CardList categoryId={props.route.params.categoryId} favorites={false}/>
      </View>
      <BtnCategorias />
      <BtnAdd />
    </View>
  );
}

function getCategoryName(categoryId){
  // puxar os dados da categoria no BD
  if(categoryId == "a"){
    return "Todos"
  }else if(categoryId == "f"){
    return "Favoritos"
  }else{
    for(var i=0; i < Object.keys(categorias).length; i++){
      if(categorias[i].categoriaId == categoryId){
        console.log(categorias[i].nome)
        return categorias[i].nome
      }
    }
  }
}

export default Home;