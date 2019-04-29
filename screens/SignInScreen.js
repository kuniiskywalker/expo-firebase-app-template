import React, { Component } from 'react';
import { View, Button } from 'react-native';
import EmailAndPasswordSignInForm from '../containers/EmailAndPasswordSignInForm';
import FacebookLoginButton from '../containers/FacebookLoginButton';

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