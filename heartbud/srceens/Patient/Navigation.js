import { View, Text,StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from "../Patient/Dashboard";
import RequestAppointment from "../Patient/RequestAppointment";
import Diet from "../Patient/Diet";
import Preference from "../Patient/Preference";
import Prescription from "../Patient/Prescription";
import Notice from "./NotficationPat";
import { useEffect, useState } from "react";
import { ImageBackground,Image } from "react-native";
import NoticeInfo from "./NoticeInfo";
import PatAppointments from "./PatAppoint";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function PatientDrawerContent(props) {
  const [firstname, setFirstname] = useState("");
  const { userEmail } = props;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`http://192.168.1.118:8080/user?email=${userEmail}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const results = await response.json();
        if (results && results.length > 0) {
          setFirstname(results[0].firstname);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [userEmail]);

    return(
        <View style={{flex:1,marginTop:-50}}>
        <DrawerContentScrollView {...props}>
        
        <ImageBackground source={require ('../../assets/backImage(1).jpeg')} style={{alignItems:'center',paddingTop:60,marginBottom:20}}>
        <Image source={require ('../../assets/user-profile.jpg')} style={styles.image}/>
        <Text style={[styles.txt,styles.firstName]}>{firstname}</Text>
        <Text style={[styles.txt,styles.email]}> {userEmail}</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.bottom}>
            <Text style={styles.bottomtxt}>© HeartBud 2023</Text>
            <Text style={styles.bottomtxt}>-Ozbee -Pharoll</Text>
        </View>
        </View>

        
    )
}



function DashboardScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Dashboard/>
    </View>
  );
}
function NotificationScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Notification" component={Notice} options={{headerBackTitleVisible:false,headerBackButtonVisible:false}} />
      <Stack.Screen name="Details" component={NoticeInfo} />
    </Stack.Navigator>
  );
}
function PrescriptionScreen({route}) {
  const { userEmail } = route.params;
  return (
    <View style={{ flex: 1 }}>
    <Prescription user= {userEmail} />
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
function DietScreen({ route }) {
  const { userEmail } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Diet user={userEmail} />
    </View>
  );
}
function AppointmentScreen() {
  return (<Stack.Navigator>
    <Stack.Screen name="My Appointment" component={PatAppointments} options={{headerBackTitleVisible:false,headerBackButtonVisible:false}}/>
    <Stack.Screen name="Request" component={RequestAppointment}  options={{headerBackTitleVisible:false,}}/>
    
  </Stack.Navigator>
  );
}

export default function PatientNavigation({route, navigation }) {
  const { userEmail }=route.params;
  return (
    <Drawer.Navigator drawerContent={(props) => <PatientDrawerContent {...props} userEmail={userEmail} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="My Notification" component={NotificationScreen} options={{headerShown: false, headerBackTitleVisible: false}}  />
      <Drawer.Screen name="Prescription" component={PrescriptionScreen} initialParams={route.params} />
      <Drawer.Screen name="Preference" component={PreferenceScreen} />
      <Drawer.Screen name="Diet" component={DietScreen} initialParams={route.params}/>
      <Drawer.Screen name="My Stats." component={Info} />
      <Drawer.Screen name="Appointment" component={AppointmentScreen} options={{headerShown:false,}} />
    </Drawer.Navigator>
  );
}




  const styles=StyleSheet.create(    
    {image:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20,
        marginTop:10
    },
    txt:{
        color:'white',
        fontSize:18,
        marginBottom:5
    },
    firstName:{
        fontWeight:'bold'
    },
    email:{marginBottom:10},
    bottom:{
        alignItems:'center',
        marginBottom:12
    },
    bottomtxt:{
        marginBottom:2
    }
}
)
