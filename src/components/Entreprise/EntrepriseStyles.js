import {StyleSheet} from 'react-native';
import Entreprise from './Entreprise';

const EntrepriseStyles = StyleSheet.create({

    ECJE: {
        flex: 6,
    },

    ECJE_Photo: {
        width: 130,
        height: 49,
        resizeMode: 'contain',
        alignSelf: 'flex-end' 
    },


    PhotoEntreprise: {
        flex: 12,
    },

    Entreprise_Photo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

    owner: {
        paddingLeft:10,
        flex: 4,
        flexDirection: 'row',
        alignContent: 'center'
    },


    OwnerTitle: {
        fontSize: 26, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white'
    },

    OwnerName: {
        paddingLeft:10,
        fontSize: 22, 
        textAlignVertical: 'center',
        textAlign: 'center',
        color:'white'
    },


    DescrCentre: {
        flex: 15
    },


    ScrollViewStyle: {
        
        flex: 1,
        width: null,
        height:null,
        padding:10,

    },
    
    
    ScrollViewContentStyle: {       
        width: 340,
        height:140,
        color: 'grey',
        alignContent:'center',
    },


    TextInScrollTitle: {
        fontSize: 20, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color:'white'

    },

    TextInScroll: {
        fontSize: 16,
        color: 'white'

    },

    vide: {
        flex: 3

    },






});


export default EntrepriseStyles;