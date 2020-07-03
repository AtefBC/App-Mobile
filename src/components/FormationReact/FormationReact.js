import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import FormationReactStyles from './FormationReactStyles';


class FormationReact extends React.Component {
    render(){
        return(
            <ImageBackground style ={{width: '100%',height: '100%'}} source={require('./fond2.jpg')}>
            <SafeAreaView style ={{flex: 1}}>
    
    
                <View style={FormationReactStyles.ECJE}>
                    <Image style={FormationReactStyles.ECJE_Photo} source={require('./Picture1.png')}/>
                </View>

                <View style={{flex: 3}}></View>
    
    
                <View style={FormationReactStyles.titre}>
                    <Text style={FormationReactStyles.formation}>
                        Formation react native
                    </Text>
                </View>
    
    
                <View style={FormationReactStyles.photoReact}>
                    <Image style={FormationReactStyles.React_Photo} source={require('./react-native-logo.png')}/>
                </View>
    
    
                <View style={FormationReactStyles.descReact}>
                    <ScrollView contentContainer={FormationReactStyles.ScrollViewContentStyle} style={FormationReactStyles.ScrollViewStyle}>
                        <Text style={FormationReactStyles.TextInScroll}>
                            Notre formation du react native consiste a bien encadrer les participants a fin de les aider a bien comprendre comment créer une application android a l'aide du nodeJs de plus on procure plusieur exemples et ggj jffhjfhg tfytfhfgyt hgvhtfytftfv tfhfhfytf tfhtfy ytfytfytf tyfdtyyfht ydfrydtydyd rdyfdtdyd yrrdtrdytdfydd ydytrdytftfdy( yfdrdyd ydytfytfdy tyftfhgfy(r ydtrdstdtrd zrsrsrezsezr z rrezqrsrez  zqrreeserzqrez zrqezwqezqrse zqrqsrs blaa blaa blaa blaa blaaa blaa blaa blaaa blaaa blaa
                        </Text>
                    </ScrollView>
                </View>

                <View style={FormationReactStyles.ligne}>

                </View>
    
    
                <View style={FormationReactStyles.descFormateur}>
                    
                    <View style={{paddingLeft: 20,flex:3}}>
                        <Image style={FormationReactStyles.Formateur_Photo} source={require('./formateur.jpg')}/>
                    </View>

                    <View style={{flex: 1.5}}></View>
                    
                    
                    <View style={{flex:9, flexDirection: 'column'}}>
                        <ScrollView contentContainer={FormationReactStyles.ScrollView2ContentStyle} style={FormationReactStyles.ScrollView2Style}>
                            <Text style={FormationReactStyles.TextInScroll2Title}>
                            Ben Cheikh Atef
                            </Text>
                            <Text style={FormationReactStyles.TextInScroll2}>
                            Un formateur de l'Enetcom Sfax. Il a 21 ans. Il est titulé ingénieur en génie Telecommunication. Certifié dans le NodeJS de la part de Udemy. Il a continué ces étude en Allmagne entre 2022-2025. Diplomé en Android Development Application.
                            </Text>
                        </ScrollView>
                    </View>
                
                </View>

                <View style={{flex: 2}}>

                </View>
    

    
                
    
    
    
            </SafeAreaView>
            </ImageBackground>
            );
    }
   
    };
    
    export default FormationReact;