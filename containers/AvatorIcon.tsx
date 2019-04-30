import React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    photoURL: string;
}

const mapStateToProps = (state: any) => {
    return {
        photoURL: state.auth.photoURL
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

class Input extends React.Component<Props> {
    render() {
        if (this.props.photoURL) {
            return (
                <View style={{paddingRight:20}}>
                    <Image
                        source={{uri: this.props.photoURL}}
                        style={{width: 24, height: 24, borderRadius: 24/ 2}}
                    />
                </View>
            )
        } else {
            return (
                <View style={{paddingRight:20}}>
                    <Icon
                        name="user"
                        size={24}
                    />
                </View>
            );
        }
    }
}

const AvatorIcon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default AvatorIcon;