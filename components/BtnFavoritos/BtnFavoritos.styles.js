import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f2f2f2',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'flex-start',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        marginLeft: 20,
        marginTop: 10,
    },

    text: {
        marginLeft: 10,
        fontSize: 20,
        color: '#1A1A1A',
        fontFamily: 'Epilogue_700Bold',
    },
});