import React from 'react';
import { View, Image } from 'react-native';
import { Permissions, ImagePicker } from 'expo';
import SpringButton from '../components/SpringButton';
const ActionSheet = require("react-native-actionsheet").default;

interface Props {
    photoURL: string;
    onSelect: (uri: string) => void;
}

export default class ImagePickerButton extends React.Component<Props> {

    private ActionSheet: any;

    constructor(props: Props) {
        super(props);
        this._pickImage = this._pickImage.bind(this);
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }
    render() {
        return (
            <View>
                <SpringButton
                    onPress={this.showActionSheet}
                >
                    {this.props.photoURL? <Image source={{uri: this.props.photoURL}} style={{ width: 200, height: 200 }} />: <Image source={require('../assets/images/user.png')} style={{ width: 200, height: 200 }} />}
                </SpringButton>

                <ActionSheet
                    ref={(o: any) => this.ActionSheet = o}
                    title={'Which one do you like ?'}
                    options={['Camera', 'Album', 'cancel']}
                    cancelButtonIndex={2}
                    // destructiveButtonIndex={1}
                    onPress={this._onSelect}
                />
            </View>
        )
    }

    _onSelect = async (index: number) => {
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

        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA);
        const result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            this.props.onSelect(result.uri);
        }

    };

    _pickImage = async () => {
        // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.props.onSelect(result.uri);
        }
    };
}