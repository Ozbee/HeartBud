import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Dashboard() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.drMohammed}>Amer</Text>
      <Text style={styles.upComingAppointment}>UpComing appointment</Text>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.dateRow}>
            <Text style={styles.date}>Date</Text>
            <Text style={styles.loremIpsum}>11/07/2023</Text>
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.time}>Time</Text>
            <Text style={styles.loremIpsum3}>09:45</Text>            
          </View>
          </ScrollView>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Appointment')} >
        <Text style={styles.checkAppoiments} >Check Appoiments</Text>
      </TouchableOpacity>
      
      
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.rect10} onPress={() => navigation.navigate('My Stats.')} >
        <Text style={styles.checkPatients}>Check Stats.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rect10,styles.btnSub]} onPress={() => navigation.navigate('Diet')} >
        <Text style={styles.checkPatients}>Diet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rect10,styles.btnSub]} onPress={() => navigation.navigate('Preference')} >
        <Text style={styles.checkPatients}>Preference</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  welcome: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 34,
    marginTop: 20,
    alignSelf: "center"
  },
  upComingAppointment: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 18,
    marginTop: 30,
    alignSelf: "center"
  },
  scrollArea: {
    height: 136,
    backgroundColor: "#E6E6E6",
    marginTop: 15,
    alignSelf:'center'
  },
  scrollArea_contentContainerStyle: {
    height: 136,
    flexDirection:'row'
  },
  date: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 18,
    textDecorationLine: "underline",
      },
  time: {
    fontWeight: "bold",
    color: "#121212",
    textDecorationLine: "underline",
    fontSize: 18,
     },
  btnContainer: {
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center'
  },
  dateRow: {
    marginTop: 8,
    marginLeft: 15,
    alignItems:'center'
  },
  timeRow:{
    marginTop: 8,
    marginLeft: 15,
    alignItems:'center',
    marginRight:20
  },
  loremIpsum: {
    marginTop:5,
    color: "#121212",
    fontSize: 16
  },
  loremIpsum3: {
    marginTop:5,
    color: "#121212",
    fontSize: 16,
  },
  button: {
    width: 170,
    backgroundColor: "#E6E6E6",
    marginTop: 20,
    alignSelf: "center",
    borderRadius:20
  },
  checkAppoiments: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    alignSelf: "center"
  },
  drMohammed: {
    
    color: "#121212",
    fontSize: 20,
    marginTop: 10,
    alignSelf: "center"
  },
  btnSub: {
    marginLeft: 15
  },
  
  rect10: {
     marginLeft: 10,
    backgroundColor: "#E6E6E6",
    marginTop: 5,
    alignSelf: "center",
    borderRadius:20
  },
  checkPatients: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 15,
    marginRight: 15,
    
  }
});

export default Dashboard;
