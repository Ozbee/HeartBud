import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

export default function NoticeInfo({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.miniContainer}>
                <Text style={styles.header}>Sender:</Text>
                <Text style={styles.sender}>dfghjkl;kjihgughij</Text>
            </View>
            <View style={styles.miniContainer}>
                <Text style={styles.header}>Subject:</Text>
                <Text style={styles.subject}> y8uio-p=lkjhg</Text>
            </View>
            <View style={styles.miniContainer}>
                <Text style={styles.header1}>Message:</Text>
                <View style={styles.messagebox}>
                <ScrollView>
                <Text style={styles.message}>we5rtfgyhuijjgyftdrd6t7yuyctxrexr6t7y8u9ig hij buni yu9ihisyguhldkf; vaeugofhle fygeu
                eyfdg agufbooadnoaiodhuawi gvafjsgoubflaehfb
                </Text>
                </ScrollView>
                </View>
            </View>
            <View>
            <TouchableOpacity style={styles.returnBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnTxt}>Return</Text>
        </TouchableOpacity>
        </View>
        </View>
)}

const styles=StyleSheet.create({
  returnBtn: {
    backgroundColor: "#E6E6E6",
    marginTop: 27,
    marginLeft:10,
    borderRadius: 40,
    width: 120,
    alignItems: 'center'
  },
  btnTxt: {
    fontWeight: "bold",
    color: "#121212",
    fontSize: 20,
    margin: 15
  },
container:{
  marginTop:25,
},
miniContainer:{
  flexDirection:'row',
  marginTop:15,
  marginLeft:10
},
header:{
  fontSize:18,
  fontWeight:'bold',
  marginRight:20
},
header1:{
  fontSize:18,
  fontWeight:'bold',
  marginRight:5
},
sender:{
fontSize:18
},
subject:{
fontSize:18
},
message:{
marginTop:10,
marginLeft:15,
fontSize:18,
width:220,
height:250,
},
messagebox:{
width:250,
height:280,
backgroundColor:"#E6E6E6"

}
})