import React  from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
      
    getMultiple = async () => {

        let values
        try {
          values = await AsyncStorage.multiGet(['email', 'token'])
        } catch(e) {
          // read error
        }
        if(values[0][1] !=null && values[1][1] !=null){
        props.navigation.navigate("profil",{email:values[0][1] , token: values[1][1]})
        }
      

      
        // example console.log output:
        // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
      }
      getMultiple()

    const goTo = ()=> {
        props.navigation.navigate("Register");
    }
    const goToLogin = ()=> {
        props.navigation.navigate("Login");
    }


    const setEmail = async (value) => {
        try {
          await AsyncStorage.setItem('email', value)
          console.log("entregistrement email : "+value+" : OK")
        } catch (e) {
            console.log("entregistrement email : "+value+" : KO")
        }
      }

    const setToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
          console.log("entregistrement token  : "+value+" : OK")
          
        } catch (e) {
            console.log("entregistrement token  : "+value+" : KO")
        }
      }


      
      
   
      
      

    

    if (props.route.params != undefined) {
        const param = ()=>{
            var paramd =  props.route.params
           
        console.log(paramd)
          setEmail(paramd.email);
          setToken(paramd.token);
            
         }
        
         param()
    }
   
    
    
    
    return(

        <View>
            <Text>Home screen</Text>
            <TouchableOpacity onPress={goTo}>
                <View>
                  <Text>S'inscrire</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLogin}>
                <View>
                  <Text>se connecter</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}




export default HomeScreen ; 