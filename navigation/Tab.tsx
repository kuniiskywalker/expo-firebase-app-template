import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import { createMaterialTopTabNavigator, createBottomTabNavigator } from "react-navigation-tabs";
import Tab from "../screens/HomeScreen";

const Home = createMaterialTopTabNavigator(
    {
        Tab1: {
            screen: (props: any) => <Tab {...props} kind={"Tab1"} />,
            navigationOptions: () => ({
                title: 'tab1',
            }),
        },
        Tab2: {
            screen: (props: any) => <Tab {...props} kind={"Tab2"} />,
            navigationOptions: () => ({
                title: 'tab2',
            }),
        },
        Tab3: {
            screen: (props: any) => <Tab {...props} kind={"Tab3"} />,
            navigationOptions: () => ({
                title: 'Tab3',
            }),
        }
    },
    {
        initialRouteName: 'Tab1',
        // headerMode: 'none',
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
            tabBarIcon: () => (
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
            tabBarIcon: () => (
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
            tabBarIcon: () => (
                <Icon
                    name="home"
                    size={24}
                />
            )
        }
    }
});