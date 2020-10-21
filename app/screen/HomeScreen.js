import React from 'react';
import { Component } from 'react';
import {
    SafeAreaView, StyleSheet, StatusBar, Button, View, Text,
    TouchableOpacity, TouchableHighlight, Modal, Alert
} from 'react-native';


import AppBar from '../component/AppBar';
import colors from '../config/colors';



class HomeScreen extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <SafeAreaView>
                    <AppBar navigation={this.props.navigation} />
                    {/* body if home screen */}

                    {/* down circle btton*/}
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            height: 100,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                        }}
                        onPress={() => this.setModalVisible(true)}
                    >
                        {/* <Icon name={"chevron-right"} size={30} color="#01a699" /> */}
                    </TouchableOpacity>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                                <Text>hi</Text>
                            </View>
                        </Modal>
                    </View>
                </SafeAreaView>
            </>
        );
    }
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


export default HomeScreen;