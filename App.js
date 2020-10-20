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


import HomeScreen from './app/screen/HomeScreen';
import AppDrawer from './app/component/AppDrawer';
import DetailScreen from './app/screen/DetailScreen';

const Stack = createDrawerNavigator();

class App extends Component {

  componentDidMount = () => {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator edgeWidth={100} drawerContent={() => <AppDrawer />}>

            <Stack.Screen name="Home">{(props) => <HomeScreen {...props} />}</Stack.Screen>

            <Stack.Screen name="DetailScreen" options={{ title: 'Home Screen' }} component={DetailScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({

});

export default App;
