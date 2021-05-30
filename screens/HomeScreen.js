import React  from "react";
import logo from '../assets/logo.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
      
    getMultiple = async () => {

        let values
        try {
          values = await AsyncStorage.multiGet(['email', 'token'])
        } catch(e) {
          // read error
        }
        if(values[0][1] !=null && values[1][1] !=null){
            props.setData(values)
           props.setIslogin(true);
        //props.navigation.navigate("auth",{email:values[0][1] , token: values[1][1]})
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
          console.log("Info user email : "+value)
        } catch (e) {
            console.log("entregistrement email : "+value+" : KO")
        }
      }

    const setToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
          console.log("token user  : "+value+" : OK")
          
        } catch (e) {
            console.log("entregistrement token  : "+value+" : KO")
        }
      }


    if (props.route.params != undefined) {
        const param = ()=>{
            var paramd =  props.route.params
            
          setEmail(paramd.email);
          setToken(paramd.token);
            
         }
        
         param()
    }
   
    
    const styles = StyleSheet.create({
      container:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'#FFFF00',
      },
      bouton1:{
        top:520,
        backgroundColor:"#00BFFF",
        height:60,
      },
      bouton2:{
      top:400,
      backgroundColor:"red",
      height:60,
      },
      textbout:{
        textAlign:"center",
fontSize:40,
color:"white",
top:5,
fontFamily: "Cochin",
      },
      Logo:{
        width:170,
        height:170,
        top:140,
        left:120
      }

    })
    
    return(

        <View style={styles.container}>
            <Image style={styles.Logo} source={logo}/>
            <TouchableOpacity onPress={goTo}>
                <View style={styles.bouton1}>
                  <Text  style={styles.textbout}>INSCRIPTION</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLogin}>
                <View  style={styles.bouton2}>
                  <Text style={styles.textbout}>CONNECTION</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}




export default HomeScreen ; 