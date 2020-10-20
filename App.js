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
import SplashScreen from "react-native-splash-screen";
import { createDrawerNavigator } from '@react-navigation/drawer';


import AppScreen from './app/screen/AppScreen';
import AppDrawer from './app/component/AppDrawer';

const Drawer = createDrawerNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator edgeWidth={100} drawerContent={() => <AppDrawer />}>
            <Drawer.Screen name="Home" component={AppScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
