import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppDrawer from '../component/AppDrawer';
import AppBar from '../component/AppBar';
import colors from '../config/colors';

const Drawer = createDrawerNavigator();


function HomeScreen() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <SafeAreaView>
                <AppBar />
                {/* <AppDrawer /> */}
            </SafeAreaView>
        </>
    );
}

export const RootNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={() => <AppDrawer />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
};