import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from "../components/maincontent/RestaurantsList"
import DetailScreen from "../components/screens/DetailScreen/DetailScreen"
export default HomeStackNavi = createStackNavigator({
    Main: MainMenu,
   
},{
    initialRouteName:'Main',
  
});
