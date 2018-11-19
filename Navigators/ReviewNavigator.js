import {createMaterialTopTabNavigator} from 'react-navigation'
import PlaceReviews from "../components/screens/DetailScreen/PlaceReviews";
import PlaceInfo from "../components/screens/DetailScreen/PlaceInfo"
import FoodMenu from "../components/screens/DetailScreen/FoodMenu"
export default RevNavigator = createMaterialTopTabNavigator({
    FoodMenu : {
        screen:FoodMenu,
    navigationOptions: {
        tabBarLabel: 'Food Menu',
      
    }
    },
    Info : {
        screen:PlaceInfo,
    navigationOptions: {
        tabBarLabel: 'Place Details',
        
      
    }
    },
    Reviews : {
        screen:PlaceReviews,
    navigationOptions: {
        tabBarLabel: 'Place Reviews',
      
    }
    }
},
{
    initialRouteName:"Reviews",
    tabBarOptions:{
        style:{
            elevation:0
        }
    }
}

)