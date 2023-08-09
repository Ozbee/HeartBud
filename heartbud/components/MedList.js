
import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { Feather, Entypo,Ionicons } from "@expo/vector-icons";

const MedList=(props)=>{
    const{txt,morningTxt,afternoonTxt,eveiningTxt,milligram} =props
    const {item,textContent,arrowRight,morning,afternoon,evening,dose,textContent2} =styles

    return(
        <View style={item}>
            <View style={styles.period}>
                <View style={morning}>
                    <Feather name={'sunrise'} size={16.5} color={'white'} />
                    <Text style={dose}> {morningTxt} </Text>
                </View>

                <View style={afternoon}>
                    <Ionicons name={'sunny'} size={15.8} color={'white'}  />            
                    <Text style={dose}> {afternoonTxt} </Text>
                </View>
            
                <View style={evening}>
                    <Feather name={'moon'} size={16.5} color={'white'} />            
                    <Text style={dose}> {eveiningTxt} </Text>
                </View>

            </View>

            <View style={styles.info}>
                <View style={{flexDirection:'row'}}>
                <Text style={textContent}> {txt} </Text>
                <Text style={textContent2}> {milligram} </Text>
                </View>
            </View>

            <View style={styles.icon}>
                <Entypo style={arrowRight} name="chevron-small-right" />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    item:{
        width:350,
        flexDirection:'row',
        borderWidth:1,
        backgroundColor:'rgba(74,74,74,0.4)',
        justifyContent:'center',
        alignSelf:'center'

    },
    period:{
        flexDirection:'row',
        marginTop:3,
        marginLeft:4
    },
    morning:{
    },
    afternoon:{
        marginLeft:4,
        marginRight:4
    },
    evening:{},
    dose:{
        marginTop:2,
        justifyContent:'center',
        fontSize:12,
        fontWeight:'bold'
    },
    info:{
        flex:1,
        alignItems:'center',
    },
    textContent:{
        fontSize:25,
        alignSelf: 'center'
    },
    textContent2:{
        fontSize:14,
        alignSelf: 'center'
    },
    icon:{
        justifyContent: 'space-around',
        alignItems:'center'
    },
    arrowRight:{
        color:'white',
        fontSize:30
    }
})

export default MedList