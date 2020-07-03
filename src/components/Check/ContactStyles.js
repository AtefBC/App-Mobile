import {StyleSheet} from 'react-native';
import Contact from './Contact';

const ContactStyles = StyleSheet.create({

    ECJE: {
        flex: 6,
    },

    ECJE_Photo: {
        width: 130,
        height: 49,
        resizeMode: 'contain',
        alignSelf: 'flex-end' 
    },


    Mapping: {
        flex: 13
    },

    Map_Photo:{
        flex: 1,
        width: null,
        height: null,

    },



    ContacterTitle: {
        flex: 4,
        padding: 10,
    },

    ContacterTitleText:{
        flex: 1,
        width: null,
        height: null,
        textAlignVertical: 'center',
        fontSize: 21, 
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white'

    },


    ContacterA: {
        flex: 2.5,
        flexDirection: 'row'
    },


    ContacterT: {
        flex: 2.5,
        flexDirection: 'row'
    },


    ContacterF: {
        flex: 2.5,
        flexDirection: 'row'
    },


    ContacterE: {
        flex: 2.5,
        flexDirection: 'row'
    },


    AdresseNom: {
        paddingLeft: 10,
        width: 100,
        fontSize: 17, 
        fontWeight: 'bold',
        color: 'white'

    },

    AdresseContent: {
        paddingLeft: 20,
        fontSize: 16,
        color:'white'
    },


    IconesRX: {
        flex: 7,
        width: 200,
        height: 50,
        alignSelf: 'center',
        flexDirection: 'row'
        
    },


    Facebook: {
        alignSelf: 'flex-start',
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 40


    },

    Instagram: {
        alignSelf: 'flex-end',
        width: 74,
        height: 74,
        resizeMode: 'contain'
    },





   


});


export default ContactStyles;