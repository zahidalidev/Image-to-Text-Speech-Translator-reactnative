import React, { Component } from 'react';
import { View, Image } from 'react-native';
import ImagePicker from "react-native-image-picker";

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

class GalleryScreen extends Component {

    state = {
        image: null
    }

    componentDidMount = () => {
        //alert('clicked');

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
    render() {

        return (
            <View>
                <Image style={{ width: 200, height: 350 }} source={this.state.image} />
            </View>
        );
    }
}

export default GalleryScreen;