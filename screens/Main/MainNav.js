import * as React from 'react';
import {Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Login from './Login'
import Register from './Register'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Card } from 'react-native-paper';
export default function MainNav() {
  const Stack = createNativeStackNavigator();
  return (
    
  <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false} } initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>

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
