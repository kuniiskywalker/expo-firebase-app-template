import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EmailAndPasswordSignInForm from '../components/EmailAndPasswordSignInForm';
import FacebookLoginButton from '../components/FacebookLoginButton';

export default class SignInScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'SignIn'
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
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