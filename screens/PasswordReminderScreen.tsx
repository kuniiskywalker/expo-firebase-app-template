import React from 'react';
import { View } from 'react-native';
import PasswordReminderForm from '../containers/PasswordReminderForm';
import { NavigationScreenProp } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

export default class PasswordReminderScreen extends React.Component<Props> {

    static navigationOptions = () => ({
        title: 'PasswordReminder'
    });

    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <PasswordReminderForm />
            </View>
        );
    }
}