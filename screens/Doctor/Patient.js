import React, { Component } from "react";
import { StyleSheet,SafeAreaView, View, Text,ScrollView,Image } from "react-native";

function Patient(props) {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.rect}>
      <Image style={styles.graph} source={require('./../../assets/graph.png')}/>
      </View>
      
        <View style={styles.nameRow}>
            <View style={{marginLeft:5,marginRight:20}}>
            
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
      
      <ScrollView style={styles.rect3}>
        <Text style={styles.details}>Details</Text>
        <View style={styles.subContainer}>
        <View >
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Cholestrol:</Text>
                    <Text style={styles.info}>-</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Glucose:</Text>
                    <Text style={styles.info}>-</Text>
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
                    <Text style={styles.description}>ECG:</Text>
                    <Text style={styles.info}>-</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Temperature:</Text>
                    <Text style={styles.info}>35.7</Text>
        </View>

        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Blood sugar:</Text>
                    <Text style={styles.info}>140</Text>
        </View>
        <View style={styles.detailsContent}>
                    <Text style={styles.description}>Blood pressure:</Text>
                    <Text style={styles.info}> 70/110</Text>
        </View>
        </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  rect: {
    backgroundColor: "#E6E6E6",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  graph:{

    width:340,
    height:340,
    alignSelf:'center'
  },
  description: {
    fontWeight:700,
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
    fontWeight:700,
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
  }
});

export default Patient;
