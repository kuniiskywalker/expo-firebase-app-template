import React from 'react';
import { NavigationActions, NavigationScreenProp } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

class SideMenu extends React.Component<Props> {
    navigateToScreen = (route: string) => () => {
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

export default SideMenu;