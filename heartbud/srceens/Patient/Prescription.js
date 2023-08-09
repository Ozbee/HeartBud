
import React from "react";
import { StyleSheet,Text,View } from "react-native";
import { Feather,Ionicons } from "@expo/vector-icons";
import MedList from "./../../components/MedList.js";
import { useEffect,useState } from "react";

const Prescription = (props)=>{
    const {user}=props
    const [medicine,setMedicine]=useState([]);

useEffect(
    () => {
        const getUser = async () => {
          try {
            const response = await fetch(`http://192.168.1.118:8080/myprescription?email=${user}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }   
            });
            const results = await response.json();
            if (results && results.length > 0) {
                setMedicine(results);           
            }
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [user]
);
  return (
    <View >
        <View>
            <View style={styles.legendContainer}>
                <Text style={styles.legend}>Legend </Text>
                <Text style={styles.legendText}>(time to take medicine):</Text>
            </View>
            <View style={styles.legendDescription}>
                <View style={styles.legendDescription1}>
                <Text style={styles.txtDes}>Morning:</Text>
                <Feather name={'sunrise'} size={18} color={'black'} />                
                </View>

                <View style={[styles.legendDescription1,styles.legendDescription2]}>
                <Text style={styles.txtDes}>Afternoon:</Text>
                <Ionicons name={'sunny'} size={18} color={'black'} />
                </View>
                
                <View style={styles.legendDescription1}>
                <Text style={styles.txtDes}>Evening:</Text> 
                <Feather name={'moon'} size={18} color={'black'} />
                </View>

                       
            </View>
        
        </View>

        {medicine.map((med,index)=>(
            <View key={index} style={index===0 ? styles.list1 : styles.list2}>
                <MedList 
                txt={med.medicine} 
                milligram={String(med.milligram) + ' mg'}
                morningTxt={med.morning_dose}
                afternoonTxt={med.afternoon_dose} 
                eveiningTxt={med.evening_dose} 
                />
            </View>
        ))}

        
    </View>

    );
}

const styles=StyleSheet.create({
    legendContainer:{
        marginTop:28,
        flexDirection:"row",
        alignSelf:"center"
    },
    legend:{
        fontWeight:"bold",
        fontSize:22
    },
    legendText:{
        alignSelf:"center",
        fontSize:15
    },
    legendDescription:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:8,
        
    },
    legendDescription1:{
        flexDirection:"row",
        justifyContent:"center",
    },
    legendDescription2:{
        marginLeft:18,
        marginRight:18
    },
    txtDes:{
        marginRight:4,
        fontSize:18
    },
    list1:{
        marginTop:40
    },
    list2:{
        marginTop:30
    }
})


export default Prescription;