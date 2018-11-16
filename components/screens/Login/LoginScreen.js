import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import CustomButton2 from "../../CustomButton/CustomButton2"
   class LoginScreen extends Component{
     render(){
    return(
    <View>
     
        <Text>LoginScreen</Text>
    
        <CustomButton2 onPress={() =>  this.props.navigation.navigate('Content')}>LOG IN</CustomButton2>
    </View>
    )
    }
    }
export default LoginScreen;