import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import pic1 from '../screens/assets/mexican-food.jpg'
import pic2 from '../screens/assets/food1.jpg'
class MainMenu extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>  </Text>
                <Text>  </Text>
                <Text>  </Text>
                <ScrollView>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:300,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={pic1} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View> 
                    </View>
                    <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Marmalade Burger Cafe</Text>
                    </View>
                   
                    <View style={{alignItems:"center"}}>
                    <View style={{width:300,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={pic2} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Marmalade Burger Cafe</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:300,height:170}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                        <Image source={pic1} style={{width:"100%",height:"100%"}} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{paddingLeft:"10%"}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Marmalade Burger Cafe</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:300,height:170}} >
                        <Image source={pic2} style={{width:"100%",height:"100%"}} />
                    </View>
                    </View>
                    <View style={{alignItems:"center"}}>
                    <View style={{width:300,height:170}} >
                        <Image source={pic1} style={{width:"100%",height:"100%"}} />
                    </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})
export default MainMenu;