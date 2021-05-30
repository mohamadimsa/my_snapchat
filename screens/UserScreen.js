import React ,{useState,useEffect} from 'react';
import {View, Text,Button, ScrollView} from 'react-native';
import MessageReceived from '../Components/MessageReceived'
import axios from 'axios';



const UserScreen =  (props)=>{
    const initialValue = [
        {}];
    let [responseData, setResponseData] =useState(initialValue)
    const fetchData = () => {
    axios({
        'method':'GET',
        'url':'https://snapi-wac.herokuapp.com/all',
        'headers': {
            'token': props.data[1][1],
            'content-type':'application/octet-stream',
        },
        'params': {
            'search':'parameter',
        },
    }).then((response)=>{
        response.data.data.forEach(function(item) {
                const initialState =[item];
              
           
           
          })
          
        
    })
    .catch((error) => {
        console.log(error)
    })
    console.log(initialState )
}
return (
    <View>
        <Text onPress={fetchData}>user connect profil</Text>
        
    </View>
)


}
export default UserScreen;