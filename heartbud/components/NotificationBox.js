import React from 'react'
import {} from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";


const NotificationBox=(props,{navigation})=>{
  const {date,time,msg,msgStyle,boxStyle,link}=props
  return(
    <View style={[styles.rect5, boxStyle]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>{date}</Text>
            <Text style={styles.loremIpsum8}>{time}</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={[styles.newPrescription,msgStyle]}>{msg}</Text>
          </View>
          
          <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate({link})} >
            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles=StyleSheet.create({
  rect5: {
    width: 340,
    height: 55,
    flexDirection: "row",
    marginTop: 15,
    alignSelf:'center'
  },
  rect9Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 4,
    marginTop: 4
  },
  rect9: {
    width: 85,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)"
  },
  today2: {
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    alignSelf:'center'
  },
  loremIpsum8: {
    color: "#121212",
    fontSize: 15,
    marginTop: 2,
    alignSelf:'center'
  },
  newPrescription: {
    color: "#121212",
    fontSize: 18,
    alignSelf:'center'
  },
  newPrescriptionContainer:{
    marginLeft: 20,
    marginTop: 6,
    width:150,
    justifyContent:'center'
  },
  button2: {
    width: 40,
    height: 40,
    marginLeft: 38,
    justifyContent:'center',
    marginTop:4
  },
  icon9: {
    color: "rgba(128,128,128,1)",
    fontSize: 35,
    height: 38,
    width: 35,
    marginLeft: 5
  },
})

export default NotificationBox