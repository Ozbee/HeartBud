import { View, Text } from "react-native";
import DocNav from "../Doctor/DocNav";
import Patient from "./Patient";
import Dashboard from "../Doctor/Dashboard";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import PatientList from "../Doctor/PatientList";
import Diet from "../Patient/Diet";
import Appointment from "../Doctor/Appointments";

const Drawer = createDrawerNavigator();

function DoctorDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={() => {/* Logout logic */}} />
      </DrawerContentScrollView>
    );
  }

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
  function PatientListing() {
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
  

export default function Doctor() {
    return (
      <Drawer.Navigator drawerContent={props => <DoctorDrawerContent {...props} />} initialRouteName="Home">
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
        component={PatientListing}
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