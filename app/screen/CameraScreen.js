import React, { Component, useImperativeHandle } from 'react';
import { View, Image, PermissionsAndroid } from 'react-native';
import { CameraKitCamera } from "react-native-camera-kit"

export default class CameraScreen extends Component {


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