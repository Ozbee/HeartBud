import React from "react";
import { View,Text, ImageBackground,Image,StyleSheet } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
const CustomDrawer=(props)=>{
    return(
        <View style={{flex:1,marginTop:-50}}>
        <DrawerContentScrollView {...props}>
        <ImageBackground source={require ('../assets/backImage(1).jpeg')} style={{alignItems:'center',paddingTop:60,marginBottom:20}}>
        <Image source={require ('../assets/user-profile.jpg')} style={styles.image}/>
        <Text style={[styles.txt,styles.firstName]}>{name}</Text>
        <Text style={[styles.txt,styles.email]}>{email}</Text>
        </ImageBackground>
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.bottom}>
            <Text style={styles.bottomtxt}>© HeartBud 2023</Text>
            <Text style={styles.bottomtxt}>-Ozbee -Pharoll</Text>
        </View>
        </View>

        
    )
}

const styles=StyleSheet.create(
    {image:{
        width:80,
        height:80,
        borderRadius:40,
        marginBottom:20,
        marginTop:10
    },
    txt:{
        color:'white',
        fontSize:18,
        marginBottom:5
    },
    firstName:{
        fontWeight:'bold'
    },
    email:{marginBottom:10},
    bottom:{
        alignItems:'center',
        marginBottom:12
    },
    bottomtxt:{
        marginBottom:2
    }
}
)
export default CustomDrawer

