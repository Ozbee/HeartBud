import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import NotificationBox from '../../components/NotificationBox'
import EntypoIcon from "react-native-vector-icons/Entypo";

function Notification({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.notiContainer}>
    <Text style={styles.newTittle}>New</Text>
    <ScrollView >   
<View style={[styles.rect5, styles.newNot]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>Today</Text>
            <Text style={styles.loremIpsum8}>20:45</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={[styles.newPrescription,styles.newMsg]}>New Prescription</Text>
          </View>
    
<TouchableOpacity style={styles.button2} onPress={()=>
navigation.navigate('Message')}>

            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
            </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.rect5, styles.newNot]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>Today</Text>
            <Text style={styles.loremIpsum8}>20:45</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={[styles.newPrescription,styles.newMsg]}>New Prescription</Text>
          </View>
    
<TouchableOpacity style={styles.button2} onPress={()=>
navigation.navigate('Message')}>

            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
            </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.rect5, styles.newNot]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>Today</Text>
            <Text style={styles.loremIpsum8}>20:45</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={[styles.newPrescription,styles.newMsg]}>New Prescription</Text>
          </View>
    
<TouchableOpacity style={styles.button2} onPress={()=>
navigation.navigate('Message')}>

            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
            </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.rect5, styles.newNot]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>Yesterday</Text>
            <Text style={styles.loremIpsum8}>10:45</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={[styles.newPrescription,styles.newMsg]}>New Appointment</Text>
          </View>
    
<TouchableOpacity style={styles.button2} onPress={()=>
navigation.navigate('Message')}>

            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
            </TouchableOpacity>
        </View>
      </View>

    </ScrollView></View>

    <View>
    <Text style={styles.viewedTitle}>Viewed</Text>
    <ScrollView style={styles.notiContainer1}>
    <View style={[styles.rect5, styles.viewedNot]}>
        <View style={styles.rect9Row}>
          <View style={styles.rect9}>
            <Text style={styles.today2}>12/05/2023</Text>
            <Text style={styles.loremIpsum8}>10:45</Text>
          </View>
          <View style={styles.newPrescriptionContainer}>
          <Text style={styles.newPrescription}>New Appointment</Text>
          </View>
    
<TouchableOpacity style={styles.button2} onPress={()=>
navigation.navigate('Message')}>

            <EntypoIcon
              name="chevron-small-right"
              style={styles.icon9}
            ></EntypoIcon>
            </TouchableOpacity>
        </View>
      </View>
      <NotificationBox date='12/05/2023' time='12:04' msg='New Prescription' msgStyle='' boxStyle={styles.viewedNot}/>
      <NotificationBox date='15/06/2023' time='12:04' msg='New Diet' msgStyle='' boxStyle={styles.viewedNot} />

    </ScrollView>
     </View> 
      <TouchableOpacity style={styles.returnBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnTxt}>Return</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   returnBtn: {
    backgroundColor: "#E6E6E6",
    marginTop: 27,
    marginLeft:10,
    borderRadius: 40,
    width: 120,
    alignItems: 'center'
  },
  btnTxt: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 20,
    margin: 15
  },
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  notiContainer:{
    height:250,
    marginTop: 20,
  },
  notiContainer1:{
    height:250,
  },
   newTittle: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 18,
    marginLeft: 22
  },
  viewedTitle: {
    marginTop:50,
    fontWeight: "bold",
    color: "#121212",
    fontSize: 18,
    marginLeft: 22
  },
  viewedNot:{
    backgroundColor:'#E6E6E6'
  },
  newNot:{
    backgroundColor: "rgba(184,233,134,0.7)",
  },
  newMsg:{
    fontWeight:'bold'
  },
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
    justifyContent:'center',
    height:20,
    alignSelf:"center"
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
    marginLeft: 5}

});

export default Notification;
