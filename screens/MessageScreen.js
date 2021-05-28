import React,{useState, useCallback} from 'react';
import {View, Text,Button} from 'react-native';
import MessageReceived from '../Components/MessageReceived'
import axios from 'axios';


const MesssageScreen = (props)=>{
 const [message, setMessage] = useState(null);

   
        axios.get('https://snapi-wac.herokuapp.com/snaps',{
            headers: {
                'token': props.data[1][1],
            }}).then(reponse => {
               data = reponse.data.data;
                setMessage(data)
            }).catch(err => console.log(err))
            
console.log(message)

 


 const test= message.map((item) => {
    console.log(item.id)
    return (
        <MessageReceived />
    );
});
        
 return(
     <View>
       {test}
     </View>
 )

}
export default MesssageScreen;