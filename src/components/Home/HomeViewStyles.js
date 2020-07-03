import {StyleSheet} from 'react-native';
import HomeView from './HomeView';
import { color } from 'react-native-reanimated';

const HomeViewStyles = StyleSheet.create({

    ECJE: {
        flex: 3,
    },

    ECJE_Photo: {
        width: 130,
        height: 49,
        resizeMode: 'contain',
        alignSelf: 'flex-end'
        
        
        
    },

    REACT: {
        width: 223,
        height: 70,
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row'

    },


    React_Photo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },


    description: {
        
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'white',
        

    },
    
    Java: {
        width: 223,
        height: 70,
        flex:6,
        alignItems: 'center',
        flexDirection: 'row'
    },

    Cpp: {
        width: 223,
        height: 70,
        flex:6,
        alignItems: 'center',
        flexDirection: 'row'
    },

    Arduino: {
        width: 223,
        height: 70,
        flex:6,
        alignItems: 'center',
        flexDirection: 'row'

    },


    button: {
        width:300,
       
        
    }
});


export default HomeViewStyles;