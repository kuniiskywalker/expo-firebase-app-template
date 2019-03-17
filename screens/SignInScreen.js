import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../LoginForm';
import FacebookLoginButton from '../FacebookLoginButton';

export default class SignInScreen extends Component {
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}><Text style={styles.headerText}>ログインフォーム</Text></View>
                <FacebookLoginButton />
                <LoginForm />
            </View>
        );
    }
}

const styles = {
    header: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600'
    }
};