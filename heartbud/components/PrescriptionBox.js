import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const PreList=(props)=>{
  const{medName,period}=props
  return(
    <View style={styles.container}>
      <View style={styles.medContainer}>
      <Text style={styles.txt}>{medName}</Text>
      </View>

      <View style={styles.periodContainer}>
      <Text style={styles.txt}>{period}</Text>
      </View>
      
      <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.modifyBtn,styles.btn]}>
      <Text style={[styles.txt,styles.btnTxt]}>Modify</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.deleteBtn,styles.btn]}>
      <Text style={[styles.txt,styles.btnTxt]}>Delete</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:10
  },
  medContainer:{
    width:120,
    marginLeft:10
    },
  periodContainer:{
    width:72,
    marginLeft:10
    },
  btnContainer:{
    flexDirection:'row',
    marginLeft:10
    
    },
    btn:{width: 70,
    height: 28,
    justifyContent:'center',
    borderRadius:20
    },
    modifyBtn:{
    backgroundColor: "rgba(148,212,75,1)"},
    deleteBtn:{
      backgroundColor: "rgba(238,19,19,1)",
      marginLeft:10
    },
    txt:{
      fontSize: 16,
      alignSelf:'center',
      
    },
    btnTxt:{
      fontWeight:'bold',
      color:'white'
    }
})

export default PreList