import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Card.styles';
//import { CardWrapper } from './Card.styles';
import { LinearGradient } from 'expo-linear-gradient';
import LampIconOn from '../../assets/icons/lamp-on.svg';
import LampIconOff from '../../assets/icons/lamp-off.svg';
import StarIcon from '../../assets/icons/star.svg';

const Card = (props) => { 
  const gradientColors = getColors(props.cor)
  const [showDica, setShowDica] = useState(false)

  function getLampIcon(showDica){
    if(showDica == true){
      return (
        <View style={styles.lampIcon}>
          <LampIconOn width={40} height={40} fill={'#f2f2f2'} onPress={() => setShowDica(false)} />
        </View>
      );
     
    }else {
      return (
        <View style={styles.lampIcon}>
          <LampIconOff width={30} height={30} fill={'#f2f2f2'} onPress={() => setShowDica(true)} />
        </View>
      );
    }
  }

  return (
  <View style={[styles.cardBody, styles.elevation]}>
      <LinearGradient
        // Background Linear Gradient
        colors={gradientColors}
        style={styles.cardBody}
      >
      <View style={styles.scrollView}>
        <ScrollView>
          <Text style={styles.cardTitulo}>{props.titulo}</Text>
          {returnDica(showDica, styles, props.dica)}
        </ScrollView>
      </View>
      {getLampIcon(showDica)}
      <View style={styles.starIcon}>
          <StarIcon width={30} height={30} fill={'#f2f2f2'}/>
      </View>
      </LinearGradient>
  </View>
);
}

function getColors(colorStr){
  var initialColor = colorStr.split("-")[0]
  var finalColor = colorStr.split("-")[1]
  return ["#" + initialColor, "#" + finalColor]

}

function getLampIcon(showDica){
  if(showDica == true){
    return (
      <LampIconOn width={40} height={40} fill={'#1A1A1A'} />
    );
   
  }else {
    return (
      <LampIconOff width={30} height={30} fill={'#1A1A1A'} />
    );
  }
}

function returnDica(showDica, styles, dica) {
  if(showDica == true){
    return (      
    <View>
      <Text style={styles.dica}>{dica}</Text>
    </View>);
  }else{
    return ( 
      <View/>
    );
  }
}

export default Card;
