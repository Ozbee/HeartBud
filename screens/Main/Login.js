/* eslint-disable no-undef */
import React from "react";
import { SafeAreaView,ScrollView,View,Text,StyleSheet,Image,TextInput, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from 'react-native-vector-icons/Ionicons'
import PasswordBox from './../../components/PasswordBox'
import Register from './Register'
const Login =({navigation})=>{
      
    return(
        <SafeAreaView style={styles.Page}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
            <View style={styles.ImgContainer}>
                <Image style={styles.logImg} source={require('./../../assets/snack-icon.png')}/>
            </View>
            <Text style={styles.Logintxt}> Login </Text>
            <View style={styles.InputContainer}>
                <MaterialIcons name="alternate-email" size={20} color="#666"/>
                <TextInput style={styles.Input} placeholder="Email ID" keyboardType="email-address" />
            </View>
           
           <PasswordBox/>

           <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={{alignSelf:'flex-start'}}>
                <Text style={{color:'#6bceaa',marginTop:20,fontWeight:700,fontSize:16,marginLeft:20}}>Forgot password?</Text>
            </TouchableOpacity>


            <TouchableOpacity  style={styles.LoginbtnContainer}>
                <Text style={styles.Loginbtn}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>or Login with ...</Text>

            <View style={{flexDirection:'row',marginTop:15}}>
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

            <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={{margin:20}}>
                <Text style={{color:'#6bceaa',margin:20,fontWeight:700,fontSize:16}}>No account?  Register</Text>
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

export default Login;