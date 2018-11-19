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
        style: {
            backgroundColor:'white',
            // height:"10%",
            // borderTopColor:"gray",
            // borderTopWidth:.5
          borderBottomColor:"black",
          borderBottomWidth:.5,
                elevation:0
            
        },
        labelStyle:{
            fontSize:11,
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
}

)