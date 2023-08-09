import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Diet=(props) => {
    const {user}=props
    const [sundayBr,setSundayBr]=useState();
    const [mondayBr,setMonndayBr]=useState();
    const [tuesdayBr,setTuesdayBr]=useState();
    const [wednessdayBr,setWednessdayBr]=useState();
    const [thursdayBr,setThursdayBr]=useState();
    const [fridayBr,setFridayBr]=useState();
    const [satdayBr,setSatdayBr]=useState();
    
    useEffect(() => {
        const getUser = async () => {
          try {
            const response = await fetch(`http://192.168.1.118:8080/userdiet?email=${user}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }   
            });
            const results = await response.json();
            if (results && results.length > 0) {
                for (let i=0;i<results.length;i++){
                if((results[i].Day==='Sunday')&&(results[i].category==='Breakfast')){ setSundayBr(results[i].food_meal);}
                else if((results[i].Day==='Monday')&&(results[i].category==='Breakfast')){ setMonndayBr(results[i].food_meal);}
                else if((results[i].Day==='Tuesday')&&(results[i].category==='Breakfast')){ setTuesdayBr (results[i].food_meal);}
                else if((results[i].Day==='Wednessday')&&(results[i].category==='Breakfast')){ setWednessdayBr(results[i].food_meal);}
                else if((results[i].Day==='Thursday')&&(results[i].category==='Breakfast')){ setThursdayBr(results[i].food_meal);}
                else if((results[i].Day==='Friday')&&(results[i].category==='Breakfast')){ setFridayBr(results[i].food_meal);}
                else if((results[i].Day==='Saturday')&&(results[i].category==='Breakfast')){ setSatdayBr(results[i].food_meal);}
                }
            }
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [user]);

    return(
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                
                <View style={styles.highlighted}>
                    <TouchableOpacity >
                        <Text style={styles.btnHighlight}>Breakfast</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.unhighlighted}>
                <TouchableOpacity >
                    <Text style={styles.btn}>Lunch</Text>    
                </TouchableOpacity >
                </View>
                <View style={[styles.unhighlighted,{marginRight:22}]}>
                <TouchableOpacity >
                <Text style={styles.btn}>Supper</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomContainer}>
            
            <Text style={styles.heading}>Weekly Suggestion</Text>
                
            <View style={styles.mealContainer}>
            <View style={styles.leftTable}>
            <Text style={styles.heading2}>Days</Text>
            <Text style={styles.Txt}>Sunday</Text>
            <Text style={[styles.Txt,styles.current]}>Monday</Text>
            <Text style={styles.Txt}>Tuesday</Text>
            <Text style={styles.Txt}>Wednessday</Text>
            <Text style={styles.Txt}>Thursday</Text>
            <Text style={styles.Txt}>Friday</Text>
            <Text style={styles.Txt}>Saturday</Text>
            </View>
            
            <View style={styles.rightTable} >
            <Text style={styles.heading2}>Meals</Text>
            <Text style={styles.Txt}>{sundayBr}</Text>
            <Text style={[styles.Txt,styles.current]}> {mondayBr}</Text>
            <Text style={styles.Txt}>{tuesdayBr}</Text>
            <Text style={styles.Txt}>{wednessdayBr}</Text>
            <Text style={styles.Txt}>{thursdayBr}</Text>
            <Text style={styles.Txt}>{fridayBr}</Text>
            <Text style={styles.Txt}>{satdayBr}</Text>
            </View>
            
            </View>
            
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
      flex:1 ,
        backgroundColor:'#6bceaa'
    },
    topContainer:{
        backgroundColor:'#d9d9d9',
        marginTop:50,
        marginLeft:5,
        marginRight:5,
        borderRadius:20,
        alignSelf:'center',
        flexDirection:'row'
    },
    bottomContainer:{
        backgroundColor:'#ffffff',
        marginTop:40,
        marginRight:10,
        marginLeft:10,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:20,
        marginBottom:20
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        padding:10,
        alignSelf:'center'
    },
    btn:{
        fontSize:18,
        borderBottomColor:"black",
        borderBottomWidth:2,
        
    },
    highlighted:{
        backgroundColor:'#ffffff',
        width:90,
        alignItems:'center',
        borderRadius:7,
        marginLeft:20,
        marginRight:15,
        marginTop:12,
        marginBottom:12
    },
    btnHighlight:{
        fontSize:22,
        borderBottomColor:"black",
        borderBottomWidth:2,

    },
    unhighlighted:{
        backgroundColor:'#f0f1f2',
        width:90,
        alignItems:'center',
        borderRadius:7,
        marginLeft:8,
        marginRight:10,
        marginTop:12,
        marginBottom:12
    },
    mealContainer:{
        flexDirection:'row',
        alignSelf:"center"
    },
    leftTable:{
        margin:10,
        borderRightWidth:2,
        marginLeft:30,
        alignItems :'center',
        paddingRight:10
    },
    rightTable:{
        marginRight:30,
        marginBottom:10,
        marginTop:10,
        textAlign: 'left'

    },
    heading2:{
        fontSize:20,
        paddingLeft:25,
        paddingRight:25,
        fontWeight:'bold',
        borderBottomWidth:2,
        alignSelf:'center'
    },
    Txt:{
        fontSize:18,
        marginTop:20,
        borderBottomWidth: 2
    },
    current:{
        fontWeight:'bold'
    }
})

export default Diet