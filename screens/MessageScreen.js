import React ,{useState,useEffect} from 'react';
import {View, Text,Button, ScrollView} from 'react-native';
import MessageReceived from '../Components/MessageReceived'
import axios from 'axios';



const MesssageScreen =  (props)=>{
    const [view, setview] = useState(null)
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://snapi-wac.herokuapp.com/snaps',
            headers: {
                    'token': props.data[1][1],
                    "Content-type": "application/json"
                  }
            
        })
        .then(function (reponse) {
            const view = reponse.data.data.map((item, k) => {
                return <MessageReceived key={k} from={item.from} />
            }) 
            setview(view)
        }).catch(err=>console.log(err))
    }, [])
      
 return(
     <ScrollView>
        {view}
     </ScrollView>
 )

}
export default MesssageScreen;