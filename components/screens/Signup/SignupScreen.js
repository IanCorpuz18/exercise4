import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import SignupButton from "../../CustomButton/SignupButton"
import CustomButtonFb from '../../CustomButton/CustomButtonFb';
import CustomButtonTwitter from '../../CustomButton/CustomButtonTwitter';
import CustomInput from "../../CustomTextInput/CustomTextInput"
import Icon from 'react-native-vector-icons/Ionicons';
   class SignupScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
      <View style={{alignItems:"center", marginTop:20}}>
       
     
       <View style={{flexDirection:"row"}}>
         <Icon name="md-arrow-back" color="black" size={30} />
         <Text style={{fontWeight:"bold",fontSize:15}}>REGISTER NOW</Text>
         </View>
         </View>
    <View style={{alignItems:"center"}}>
        <CustomInput  placeholder={"USERNAME"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"EMAIL ADDRESS"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        <CustomInput placeholder={"CONFIRM PASSWORD"} style={{backgroundColor:"#F6F6F5"}}></CustomInput>
        </View>
        <View style={{flex:1,justifyContent:"center"}}>
        <View>
       <SignupButton>SIGN UP</SignupButton>
       <View style={{alignItems:"center"}}>
       <Text>OR</Text>
       </View>
       <CustomButtonFb>CONNECT WITH FACEBOOK</CustomButtonFb>
       <CustomButtonTwitter>CONNECT WITH TWITTER</CustomButtonTwitter>
       </View>
       </View>
    </View>
    )
    }
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"white"
    
           
        }
    })
export default SignupScreen;