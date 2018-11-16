import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const SignupButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:"#00BD57"},props.border]}> 
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
      borderColor:"#00BD57",
      alignItems: 'center',
      width:"80%",
      alignSelf:"center"
    }
})

export default SignupButton;