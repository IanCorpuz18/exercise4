import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Image, } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import OrderButton from "../../CustomButton/OrderButton"
import pic1 from "../assets/Meilleur-burger.jpg"
import RevNavigator from '../../../Navigators/ReviewNavigator';
   class DetailScreen extends Component{
    
     render(){
    return(
        
    <View style={styles.container}>
   

        <Text></Text>
        <View style={{width:300,height:200, alignSelf:"center"}} >
                        <Image source={pic1} style={{width:"100%",height:"100%"}} />
                    </View>
                    <Text></Text>
     <OrderButton>Ready in 25 mins</OrderButton>
     <Text>  </Text>
     <View style={{width:"100%",flex:1}} >
 <RevNavigator/>
   </View>
    </View>
    )
    }
    }
    const styles= StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"white"
        }
    })
export default DetailScreen;