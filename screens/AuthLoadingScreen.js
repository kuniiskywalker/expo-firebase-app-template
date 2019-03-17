import React from 'react';
import { firebaseAuth } from '../firebase';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        const {navigation} = this.props;
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                navigation.navigate('App');
            } else {
                navigation.navigate('SignIn');
            }
        });
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}