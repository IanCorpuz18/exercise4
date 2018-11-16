import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import OrderButton from "../../CustomButton/OrderButton"
import pic from "../assets/Meilleur-burger.jpg"
   class DetailScreen extends Component{
     render(){
    return(
    <View style={styles.container}>
   
<TouchableOpacity>
    <Icon name="md-arrow-back" size={25} onPress={() => this.props.navigation.goBack()} />
</TouchableOpacity>
        <Text></Text>
        <View style={{width:300,height:190, alignSelf:"center"}}>
    <Image source={pic} style={{width:"100%", height:"100%"}} />
    </View>
     <OrderButton>Ready in 25 mins</OrderButton>
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