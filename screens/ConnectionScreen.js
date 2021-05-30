import axios from "axios";
import React,{useState} from "react";
import {View, Text, StyleSheet,TextInput, TouchableHighlight,Button} from "react-native" ;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from "react-native/Libraries/Utilities/PixelRatio";


const ConnectionScreen = (props) => {


  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key,(e,res)=>{
              console.log(res)
      });
     
    } catch(e) {
      console.log("la cle storage :ko error")
    }
  }

  
    const [Email, setEmail] = useState("");
    const [Psw, setPsw] = useState("");
    const [token, settoken] = useState("");
    
  

  

    function test() {    
     
      var dataToSend = {
        email: Email,
        password: Psw,
      };
     
      axios({
        method: 'post',
        url: 'https://snapi-wac.herokuapp.com/connection',
        data: dataToSend
    })
    .then(function (reponse) {
      
      AsyncStorage.setItem('tok',token)
      .then(()=>{
        props.navigation.navigate("Home",{email: Email, token: reponse.data.data.token})
      })        
    })
    .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        alert('identifiant incorrect');
        console.log('identifiant incorrect');
    });
      
      
    }
    const styles = StyleSheet.create({
        container:{
          textAlign:"center",  
          top:100, 
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
          submitText:{
              color:'#fff',
              textAlign:'center',
          }
    })
    return(
    <View style={styles.container}>
      <Text>{token}</Text>
    <Text style={styles.in}>Email:</Text>
      <TextInput style={styles.te} placeholder="entrez votre adresse email"
      onChangeText={(Email)=>setEmail(Email)}
      />
      <Text style={styles.in}>mot de passe:</Text>
      <TextInput   style={styles.te} secureTextEntry={true} placeholder="entrez votre mot de passe"
       onChangeText={(Psw)=>setPsw(Psw)}

      
      />
      <TouchableHighlight
  style={styles.submit}
  onPress={test}
  underlayColor='#fff'>
    <Text style={[styles.submitText]}>SE CONNECTER</Text>
</TouchableHighlight>

    </View>

    )
}


export default ConnectionScreen ; 