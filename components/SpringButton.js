import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Animated } from 'react-native';

class SpringButton extends React.Component {
    onPressIn = () => {
        Animated.timing(this.scale, {
            toValue: 0.95,
            duration: 200,
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
                style={this.props.styles}
            >
                <Animated.View
                    style={[
                        this.props.style,
                        {
                            transform: [{ scale: this.scale }],
                        },
                    ]}
                >
                    {this.props.children}
                </Animated.View>
            </TouchableOpacity>
        );
    }
}
SpringButton.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func.isRequired
};

export default SpringButton;