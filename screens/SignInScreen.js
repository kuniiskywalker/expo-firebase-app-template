import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EmailAndPasswordSignInForm from '../components/EmailAndPasswordSignInForm';
import FacebookLoginButton from '../components/FacebookLoginButton';

export default class SignInScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}><Text style={styles.headerText}>SignIn</Text></View>
                <FacebookLoginButton />
                <EmailAndPasswordSignInForm />
                <Button
                    title={"アカウントをお持ちでない方はこちら"}
                    onPress={() => {
                        navigate('SignUp');
                    }}
                />
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