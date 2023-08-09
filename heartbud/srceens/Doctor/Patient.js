import React, { Component } from "react";
import { StyleSheet,TouchableOpacity, View, Text,ScrollView,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Patient(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <ScrollView >
      <View style={styles.rect}>
      <Image style={styles.graph} source={require('./../../assets/graph.png')}/>
      </View>
      
        <View style={styles.nameRow}>
            <View style={{marginLeft:4,marginRight:20}}>
            
            <View style={{flexDirection:'row'}}>
            <Text style={styles.description}>Name:</Text>
          <Text style={styles.info}>Amer Mohammed</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={styles.description}>Age:</Text>
            <Text style={styles.info}>34</Text>
            </View>

            </View>

            <View >
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.description}>Sex:</Text>
                    <Text style={styles.info}>Male</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.description}>Condition:</Text>
                    <Text style={[styles.info,styles.stable]}>Stable</Text>
        </View>
            </View>
        </View>

      <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn,styles.btn1]} onPress={() => navigation.navigate('PresScreen')}>
      <Text style={styles.btnTXT}>Prescription</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.btn,styles.btn2]} onPress={() => navigation.navigate('Diet')}>
      <Text style={styles.btnTXT}>Diet</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Set Appointment')}>
      <Text style={styles.btnTXT}>Set Appointment</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.btn,styles.btn2]} onPress={() => navigation.navigate('PredScreen')}>
      <Text style={styles.btnTXT}>Predict CVD</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.rect3}>
        <Text style={styles.details}>Details</Text>
        <View style={styles.subContainer}>
        <View >
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Cholestrol:</Text>
                    <Text style={styles.info}>210</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Glucose:</Text>
                    <Text style={styles.info}>82(4.0)</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Alchol:</Text>
                    <Text style={styles.info}>No</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Smokes:</Text>
                    <Text style={styles.info}>Yes</Text>
        </View>
        </View>

        <View style={{marginLeft:30}} >
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>BMI:</Text>
                    <Text style={styles.info}>20.5</Text>
        </View>
        
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Diastolic:</Text>
                    <Text style={styles.info}>70</Text>
        </View>

        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Systolic:</Text>
                    <Text style={styles.info}> 110</Text>
        </View>
        </View>
        </View>
      </ScrollView>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5
  },
  rect: {
    backgroundColor: "#E6E6E6",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  graph:{

    width:340,
    height:340,
    alignSelf:'center'
  },
  description: {
    fontWeight:'bold',
    fontSize:18,
    
  },
  info: {
    marginLeft:5,
    fontSize:18
  },
  nameRow: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 21,
    alignSelf:'center'
  },
  rect3: {
    backgroundColor: "#E6E6E6",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom:20
  },
  details: {
    color: "#121212",
    marginTop: 16,
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    textDecorationLine:'underline',
    marginBottom:10
  },
  detailsContent:{
    flexDirection:'row',
    marginLeft:15,
    marginTop:10
  },
  subContainer:{
      flexDirection:'row',
    },
  stable:{
    color: "rgba(126,211,33,1)",
  },
  btnContainer:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    flex:1
  },
  btn:{
    height:22,
    borderRadius:20,
    backgroundColor:'rgba(126,211,33,1)'
  },
  btn1:{marginRight:55,marginLeft:-30},
  btn2:{marginLeft:20},
  btnTXT:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:10,
    marginRight:10
  }
});

export default Patient;
