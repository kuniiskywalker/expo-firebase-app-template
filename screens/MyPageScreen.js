import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import SignOutButton from '../components/SignOutButton';
import SignInButton from '../components/SignInButton';

class MyPageScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text>MyPage</Text>
                {this.props.loggedIn? <SignOutButton />: <SignInButton onPress={() => {
                    navigate('SignIn');
                }} />}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {})(MyPageScreen);
