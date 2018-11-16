import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from '../components/maincontent/MainMenu'
import React from 'react'
export const TopNavi = createMaterialTopTabNavigator({
    MainMenu : {
        screen:MainMenu,
    navigationOptions: {
        tabBarLabel: 'Main Menu',
        // tabBarIcon: ({ tintColor }) => (
        //     <Icon name="ios-search" color={tintColor} size={30} />
        // )
    }
    }
 
  
  
  },{
   swipeEnabled:false,
    initialRouteName:'MainMenu',
    tabBarPosition:'bottom',
    tabBarOptions:{
        style: {
            backgroundColor:'white',
            height:60,
            borderTopColor:"gray",
            borderTopWidth:.5
            
        },
        labelStyle:{
            fontSize:9
        },
        showIcon: true,
        activeTintColor: "black",
        inactiveTintColor: "grey"

    }

  });
