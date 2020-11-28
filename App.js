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

import HomeScreen from './app/screen/HomeScreen';
import AppDrawer from './app/component/AppDrawer';
import ReadTextScreen from './app/screen/ReadTextScreen';
import TranslateScreen from './app/screen/TranslateScreen';
import CameraScreen from './app/screen/CameraScreen/CameraScreen';
import colors from './app/config/colors';
import ResultScreen from './app/screen/ResultScreen';

const Stack = createDrawerNavigator();

class App extends Component {


  componentDidMount = () => {
    SplashScreen.hide();
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
            <Stack.Screen name="Home">{(props) => <HomeScreen {...props} />}</Stack.Screen>
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
