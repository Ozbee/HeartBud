import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PasswordBox from './../../components/PasswordBox'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from "react-native-paper";

const Register = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      password: password
    };

    // Make the API request
    fetch('https://192.168.137.6:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log('Registration successful!', data);
        // You can perform any additional actions here, such as displaying a success message or navigating to another screen
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        // You can display an error message to the user or perform other error handling actions
      });
  }

  return (
    <SafeAreaView style={styles.Page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.ImgContainer}>
            <Image style={styles.logImg} source={require('./../../assets/snack-icon.png')} />
          </View>
          <Text style={styles.Logintxt}> Signup </Text>

          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <TouchableOpacity>
              <Image style={[styles.socialMedias, styles.google]} source={require('./../../assets/GoogleSVG.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={[styles.socialMedias, styles.tweet]} source={require('./../../assets/Twitter.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={[styles.socialMedias, styles.fb]} source={require('./../../assets/fb.png')} />
            </TouchableOpacity>
          </View>

          <Text style={styles.txt}>or Signup with Email...</Text>

          <View style={styles.InputContainer}>
            <Ionicons name="md-person-outline" size={20} color="#666" />
            <TextInput
              style={styles.Input}
              placeholder="Name"
              keyboardType="text"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.InputContainer}>
            <MaterialIcons name="alternate-email" size={20} color="#666" />
            <TextInput
              style={styles.Input}
              placeholder="Email ID"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.container}>
      <View style={styles.dobContainer}>
        <Ionicons name="calendar-outline" size={20} color="#666" />
        <Text style={styles.date}>Date: {date.toDateString()}</Text>
        <TextInput
              style={styles.Input}
              placeholder="Year / Month / Day"
              keyboardType="default"
              value={date}
              onChangeText={text => setDate(date)}
            />
      </View>
      
    </View>

          <PasswordBox
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <PasswordBox
            value={password}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.LoginbtnContainer}>
            <Text style={styles.Loginbtn}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 20 }}>
            <Text style={{ color: '#6bceaa', margin: 20, fontWeight: "bold" }}>Have account?Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const toogglePassword=()=>{

}

const styles=StyleSheet.create({
    Page :{
        justifyContent:"space-around"
    },
    body:{
        alignItems:"center"
    },
    ImgContainer:{
        alignItems:"center"
    },
    logImg:{
        height:250,
        width:250,
        transform:[{rotate:'-4deg'}],
        marginTop:35
    },
    Logintxt :{
        color:"black",
        fontSize:25,
        fontWeight:"bold",
        marginLeft:10,
        marginTop:20,
        alignSelf:"center"
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    InputContainer:{
        flexDirection:"row",
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginTop:15,
        paddingTop:15,
        width:280
    },
    dobContainer: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      width: '78%'
    },
    date: {
      marginLeft: 10,
      marginRight: 10,
      fontWeight: 'bold',
      fontSize: 16,
    },
    button: {
      marginLeft: 10,
      backgroundColor: 'grey',
      marginBottom: 5,
    },
    dateIcon: {
      marginRight: 10,
    },
    dateInput: {
      flex: 1,
    },
    Input:{
        flex:1,
        paddingVertical:0,
        paddingLeft:10,
        fontSize:16
    },
    dobText:{
        flex:1,
        paddingVertical:0,
        paddingLeft:2,
        fontSize:16,
        alignSelf:"center"
    },

    LoginbtnContainer:{
        marginTop:50,
        backgroundColor:'#6bceaa',
        width:120,
        borderRadius:12
    },
    Loginbtn:{
        color:'white',
        fontSize:25,
        textAlign :"center",
        padding:6 
    },
    txt:{
        color:"#666",
        fontSize:18,
        marginLeft:20,
        marginTop:40,
    },
    dateTxt: {
      marginLeft: 10,
      marginRight: 10,
    },
    socialMedias:{
        marginRight:7,
        marginLeft:15
    },
    tweet:{
        height:45,
        width:45
    },
    fb:{
        height:35,
        width:35,
        marginTop:4,
        marginLeft:20
    },
    google:{
        height:45,
        width:45,
    }

})

export default Register;