import * as React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = (state) => {
    return {
        photoURL: state.auth.photoURL
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


class Input extends React.Component {
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

Input.propTypes = {
    photoURL: PropTypes.string
};

const AvatorIcon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default AvatorIcon;