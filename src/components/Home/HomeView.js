import React from 'react';
import { Text, View, SafeAreaView,Image,TouchableOpacity, ImageBackground, findNodeHandle } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import {  LongPressGestureHandler } from 'react-native-gesture-handler';


export default function HomeView ({ navigation }) {
    
    
    
    
        const pressHandler1 = () => {
            navigation.navigate('React');
        }

        const pressHandler2 = () => {
            navigation.navigate('JAVA');
        }

        const pressHandler3 = () => {
            navigation.navigate('Cpp');
        }

        const pressHandler4 = () => {
            navigation.navigate('Arduino');
        }

        return(
            <ImageBackground style ={{width: '100%',height: '100%'}} source={require('./fond2.jpg')}>
            <SafeAreaView style ={{flex: 1}}>
                
                <View style ={HomeViewStyles.ECJE}>
                    <Image style={HomeViewStyles.ECJE_Photo} source={require('./Picture1.png')}/>
                </View>

                <View style={{flex: 11}}></View>
    
    
    
                <View style ={HomeViewStyles.REACT}>
                    <Image style={HomeViewStyles.React_Photo} source={require('./react-native-logo.png')}/>
                    <TouchableOpacity style={HomeViewStyles.button} activeOpacity={0.5} onPress={pressHandler1}>
                        <Text style={HomeViewStyles.description}>Formation Réact Native</Text>
                    </TouchableOpacity>
                </View>
    
    
                <View style ={HomeViewStyles.Java}>
                <Image style={HomeViewStyles.React_Photo} source={require('./javalogo.png')}/>
                <TouchableOpacity style={HomeViewStyles.button} activeOpacity={0.5} onPress={pressHandler2}>
                    <Text style={HomeViewStyles.description}>Formation Java Avancé</Text>
                </TouchableOpacity>
                </View>
    
    
                <View style ={HomeViewStyles.Cpp}>
                <Image style={HomeViewStyles.React_Photo} source={require('./formation_c++.png')}/>
                <TouchableOpacity style={HomeViewStyles.button } activeOpacity={0.5} onPress={pressHandler3}>   
                    <Text style={HomeViewStyles.description}>Formation C++ Avancé</Text>
                </TouchableOpacity>
                </View>
    
    
                <View style ={HomeViewStyles.Arduino}>
                <Image style={HomeViewStyles.React_Photo} source={require('./formation-Arduino_Logo.png')}/>
                <TouchableOpacity style={HomeViewStyles.button} activeOpacity={0.5} onPress={pressHandler4}>
                    <Text style={HomeViewStyles.description}>Formation Arduino</Text>
                </TouchableOpacity>
                </View>
    
    
               
    
    
                
            </SafeAreaView>
            </ImageBackground>
            
    
        );

    

};

