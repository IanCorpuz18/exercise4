import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  HomeStackNavi  from './Navigators/HomeStackNavi'
import { TopNavi } from './Navigators/TopNavi'
import Modal from './Navigators/Modal'
import TabStack from "./Navigators/TabStack"
export default class App extends Component {
  render() {
    return (
      <Switchnavi/>
    );
  }
}


const Switchnavi = createSwitchNavigator({
  Auth: Modal,
  Main: TabStack

},{
initialRouteName: 'Auth'
})