import React from 'react';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const WelcomeStack = createStackNavigator(
    {
        Welcome: WelcomeScreen
    },
    {
        initialRouteName: 'Welcome',
        mode: 'modal',
    },
);

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Welcome: WelcomeStack,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AuthLoading',
    }
));