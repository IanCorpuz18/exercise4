import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from '../components/maincontent/RestaurantsList'
import Map from "../components/maincontent/RestaurantsMap"
import React from 'react'
export default TopNavi = createMaterialTopTabNavigator({
    MainMenu : {
        screen:MainMenu,
    navigationOptions: {
        tabBarLabel: 'Restaurants List',
        // tabBarIcon: ({ tintColor }) => (
        //     <Icon name="ios-search" color={tintColor} size={30} />
        // )
    }
    },
    Map : {
        screen:Map,
    navigationOptions: {
        tabBarLabel: 'Restaurants Map',
        // tabBarIcon: ({ tintColor }) => (
        //     <Icon name="ios-search" color={tintColor} size={30} />
        // )
    }
    }
 
  
  
  },{
   swipeEnabled:false,
    initialRouteName:'MainMenu',
    tabBarOptions:{
        style: {
            backgroundColor:'white',
            // height:"10%",
            // borderTopColor:"gray",
            // borderTopWidth:.5
          
                elevation:0
            
        },
        labelStyle:{
            fontSize:13,
            fontWeight:"bold"
        },
        // showIcon: true,
        activeTintColor: "green",
        inactiveTintColor: "black",
    //   tabStyle:{
    //       backgroundColor:"white"
    //   },
      indicatorStyle:{
          backgroundColor:"white"
      }
    }

  });
 