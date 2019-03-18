import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EmailAndPasswordSignUpForm from '../components/EmailAndPasswordSignUpForm';
import FacebookLoginButton from '../components/FacebookLoginButton';

export default class SignUpScreen extends Component {
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

SignUpScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'SignUp'
    }
};

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