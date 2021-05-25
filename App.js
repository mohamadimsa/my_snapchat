import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from "@react-navigation/native"
import{createStackNavigator}from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from './screens/HomeScreen';
import InscriptionScreen from './screens/inscriptionScreen';
import ConnectionScreen from './screens/ConnectionScreen';


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={InscriptionScreen} />
      <Stack.Screen name="Login" component={ConnectionScreen} />
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
