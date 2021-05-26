import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet,View, Text,KeyboardAvoidingView, Keyboard, TouchableOpacity,Stylesheet,ScrollView} from "react-native" ;
import React, {useState, createRef} from 'react';
import { TextInput } from "react-native";
import axios from 'axios'
const InscriptionScreen = (props) => {
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');

    const emailInputRef = createRef();
    const passwordInputRef = createRef();

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('test',(e,res)=>{
                  console.log(e)
          });
         
        } catch(e) {
          console.log("la cle storage :ko error")
        }
      }

      getData()

    const handleSubmitButton = () => {
        if (!Password) {
          alert('Please fill password');
          return;
        }
        if (!Email) {
          alert('Please fill Email');
          return;
        }
        var dataToSend = {
            email: Email,
            password: Password,
          };
          axios({ method: 'post', url: 'https://snapi-wac.herokuapp.com/inscription', data: dataToSend }) .then(function (response) { console.log(response); }) .catch(function (error) { console.log(error); });


    }
    return(
        <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <KeyboardAvoidingView enabled>
            <View>
              <TextInput
                onChangeText={(Email) => setEmail(Email)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                blurOnSubmit={false}
              />
            </View>
            <View>
              <TextInput
                onChangeText={(Password) => setPassword(Password)}
                underlineColorAndroid="#f000"
                placeholder="Enter password"
                placeholderTextColor="#8b9cb5"
                secureTextEntry={true}
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            <TouchableOpacity
            onPress={handleSubmitButton}>
              <Text>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
        },
      });
}


export default InscriptionScreen ; 