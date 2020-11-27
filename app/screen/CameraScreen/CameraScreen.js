import React, { Component } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import CameraKitCameraScreen from './CameraKitCameraScreen';

import { CameraKitCamera } from "react-native-camera-kit"

export default class CameraScreen extends Component {
    onBottomButtonPressed = async (event) => {

        const captureImages = JSON.stringify(event.captureImages);
        Alert.alert(
            `${event.type} button pressed`,
            `${captureImages}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false },
        );
    }

    componentDidMount = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            const granted2 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            const granted3 = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );

            if (granted3 === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }

        await this.onCheckCameraAuthoPressed()
    }

    async onCheckCameraAuthoPressed() {
        const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        if (success) {
            Alert.alert('You have permission 🤗')
        }
        else {
            Alert.alert('No permission 😳')
        }
    }
    render() {

        CameraKitCamera.requestDeviceCameraAuthorization();
        const isCameraAuthorized = CameraKitCamera.checkDeviceCameraAuthorizationStatus()
        console.log("img .....................", isCameraAuthorized);
        return (
            <CameraKitCameraScreen
                actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
                flashImages={{
                    on: require('../../images/flashOn.png'),
                    off: require('../../images/flashOff.png'),
                    auto: require('../../images/flashAuto.png'),
                }}
                cameraFlipImage={require('../../images/cameraFlipIcon.png')}
                captureButtonImage={require('../../images/cameraButton.png')}
            />
        );
    }
}