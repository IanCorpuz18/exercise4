import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import MainMenu from "../components/maincontent/RestaurantsList"
import DetailScreen from "../components/screens/DetailScreen/DetailScreen"
import Food from "../Navigators/StackWithTab"
export default TabStack = createStackNavigator({
    Food: Food
 

});
