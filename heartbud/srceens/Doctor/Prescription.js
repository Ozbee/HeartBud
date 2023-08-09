import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PrescriptionBox from '../../components/PrescriptionBox'
function Prescription({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <View style={styles.nameContainer}>
      <Text style={styles.txt}>Name</Text>
      </View>
      <View style={styles.periodsContainer}>
      <Text style={styles.txt}>Period</Text>
      </View>
      </View>
      
<PrescriptionBox medName='Beta blocker' period='Morning' />
<PrescriptionBox medName='Beta blockerk' period='Afternoon' />
<PrescriptionBox medName='Beta blocker' period='Evening' />
<PrescriptionBox medName='Beta blocker' period='Morning' />
<PrescriptionBox medName='Beta blocker' period='Morning' />


      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('Prescribe')} >
      <Text style={styles.add}>Add</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head:{
    flexDirection:'row',
    marginTop:10
  },
  nameContainer:{
    width:120,
    marginLeft:10
    },
  periodsContainer:{
    width:70,
    marginLeft:10
    },
  txt:{
    alignSelf:'center',
    textDecoration:'underline',
    fontWeight:'bold',
    fontSize:18,
  },
  buttonContainer:{
    marginTop:20
  },
  btnAdd:{
    width:70,
    alignSelf:'center',
    backgroundColor:'rgba(148,212,75,1)',
    borderRadius:20
  },
  add:{
    fontSize:18,
    alignSelf:'center',
    marginTop:6,
    marginBottom:6,
    fontWeight:'bold'
  },
 });

export default Prescription;
