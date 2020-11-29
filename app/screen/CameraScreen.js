import React, { Component } from 'react';
import { View, Image, PermissionsAndroid } from 'react-native';
import ImagePicker from "react-native-image-picker";
import { CameraKitCamera } from "react-native-camera-kit"

const options = {
    title: 'Selecciona una foto',
    takePhotoButtonTitle: 'Take Using Camera',
    chooseFromLibraryButtonTitle: 'Select From Gallery',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    quality: 1, maxWidth: 3072, maxHeight: 3072

};




export default class CameraScreen extends Component {

    state = {
        image: null
    }

    // onBottomButtonPressed = async (event) => {
    //     this.props.navigation.navigate('ResultScreen', { data: captureImages })
    // }

    getImage = () => {
        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);
            this.setState({ image: response })
            console.log("response")
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('Image Picker Error: ', response.error);
            }

            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                response['uri'] = response.path;
                response['name'] = response.fileName;

                // this.setState({
                //     avatarSource: source,
                //     pic: response,
                //     loading: true
                // });

                // this.uploadOnCloudinary(response)
            }
        });
    }

    componentDidMount = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message:
                        "DOC OCR Need Permission",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            const granted2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "READ EXTERNAL STORAGE",
                    message:
                        "DOC OCR Need Permission",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            const granted3 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "WRITE EXTERNAL STORAGE",
                    message:
                        "DOC OCR Need Permission",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED && granted2 === PermissionsAndroid.RESULTS.GRANTED && granted3 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the App 🤗");

                this.getImage()
            } else {
                console.log("Permission denied 😳");
            }
        } catch (err) {
            console.warn(err);
        }

        await this.onCheckCameraAuthoPressed()
    }

    async onCheckCameraAuthoPressed() {
        const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        if (success) {
            console.log('You have permission 🤗')
        }
        else {
            console.log('No permission 😳')
        }
    }
    render() {
        return (
            <View>
                <Image style={{ width: 200, height: 350 }} source={this.state.image} />
            </View>
        );
    }
}