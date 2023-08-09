import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,TextInput,ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Predicter({navigation}) {
  const [name, setName] = useState('');
  const [patientId, setPatientId] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [glucose, setGlucose] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [smokes, setSmokes] = useState('');
  const [systolic, setSystolic] = useState('');
  const [active, setActive] = useState('')
  const [prediction, setprediction] = useState('')

  const handleSubmit = () => {
    // Prepare the data to be sent
    const data = {
      // name,
      // patientId,
      sex,
      height,
      glucose,
      alcohol,
      diastolic,
      age,
      weight,
      cholesterol,
      smokes,
      systolic,
    };

    // Send the data to the server
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setprediction(result)
        // Handle the response from the server
        // (e.g., display the prediction results)
        navigation.navigate('Results', { prediction: result });
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };


  return (
    <View style={styles.container}>
    <ScrollView >
      <Text style={styles.toPredictRemotely}>To Predict Remotely</Text>

      <View style={styles.clickRow}>
        <Text style={styles.click}>Click</Text>
        <Icon name="arrow-down" style={styles.icon}></Icon>
      </View>
      <TouchableOpacity style={styles.automaticContainer}>
        <Text style={styles.automaticPrediction}>Automatic Prediction</Text>
      </TouchableOpacity>
      
      <View style={styles.manualFormContainer}>
        <Text style={styles.manualForm}>Manual Prediction Form</Text>
        
        <View style={styles.Column1}>
        <View >
        <Text style={styles.name3}>Name:</Text>
        <Text style={styles.patientId}>Patient ID:</Text>        
        </View>

        <View>
        <Text style={styles.patientName}>Amer</Text>
        <Text style={styles.patientIdNo}>144XXXXX</Text>        
        </View>
        </View> 

        <View style={styles.infoContainer}>        
        <View>
          <Text style={styles.txt1}>Sex:</Text>
          <Text style={styles.txt2}>Height:</Text>
          <Text style={styles.txt3}>Glucose:</Text>
          <Text style={styles.txt4}>Alcohol:</Text>
          <Text style={styles.txt5}>Diastolic:</Text>
        </View>

        <View style={styles.inputContainer1}>
          <Text style={styles.txt1}>M</Text>
          <TextInput style={styles.input} onChangeText={setSex} value={sex} keyboardType="numeric" />
          <TextInput style={styles.input} onChangeText={setHeight} value={height} keyboardType="numeric"/>
          <TextInput style={styles.input} onChangeText={setGlucose} value={glucose} keyboardType="text"/>          
          <TextInput style={styles.input} onChangeText={setAlcohol} value={alcohol}keyboardType="numeric"/>
          <TextInput style={styles.input} onChangeText={setDiastolic} value={diastolic}keyboardType="numeric"/>
          
        </View>

        <View style={styles.infoContainer1}>
          <Text style={styles.txt1}>Age:</Text>
          <Text style={styles.txt2}>Weight:</Text>
          <Text style={styles.txt3}>Cholestorol:</Text>
          <Text style={styles.txt4}>Smokes:</Text>
          <Text style={styles.txt5}>Systolic:</Text>
        </View>

        <View style={styles.inputContainer1}>
          <Text style={styles.txt1}>32</Text>
          <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric"/>
          <TextInput style={styles.input} value={weight} onChangeText={setWeight} keyboardType="numeric"/>
          <TextInput style={styles.input} value={cholesterol} onChangeText={setCholesterol} keyboardType="text"/>          
          <TextInput style={styles.input} value={smokes} onChangeText={setSmokes} keyboardType="numeric"/>          
          <TextInput style={styles.input} value={systolic} onChangeText={setSystolic} keyboardType="numeric"/>          
        </View>

        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.simulatePrediction}>Predict</Text>
        </TouchableOpacity>
      </View>
      <View>
        {(prediction===1)?<Text>Shows you are postive </Text>:<Text>You are negative</Text>}
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toPredictRemotely: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 22,
    marginTop: 20,
    marginLeft: 96
  },
  automaticContainer: {
    backgroundColor: "#E6E6E6",
    marginTop: 10,
    marginLeft: 83,
    width:230
  },
  automaticPrediction: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 20,
    margin: 15
  },
  manualFormContainer: {
    width: 328,
    height: 400,
    backgroundColor: "#E6E6E6",
    marginTop: 28,
    marginLeft: 21
  },
  manualForm: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 20,
    textDecorationLine: "underline",
    marginTop: 6,
    marginLeft: 58
  },
  Column1:{
    flexDirection:'row'
  },
  name3: {
    color: "#121212",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 22
  },
  patientId: {
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 22
  },
  patientName:{
    color: "#121212",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 5
  },
  patientIdNo:{
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 5
    },
    infoContainer:{
      flexDirection:'row',
      marginTop:15,
      marginLeft:20
    },
    inputContainer1:{marginLeft:5},
  txt1: {
    color: "#121212",
    fontSize: 18,
    marginBottom:5
  },
  txt2: {
    color: "#121212",
    fontSize: 18,
    marginTop: 12
  },
  txt3: {
    color: "#121212",
    fontSize: 18,
    marginTop: 10
  },
  txt4: {
    color: "#121212",
    fontSize: 18,
    marginTop: 10
  },
  txt5: {
    color: "#121212",
    fontSize: 18,
    marginTop: 10
  },
  infoContainer1: {
    marginLeft: 22,
  },
  input: {
    width: 40,
    height: 25,
    backgroundColor: "rgba(252,250,250,1)",
     marginTop: 10
  },
  button: {
    backgroundColor: "rgba(5,168,15,1)",
    marginTop: 27,
    alignSelf:'center',
    borderRadius: 40,
    width: 120,
    alignItems: 'center'
  },
  simulatePrediction: {
    fontWeight: "bold",
    color: "rgba(254,253,253,1)",
    fontSize: 20,
    paddingTop:10,
    paddingBottom:15,
  },
  click: {
    color: "#121212",
    fontSize: 20
  },
  icon: {
    color: "rgba(43,175,79,1)",
    fontSize: 30,
    height: 40,
    width: 28,
    marginLeft: 8
  },
  clickRow: {
    flexDirection: "row",
    marginLeft: 155,
    marginRight: 141,
    marginTop:15
  }
});

export default Predicter;
