import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const OrderButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:"white"},props.border]}> 
            <Text style={[{color:"gray"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
        borderRadius:10,
      borderWidth: 2,
      borderColor:"gray",
      alignItems: 'center',
      width:"40%",
      alignSelf:"center"
    }
})

export default OrderButton;