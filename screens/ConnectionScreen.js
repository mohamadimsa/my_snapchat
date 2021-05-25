import axios from "axios";
import React,{useState} from "react";
import {View, Text, Stylesheet,TextInput, Button} from "react-native" ;

const ConnectionScreen = (props) => {

    const [Email, setEmail] = useState("");
    const [Psw, setPsw] = useState("");
    function test() {    
         
        var datas ={
          "email" : "petubrt@gmail.com",
          "password" : "okok"
      }
        axios.post(`https://snapi-wac.herokuapp.com/connection`, { datas })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    

        
    }
   
        
    return(
    <View>
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
       
        onPress={test()}
      />
    </View>

    )
}


export default ConnectionScreen ; 