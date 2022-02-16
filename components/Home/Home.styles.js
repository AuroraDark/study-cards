import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      width: '100%',
      height: '100%',
    },

    categoryText: {
        color: '#f2f2f2',
        marginLeft: 20,
        marginTop: 20,
        fontFamily: 'Epilogue_500Medium',
        fontSize: 40,
    },

    searchIcon: {
      position: 'absolute',
      top: 30,
      right: 30,
    },

    cardList: {
      height: '100%',
      marginTop: '5%',
    }
  });
