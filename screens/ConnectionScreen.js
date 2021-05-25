import React from "react";
import {View, Text, Stylesheet,TextInput, Button} from "react-native" ;

const ConnectionScreen = (props) => {

    
        
    return(
    <View>
    <Text>Email:</Text>
      <TextInput placeholder="entrez votre adresse email"/>
      <Text>mot de passe:</Text>
      <TextInput secureTextEntry={true} placeholder="entrez votre mot de passe" />
      <Button
        title="Se connecter"
       
        onPress={() => 
            
            
            props.navigation.navigate("Home")
        }
      />
    </View>

    )
}


export default ConnectionScreen ; 