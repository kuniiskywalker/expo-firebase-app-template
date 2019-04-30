import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { submitFacebookLogin } from '../actions';

interface Props {
    submitFacebookLogin: () => void;
}

class FacebookLoginButton extends React.Component<Props> {
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

const mapStateToProps = (state: any) => {
    return {
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {submitFacebookLogin})(FacebookLoginButton);