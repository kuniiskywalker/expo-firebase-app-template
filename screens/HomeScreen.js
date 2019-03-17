import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>HOME</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    header: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600'
    }
};