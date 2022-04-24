import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './HomeCategoria.styles';
import BtnAddCard from '../BtnAdd/BtnAddCard';
import BtnPlay from '../BtnPlay/BtnPlay';
import BtnCategorias from '../BtnCategorias/BtnCategorias';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos';
import CardList from '../CardList/CardList';
import SearchIcon from '../../assets/icons/search.svg'
import { Link, useParams } from 'react-router-native'
import * as categorias from '../test/categorias.json';
import CategoriaDB from '../../services/sqlite/Categoria'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class HomeCategoria extends React.Component {
  
  state = {
    categoria: {},
    id: this.props.params.id
  }

  componentDidMount() {
    this.getCategoria(this.state.id);
  }
  
  getCategoria = (idCategoria) => {
    CategoriaDB.findCategoria(idCategoria).then(res => {
      this.setState({
        categoria: res,
      });
    }).catch(err=>err);
  }

  render() {
      if (this.state.categoria.id != undefined) {
        return (
          <View style={styles.home}>
            <ScrollView horizontal style={styles.scrollView}><Text style={styles.categoryText}>{this.state.categoria.nome}</Text></ScrollView>
            <SearchIcon width={30} height={30} fill={'#f2f2f2'} style={styles.searchIcon}/>
            <View style={styles.cardList}>
              <CardList categoriaId={this.state.categoria.id} cor={this.state.categoria.cor}/>
            </View>
            <BtnCategorias /> 
            <BtnAddCard categoriaId={this.state.categoria.id}/>
            <BtnPlay categoriaId={this.state.categoria.id} />
          </View>
        );
      }else{
        return (
            <View style={styles.home}>
            </View>
          )
      }
    }
}

export default withParams(HomeCategoria);