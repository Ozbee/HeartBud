import React from "react";
import { SafeAreaView, StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PatientList(props) {
  const navigation = useNavigation()

  return (
      <SafeAreaView>
    <View style={styles.container}>
    <Text style={styles.patients}>Patients</Text>
    

      <View style={styles.content}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.amerMohammed}>Amer Mohammed</Text>
          <Text style={styles.amerMohammed}>Sofyane Mohammed</Text>
          <Text style={styles.amerMohammed}>Ahmed Rayane</Text>
            
        </View>

        <View style={styles.statusRow}>
          <Text style={styles.status}>Status</Text>
          <Text style={styles.stable}>Stable</Text>
          <Text style={styles.critical}>Critical</Text>
          <Text style={styles.mild}>Mild</Text>
        </View>
        
            <View style={styles.btnsContainer}>        
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Patient')} >
              <Text style={styles.btnContent}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btnContent}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btnContent}>View</Text>
            </TouchableOpacity>
            </View>
            </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flexDirection:'row',
    backgroundColor: "#E6E6E6",
    marginTop: 20,
  },
  patients: {
    fontWeight: 'bold',
    color: "#121212",
    fontSize: 25,
    textDecorationLine: "underline",
    marginTop: 30,
    alignSelf:'center'
  },
  name: {
    fontWeight: 'bold',
    color: "#121212",
    fontSize: 20,
    textDecorationLine: "underline"
  },
  status: {
    fontWeight: 'bold',
    color: "#121212",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  nameRow: {
    marginTop: 26,
    marginLeft: 10,
  },
  statusRow: {
    marginTop: 26,
    marginLeft: 20,
  },
  amerMohammed: {
    color: "#121212",
    fontSize: 18,
    marginTop: 6,
    marginBottom:18
  },
  stable: {
    fontWeight: 'bold',
    color: "rgba(126,211,33,1)",
    fontSize: 18,
    marginTop: 6,
    marginBottom:18
  },
  mild: {
    fontWeight: 'bold',
    color: "orange",
    fontSize: 18,
    marginTop: 6,
    marginBottom:18
  },
  critical: {
    fontWeight: 'bold',
    color: "red",
    fontSize: 18,
    marginTop: 6,
    marginBottom:18
  },
  btnsContainer:{
    marginTop: 26,
    marginRight: 10
  },
  btn: {
    width: 98,
    height: 28,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 33,
    marginTop:28
  },
  btnContent: {
    fontWeight: 'bold',
    color: "#121212",
    fontSize: 20,
    marginTop: 2,
    alignSelf:'center'
  },
  btn2: {
    width: 98,
    height: 28,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 33,
    marginTop:12
  },
});

export default PatientList;
