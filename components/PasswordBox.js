import React, {useState} from 'react';
import {StyleSheet,Pressable,TextInput,View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';

export default function PasswordBox(){
    const{passwordVisibility,rightIcon, handlePasswordVisibility }=
    useTogglePasswordVisibility();
    const [password,setPassword] = useState('');
return(
    <View style={styles.InputContainer}>
                <Ionicons name="ios-lock-closed-outline" size={20} color="#666"/>
                <TextInput style={styles.Input} placeholder="Password" secureTextEntry={passwordVisibility}/>
               
               <Pressable onPress={handlePasswordVisibility}>
               <MaterialCommunityIcons name={rightIcon} size={15} color='#666'  />
               </Pressable>
                
    </View> 
)
}

const styles=StyleSheet.create({
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

})