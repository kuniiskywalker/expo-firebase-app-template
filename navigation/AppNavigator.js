import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Drawer from './Drawer';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MyPageScreen from "../screens/MyPageScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import SpringButton from '../components/SpringButton';
import AvatorIcon from "../containers/AvatorIcon";

const WelcomeStack = createStackNavigator(
    {
        Welcome: WelcomeScreen
    },
    {
        initialRouteName: 'Welcome',
        mode: 'modal',
    },
);

const AppStack = createStackNavigator(
    {
        Main: {
            screen: Drawer,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (
                        <Icon name="bars" size={24} onPress={()=>{navigation.openDrawer()}} style={{paddingLeft:20}}/>
                    ),
                    headerRight: (
                        <SpringButton
                            onPress={() => {
                                navigation.navigate("MyPage")
                            }}
                        >
                            <AvatorIcon />
                        </SpringButton>
                    )
                };
            }
        },
        MyPage: {
            screen: MyPageScreen
        },
        EditProfile: {
            screen: EditProfileScreen
        },
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Welcome: WelcomeStack,
        App: AppStack
    },
    {
        initialRouteName: 'AuthLoading',
    }
));