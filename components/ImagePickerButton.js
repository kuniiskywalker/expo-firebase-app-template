import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

export default class ImagePickerButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            // hasCameraPermission: null, // カメラ機能の許可
            // type: Camera.Constants.Type.back, // 背面カメラを利用
        };
    }

    render() {
        let { image } = this.state;

        return (
            <View>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                <Button
                    title="Enjoy Camera!"
                    onPress={this._camera}
                />
            </View>
        );
    }
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
    onSelect: PropTypes.func.isRequired,
};
