import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export default class SignInButton extends Component {
    render() {
        return (
            <Button
                onPress={this.props.onPress}
                title="Sign In"
            />
        )
    }
}

SignInButton.propTypes = {
    onPress: PropTypes.func.isRequired,
};
