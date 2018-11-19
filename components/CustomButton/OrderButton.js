import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const OrderButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:"white"},props.border,props.width]}> 
            <Text style={[{color:"gray"},props.textColor, props.textWeight,props.size]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
        borderRadius:5,
      borderWidth: 2,
      borderColor:"gray",
      alignItems: 'center',
      width:"40%",
      alignSelf:"center"
    }
})

export default OrderButton;