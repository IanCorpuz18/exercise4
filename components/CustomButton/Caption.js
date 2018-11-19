import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import OrderButton from "../CustomButton/OrderButton";
   class Caption extends Component{
     render(){
    return(
   
         <View> 
         <View style={{paddingLeft:"5%"}}>
         <View style={{flexDirection:"row", width:"100%", alignItems:"center"}}>
         <View style={{flexDirection:"column", marginRight:10}}>
         <Text style={{fontWeight:"bold",fontSize:18}}>Marmalade Burger Cafe</Text>
         <Text>Hamburgers</Text>
         </View>

         <OrderButton width={{width:"100%"}} size={{fontSize:13}} >Ready in 25Min</OrderButton>
         </View>
         </View>
         <Text></Text>
        
         </View>
        
    )
    }
    }
export default Caption;