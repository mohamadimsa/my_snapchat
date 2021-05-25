import React,{useState} from "react";
import {View, Text, Stylesheet,TextInput, Button} from "react-native" ;

const ConnectionScreen = (props) => {

    const [Email, setEmail] = useState("");
    const [Psw, setPsw] = useState("");
    function test() {    
       
        console.log('Le lien a été cliqué.');
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
       
        onPress={(e) => 
          
            test()
  
        }
      />
    </View>

    )
}


export default ConnectionScreen ; 