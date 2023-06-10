
import React from "react";
import { StyleSheet,Text,View } from "react-native";
import { Feather,Ionicons } from "@expo/vector-icons";
import MedList from "./../../components/MedList.js";

const Prescription = ()=>{
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

        <View style={styles.list1} >
        <MedList   txt='Zinc ' milligram='(20mg)' morningTxt='1' afternoonTxt='2' eveiningTxt='1' />
        </View>
        <View style={styles.list2} >
        <MedList   txt='Inhibitors' milligram='' morningTxt='1' afternoonTxt='2' eveiningTxt='1' />
        </View>
        <View style={styles.list2} >
        <MedList   txt='Aspirin ' milligram='(20mg)' morningTxt='1' afternoonTxt='1' eveiningTxt='1' />
        </View>
        <View style={styles.list2} >
        <MedList   txt='Vitamin D ' milligram='(15mg)' morningTxt='1' afternoonTxt='-' eveiningTxt='1' />
        </View>
        <View style={styles.list2} >
        <MedList   txt='Beta blockers' milligram='' morningTxt='1' afternoonTxt='-' eveiningTxt='1' />
        </View>
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