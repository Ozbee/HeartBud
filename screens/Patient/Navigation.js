
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Prescription from './Prescription';
import Dashboard from './Dashboard';
import Diet from './Diet';
import Preference from './Preference';
import RequestAppointment from './RequestAppointment';


function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Dashboard/>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function PrescriptionScreen() {
  return (
    <View style={{ flex: 1 }}>
    <Prescription/>
    </View>
  );
}
function Info() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Info Screen</Text>
    </View>
  );
}
function PreferenceScreen() {
  return (
    <View style={{ flex: 1 }}>
    <Preference/>
    </View>
  );
}
function DietScreen() {
  return (
    <View style={{ flex: 1 }}>
    <Diet/>
    </View>
  );
}
function AppointmentScreen() {
  return (
    <View style={{ flex: 1 }}>
    <RequestAppointment/>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Prescription" component={PrescriptionScreen} />
      <Drawer.Screen name="Preference" component={PreferenceScreen} />
      <Drawer.Screen name="Diet" component={DietScreen} />
      <Drawer.Screen name="Patient info." component={Info} />
      <Drawer.Screen name="Appointment" component={AppointmentScreen} />

    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}