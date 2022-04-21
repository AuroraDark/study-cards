import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { styles } from './Categoria.styles';
//import { CategoriasWrapper } from './Categorias.styles';
import CardsIcon from '../../assets/icons/cards.svg'

const Categoria = (props) => {
  color = "#" + props.cor.split("-")[0]
  return(
    <View 
    style={[styles.categoria, {borderLeftColor: color}]}>
      <Text style={styles.nome}>{props.nome}</Text>
      <View style={styles.quantCards}>
        <CardsIcon width={20} height={20} fill={'#f2f2f2'} />
        <Text style={styles.textQuantCards}>{props.quantCards}</Text>
      </View>
    </View>
  );

}

export default Categoria;
