import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import EntrepriseStyles from './EntrepriseStyles';

class Entreprise extends React.Component {
    render(){
        return(
            <ImageBackground style ={{width: '100%',height: '100%'}} source={require('./fond2.jpg')}>

            <SafeAreaView style ={{flex: 1}}>
    
                <View style={EntrepriseStyles.ECJE}>
                    <Image style={EntrepriseStyles.ECJE_Photo} source={require('./Picture1.png')}/>
                </View>
    
    
                <View style={EntrepriseStyles.PhotoEntreprise}>
                    <Image style={EntrepriseStyles.Entreprise_Photo} source={require('./centre-formation-tunisie.jpg')}/>
                </View>
    
    
                <View style={EntrepriseStyles.owner}>
                    <Text style={EntrepriseStyles.OwnerTitle}>
                        Mr Owner:    
                    </Text>
                    <Text style={EntrepriseStyles.OwnerName}>
                        Foulen Ben Foulen
                    </Text>
                </View>
    
    
                <View style={EntrepriseStyles.DescrCentre}>
                    <ScrollView contentContainer={EntrepriseStyles.ScrollViewContentStyle} style={EntrepriseStyles.ScrollViewStyle}>
                        <Text style={EntrepriseStyles.TextInScrollTitle}>
                            ISTAM:
                        </Text>
                        <Text style={EntrepriseStyles.TextInScroll}>

                            À propos{"\n"}
                            Institut Spécialisé des Technologies Avancées et Management  {"\n"}

                            Mentions légales{"\n"}
                            ISTAM :Institut de Formation Professionnelle et Universitaire agréé par l'Etat sous le numéro d'enregistrement 11-1586-17{"\n"}

                            ISTAM :Institut de formation agréé par l'Etat{"\n"}
                            ISTAM organisme de formation dans les secteurs liés aux nouvelles technologies de l'information et de la communica… Afficher la suite{"\n"}

                            Informations générales{"\n"}
                            Organisme de formation professionnel dans les secteurs liés à l’informatique,les nouvelles technologies de l’information et de la communication, la gestion et l’art et design.{"\n"}
                            Les études de l'institut mènent à des BTP et BTS.{"\n"}
                            {"\n"}
                            Produits{"\n"}
                            1- Formation diplômante : CAP, BTP et BTS{"\n"}
                            2- Formation sur mesure{"\n"}
                            3- Formation diplômante à distance{"\n"}
                            4-Centre de certification (Cisco,Microsoft, linux...){"\n"}
                            5-Centre de formation des langues(Anglais,Italien..)  {"\n"}                     
                         </Text>
                    </ScrollView>
                </View>

                <View style={EntrepriseStyles.vide}>

                </View>
    
    
                
    
    
    
            </SafeAreaView>
            </ImageBackground>
            );
    }
    
    };
    
    export default Entreprise;