import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import  TopNavi  from './TopNavi'
import LoginScreen from '../components/screens/Login/LoginScreen'
import SignupScreen from '../components/screens/Signup/SignupScreen'
import MainScreen from '../components/screens/MainScreen'

export default HomeStackNavi = createStackNavigator({
    Main: MainScreen,
    Login : LoginScreen,
    Signup : SignupScreen,
    Content : TopNavi
},{
    initialRouteName:'Main',
     navigationOptions :{
        header:null
    }
});
