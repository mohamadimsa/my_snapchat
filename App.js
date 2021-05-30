import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from "@react-navigation/native"
import{createStackNavigator}from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from './screens/HomeScreen';
import InscriptionScreen from './screens/inscriptionScreen';
import ConnectionScreen from './screens/ConnectionScreen';
import CamScreen from './screens/CamScreen';
import UserScreen from './screens/UserScreen';
import ProfilScreen from './screens/ProfilScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MesssageScreen from './screens/MessageScreen';


export default function App(props) {

  const [Islogin, setIslogin] = useState(false);
  const [data, setData] = useState(null);
  console.log("Utilisateur auth : "+Islogin);
  const logout = ()=>{
    try {
      AsyncStorage.multiRemove(["email","token"])
      setIslogin(false);
      
    } catch (error) {
      
    }
  }


  return (
    
    <NavigationContainer>
    <Stack.Navigator >
       {Islogin ? (
          <>
         <Stack.Screen name="auth">{props => <ProfilScreen {...props} data={data} logout={logout} />}</Stack.Screen>
         <Stack.Screen name="Camera">{props => <CamScreen {...props} data={data}/>}</Stack.Screen>
         <Stack.Screen name="message">{props => <MesssageScreen {...props} data={data}/>}</Stack.Screen>
         <Stack.Screen name="User" >{props => <UserScreen {...props} data={data}/>}</Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Home">{props => <HomeScreen {...props} setIslogin={setIslogin} setData={setData} />}</Stack.Screen>
        )}
      <Stack.Screen name="Login">{props => <ConnectionScreen {...props} setIslogin={setIslogin}/>}</Stack.Screen>
      <Stack.Screen name="Register" component={InscriptionScreen} />
    
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
