import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
import { reviews } from '../../../reviewsContent';
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
        <ScrollView>
       <View style={styles.viewContainer}>
           {
               this.state.messages.map((item, index) => (
                  
                  
                  
                       <View>

                       </View>


               ))
           }
       </View>
       </ScrollView>
       </View>
    )
    }
    }
    
export default PlaceReviews;