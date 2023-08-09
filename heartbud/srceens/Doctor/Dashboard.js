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
      <Text style={styles.drMohammed}>DR. Mohammed</Text>
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
          <View style={styles.loremIpsumRow}>
            <Text style={styles.time}>Time</Text>
            <Text style={styles.loremIpsum3}>09:45</Text>            
          </View>
          <View style={styles.patientRow}>
          <Text style={styles.patient}>Patient</Text>
          <Text style={styles.amir3}>Amir</Text>
          
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Appointment')} >
        <Text style={styles.checkAppoiments} >Check Appoiments</Text>
      </TouchableOpacity>
      
      <View style={styles.rect3}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.status}>Status</Text>
        </View>
        <View style={styles.amirRow}>
          <Text style={styles.amir}>Amir</Text>
          <Text style={styles.stable}>Stable</Text>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Patient')} >
            <Text style={styles.rect5}>View</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.amirRow}>
          <Text style={styles.amir}>Amir</Text>
          <Text style={styles.mild}>Mild</Text>   
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.rect5}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amirRow}>
          <Text style={styles.amir}>Amir</Text>
          <Text style={styles.stable}>Stable</Text> 
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.rect5}>View</Text>
          </TouchableOpacity>
        </View>
       </View>

      <TouchableOpacity style={styles.rect10} onPress={() => navigation.navigate('List of Patient')} >
        <Text style={styles.checkPatients}>Check Patients</Text>
      </TouchableOpacity>
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
  patient: {
    fontWeight: "bold",
    color: "#121212",
    textDecorationLine: "underline",
    fontSize: 18,
  },
  dateRow: {
    marginTop: 8,
    marginLeft: 15,
    alignItems:'center'
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16
  },
  loremIpsum3: {
    
    color: "#121212",
    fontSize: 16,
  },
  amir3: {
    
    color: "#121212",
    fontSize: 16,
    alignSelf:'center'
  },
  loremIpsumRow: {
    marginTop: 8,
    marginLeft: 30
  },
  patientRow: {
    marginTop: 8,
    marginRight: 15,
    marginLeft:30
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
  rect3: {
    width: 280,
    height: 180,
    backgroundColor: "#E6E6E6",
    marginTop: 30,
    alignSelf: "center",
  },
  name: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 18,
    textDecorationLine: "underline",
    width: 65,
  },
  status: {
    fontWeight: "bold",
    color: "#121212",
    textDecorationLine: "underline",
    fontSize: 18,
    marginLeft:15
  },
  nameRow: {
    marginTop: 10,
    marginLeft: 13,
    flexDirection: "row",
  },
  amir: {
    
    color: "#121212",
    fontSize: 18,
    width: 65,
    marginTop: 1,
    height:22,
  },
  stable: {
    fontWeight: "bold",
    color: "rgba(83,193,9,1)",
    fontSize: 18,
    marginTop: 1,
    height:22,
    marginBottom:12,
    marginLeft:15,
    width:60
  },
  button2: {
    backgroundColor: "rgba(81,201,54,1)",
    marginLeft: 39,
    height:25,
    marginBottom:10,
    borderRadius:20
  },
  rect5: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 16,
    marginTop: 3,
    marginLeft: 10,
    marginRight:10
  },
  amirRow: {
    flexDirection: "row",
    height: 23,
    marginTop: 10,
    marginLeft: 13,
    marginBottom:10
  },
  mild: {
    fontWeight: "bold",
    color: "rgba(245,146,9,1)",
    fontSize: 18,
    marginTop: 1,
    height:22,
    marginBottom:12,
    marginLeft:15,
    width:60
  },
  rect10: {
    width: 140,
    backgroundColor: "#E6E6E6",
    marginTop: 25,
    alignSelf: "center",
    borderRadius:20
  },
  checkPatients: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 16,
    marginTop: 8,
    alignSelf: "center",
    marginBottom: 8,
    
  }
});

export default Dashboard;
