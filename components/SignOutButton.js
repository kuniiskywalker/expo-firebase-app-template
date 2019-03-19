import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { submitSignOut } from '../actions';

class SignOutButton extends Component {
    onButtonPress() {
        this.props.submitSignOut();
    }

    render() {
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                title="Sign Out"
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {submitSignOut})(SignOutButton);
