import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from "@react-navigation/native"
import{createStackNavigator}from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from './screens/HomeScreen';
import InscriptionScreen from './screens/inscriptionScreen';
import ConnectionScreen from './screens/ConnectionScreen';
import ProfilScreen from './screens/ProfilScreen';


export default function App(props) {

  const [Islogin, setIslogin] = useState(false);
  console.log(Islogin+" est auth");
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="Home">{props => <HomeScreen {...props} setIslogin={setIslogin}/>}</Stack.Screen>
      <Stack.Screen name="Register" component={InscriptionScreen} />
      <Stack.Screen name="Login">{props => <ConnectionScreen {...props} setIslogin={setIslogin}/>}</Stack.Screen>
      <Stack.Screen name="auth" component={ProfilScreen}/>
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
