import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Animated } from 'react-native';

class SpringButton extends React.Component {
    onPressIn = () => {
        Animated.timing(this.scale, {
            toValue: 0.95,
            duration: 80,
            useNativeDriver: true,
        }).start()
    }

    onPressOut = () => {
        Animated.spring(this.scale, {
            toValue: 1,
            friction: 0,
            useNativeDriver: true,
            overshootClamping: true,
        }).start()
    }

    scale = new Animated.Value(1)

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.props.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
                <Animated.View
                    style={{
                        transform: [{ scale: this.scale }],
                    }}
                >
                    {this.props.children}
                </Animated.View>
            </TouchableOpacity>
        );
    }
}
SpringButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default SpringButton;