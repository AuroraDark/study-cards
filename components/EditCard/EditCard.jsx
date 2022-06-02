import React, { useState, useEffect }  from 'react';
import { View, Text, ScrollView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './EditCard.styles';
import { useParams } from 'react-router-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoriasIcon from '../../assets/icons/categorias.svg'
import { Link } from 'react-router-native';
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import CardsDB from '../../services/sqlite/Card';
import DetalhesDB from '../../services/sqlite/Detalhes';
import CategoriaDB from '../../services/sqlite/Categoria';
import TrashIcon  from '../../assets/icons/trash-solid.svg'
import EditIcon  from '../../assets/icons/pen-solid.svg'
import Card from '../Card/Card';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class EditCard extends React.Component {
  
    state = {
        titulo: '',
        resposta: '',
        tituloDetalhe: '',
        respostaDetalhe: '',
        detalheVisibility: false,
        adicionarVisibility: true,
        editMode: false,
        idDetalhe: 0,
        detalhes: [],
        detalhesDeleted: [],
        detalheSelected: -1,
        cardId: this.props.params.id,
        categoriaId: this.props.params.categoriaId,
        cor: this.props.params.cor,
        card: undefined,
        detalhesSetted: false,
        categoriaNome: '',
        idDetalhesBD: []
    }

    componentDidMount() {
        this.getCategoria(this.state.categoriaId);
    }



    getCategoria = (idCategoria) => {
        CategoriaDB.findCategoria(idCategoria).then(res => {
          this.setState({
            categoriaNome: res.nome,
          });
          this.getCard(this.state.cardId)
        }).catch(err=>err);
      }
      
    getCard = (cardId) => {
    CardsDB.findCard(cardId).then(res => {
        this.setState({
            card: res,
            titulo: res.titulo,
            resposta: res.resposta
        });
        this.getDetalhes(this.state.cardId)
    }).catch(err=>err);
    }

    getDetalhes = (cardId) => {
        let newIdDetalhesBD = []
        DetalhesDB.allDetalhesCard(cardId).then(res => { 
            res.forEach((detalhe) => {
                newIdDetalhesBD = newIdDetalhesBD.concat(detalhe.id)
            })

            this.setState({
                detalhes: res,
                detalhesSetted: true,
                idDetalhesBD: newIdDetalhesBD,
                idDetalhe: Math.max.apply(null, newIdDetalhesBD) + 1
            });
            
        }).catch(err=>err);
    }

    render (){
    
    const { titulo, resposta, tituloDetalhe, respostaDetalhe, detalheVisibility, adicionarVisibility, editMode, idDetalhe, detalhes, detalheSelected, cardId, categoriaId, cor, card, detalhesSetted, categoriaNome, idDetalhesBD, idDetalhesUpdate, idDetalhesInsert, idDetalhesDelete} = this.state

    const geraFlatList = () => {
        console.log(detalhes.length)
        if(detalhes.length != 0) {
            console.log(detalhes[idDetalhe-1])
            return(
            <View>
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
                onChangeText={novoTitulo => {this.setState({tituloDetalhe: novoTitulo})}}
                />
                <TouchableOpacity style={styles.close_detalhe} onPress={() => escondeDetalhe()}>
                    <Text style={[styles.btn_card_text_x]}>x</Text>
                </TouchableOpacity>
                </View>
                <TextInput style={[styles.cardResposta, {marginBottom: 65}]} 
                    placeholder="Resposta..."
                    placeholderTextColor="#f2f2f2"
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={3}
                    onChangeText={novaResposta => {this.setState({respostaDetalhe: novaResposta})}}
                />
                <TouchableOpacity style={styles.salvar_button} onPress={() =>{salvarDetalhe()}}>
                    <Text style={[styles.btn_card_text_salvar]}>Salvar</Text>
                </TouchableOpacity>
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
        let indexDetalhe = detalhes.findIndex(detalhe => detalhe.id == detalheSelected);
        this.setState({detalhes: detalhes.filter((_, i) => i !== indexDetalhe)})
        this.setState({detalheSelected: -1})
    }

    const editarDetalhe = () => {
        var novo_detalhe = {
            id: detalheSelected,
            titulo: tituloDetalhe,
            resposta: respostaDetalhe
        }
        var indexDetalhe = detalhes.findIndex(detalhe => detalhe.id == detalheSelected);
        var detalhesUpdated = detalhes
        detalhesUpdated[indexDetalhe] = novo_detalhe

        this.setState({detalhes: detalhesUpdated})
        this.setState({tituloDetalhe: ''})
        this.setState({respostaDetalhe: ''})
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

        if(isSelected && !this.state.editMode){
            return (
                <View style={styles.categoryItem}>
                    <TouchableOpacity style = {[styles.categoryItem, {marginBottom: 60, backgroundColor:"#1a1a1a50", padding: 10, borderColor: "#f2f2f2", borderWidth: 1}]} onLongPress={() => selecionaDetalhe()}>
                    <Text style={[styles.cardTituloDetalhe , {width:vw(70) - 20}]}>{item.titulo}</Text>
                    <Text style = {[styles.cardResposta, {width:vw(70) - 20}]}>{item.resposta}</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.edit_button}>
                        <EditIcon width={20} height={20} fill={'#f2f2f2'} onPress={() =>{this.setState({editMode: true, tituloDetalhe: item.titulo, respostaDetalhe: item.resposta})}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trash_button} onPress={() => {deletarDetalhe()}}>
                         <TrashIcon width={20} height={20} fill={'#f2f2f2'} />
                    </TouchableOpacity>
                </View>
                
            );
        }else if(isSelected && this.state.editMode){
            return(
                <View style={styles.detalhe} >
                <View style={styles.header_detalhe}>
                <TextInput style={[styles.cardTituloDetalhe, {width: vw(50)}]} 
                placeholder="Título do detalhe..."
                placeholderTextColor="#f2f2f2"
                multiline={true}
                value={tituloDetalhe}
                onChangeText={novoTitulo => this.setState({tituloDetalhe: novoTitulo})}
                />
                <TouchableOpacity style={styles.close_detalhe} onPress={() =>{this.setState({editMode: false, tituloDetalhe: '', respostaDetalhe: ''})}}>
                    <Text style={[styles.btn_card_text_x]}>x</Text>
                </TouchableOpacity>
                </View>
                <TextInput style={[styles.cardResposta, {marginBottom:65}]} 
                    placeholder="Resposta..."
                    placeholderTextColor="#f2f2f2"
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={3}
                    value={respostaDetalhe}
                    onChangeText={novaResposta => this.setState({respostaDetalhe: novaResposta})}
                />
                <TouchableOpacity style={styles.salvar_button} onPress={() =>{editarDetalhe();this.setState({editMode: false})}}>
                    <Text style={[styles.btn_card_text_salvar]}>Salvar</Text>
                </TouchableOpacity>
            </View>
            )
        }else{
            return (
                <TouchableOpacity style = {styles.categoryItem} onLongPress={() => selecionaDetalhe()}>
                    <Text style={styles.cardTituloDetalhe}>{item.titulo}</Text>
                    <Text style = {[styles.cardResposta, {marginBottom: 10}]}>{item.resposta}</Text>
                </TouchableOpacity>
            );
        }
        
    }
    
    if (card != undefined && detalhesSetted == true) {
        return (
            // Constrói a visualização do card
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Editar Card</Text>
                    <View style={styles.categoria}>
                        <CategoriasIcon width={20} height={20} fill={'#f2f2f2'} />
                        <Text style={styles.categoryText}>{categoriaNome}</Text>
                  </View>
                </View>
              
            <View style={[styles.cardBody, styles.elevation]}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={getColors(cor)}
                    style={[styles.cardBody]}
                >
                    <ScrollView style={styles.scrollView}>
                    <TextInput style={styles.cardTitulo} 
                        placeholder="Título da questão..."
                        placeholderTextColor="#f2f2f2"
                        multiline={true}
                        value={titulo}
                        onChangeText={novoTitulo =>  this.setState({titulo:novoTitulo})}
                        />
                    <TextInput style={styles.cardResposta} 
                        placeholder="Resposta..."
                        placeholderTextColor="#f2f2f2"
                        textAlignVertical="top"
                        multiline={true}
                        value={resposta}
                        numberOfLines={3}
                        onChangeText={novaResposta => this.setState({resposta:novaResposta})}
                    />
                    {(detalhes.length != 0) ? <Text style={styles.cardTitulo}>Detalhes</Text> : null}
            
                    {setaDetalhes()}
                    {geraFlatList()}
                    
                    </ScrollView>
                
                {setaButtonAdicionar()}
                </LinearGradient>
            </View>
            <View style={styles.menu_footer}>
                <Link to={`/home-categoria/${categoriaId}`} component={TouchableOpacity} style={[styles.btn_layout, styles.btn_right]} onPress={() => updateCard(cardId, titulo, resposta, detalhes)}>
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

function updateCard(cardId, titulo, resposta, detalhes){

    console.log(cardId)
    var novoCard = {
        id: cardId,
        titulo: titulo,
        resposta: resposta
    }

    //create
    CardsDB.updateCard(novoCard)
    .then( rows => {
        deleteDetalhes(detalhes, cardId)
    })
    .catch( err => console.log(err))

    
}

function deleteDetalhes(detalhes, cardId){

    //delete
    DetalhesDB.removeDetalhe(cardId)
    .then( rows=> {
        insertDetalhes(detalhes, cardId)
    })
    .catch( err => console.log(err) )

    
}

function insertDetalhes(detalhes, cardId){
    // Adiciona Detalhes
    console.log(cardId)
    for(let detalhe of detalhes){

        var novoDetalhe = {
                cardId: cardId,
                titulo: detalhe.titulo,
                resposta: detalhe.resposta
        }

        console.log(novoDetalhe)

        //create
        DetalhesDB.createDetalhe(novoDetalhe)
        .then( id => console.log('Detalhe created with id: '+ id) )
        .catch( err => console.log(err) )
    }
}


export default withParams(EditCard)