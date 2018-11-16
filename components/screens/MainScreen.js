import React, { Component } from 'react'
import {View,Text,StyleSheet, Button, TouchableOpacity, ImageBackground, Image} from 'react-native'
import CustomButton from '../CustomButton/CustomButton'
import CustomButton2 from '../CustomButton/CustomButton2';
import bg from "./assets/company_logo.png"
import food1 from "./assets/food1.jpg"
   class MainScreen extends Component{
     render(){
    return(
     
    <View style={styles.container}>
    <View style={{width:400, height:300}}>
        <Image source={food1} style={{alignSelf:"flex-start",width:"100%",height:"100%"}} />
        </View>
        <View style={{alignSelf:"center",width:250, height:120}}>
        <Image source={bg} style={{alignSelf:"center",width:"100%",height:"100%"}} />
        </View>
        <Text>  </Text>
        <Text>  </Text>
        <CustomButton onPress={() =>  this.props.navigation.navigate('Signup')}>SIGN UP</CustomButton>
        <CustomButton2 onPress={() =>  this.props.navigation.navigate('Login')}>LOG IN</CustomButton2>
    </View>
  
    )
    }
    }


    const styles= StyleSheet.create({
        container:{
            flex:1,
            // alignContent: "center",
            // alignSelf:"center",
            // alignItems:"center"
        }
    })
export default MainScreen;