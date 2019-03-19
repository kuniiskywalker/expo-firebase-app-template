import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render () {
        return (
            <View>
                <ScrollView>
                    <View>
                        <View>
                            <Text onPress={this.navigateToScreen('Home')}>
                                Home
                            </Text>
                        </View>
                        <View>
                            <Text onPress={this.navigateToScreen('MyPage')}>
                                MyPage
                            </Text>
                        </View>
                        <View>
                            <Text onPress={this.navigateToScreen('Contact')}>
                                Contact
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;