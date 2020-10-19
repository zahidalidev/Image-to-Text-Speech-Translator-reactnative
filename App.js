/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';


import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './app/screen/MainScreen';

import SplashScreen from "react-native-splash-screen";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
