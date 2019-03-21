import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Button } from 'react-native';
import SignOutButton from '../components/SignOutButton';
import SignInButton from '../components/SignInButton';

class MyPageScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'MyPage'
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                {(() => {
                    if (this.props.loggedIn === true) {
                        return (
                            <View>
                                <Button
                                    title={"Edit Profile"}
                                    onPress={() => {
                                        navigate("EditProfile");
                                    }}
                                />
                                <SignOutButton />
                            </View>
                        )
                    } else {
                        return (
                            <View>
                                <SignInButton onPress={() => {
                                    navigate('SignIn');
                                }} />
                            </View>
                        )
                    }
                    return false;
                })()}
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
