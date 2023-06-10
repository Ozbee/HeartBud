
import React from "react";
import {  View,Text,TouchableOpacity,StyleSheet} from "react-native";

const Dashboard=()=>{
  return (
      <View style={styles.MainContainer}>
          <View style={{height:30,backgroundColor:'#ffffff',marginTop:5}}></View>
    <View  style={styles.Container}>
    <View style={styles.Wrapper}>
    <TouchableOpacity style={styles.btn} >
    <Text>Specify Food Preferences</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} >
       <Text>Check Prescription</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.Wrapper}>
    <TouchableOpacity style={styles.btn2} >
      <Text>Check Status</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} >
      <Text>Test Blood Pressure</Text>
    </TouchableOpacity>
    
    </View>
    
    <View style={styles.Wrapper}>
    <TouchableOpacity style={styles.btn} >
    <Text>Set Reminders</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} >
     <Text>Consult Dr.</Text>
     </TouchableOpacity>
    <TouchableOpacity style={styles.btn} >
     <Text>Diet Schedule</Text>
     </TouchableOpacity>
    </View>
    
    </View>

    </View>
  );
}
const styles =StyleSheet.create({
MainContainer:{
    backgroundColor:'#6bceaa',
    flex:1,
},
Container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#eeede9',
    paddingTop:25,
    marginLeft:17,
    marginRight:17,
 },
 Wrapper:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:10
 },
btn:{ 
    backgroundColor:'#ffffff',
    color:'black',
    margin:18,
    padding:8,
    borderRadius:12
},
btn2:{ 
    backgroundColor:'#00bf63',
    color:'black',
    margin:18,
    padding:8,
    borderRadius:12
}
})

export default Dashboard;