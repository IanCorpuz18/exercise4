import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  HomeStackNavi  from './Navigators/HomeStackNavi'
import { TopNavi } from './Navigators/TopNavi'


export default class App extends Component {
  render() {
    return (
      <Switchnavi/>
    );
  }
}


const Switchnavi = createSwitchNavigator({
  Auth: HomeStackNavi,
  Main: TopNavi
},{
initialRouteName: 'Auth'
})