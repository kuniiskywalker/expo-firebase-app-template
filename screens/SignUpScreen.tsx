import React from 'react';
import { View, Button } from 'react-native';
import EmailAndPasswordSignUpForm from '../containers/EmailAndPasswordSignUpForm';
import FacebookLoginButton from '../containers/FacebookLoginButton';
import { NavigationScreenProp } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

export default class SignUpScreen extends React.Component<Props> {

    static navigationOptions = () => ({
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