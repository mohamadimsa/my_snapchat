import React from 'react';
import {View,Text,TouchableOpacity ,StyleSheet} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';




const MessageReceived = (props)=>{

    return(
        <View style={style.blockPrincipal}>
            <View style={style.block}>
                 <Icon style={style.square} name="square"/>
                 <View style={style.email}>
                 <Text >{props.form}</Text>
                 </View>
                 
            </View>

        </View>
    )
}

const style = StyleSheet.create({
  block:{
     flexDirection: 'row'
  },
  square:{
      color: "red",
      fontSize : 35
      
  },
  blockPrincipal :{
      paddingTop : 20,
      paddingLeft : 23,
      paddingBottom : 10 
  },
  email:{
      
      justifyContent: 'center',
      paddingLeft : 20,
      fontSize :100
  }
})

export default MessageReceived;