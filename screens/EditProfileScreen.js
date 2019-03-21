import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';

class EditProfileScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'EditProfile'
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <EditProfileForm />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, {})(EditProfileScreen);
