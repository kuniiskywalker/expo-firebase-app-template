import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    AsyncStorage
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync() {
        const {navigation} = this.props;
        AsyncStorage.getItem('ShowWelcome')
            .then(ShowWelcome => {
                if (ShowWelcome !== 'showed') {
                    AsyncStorage.setItem('ShowWelcome', 'showed')
                        .then(() => {
                            navigation.navigate('Welcome');
                        })
                } else {
                    navigation.navigate('Home');
                }
            })
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}