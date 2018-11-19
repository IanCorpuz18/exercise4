import React,{ Component }  from 'react'

import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from "../components/maincontent/RestaurantsList"
import DetailScreen from "../components/screens/DetailScreen/DetailScreen"
import Icon from "react-native-vector-icons/Ionicons"
import TopNavi from "../Navigators/TopNavi"
export default TabStack = createStackNavigator({
    Foods: {screen:TopNavi,
    
        navigationOptions:{
            headerTintColor:"white",
            title: "     Restaurants Nearby",
          
            headerStyle:{
                backgroundColor:"#00BD57",
              
            },
            headerLeft:
                <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>
               ,
            headerRight:
            <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
          
        }
        }
    ,
    Details: {screen: DetailScreen,

        navigationOptions:{
            headerTintColor:"white",
            title: "Marmalade Burger Cafe",
            
            headerStyle:{
                backgroundColor:"#00BD57",
                
            },
            headerLeft:<Icon name="md-arrow-back" size={30} color="white" style={{marginLeft:10}}/>,
            headerRight: <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
            
        },
        
        }

},
    {
        
    }

);
