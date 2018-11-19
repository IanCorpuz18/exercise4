import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
   class Stars extends Component{
     render(){
    return(
        <View style={{width:"100%", flexDirection:"row"}}>
        <Icon name="ios-star" color="yellow" size={30} />
        <Icon name="ios-star" color="yellow" size={30} />
        <Icon name="ios-star" color="yellow" size={30} />
        <Icon name="ios-star" color="yellow" size={30} />
        <Icon name="ios-star" color="gray" size={30} />
        </View>
    )
    }
    }
export default Stars;