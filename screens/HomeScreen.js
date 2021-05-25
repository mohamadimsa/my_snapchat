import React from "react";
import { StyleSheet, Text, View , TouchableOpacity, Touchable} from 'react-native';

const HomeScreen = (props) => {
    const goTo = ()=> {
        props.navigation.navigate("Register");
    }
    const goToLogin = ()=> {
        props.navigation.navigate("Login");
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