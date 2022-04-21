import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './CategoriasList.styles';
//import { CardListWrapper } from './CardList.styles';
import Categoria from '../Categoria/Categoria';
import CategoriaDB from '../../services/sqlite/Categoria'
import CardDB from '../../services/sqlite/Card'
import { Link } from 'react-router-native'

class CategoriasList extends React.Component {

  state = {
    categorias: [],
  }

  componentDidMount() {
    this.getCategorias();
  }

  getCategorias = () => {
    CategoriaDB.allCategorias().then(res => {
      this.setState({
        categorias: res,
      });
    });
  }

  render() {
    const renderCategoria = ({item}) => {
      return (
        <Link to={`/home-categoria/${item.id}/${item.cor}/${item.nome}`} component={TouchableOpacity} onPress={() => console.log(item.nome)}>
            <Categoria nome={item.nome} cor={item.cor} id={item.id} quantCards={item.quantCards}/>
        </Link>
      );
    }
    if (Object.keys(this.state.categorias).length > 0){
    return (
      <FlatList
      data={this.state.categorias}
      renderItem={renderCategoria}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.categoriasList}>
      </FlatList>
        
  );
}else{
  return(
  <Text style={styles.semCategoriasMensagem}>Crie uma nova categoria</Text>
  );
  }
  }  
}

export default CategoriasList;
