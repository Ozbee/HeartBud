import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard'
import Appointment from './Appointments'
import Diet from './Diet'
import Patient from './Patient'
import PatientList from './PatientList'

function DashboardScreen() {
  return (
    <View style={{ flex: 1,}}>
      <Dashboard />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function AppointmentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Appointment/>
    </View>
  );
}
function DietScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Diet/>
    </View>
  );
}
function PatientLising() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PatientList/>
    </View>
  );
}
function PatientScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Patient/>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ drawerLabel: 'Dashboard' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Notifications' }}
      />
      <Drawer.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{ drawerLabel: 'Appointment' }}
      />
      <Drawer.Screen
        name="Diet"
        component={DietScreen}
        options={{ drawerLabel: 'Diet' }}
      />
      <Drawer.Screen
        name="List of Patient"
        component={PatientLising}
        options={{ drawerLabel: 'List of Patients' }}
      />
      
      <Drawer.Screen
        name="Patient"
        component={PatientScreen}
        options={{ drawerLabel: 'Patient' }}
      />
    </Drawer.Navigator>
  );
}

export default function DocNav() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
