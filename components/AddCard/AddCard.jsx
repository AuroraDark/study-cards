import React, { useState, useEffect }  from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './AddCard.styles';
import { useParams } from 'react-router-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoriasIcon from '../../assets/icons/categorias.svg'
import { Link } from 'react-router-native';
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CardsDB from '../../services/sqlite/Card';
import DetalhesDB from '../../services/sqlite/Detalhes';
import CategoriaDB from '../../services/sqlite/Categoria';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class AddCard extends React.Component {
  
    state = {
        titulo: '',
        resposta: '',
        tituloDetalhe: '',
        respostaDetalhe: '',
        detalheVisibility: false,
        adicionarVisibility: true,
        idDetalhe: 0,
        detalhes: [],
        detalheSelected: -1,
        categoria: {},
        categoriaId: this.props.params.categoriaId
    }

    componentDidMount() {
        this.getCategoria(this.state.categoriaId);
      }
      
      getCategoria = (idCategoria) => {
        CategoriaDB.findCategoria(idCategoria).then(res => {
          this.setState({
            categoria: res,
          });
        }).catch(err=>err);
      }

    render (){
    
    const { titulo, resposta, tituloDetalhe, respostaDetalhe, detalheVisibility, adicionarVisibility,idDetalhe, detalhes, detalheSelected, categoria, categoriaId } = this.state

    const geraFlatList = () => {
        console.log(detalhes.length)
        if(detalhes.length != 0) {
            console.log(detalhes[idDetalhe-1])
            return(
            <View>
            <Text style={styles.cardTitulo}>Detalhes</Text>
             <FlatList
                data={detalhes}
                renderItem={renderDetalhe}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.cardList}>
             </FlatList>
             </View>
            );
         }
    }

    const setaDetalhes = () => {
        if (detalheVisibility){
            return(
                <View style={styles.detalhe} >
                <View style={styles.header_detalhe}>
                <TextInput style={[styles.cardTituloDetalhe, {width: vw(50)}]} 
                placeholder="Título do detalhe..."
                placeholderTextColor="#f2f2f2"
                multiline={true}
                onChangeText={novoTitulo => this.setState({tituloDetalhe: novoTitulo})}
                />
                <TouchableOpacity style={styles.close_detalhe} onPress={() => escondeDetalhe()}>
                    <Text style={[styles.btn_card_text_x]}>x</Text>
                </TouchableOpacity>
                </View>
                <TextInput style={styles.cardResposta} 
                    placeholder="Resposta..."
                    placeholderTextColor="#f2f2f2"
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={novaResposta => this.setState({respostaDetalhe: novaResposta})}
                />
            </View>
            )
        }
    }

    const setaButtonAdicionar = () => {
        if(adicionarVisibility && detalheSelected == -1 && !detalheVisibility){
            return(
                <TouchableOpacity style={[styles.btn_card, {backgroundColor: "#f2f2f2"}]} title="Adicionar Detalhe" onPress={() => exibeDetalhe()}>
                    <Text style={[styles.btn_card_text, {color: "#1a1a1a"}]}>Adicionar Detalhe</Text>
                </TouchableOpacity>
            )
        }
    }

    const exibeSalvarDetalhe = () =>{
        if (detalheVisibility){
            return (
                <TouchableOpacity style={[styles.btn_card, {backgroundColor: "#16a085"}]} title="Salvar Detalhe" onPress={() => salvarDetalhe()}>
                <Text style={[styles.btn_card_text]}>Salvar Detalhe</Text>
                </TouchableOpacity>
            );
        }
       
    }

    const exibeDetalhe = () =>{
        this.setState({adicionarVisibility: false})
        this.setState({detalheVisibility: true})
    }

    const escondeDetalhe = () =>{
        this.setState({adicionarVisibility: true})
        this.setState({detalheVisibility: false})
        this.setState({tituloDetalhe: ''})
        this.setState({respostaDetalhe: ''})
    }

    const salvarDetalhe = () => {
        var novo_detalhe = {
            id: idDetalhe,
            titulo: tituloDetalhe,
            resposta: respostaDetalhe
        }
        this.setState({detalhes: detalhes.concat([novo_detalhe])})
        this.setState({idDetalhe: novo_detalhe.id + 1})
        this.setState({tituloDetalhe: ''})
        this.setState({respostaDetalhe: ''})
        this.setState({adicionarVisibility: true})
        this.setState({detalheVisibility: false})
    }

    const deletarDetalhe = () => {
        var indexDetalhe = detalhes.findIndex(detalhe => detalhe.id == detalheSelected);
        this.setState({detalhes: detalhes.filter((_, i) => i !== indexDetalhe)})
        this.setState({detalheSelected: -1})
    }

    const showMenuDetalhe = () => {
        if (detalheSelected != -1){
            return (
                <TouchableOpacity style={[styles.btn_card, {backgroundColor: "#c0392b"}]} onPress={() => deletarDetalhe()}>
                    <Text style={[styles.btn_card_text]}>Deletar</Text>
                </TouchableOpacity>
            );
        }
    }

    const renderDetalhe = ({item}) => {
        id = item.id
        var isSelected = false

        if (detalheSelected == item.id){
            isSelected = true
        }

        const selecionaDetalhe = () => {
            if (detalheSelected == item.id){
                this.setState({detalheSelected: -1})
            }else{
                this.setState({detalheSelected: item.id})
            }
        }
        return (
            <TouchableOpacity style = {isSelected ? [styles.categoryItem, {backgroundColor:"#1a1a1a50", padding: 10, borderColor: "#f2f2f2", borderWidth: 1}] : styles.categoryItem} onPress={() => selecionaDetalhe()}>
                <Text style={isSelected ? [styles.cardTituloDetalhe , {width:vw(70) - 20}]: styles.cardTituloDetalhe}>{item.titulo}</Text>
                <Text style = {isSelected ? [styles.cardResposta, {marginBottom: 10, width:vw(70) - 20}] : [styles.cardResposta, {marginBottom: 10}]}>{item.resposta}</Text>
            </TouchableOpacity>
        );
    }
    
    if (categoria.id != undefined) {
        return (
            // Constrói a visualização do card
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Novo Card</Text>
                    <View style={styles.categoria}>
                        <CategoriasIcon width={20} height={20} fill={'#f2f2f2'} />
                        <Text style={styles.categoryText}>{categoria.nome}</Text>
                  </View>
                </View>
              
            <View style={[styles.cardBody, styles.elevation]}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={getColors(categoria.cor)}
                    style={[styles.cardBody]}
                >
                    <ScrollView style={styles.scrollView}>
                    <TextInput style={styles.cardTitulo} 
                        placeholder="Título da questão..."
                        placeholderTextColor="#f2f2f2"
                        multiline={true}
                        onChangeText={novoTitulo =>  this.setState({titulo:novoTitulo})}
                        />
                    <TextInput style={styles.cardResposta} 
                        placeholder="Resposta..."
                        placeholderTextColor="#f2f2f2"
                        textAlignVertical="top"
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={novaResposta => this.setState({resposta:novaResposta})}
                    />
                    
                    {geraFlatList()}
                    {setaDetalhes()}
        
                    </ScrollView>
                    
                {exibeSalvarDetalhe()}
                {setaButtonAdicionar()}
                {showMenuDetalhe()}
                </LinearGradient>
            </View>
            <View style={styles.menu_footer}>
                <Link to={`/home-categoria/${categoriaId}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]} onPress={() => insertCard(titulo, resposta, categoriaId, detalhes)}>
                    <Text style={styles.btn_text}>Salvar</Text>
                </Link>
                <Link to={`/home-categoria/${categoriaId}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_left]}>
                    <Text style={styles.btn_text}>Cancelar</Text>
                </Link>
            </View>
            </View>
            )
    }else{
        return(
            <View style={styles.container}/>
        )
    }

    }

}

/** Transforma as cores em HEXADECIMAL para construir o gradiente */
function getColors(colorStr){
    var initialColor = colorStr.split("-")[0]
    var finalColor = colorStr.split("-")[1]
    return ["#" + initialColor, "#" + finalColor]
  
}

function insertCard(titulo, resposta, categoriaId, detalhes){
    // Adiciona Card
    var novoCard = {
        titulo: titulo,
        resposta: resposta,
        categoriaId: categoriaId
    }

    //create
    CardsDB.createCard(novoCard)
    .then( id => {
        console.log('Card created with id: '+ id) 
        insertDetalhes(detalhes, id)
    })
    .catch( err => console.log(err) )

    
}

function insertDetalhes(detalhes, cardId){
    // Adiciona Detalhes
    for(let detalhe of detalhes){

        var novoDetalhe = {
                cardId: cardId,
                titulo: detalhe.titulo,
                resposta: detalhe.resposta
            }

        //create
        DetalhesDB.createDetalhe(novoDetalhe)
        .then( id => console.log('Detalhe created with id: '+ id) )
        .catch( err => console.log(err) )
}
}

export default withParams(AddCard)