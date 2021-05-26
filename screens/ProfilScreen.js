import React  from "react";
import { StyleSheet, Text, View , TouchableOpacity,Button} from 'react-native';

const ProfilScreen = (props) => {
    const getData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key,(e,res)=>{
                  console.log(res)
          });
         
        } catch(e) {
          console.log("la cle storage :ko error")
        }
      }
    
    
      
    
    console.log(props.data);
    return(

        <View>
            <Text>user connect profil</Text>
            <TouchableOpacity>
            <Button
        title="Se deco"
       
        onPress={() =>props.logout()}
      />
            </TouchableOpacity>
      
        </View>
    )
}

export default ProfilScreen ; 