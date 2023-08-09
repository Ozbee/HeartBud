import * as React from 'react';
import {Text, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './srceens/Main/Login'
import Register from './srceens/Main/Register';
import PatientNavigation from './srceens/Patient/Navigation'
import Admin from './srceens/Main/Admin'
import DocNav from './srceens/Doctor/DocNav'
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar
        backgroundColor="#6bceaa" // Set the background color
        barStyle="light-content" // Set the text color (light or dark)
        translucent={false} // Set whether the StatusBar is translucent or not
      />
    <Stack.Navigator screenOptions={{headerShown:false} } initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name='PatientNav' component={PatientNavigation } />
      <Stack.Screen name='DoctorNav' component={ DocNav} />
      <Stack.Screen name='AdminNav' component={ Admin} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
});
