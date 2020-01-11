import React from 'react';

import Tab from './Tab';

import SideMenu from '../components/SideMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';

export default createDrawerNavigator(
    {
        Home: {
            screen: Tab
        }
    }, {
        drawerWidth: 300,
        initialRouteName: 'Home',
        contentComponent:({navigation}: any)=> <SideMenu navigation={navigation} />,
    }
);