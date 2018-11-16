import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButtonTwitter = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:"#009EE9"},props.border]}> 
            <Text style={[{color:"white"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      borderWidth: 2,
      borderColor:"#009EE9",
      alignItems: 'center',
      width:"80%",
      alignSelf:"center"
    }
})

export default CustomButtonTwitter;