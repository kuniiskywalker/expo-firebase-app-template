import React from 'react';
import { View, Button } from 'react-native';
import EmailAndPasswordSignInForm from '../containers/EmailAndPasswordSignInForm';
import FacebookLoginButton from '../containers/FacebookLoginButton';
import { NavigationScreenProp } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

export default class SignInScreen extends React.Component<Props> {

    static navigationOptions = () => ({
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