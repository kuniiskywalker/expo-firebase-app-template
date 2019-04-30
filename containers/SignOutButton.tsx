import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { submitSignOut } from '../actions';

interface Props {
    submitSignOut: () => void;
}

class SignOutButton extends React.Component<Props> {
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

const mapStateToProps = (state: any) => {
    return {
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {submitSignOut})(SignOutButton);