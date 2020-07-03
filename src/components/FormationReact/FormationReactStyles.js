import {StyleSheet} from 'react-native';
import FormationReact from './FormationReact';
import { color } from 'react-native-reanimated';

const FormationReactStyles = StyleSheet.create({

    ECJE: {
        flex: 3,
    },

    ECJE_Photo: {
        width: 130,
        height: 49,
        resizeMode: 'contain',
        alignSelf: 'flex-end' 
    },

    titre: {
        flex: 4,
        alignItems: 'center',
        
        

    },


    formation: {  
        fontSize: 26, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'red'

    },


    photoReact: {
        flex: 8,
        alignItems:'center',
        

    },


    React_Photo: {
        width: 120,
        height: 110,
        resizeMode: 'contain',

    },


    descReact: {
        flex: 10,
        alignItems: 'center',
        resizeMode: 'contain'

    },


    ScrollViewStyle: {
        
        width: 370,
        height:150,

    },
    
    
    ScrollViewContentStyle: {
        
        width: 340,
        height:140,
        color: 'grey',
        alignContent:'center',
    },


    TextInScroll:{
        
        marginLeft: 5,
        marginRight:5,
        fontSize: 17,
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold'

    },


    ligne: {
        flex: 2,
    },


    descFormateur:{
        flex: 8,
        flexDirection: 'row',

    },

    Formateur_Photo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',

    },


    ScrollView2Style: {
        
        width: 250,
        height:150,

    },
    
    
    ScrollView2ContentStyle: {
        
        width: 240,
        height:140,
        color: 'grey',
        alignContent:'center',
    },


    TextInScroll2Title: {
        paddingLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'red'

    },


    TextInScroll2:{
        
        marginLeft: 5,
        marginRight:5,
        fontSize: 17,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white'

    },



});


export default FormationReactStyles;