import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

const Diet=() => {
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
            <Text style={styles.Txt}>Tea + Bread + Eggs</Text>
            <Text style={[styles.Txt,styles.current]}> Coffee + Bread + Salad</Text>
            <Text style={styles.Txt}>Juice + Bread</Text>
            <Text style={styles.Txt}>Coffee + Bread + Jam</Text>
            <Text style={styles.Txt}>Tea + Salad + Sausage</Text>
            <Text style={styles.Txt}>Soup + Bread + Salad</Text>
            <Text style={styles.Txt}>Coffee + Bread</Text>
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
        fontWeight:700,
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
        fontWeight:700,
        borderBottomWidth:2,
        alignSelf:'center'
    },
    Txt:{
        fontSize:18,
        marginTop:20,
        borderBottomWidth: 2
    },
    current:{
        fontWeight:700
    }
})

export default Diet