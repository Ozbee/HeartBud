import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text,TouchableOpacity } from "react-native";

function PatAppointments({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.listOfAppointment}>List of Appointment</Text>
      
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rectRow}>
            <View style={styles.rect}>
              <Text style={styles.date}>Date</Text>
              <Text style={styles.dateInfo}>11/07/2023</Text>
              <Text style={styles.dateInfo}>12/07/2024</Text>
            </View>
            <View style={styles.rect2}>
              <Text style={styles.time}>Time</Text>
              <Text style={styles.couscous}>09:45</Text>
              <Text style={styles.onions}>14:15</Text>
            </View>
            <View style={styles.rect4}>
              <Text style={styles.patient}>Doctor</Text>
              <Text style={styles.amir}>Amir</Text>
              <Text style={styles.ahmed}>Ahmed</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection:'row',     alignSelf: "center", }}>
      <TouchableOpacity style={[styles.rect3, {marginRight:20}]} onPress={() => navigation.navigate.goBack()} >
        <Text style={styles.add}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rect3} onPress={() => navigation.navigate('Request')} >
        <Text style={styles.add}>Request</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1
  },
  scrollArea: {
    width: 360,
    height: 401,
    backgroundColor: "#E6E6E6",
    marginTop: 15,
    marginLeft: 8
  },
  scrollArea_contentContainerStyle: {
    width: 360,
    height: 401,
    flexDirection: "row"
  },
  rect: {
    width: 110,
    height: 258,
    backgroundColor: "rgba(253,251,251,1)"
  },
  date: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 22,
    textDecorationLine: "underline",
    marginTop: 15,
    alignSelf:'center'
  },
  dateInfo: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 8
  },
  rect2: {
    width: 70,
    height: 258,
    backgroundColor: "rgba(253,251,251,1)",
    marginLeft: 4
  },
  time: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 22,
    textDecorationLine: "underline",
    marginTop: 17,
    marginLeft: 9
  },
  couscous: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 11
  },
  onions: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 10
  },
  rect4: {
    width: 161,
    height: 258,
    backgroundColor: "rgba(253,253,253,1)",
    marginLeft: 4
  },
  patient: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 22,
    textDecorationLine: "underline",
    marginTop: 17,
    marginLeft: 46
  },
  amir: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 57
  },
  ahmed: {
    
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 48
  },
  rectRow: {
    height: 258,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 4,
    marginTop: 14
  },
  listOfAppointment: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 24,
    marginTop: 5,
    alignSelf: "center"
  },
  rect3: {
    width: 152,
    height: 44,
    backgroundColor: "#E6E6E6",
    marginTop: 15,

    borderRadius:20
  },
  add: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 22,
    marginTop: 10,
   alignSelf:'center'
  }
});

export default PatAppointments;
