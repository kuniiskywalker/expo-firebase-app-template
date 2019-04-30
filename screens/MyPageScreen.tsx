import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import SignOutButton from '../containers/SignOutButton';
import { NavigationScreenProp } from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<any, any>;
    loggedIn: boolean;
}

class MyPageScreen extends React.Component<Props> {

    static navigationOptions = () => ({
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
                                <Button
                                    onPress={() => {
                                        navigate('SignIn');
                                    }}
                                    title="Sign In"
                                />
                            </View>
                        )
                    }
                    return false;
                })()}
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {})(MyPageScreen);
