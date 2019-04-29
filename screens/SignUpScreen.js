import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EmailAndPasswordSignUpForm from '../containers/EmailAndPasswordSignUpForm';
import FacebookLoginButton from '../containers/FacebookLoginButton';

export default class SignUpScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'SignUp'
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <FacebookLoginButton />
                <EmailAndPasswordSignUpForm />
                <Button
                    title={"アカウントをお持ちの方はこちら"}
                    onPress={() => {
                        navigate('SignIn');
                    }}
                />
            </View>
        );
    }
}