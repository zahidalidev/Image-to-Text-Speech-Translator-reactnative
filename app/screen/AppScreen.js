import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';

import AppDrawer from '../component/AppDrawer';
import AppBar from '../component/AppBar';
import colors from '../config/colors';



const AppScreen = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <SafeAreaView>
                <AppBar />
            </SafeAreaView>
        </>
    );
};

export default AppScreen;