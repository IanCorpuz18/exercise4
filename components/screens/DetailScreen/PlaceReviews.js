import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
import { reviews } from '../../../reviewsContent';
import Icon from 'react-native-vector-icons/Ionicons'
   class PlaceReviews  extends Component{
    state = {
        messages: reviews
    }
    alertItemName = (item) => {
        alert(item.name + ": " + "\n" + item.msg)
    }

     render(){
    return(
        <View style={{backgroundColor:"white"}}>
        <View >
            <View style={{alignContent:"space-between", flexDirection:"row", width:"100%"}}>
            <Text>6 Reviews</Text>
            <Icon name="ios-star" color="yellow" size={30} />
            </View>
        </View>
        <ScrollView>
       <View style={styles.viewContainer}>
           {
               this.state.messages.map((item, index) => (
                  
                  
                  
    <View>
        <Image source={{ uri: item.img}}
        style={styles.image}/>
    </View>


               ))
           }
       </View>
       </ScrollView>
       </View>
    )
    }
    }
    
const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

})
export default PlaceReviews;