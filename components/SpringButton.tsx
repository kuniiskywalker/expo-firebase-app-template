import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';

interface Props {
    style?: object;
    onPress: () => void;
}

class SpringButton extends React.Component<Props> {
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
            >
                <Animated.View
                    style={[
                        this.props.style,
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
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

export default SpringButton;