import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconF from "react-native-vector-icons/Feather";
import IconE from "react-native-vector-icons/Entypo";
import { ListItem } from 'native-base';
import { Divider } from "react-native-paper";
import { SafeAreaView, StyleSheet, StatusBar, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';

import AppBar from '../component/AppBar';
import colors from '../config/colors';


class HomeScreen extends Component {
    state = {
        modalVisible: false,
        cameraModelVisible: false,
    };

    setModalVisible = (modalVisible) => {
        this.setState({ modalVisible });
    }

    setCameraModelVisible = (cameraModelVisible) => {
        this.setState({ cameraModelVisible })
    }

    render() {
        const { modalVisible, cameraModelVisible } = this.state;
        return (
            <View style={styles.mainContainer}>

                {/* Status Bar */}
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

                <SafeAreaView style={styles.safeContainer} >

                    {/* App Bar */}
                    <View>
                        <AppBar navigation={this.props.navigation} />
                    </View>


                    {/* bottom circle btton*/}
                    <View style={styles.bottomBarContainer} >

                        <View style={styles.circleContainer} >
                            <TouchableOpacity
                                style={[styles.circleButton, styles.shadowEffect]}
                                onPress={() => this.setModalVisible(true)}
                            >
                                <Icon name={modalVisible ? "times" : "plus"} size={30} color={colors.primary} />
                            </TouchableOpacity>

                        </View>


                        {/* Popup model buttons (camera, voice and reading) */}
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                            // onRequestClose={() => {
                            //     Alert.alert("Modal has been closed.");
                            // }}
                            >
                                <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)} >
                                    <View style={styles.modalOverlay} />
                                </TouchableWithoutFeedback>

                                <View style={styles.bottomCenterPopup}>
                                    <View style={styles.circleContainerLeft} >
                                        <TouchableOpacity
                                            style={[styles.circleButtonSmall, styles.shadowEffect]}
                                            onPress={() => this.setModalVisible(false)}
                                        >
                                            <IconM name={"volume-high"} size={30} color={colors.secondry} />
                                        </TouchableOpacity>

                                    </View>
                                    <View style={styles.circleContainerCenter} >
                                        <TouchableOpacity
                                            style={[styles.circleButtonSmall, styles.shadowEffect]}
                                            onPress={() => {
                                                this.setCameraModelVisible(true)
                                                this.setModalVisible(false)
                                            }}
                                        >
                                            <Icon name={"camera"} size={30} color={colors.secondry} />
                                        </TouchableOpacity>

                                    </View>
                                    <View style={styles.circleContainerRight} >
                                        <TouchableOpacity
                                            style={[styles.circleButtonSmall, styles.shadowEffect]}
                                            onPress={() => this.setModalVisible(false)}
                                        >
                                            <IconM name={"translate"} size={30} color={colors.secondry} />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </Modal>
                        </View>


                        {/* camera and gallery popuup */}
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={cameraModelVisible}
                            >
                                <TouchableWithoutFeedback onPress={() => this.setCameraModelVisible(false)} >
                                    <View style={styles.modalOverlay} />
                                </TouchableWithoutFeedback>

                                <View style={styles.bottomCenterPopup}>

                                    <View style={styles.cardContainer} >
                                        <ListItem >
                                            <IconF name="camera" size={30} />
                                            <Text style={styles.listHeading} >Choose what action to take</Text>
                                        </ListItem>

                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setCameraModelVisible(false)

                                                // this.props.navigation.navigate('CameraScreen')

                                                this.props.onGetImg('camera', this.props.navigation)
                                            }}
                                        >
                                            <View style={{ flexDirection: "row", padding: 15 }} >
                                                <Icon name={"camera"} size={20} color={colors.primary} />
                                                <Text style={{ marginLeft: 15 }} >Camera</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <Divider style={{ height: 1, backgroundColor: colors.lightGray, width: 130 }} />

                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setCameraModelVisible(false)
                                                // this.props.navigation.navigate('CameraScreen')
                                                this.props.onGetImg('gallery', this.props.navigation)
                                            }}
                                        >
                                            <View style={{ flexDirection: "row", padding: 15 }} >
                                                <IconE name={"images"} size={20} color={colors.primary} />
                                                <Text style={{ marginLeft: 15 }} >Gallery</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </SafeAreaView>
            </View >
        );
    }
};


const styles = StyleSheet.create({
    // to hide the overlay model
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    mainContainer: {
        flex: 3,
    },

    safeContainer: {
        flex: 3,
    },

    bottomBarContainer: {
        flex: 3,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        marginBottom: 40
    },

    circleContainer: {

    },

    circleButton: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 50,
    },


    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 230
    },

    bottomCenterPopup: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginBottom: 200
    },

    circleButtonSmall: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    circleContainerLeft: {
        marginBottom: -40
    },

    circleContainerCenter: {

    },

    circleContainerRight: {
        marginBottom: -40
    },

    cardContainer: {
        width: 300,
        height: 165,
        alignItems: "center",
        backgroundColor: colors.white
    },

    listHeading: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 10
    },

    shadowEffect: {
        shadowColor: 'rgba(0 ,0 ,0 , .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 5, // Android
    }
});


export default HomeScreen;