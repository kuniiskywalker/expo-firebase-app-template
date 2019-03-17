import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import {submitFacebookLogin} from '../actions';

class FacebookLoginButton extends Component {
    onButtonPress() {
        this.props.submitFacebookLogin();
    }

    render() {
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                title="Facebook Login"
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

export default connect(mapStateToProps, {submitFacebookLogin})(FacebookLoginButton);
