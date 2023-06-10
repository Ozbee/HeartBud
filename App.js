import * as React from 'react';
import {Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import MainNav from './screens/Main/MainNav'
import DocNav from './screens/Doctor/DocNav'
import Navigation from './screens/Patient/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function App() {
  return (
  
  <MainNav/>
  
    
//  <Navigation/>
  

//<DocNav/>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// })
