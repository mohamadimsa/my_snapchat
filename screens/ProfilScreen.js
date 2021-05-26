import React  from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

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
    
      
    
    getData("test")
  
    return(

        <View>
            <Text>user connect profil</Text>
      
        </View>
    )
}

export default ProfilScreen ; 