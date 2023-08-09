import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function PredictionResults(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.results}>RESULTS</Text>
      
      <View style={styles.rect}>
        <Text style={styles.statistics}>Parameters</Text>
        
        <View style={styles.nameStackRow}>
            <View style={styles.rect2}>
              <Text style={styles.name}>Name:</Text>
              <Text style={styles.patientsId}>Patients ID:</Text>
            </View>
          <View style={styles.rect3}>
            <Text style={styles.amir}>Amir</Text>
            <Text style={styles.loremIpsum}>14XXX</Text>            
          </View>
        </View>

        <View style={styles.rect4Row}>
          <View style={styles.rect4}>
            <Text style={styles.txt}>Diastolic:</Text>
            <Text style={styles.txt1}>Sysytolic:</Text>
            <Text style={styles.txt1}>BMI</Text>
            <Text style={styles.txt1}>Glucose</Text>
            <Text style={styles.txt1}>Cholestorol:</Text>
            <Text style={styles.txt1}>Alcohol:</Text>
            <Text style={styles.txt1}>Smokes:</Text>
          </View>
          <View style={styles.rect5}>
            <Text style={styles.txt}>72</Text>
            <Text style={styles.txt1}>110</Text>
            <Text style={styles.txt1}>22.6</Text>
            <Text style={styles.txt1}>82(4.2)</Text>
            <Text style={styles.txt1}>210</Text>
            <Text style={styles.txt1}>NO</Text>
            <Text style={styles.txt1}>NO</Text>
          </View>
        </View>
        <View style={styles.rect6}>
          <Text style={styles.prediction}>Prediction:</Text>
          <Text style={styles.noRisk}>No Risk</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.button}
      >
        <Icon name="chevron-left" style={styles.icon}></Icon>
        <Text style={styles.loremIpsum8}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  results: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 24,
    textDecorationLine: "underline",
    marginTop: 20,
    alignSelf: "center"
  },
  rect: {
    width: 342,
    backgroundColor: "#E6E6E6",
    marginTop: 24,
    marginLeft: 16
  },
  statistics: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 20,
    marginTop: 5,
    alignSelf: "center"
  },
  
  rect2: {
    backgroundColor: "rgba(252,249,249,1)",
    paddingLeft:5
  },
  name: {
    
    color: "#121212",
    fontSize: 22,
    marginTop: 6,
    marginLeft: 9
  },
  patientsId: {
    
    color: "#121212",
    fontSize: 22,
    marginTop: 5,
    marginLeft: 8
  },
  rect3: {
    backgroundColor: "rgba(252,249,249,1)",
    paddingLeft: 15,
    paddingRight:8
  },
  loremIpsum: {
    
    color: "#121212",
    fontSize: 22,
    marginTop: 5
  },
  amir: {
    
    color: "#121212",
    fontSize: 22,
    marginTop: 6
  },
  nameStackRow: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf:'center'
  },
  rect4: {
    backgroundColor: "rgba(252,249,249,1)",
    paddingLeft:5,
    paddingBottom:5
  },
  txt: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 8
  },
  txt1: {
    fontSize: 20,
    marginTop: 8,
    marginLeft: 8
  },
  rect5: {paddingRight:9,
    backgroundColor: "rgba(252,249,249,1)",
    paddingLeft: 15,
    paddingBottom:5
  },
  rect4Row: {
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 2,
    alignSelf:'center'
  },
  rect6: {
    flexDirection:'row',
    backgroundColor: "rgba(252,249,249,1)",
    marginTop: 20,
    alignSelf:'center',
    marginBottom:15
  },
  prediction: {
    color: "#121212",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 5
  },
  noRisk: {
    fontWeight: "bold",
    color: "rgba(25,165,5,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 10,
    marginRight:5
  },
  button: {
    width: 106,
    height: 35,
    backgroundColor: "#E6E6E6",
    marginTop: 30,
    marginLeft: 38,
    flexDirection:'row'
  },
  icon: {
    color: "white",
    fontSize: 25,
    marginTop: 4,
    marginLeft: 10
  },
  loremIpsum8: {
    color: "#121212",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 5
  }
 
});

export default PredictionResults;
