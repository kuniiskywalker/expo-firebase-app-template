import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ImagePickerButton from '../components/ImagePickerButton';
import EditProfileForm from '../containers/EditProfileForm';
import { updateProfileImage } from '../actions';

interface Props {
    photoURL: string;
    updateProfileImage: (photoURL: string) => void;
}

class EditProfileScreen extends React.Component<Props> {

    static navigationOptions = () => ({
        title: 'EditProfile'
    });

    onChangeProfileImage(photoURL: string) {
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

const mapStateToProps = (state: any) => {
    return {
        photoURL: state.auth.photoURL,
    }
}

export default connect(mapStateToProps, {updateProfileImage})(EditProfileScreen);
