import React, { Component } from 'react';
import { Alert, PermissionsAndroid } from 'react-native';
import CameraKitCameraScreen from './CameraKitCameraScreen';

import { CameraKitCamera } from "react-native-camera-kit"

export default class CameraScreen extends Component {


    onBottomButtonPressed = async (event) => {
        const captureImages = JSON.stringify(event.captureImages);
        this.props.navigation.navigate('ResultScreen', { data: captureImages })
        // this.props.navigation.navigate('ResultScreen', {
        //     screen: 'ResultScreen',
        //     params: { user: 'jane' },
        // })
        // Alert.alert(
        //     `${event.type} button pressed`,
        //     `${captureImages}`,
        //     [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        //     { cancelable: false },
        // );


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