import React  from "react";
import { StyleSheet, Text, View , TouchableOpacity,Button} from 'react-native';

const ProfilScreen = (props) => {
 
      const goto = ()=> {
        props.navigation.navigate("Camera");
    }
    const gotomessage = ()=> {
      props.navigation.navigate("message");
  }
    
      
    return(

        <View>
            <Text>user connect profil</Text>
            <TouchableOpacity>
            <Button
        title="Se deco"
       
        onPress={() =>props.logout()}
      />
            </TouchableOpacity>
            <TouchableOpacity onPress={goto}>
                <View>
                  <Text>Camera</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={gotomessage}>
                <View>
                  <Text>Message</Text>
                  
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfilScreen ; 