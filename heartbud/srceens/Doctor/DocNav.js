import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from './Dashboard'
import SetAppointment from './SetAppointments'
import Diet from './Diet'
import Patient from './Patient'
import PatientList from './PatientList'
import Predicter from './Predicter'
import PredictionResults from './PredictionResults'
import AppointList from './Appointments'
import Notification from './Notification'
import Prescription from './Prescription'
import AddPrescription from './AddPrescription'
import Message from './Message';

function DashboardScreen() {
  return (
    <View style={{ flex: 1,}}>
      <Dashboard />
    </View>
  );
}

function PresScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="Prescribe" component={AddPrescription} />
    </Stack.Navigator>
  );
}

function PredScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Predicter" component={Predicter} />
      <Stack.Screen name="Results" component={PredictionResults} />
    </Stack.Navigator>
  );
}
function NoticeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={Notification} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}

function PatientLising() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PatientList/>
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
        options={{
          drawerLabel: 'Dashboard',
          headerStyle: {
            backgroundColor: '#9F9A9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NoticeScreen}
        options={{ drawerLabel: 'Notifications',headerShown: false,
        headerStyle: {
            backgroundColor: '#9F9A9A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'}
           }}
      />
      <Drawer.Screen
        name="Appointment"
        component={AppointList}
        options={{ drawerLabel: 'Appointment' }}
      />      
   
      <Drawer.Screen
        name="List of Patient"
        component={PatientLising}
        options={{ drawerLabel: 'List of Patients' }}
      />
     
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function DocNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard "
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="PresScreen"
        component={PresScreen} options={{headerBackTitleVisible: false, headerShown: false }} />
        <Stack.Screen name="Diet" component={Diet} />
        <Stack.Screen name="Set Appointment" component={SetAppointment} />
        <Stack.Screen name="PredScreen"
        component={PredScreen} options={{headerBackTitleVisible: false, headerShown: false }} />

      </Stack.Navigator>
    
  );
}
