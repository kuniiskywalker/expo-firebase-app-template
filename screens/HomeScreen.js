import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'HOME'
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>HOME</Text>
            </View>
        );
    }
}