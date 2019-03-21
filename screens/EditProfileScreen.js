import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ImagePickerButton from '../components/ImagePickerButton';
import EditProfileForm from '../components/EditProfileForm';
import { updateProfileImage } from '../actions';

class EditProfileScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'EditProfile'
    });

    onChangeProfileImage(photoURL) {
        this.props.updateProfileImage(photoURL);
    }

    render() {
        return (
            <View>
                <View>
                    <ImagePickerButton
                        photoURL={this.props.photoURL}
                        onSelect={image => {
                            this.onChangeProfileImage(image)
                        }}
                    />
                </View>
                <EditProfileForm />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        photoURL: state.auth.photoURL,
    }
}

export default connect(mapStateToProps, {updateProfileImage})(EditProfileScreen);
