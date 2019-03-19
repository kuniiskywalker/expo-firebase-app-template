import React from 'react';

import Tab from './Tab';

import MyPageScreen from '../screens/MyPageScreen';

import SideMenu from '../components/SideMenu';
import { createDrawerNavigator } from 'react-navigation';

export default createDrawerNavigator(
    {
        Home: {
            screen: Tab
        },
        MyPage: {
            screen: MyPageScreen
        }
    }, {
        drawerWidth: 300,
        initialRouteName: 'Home',
        contentComponent:({navigation})=> <SideMenu navigation={navigation} />,
    }
);