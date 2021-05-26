import axios from "axios";
import React,{useState} from "react";
import {View, Text, Stylesheet,TextInput, Button} from "react-native" ;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from "react-native/Libraries/Utilities/PixelRatio";


const ConnectionScreen = (props) => {

  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('test')
      if(value !== null) {
        console.log("la cle storage :ok")
      }else{
        console.log("la cle storage :ko")
      }
    } catch(e) {
      console.log("la cle storage :ko")
    }
  }

  

getData()

  
    const [Email, setEmail] = useState("");
    const [Psw, setPsw] = useState("");
    const [token, settoken] = useState("");
    
    const getValue = AsyncStorage.getItem("tok",(e,result)=>{
        if(result != null){
          console.log(result)
       
      }
      else{return null}
      })

  

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
        console.log("ok s  ===")
        console.log(getValue);
      })        
    })
    .catch(function (erreur) {
        //On traite ici les erreurs éventuellement survenues
        console.log('identifiant incorrect');
    });
      
      
    }
 
    return(
    <View>
      <Text>1{token}</Text>
    <Text>Email:</Text>
      <TextInput placeholder="entrez votre adresse email"
      onChangeText={(Email)=>setEmail(Email)}
      />
      <Text>mot de passe:</Text>
      <TextInput secureTextEntry={true} placeholder="entrez votre mot de passe"
       onChangeText={(Psw)=>setPsw(Psw)}

      
      />
      <Button
        title="Se connecter"
       
        onPress={test}
      />
    </View>

    )
}


export default ConnectionScreen ; 