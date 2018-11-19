import {createStackNavigator} from "react-navigation"
import HomeStackNavi from './HomeStackNavi'
import ForgotPassword from '../components/screens/ForgotPassword/ForgotPassword'
import RestaurantListNav from "../Navigators/RestaurantListNav"
import DetailScreen from "../components/screens/DetailScreen/DetailScreen"
export default Modal = createStackNavigator({
    Init: HomeStackNavi,
    ForgotPass : ForgotPassword,
    Details: DetailScreen
    
},{
    mode:'modal',
headerMode:"none"
    }
);
