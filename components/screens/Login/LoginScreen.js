import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import CustomButton from "../../CustomButton/CustomButton"
import CustumButtonFb from "../../CustomButton/CustomButtonFb"
import CustomButtonTwitter from '../../CustomButton/CustomButtonTwitter';
import CustomInput from '../../CustomTextInput/CustomTextInput';
import Icon from "react-native-vector-icons/Ionicons"
   class LoginScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
     <View style={{alignItems:"center", marginTop:20}}>
       
     
      <View style={{flexDirection:"row"}}>
        <Icon name="md-arrow-back" color="black" size={30} />
        <Text style={{fontWeight:"bold",fontSize:15}}>SIGN IN</Text>
        </View>
        </View>
      
        <View style={{flex:1,justifyContent:"center"}}>
        <View style={{alignItems:"center"}}>
        <CustomInput placeholder={"EMAIL ADDRESS"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        </View>
        <CustomButton onPress={() =>  this.props.navigation.navigate('Content')}>LOG IN</CustomButton>
        <Text> </Text>
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:"row"}}>
        <Text>Forgot Password? </Text>
        <TouchableOpacity>
        <Text style={{color:"#9ACD32"}}>Click here</Text></TouchableOpacity>
        </View>
        <Text>OR</Text>
        <Text> </Text>
        </View>
        <CustumButtonFb>CONNECT WITH FACEBOOK</CustumButtonFb>
        <CustomButtonTwitter>CONNECT WITH TWITTER</CustomButtonTwitter>
        </View>
        </View>
    )
    }
    }
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#FFFFFF",
            justifyContent:"center"
        }
    })
export default LoginScreen;