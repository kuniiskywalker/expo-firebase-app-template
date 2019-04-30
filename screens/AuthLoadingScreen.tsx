import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    StatusBar,
    View,
    AsyncStorage
} from 'react-native';
import { firebaseAuth } from '../firebase';
import { changeAuthedState } from '../actions';

interface User {
    email: string;
    displayName: string;
    photoURL: string;
}

interface Props {
    navigation: NavigationScreenProp<any,any>;
    photoURL: string;
    changeAuthedState: (params: User) => void;
}

class AuthLoadingScreen extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        firebaseAuth.onAuthStateChanged((user: User) => {
            if (user) {
                props.changeAuthedState({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });
            }
        });
    }

    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const ShowedWelcome = await AsyncStorage.getItem('ShowedWelcome');
        if (ShowedWelcome !== 'true') {
            await AsyncStorage.setItem('ShowedWelcome', 'true');
            this.props.navigation.navigate('Welcome');
        } else {
            this.props.navigation.navigate('Home');
        }
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

const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { changeAuthedState })(AuthLoadingScreen);
