import React, {useCallback} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground, Linking, Alert, } from 'react-native';
import ContactStyles from './ContactStyles';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';


const supportedURL1 = "https://www.facebook.com/profile.php?id=707592566063640";
const supportedURL2 = "https://instagram.com/istam_tunisie?igshid=owsmtdceo3ni";

const OpenURLButton1 = ({ url }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } 
  }, [url]);
  

  return <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
    <Image style={ContactStyles.Facebook} source={require('./facebook.jpg')}/>
    
</TouchableOpacity>;
};


const OpenURLButton2 = ({ url }) => {
    const handlePress2 = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } 
    }, [url]);
    
  
    return <TouchableOpacity activeOpacity={0.5} onPress={handlePress2}>
      <Image style={ContactStyles.Instagram} source={require('./Instagram_logo_2016.jpg')}/>
      
  </TouchableOpacity>;
  };




class Contact extends React.Component {
    render(){
        return(
            <ImageBackground style ={{width: '100%',height: '100%'}} source={require('./fond2.jpg')}>

            <SafeAreaView style ={{flex: 1}}>
    
                <View style={ContactStyles.ECJE}>
                <Image style={ContactStyles.ECJE_Photo} source={require('./Picture1.png')}/>
                </View>
    
    
                <View style={ContactStyles.Mapping}>
                    <MapView style={ContactStyles.Map_Photo}
                        provider={PROVIDER_GOOGLE}
                        region={{
                            latitude: 36.809616,
                            longitude: 10.180375,
                            latitudeDelta:0.05,
                            longitudeDelta:0.02
                        }}>
                            <Marker
                            coordinate={{ latitude:36.809616, longitude: 10.180375}}>
                                <Callout>
                                    <Text>ISTAM</Text>
                                </Callout>

                            </Marker>
                    </MapView>
                </View>
    
    
                <View style={ContactStyles.ContacterTitle}>
                    <Text style={ContactStyles.ContacterTitleText}>
                        Nous contacter
                    </Text>
                </View>
    
    
                <View style={ContactStyles.ContacterA}>
                    <Text style={ContactStyles.AdresseNom}>Adresse: </Text>
                    <Text style={ContactStyles.AdresseContent}>http://www.istam.tn</Text>
                </View>
    
                    
                <View style={ContactStyles.ContacterT}>
                    <Text style={ContactStyles.AdresseNom}>Téléphone: </Text>
                    <Text style={ContactStyles.AdresseContent}>72205648 </Text>
                </View>
    
                    
                <View style={ContactStyles.ContacterF}>
                    <Text style={ContactStyles.AdresseNom}>Fax: </Text>
                    <Text style={ContactStyles.AdresseContent}>09846512 </Text>
                </View>
    
                    
                <View style={ContactStyles.ContacterE}>
                    <Text style={ContactStyles.AdresseNom}>E-mail: </Text>
                    <Text style={ContactStyles.AdresseContent}>contactistamtunis@gmail.com </Text>
                </View>
    
    
                <View style={ContactStyles.IconesRX}>
                    <View style ={{flex:1, alignSelf: 'center'}}>
                        <OpenURLButton1 url={supportedURL1}></OpenURLButton1>
                    </View>
                    <View style ={{flex:1, alignSelf: 'center'}}>
                        <OpenURLButton2 url={supportedURL2}></OpenURLButton2>                    
                    </View>

                </View>
    
    
               
    
    
    
    
    
                
    
    
    
            </SafeAreaView>
            </ImageBackground>
            );
    }
    
    };
    
    export default Contact;
