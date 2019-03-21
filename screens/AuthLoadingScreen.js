import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    ActivityIndicator,
    StatusBar,
    View,
    AsyncStorage
} from 'react-native';
import { firebaseAuth } from '../firebase';
import { changeAuthedState } from '../actions';

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);

        firebaseAuth.onAuthStateChanged(user => {
            if (user) {
                props.changeAuthedState({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });
            }
        });
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const {navigation} = this.props;
        const ShowedWelcome = await AsyncStorage.getItem('ShowedWelcome');
        if (ShowedWelcome !== 'true') {
            await AsyncStorage.setItem('ShowedWelcome', 'true');
            navigation.navigate('Welcome');
        } else {
            navigation.navigate('Home');
        }
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

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { changeAuthedState })(AuthLoadingScreen);
