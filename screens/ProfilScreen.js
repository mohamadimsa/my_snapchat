import React  from "react";
import { Image,StyleSheet, Text, View , TouchableOpacity,Button} from 'react-native';
import logo from '../assets/logo.jpeg';
const ProfilScreen = (props) => {
 
      const goto = ()=> {
        props.navigation.navigate("Camera");
    }
    const gotomessage = ()=> {
      props.navigation.navigate("message");
  }
    
  const styles = StyleSheet.create({
    container:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor:'#FFFF00',
         },
      in:{
        fontSize:20,
        height:40,
        textAlign:"center",
        color:"#00BFFF",
  
      },
      te:{
        height:60,
        backgroundColor: '#eaeaea',
      },
      submit:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
      submit1:{
        marginLeft:230,
        marginTop:450,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:180,
      },
      submit2:{
        marginLeft:0,
        top:-55,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:180,
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },
      Logo:{
        width:170,
        height:170,
        top:140,
        left:130
      }

})
    return(

        <View style={styles.container}>
           
            <TouchableOpacity style={styles.submit} onPress={() =>props.logout()}>
       <Text style={[styles.submitText]} >SE DECONNECTER</Text>
            </TouchableOpacity>
            <Image style={styles.Logo} source={logo}/>
            <TouchableOpacity  style={styles.submit1} onPress={goto}>
                <View>
                  <Text style={[styles.submitText]}>Camera</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submit2} onPress={gotomessage}>
                <View>
                  <Text style={[styles.submitText]}>Message</Text>
                  
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfilScreen ; 