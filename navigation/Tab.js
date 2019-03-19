import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../screens/HomeScreen";

export default createBottomTabNavigator({
    TabItem1: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Tab Item"
        }
    },
    TabItem2: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Tab Item"
        }
    },
    TabItem3: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Tab Item"
        }
    }
});