import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from 'react-native-vector-icons/Ionicons'
import PasswordBox from './../../components/PasswordBox'
import Register from './Register'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation()


  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.118:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})     
     });

      const data = await response.json();

      // Handle the response from the server
      // For example, you can check if the login was successful
      if (data.success) {
        console.log(data)
        // Do something if login was successful, such as navigate to another screen
        if(data.role === 'admin'){
            navigation.navigate('AdminNav',{userEmail:email});
        }else if(data.role === "doctor"){
            navigation.navigate('DoctorNav',{userEmail:email})
        }else{
            navigation.navigate('PatientNav',{userEmail:email})
        }
        console.log("You have successfully logged in")
        // navigation.navigate('MainNav')
        
      } else {
        // Do something if login failed, such as showing an error message
        console.log(data.role);
        console.log('Login failed');
      }
    } catch (error) {
      // Handle any error that occurred during the request
      console.log('Error:', error.message);
    }
  };

  const setPasswordToggleVisibility = ()=>{
    setShowPassword(!showPassword)
  }

  return (
    <SafeAreaView style={styles.Page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={styles.ImgContainer}>
            <Image style={styles.logImg} source={require('./../../assets/hearticon.jpg')} />
          </View>
          <Text style={styles.Logintxt}>Login</Text>
          <View style={styles.container}>
            {/* <MaterialIcons name="alternate-email" size={20} color="#666" /> */}
            <TextInput
              style={styles.passInput}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text)=>setEmail(text)}
            />
          </View>
          <View style={styles.container}>
            <TextInput 
            style={styles.passInput}
            secureTextEntry={!showPassword}
            placeholder="Password"
            value={password}
            onChangeText={(text)=>setPassword(text)}
            />
            <TouchableOpacity style={styles.toggleButton} onPress={setPasswordToggleVisibility}>
            <Ionicons name={showPassword? 'eye': 'eye-off'} size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('')} style={{ alignSelf: 'flex-start' }}>
            <Text style={{ color: '#6bceaa', marginTop: 20, fontWeight: 'bold', fontSize: 16, marginLeft: 20 }}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} style={styles.LoginbtnContainer}>
            <Text style={styles.Loginbtn}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.txt}>or Login with ...</Text>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
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

          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ margin: 20 }}>
            <Text style={{ color: '#6bceaa', margin: 20, fontWeight: 'bold', fontSize: 16 }}>No account? Register</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles=StyleSheet.create({
    Page :{
        flex: 1,
        justifyContent:"space-around",
        
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
        fontWeight: 'bold',
        marginLeft:10,
        marginTop:20,
        alignSelf:"center"
    },  
      passInput: {
        flex: 1,
        height: 40,
      },
      toggleButton: {
        padding: 10,
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        paddingBottom: 7,
        paddingTop: 7,
        margin: 10
      },
    // InputContainer:{
    //     flexDirection:"row",
    //     borderBottomColor:'#ccc',
    //     borderBottomWidth:1,
    //     paddingBottom:8,
    //     marginTop:15,
    //     paddingTop:15,
    //     width:280
    // },
    Input:{
        flex:1,
        paddingVertical:0,
        paddingLeft:10,
        fontSize:16
    },

    LoginbtnContainer:{
        marginTop:35,
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
        marginTop:20,
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

export default Login;
//     const url = "http://192.168.137.6:8080/Kwakye"
//     const [data, setData] = useState();

//   useEffect(() => {
//     // fetch data
//     const dataFetch = async () => {
//       const data = await (
//         await fetch(
//             url
//         )
//       ).json();

//       // set state when the data received
//       setData(data);
//     };

//     dataFetch();
//   }, []);

    // const handlePress = ()=>{

    // }