import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Button } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class WelcomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    style={{ flex: 1 }}
                >
                    <View
                        key={0}
                        style={{ flex: 1, backgroundColor: 'skyblue', width: SCREEN_WIDTH }}
                    >
                        <Text>STEP: 1</Text>
                        <Text>特徴 1</Text>
                        <Button
                            onPress={() => {
                                navigate('Home');
                            }}
                            title="はじめる"
                        />
                        <Text>1 / 3</Text>
                    </View>
                    <View
                        key={1}
                        style={{ flex: 1, backgroundColor: 'skyblue', width: SCREEN_WIDTH }}
                    >
                        <Text>STEP: 2</Text>
                        <Text>特徴 2</Text>
                        <Button
                            onPress={() => {
                                navigate('Home');
                            }}
                            title="はじめる"
                        />
                        <Text>2 / 3</Text>
                    </View>
                    <View
                        key={2}
                        style={{ flex: 1, backgroundColor: 'skyblue', width: SCREEN_WIDTH }}
                    >
                        <Text>STEP: 3</Text>
                        <Text>特徴 3</Text>
                        <Button
                            onPress={() => {
                                navigate('Home');
                            }}
                            title="はじめる"
                        />
                        <Text>3 / 3</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});