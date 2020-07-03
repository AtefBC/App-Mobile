/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import HomeView from './src/components/Home/HomeView';
import FormationReact from './src/components/FormationReact/FormationReact';
import FormationJAVA from './src/components/FormationReact/FormationJAVA';
import FormationC from './src/components/FormationReact/FormationC++';
import FormationArduino from './src/components/FormationReact/FormationArduino';
import Entreprise from './src/components/Entreprise/Entreprise';
import Contact from './src/components/Check/Contact';
import { Form } from 'native-base';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FormationCpp from './src/components/FormationReact/FormationC++';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView,
    },
    React: {
      screen: FormationReact,
    },
    JAVA: {
      screen: FormationJAVA,
    },
    Cpp: {
      screen: FormationC,
    },
    Arduino: {
      screen: FormationArduino,
    },
    Entreprise: {
      screen: Entreprise,
    },
    Contact: {
      screen: Contact,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);



const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeView,
      navigationOptions: {
        tabBarLabel:'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./iconfinder_HOME_16883.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    React: {
      screen: FormationReact,
      navigationOptions: {
        tabBarLabel:'React',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./src/components/Home/react-native-logo.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    JAVA: {
      screen: FormationJAVA,
      navigationOptions: {
        tabBarLabel:'JAVA',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./src/components/Home/javalogo.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    Cpp: {
      screen: FormationCpp,
      navigationOptions: {
        tabBarLabel:'C++',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./src/components/Home/formation_c++.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    Arduino: {
      screen: FormationArduino,
      navigationOptions: {
        tabBarLabel:'Arduino',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./arduino.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    Entreprise: {
      screen: Entreprise,
      navigationOptions: {
        tabBarLabel:'Sté',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./iconfinder_CALENDAR_16819.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel:'Contact',
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source={require('./iconfinder_MESSENGER-MSN_16905.png')}
          resizeMode="contain"
          style= {{width: 30, height: 30}}
          />

        )
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'white',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: 'grey',
        borderColor: 'rgba(140, 140, 140, 0.8)',
        borderTopWidth: 1,
      },
    },
  },
);

export default createAppContainer(BottomTabNavigator);