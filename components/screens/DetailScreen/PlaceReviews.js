import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,ScrollView } from 'react-native';
import { reviews } from '../../../reviewsContent';
import Icon from 'react-native-vector-icons/Ionicons'
import Stars from '../DetailScreen/Stars'
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
        <View style={{width:"100%", marginTop:5,paddingBottom:10,borderBottomColor:"gray",borderBottomWidth:.5}}>

            <View style={{alignItems:"center", flexDirection:"row", width:"100%"}}>
            <Text style={{marginLeft:15}}>6 Reviews</Text>
            <View style={{marginLeft:150}}>
           <Stars/>
           </View>
            </View>
        </View>
        <ScrollView>
            <Text></Text>
           {
               this.state.messages.map((item, index) => (
                
                  
                  
    <View style={{height:120,width:"100%"}} key={index}>
    <View style={{flexDirection:"column"}}>
    <View>
        <View style={{flexDirection:"row", width:"100%", alignContent:"center"}}>
        <View >
        <Image source={{ uri: item.img}}
        style={styles.image}/>
        </View>
        <View style={{marginLeft:10,flexDirection:"column",width:"40%",}}>
        <View>
        <Text>{item.name}</Text>
    </View>
    <View>
        <Text style={{fontSize:9}}>
            {item.date}
        </Text>
    </View>
   
    </View>
    <View style={{width:"40%", marginLeft:24}}>
    <Stars/>
    </View>
        </View>
        </View>
        </View>
        <View style={{marginBottom:50}}>
            <Text>
                {item.msg}
            </Text>
          
        </View>
    </View>
    

               ))
           }
       
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
    }, viewContainer: {
        alignItems: "flex-start",
        backgroundColor:"white",
        

    },

})
export default PlaceReviews;