import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from "react-navigation-tabs";
import Tab from "../screens/HomeScreen";

const Home = createMaterialTopTabNavigator(
    {
        Tab1: {
            screen: props => <Tab {...props} kind={"Tab1"} />,
            navigationOptions: ({navigation}) => ({
                title: 'tab1',
            }),
        },
        Tab2: {
            screen: props => <Tab {...props} kind={"Tab2"} />,
            navigationOptions: ({navigation}) => ({
                title: 'tab2',
            }),
        },
        Tab3: {
            screen: props => <Tab {...props} kind={"Tab3"} />,
            navigationOptions: ({navigation}) => ({
                title: 'Tab3',
            }),
        }
    },
    {
        initialRouteName: 'Tab1',
        headerMode: 'none',
        tabBarOptions: {
            scrollEnabled: true,
            labelStyle: {
                fontSize: 12,
                color: 'black',
            },
            tabStyle: {
                width: 130,
            },
            style: {
                backgroundColor: 'white',
            },
            indicatorStyle: {
                backgroundColor: '#ff0000',
            },
        }
    }
);

export default createBottomTabNavigator({
    TabItem1: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({focused}) => (
                <Icon
                    name="home"
                    size={24}
                />
            )
        }
    },
    TabItem2: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Tab Item",
            tabBarIcon: ({focused}) => (
                <Icon
                    name="home"
                    size={24}
                />
            )
        }
    },
    TabItem3: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Tab Item",
            tabBarIcon: ({focused}) => (
                <Icon
                    name="home"
                    size={24}
                />
            )
        }
    }
});