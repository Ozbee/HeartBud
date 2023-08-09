import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import Dashboard from "../Patient/Dashboard";
import RequestAppointment from "../Patient/RequestAppointment";
import Diet from "../Patient/Diet";
import Preference from "../Patient/Preference";
import Prescription from "../Patient/Prescription";

const Drawer = createDrawerNavigator();

function PatientDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => {/* Logout logic */}} />
    </DrawerContentScrollView>
  );
}



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

export default function Patient() {
  return (
    <Drawer.Navigator drawerContent={props => <PatientDrawerContent {...props} />} initialRouteName="Home">
      {/* <Drawer.Screen name="Home" component={PatientScreen} /> */}
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