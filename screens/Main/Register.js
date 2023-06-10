/* eslint-disable no-undef */
import React,{useState} from "react";
import { SafeAreaView,ScrollView,View,Text,StyleSheet,Image,TextInput, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PasswordBox from './../../components/PasswordBox'
import DatePicker from "react-native-datepicker"
import Ionicons from 'react-native-vector-icons/Ionicons'

const Register =({navigation})=>{
      const [date,setDate]=useState('09/10/1997');
         return(
        <SafeAreaView style={styles.Page}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
            <View style={styles.ImgContainer}>
                <Image style={styles.logImg} source={require('./../../assets/snack-icon.png')}/>
            </View>
            <Text style={styles.Logintxt}> Signup </Text>

            <View style={{flexDirection:'row',marginTop:25}}>
            <TouchableOpacity>
            <Image style={[styles.socialMedias,styles.google]} source={require('./../../assets/GoogleSVG.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={[styles.socialMedias,styles.tweet]} source={require('./../../assets/Twitter.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={[styles.socialMedias,styles.fb]} source={require('./../../assets/fb.png')}/>
            </TouchableOpacity>
            </View>

            <Text style={styles.txt}>or Signup with Email...</Text>

            <View style={styles.InputContainer}>
                <Ionicons name="md-person-outline" size={20} color="#666"/>
                <TextInput style={styles.Input} placeholder="Name" keyboardType="text" />
            </View>
           <View style={styles.InputContainer}>
                <MaterialIcons name="alternate-email" size={20} color="#666"/>
                <TextInput style={styles.Input} placeholder="Email ID" keyboardType="email-address" />
            </View>
            <View style={styles.dobContainer}>
                <Ionicons name="calendar-outline" size={20} color="#666" style={{alignSelf:"center"}}/>
                <Text style={styles.dobText} >Date of birth</Text>
                <DatePicker
          //style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01/01/1900"
          maxDate="01/01/2020"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              display: 'none',
              /*position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,*/
            },
            dateInput: {
            marginLeft:-25,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
                </View>
                

           <PasswordBox/>
           <PasswordBox/>

            <TouchableOpacity  style={styles.LoginbtnContainer}>
                <Text style={styles.Loginbtn}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.goBack()} style={{margin:20}}>
                <Text style={{color:'#6bceaa',margin:20,fontWeight:700}}>Have account?Login</Text>
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
        fontWeight:700,
        marginLeft:10,
        marginTop:20,
        alignSelf:"center"
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
    dobContainer:{
        flexDirection:"row",
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginTop:5,
        paddingTop:15,
        width:280
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
        alignSelf:"left"
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