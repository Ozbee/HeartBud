import React,{useState} from 'react';
import {SafeAreaView,ScrollView,View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const SetAppointment=()=>{
  const [date,setDate]=useState('09/10/2023');
  return(
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.rowContainers}>
    <Text style={styles.txt}>Name:</Text>
    <Text style={styles.txt2}>Amer Mohammed</Text>
    </View>

    <View style={styles.rowContainers}>
    <Text style={styles.txt}>Patient ID:</Text>
    <Text style={styles.txt2}>144XXXXX</Text>
    </View>
    
    <View style={styles.rowContainers}>
    <Text style={styles.txt}>Purpose:</Text>
    <TextInput style={[styles.input,styles.input1]} placeholder="Purpose" keyboardType="text"/>
    </View>
    
    <View style={styles.dobContainer}>
                <Ionicons name="calendar-outline" size={20} color="#666" style={{alignSelf:"center"}}/>
                <Text style={[styles.txt,styles.date]} >Date:</Text>
                <TextInput style={[styles.input,styles.input1]} placeholder="Year / month / day" keyboardType="text"/>
                </View>

    <View>
    <Text style={styles.txt}>Time:</Text>
    <Text></Text>
    </View>

    <View style={styles.rowContainers}>
    <Text style={styles.txt}>Details:</Text>
    <TextInput style={[styles.input,styles.input2]} placeholder="Details of Appointment" keyboardType="text" />
    </View>

    <View style={styles.btnsContainer}>
    <TouchableOpacity style={styles.btn}>
    <Text style={styles.btnContent}>Return</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn2}>
    <Text style={styles.btnContent}>Send</Text>
    </TouchableOpacity>
    </View>
    
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        marginLeft:20
    },
    txt:{
      fontSize:18,
      fontWeight:'bold'
    },
    txt2:{
      fontSize:18,
      fontWeight:'bold',
      marginLeft:5
    },
    dobContainer:{
        flexDirection:"row",
        //borderBottomColor:'#ccc',
        //borderBottomWidth:1,
        paddingBottom:8,
        marginTop:5,
        paddingTop:15,
        width:280
    },
    date:{alignSelf:"center",
    marginLeft:5},
    btnsContainer:{
      marginTop:20,
      flexDirection:'row',
      alignSelf:'center'

    },
    rowContainers:{
      flexDirection:'row',
      marginTop:10,
      marginBottom:5,
      
    },
    input:{
      width:220,
      marginLeft:5,
      borderWidth:1,
      borderRadius:5,
      paddingLeft:5,
      paddingRight:5
    },
    input1:{height:35,fontSize:18},
    input2:{height:100,fontSize:18},
    btn:{
      backgroundColor:'#35b276',
      alignSelf:'flex-start',
      marginRight:20,
      borderRadius:8
      },
    btn2:{
      backgroundColor:'#35b276',
      alignSelf:'flex-end',
      marginLeft:20,
      borderRadius:8,
      marginTop:2
    },
    btnContent:{
      padding:8,
      paddingLeft:12,
      paddingRight:12,
      color:"#ffffff",
      fontSize:20
    }
})

export default SetAppointment