import React from 'react';
import { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Button,
    View,
    Text,
} from 'react-native';

import AppBar from '../component/AppBar';
import colors from '../config/colors';



class HomeScreen extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <SafeAreaView>
                    <AppBar />
                    <View>
                        <Button title="Home Screen" onPress={() => this.props.navigation.navigate('DetailScreen')} />
                    </View>
                </SafeAreaView>
            </>
        );
    }
};

export default HomeScreen;