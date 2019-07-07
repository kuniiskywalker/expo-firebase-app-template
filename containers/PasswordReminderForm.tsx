import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import SpringButton from '../components/SpringButton';
import { submitPasswordReminder } from '../actions';

interface Props {
    email: string;
    loading: boolean;
    submitPasswordReminder: (params: {
        email: string;
    }) => void;
}

interface State {
    email: string;
}

class PasswordReminderForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state={
            email: '',
        };
    }

    componentWillMount() {
        this.setState({
            email: this.props.email,
        });
    }

    onButtonPress() {
        const { email } = this.state;
        this.props.submitPasswordReminder({email});
    }

    loadSpinner() {
        if (this.props.loading) {
            return <ActivityIndicator size="small"/>
        }

        return (
            <SpringButton
                onPress={this.onButtonPress.bind(this)}
                style={styles.buttonStyle}
            >
                <Text style={styles.textStyle}>
                    送信
                </Text>
            </SpringButton>
        )
    }

    render() {
        return (
            <View>

                <View style={styles.wrap}>
                    <TextInput
                        placeholder="user@gmail.com"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        style={styles.inputStyle}
                    />
                </View>

                <View style={styles.wrap}>
                    {this.loadSpinner()}
                </View>
            </View>
        )
    }
}

const styles = {
    wrap: {
        padding: 10
    },
    textStyle: {
        // alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        // fontWeight: 600,
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 30,
        borderWidth: 1,
        borderColor: '#333'
    }
}

const mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        loading: state.auth.loading,
    }
}

export default connect(mapStateToProps, {submitPasswordReminder})(PasswordReminderForm);