import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EmailAndPasswordSignUpForm from '../components/EmailAndPasswordSignUpForm';
import FacebookLoginButton from '../components/FacebookLoginButton';

export default class SignUpScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}><Text style={styles.headerText}>SignUp</Text></View>
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