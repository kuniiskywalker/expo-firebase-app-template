import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

import ActionSheet from 'react-native-actionsheet'

export default class ImagePickerButton extends React.Component {

    constructor() {
        super();
        this._pickImage = this._pickImage.bind(this);
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.showActionSheet}
                >
                    {this.props.photoURL? <Image source={{uri: this.props.photoURL}} style={{ width: 200, height: 200 }} />: <Image source={require('../assets/images/user.png')} style={{ width: 200, height: 200 }} />}
                </TouchableOpacity>

                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Which one do you like ?'}
                    options={['Camera', 'Album', 'cancel']}
                    cancelButtonIndex={2}
                    // destructiveButtonIndex={1}
                    onPress={this._onSelect}
                />
            </View>
        )
    }

    _onSelect = async index => {
        switch (index) {
            case 0:
                this._camera();
                break;
            case 1:
                this._pickImage();
                break;
        }
    };

    _camera = async () => {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        let result = await ImagePicker.launchCameraAsync();

        console.log(result)

        if (!result.cancelled) {
            this.props.onSelect(result.uri);
            // this.setState({ image: result.uri });
        }

    };

    _pickImage = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.props.onSelect(result.uri);
            // this.setState({ image: result.uri });
        }
    };
}
ImagePickerButton.propTypes = {
    photoURL: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};
