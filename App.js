/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';


import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import ImagePicker from "react-native-image-picker";

import HomeScreen from './app/screen/HomeScreen';
import AppDrawer from './app/component/AppDrawer';
import ReadTextScreen from './app/screen/ReadTextScreen';
import TranslateScreen from './app/screen/TranslateScreen';
import CameraScreen from './app/screen/CameraScreen';
import ResultScreen from './app/screen/ResultScreen';
import colors from './app/config/colors';

const Stack = createDrawerNavigator();


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

class App extends Component {
  state = {
    image: null,
  }


  componentDidMount = () => {
    SplashScreen.hide();
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

  getImg = (selection, navigation) => {
    console.log("selec")

    if (selection === "camera") {
      ImagePicker.launchCamera(options, (response) => {
        this.imagePickerBody(response)
      });
    } else {
      ImagePicker.launchImageLibrary(options, (response) => {
        this.imagePickerBody(response)
      });
    }

    navigation.navigate('ResultScreen')
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            drawerType={"front"}
            overlayColor="transparent"
            edgeWidth={100}
            drawerStyle={{
              backgroundColor: colors.white,
              width: "75%"
            }}
            drawerContent={(props) => <AppDrawer {...props} />}
          >

            {/* Two Method to navigate to components */}
            <Stack.Screen name="Home">{(props) => <HomeScreen {...props} onGetImg={this.getImg} />}</Stack.Screen>
            <Stack.Screen name="CameraScreen">{(props) => <CameraScreen {...props} />}</Stack.Screen>
            <Stack.Screen name="ResultScreen">{(props) => <ResultScreen {...props} />}</Stack.Screen>
            <Stack.Screen name="ReadTextScreen" options={{ title: "ReadTextScreen" }} component={ReadTextScreen} />
            <Stack.Screen name="TranslateScreen" options={{ title: "TranslateScreen" }} component={TranslateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({

});

export default App;
