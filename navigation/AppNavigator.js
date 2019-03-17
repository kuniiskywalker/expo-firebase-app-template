import React from 'react';

import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';

const AppStack = createStackNavigator(
    {
        SignIn: SignInScreen
    },
    {
        initialRouteName: 'SignIn'
    });

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
    },
    {
        initialRouteName: 'App',
    }
));