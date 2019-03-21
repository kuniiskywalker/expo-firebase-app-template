import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import { submitSignIn } from '../actions';

class EditProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            displayName: '',
            // photoURL: '',
        };
    }

    componentWillMount() {
        this.setState({
            email: this.props.email,
            displayName: this.props.displayName,
            // photoURL: this.props.photoURL,
        });
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.props.submitSignIn({email, password});
    }

    loadSpinner() {
        if (this.props.loading) {
            return <ActivityIndicator size="small"/>
        }

        return (
            <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                    更新
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View>

                <View style={styles.wrap}>
                    <TextInput
                        placeholder="display name"
                        autoCorrect={false}
                        value={this.state.displayName}
                        onChangeText={displayName => this.setState({displayName})}
                        style={styles.inputStyle}
                    />
                </View>

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
                    <TextInput
                        secureTextEntry
                        placeholder="パスワード"
                        autoCorrect={false}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        style={styles.inputStyle}
                    />
                </View>

                <View style={styles.wrap}>
                    {this.loadSpinner()}
                </View>

                <Text>
                    {this.props.loggedIn}
                </Text>
            </View>
        )
    }
}

const styles = {
    wrap: {
        padding: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
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

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        displayName: state.auth.displayName,
        // photoURL: state.auth.photoURL,
        // password: state.auth.password,
        loading: state.auth.loading,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, {submitSignIn})(EditProfileForm);
