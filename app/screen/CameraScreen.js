import React, { Component, useImperativeHandle } from 'react';
import { View, Image, PermissionsAndroid } from 'react-native';
import ImagePicker from "react-native-image-picker";
import { CameraKitCamera } from "react-native-camera-kit"


const options = {
    title: 'Choose Option',
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
        image: null,
    }

    imagePickerBody = (response) => {
        // Same code as in above section!
        if (response.didCancel) {
            console.log('User cancelled image picker');
            this.props.navigation.navigate('Home')
        }
        else if (response.error) {
            console.log('Image Picker Error: ', response.error);
        }

        else {
            // let source = { uri: response.uri };
            this.setState({ image: response })
            this.props.navigation.navigate('ResultScreen')

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            // response['uri'] = response.path;
            // response['name'] = response.fileName;

            // this.setState({
            //     avatarSource: source,
            //     pic: response,
            //     loading: true
            // });

            // this.uploadOnCloudinary(response)
        }
    }


    getImage = () => {
        console.log("selec")

        // let selection = this.props.route.params.data;
        // if (selection === "camera") {
        //     ImagePicker.launchCamera(options, (response) => {
        //         this.imagePickerBody(response)
        //     });
        // } else {
        //     ImagePicker.launchImageLibrary(options, (response) => {
        //         this.imagePickerBody(response)
        //     });
        // }
    }

    // permissions
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

            } else {
                console.log("Permission denied 😳");
            }
        } catch (err) {
            console.warn(err);
        }

        const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        if (success) {
            console.log('You have permission 🤗')
        }
        else {
            console.log('No permission 😳')
        }

        // this.getImage()
    }

    render() {
        return null;
    }
}