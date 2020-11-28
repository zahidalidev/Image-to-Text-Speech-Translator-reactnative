import * as React from "react";
import { Modal, StyleSheet, View, TouchableOpacity, Text, TouchableWithoutFeedback } from "react-native";
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";

import AppDrawer from "./AppDrawer";
import colors from "../config/colors";

const AppBar = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [showSearch, setShowSearch] = React.useState(false);
    const [showAppBar, setShowAppBar] = React.useState(true);
    const [showCard, setShowCard] = React.useState(false)

    const handleMenu = () => {
        navigation.openDrawer();
    };
    const handleMore = () => {
        setShowCard(true)
    };
    const handleSearch = () => console.log('Searching');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            {showAppBar && <Appbar.Header style={styles.container} >
                <Appbar.Action size={30} icon="menu" onPress={handleMenu} />
                {/* <Icon name={"share-alt"} size={30} color={colors.primary} /> */}
                <Appbar.Content titleStyle={{ fontSize: 30 }} title="Doc OCR" />

                <Appbar.Action size={30} icon="magnify" onPress={() => {
                    setShowSearch(true);
                    setShowAppBar(false)
                }} />
                <Appbar.Action size={30} icon="dots-vertical" onPress={handleMore} />
            </Appbar.Header>}

            {showSearch && <Appbar.Header style={styles.container} >
                <Appbar.Action size={30} icon="arrow-left" onPress={() => {
                    setShowSearch(false)
                    setShowAppBar(true)
                }} />
                <Searchbar
                    barTintColor="#2222221A"
                    style={styles.searchBar}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    iconColor="white"
                    placeholderTextColor={colors.lightGray}
                    selectionColor={colors.secondry}
                    inputStyle={{ color: colors.white }}
                />
            </Appbar.Header>}

            {/* left share and rate us popup buttons icons */}
            <View style={styles.modelContainer}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showCard}
                >
                    {/* to hide the modal */}
                    <TouchableWithoutFeedback onPress={() => setShowCard(false)}>
                        <View style={styles.modalOverlay} />
                    </TouchableWithoutFeedback>

                    <View style={styles.modelShareRateContainer}>
                        <View style={styles.verticalDotContainerCard} >
                            <View  >
                                <TouchableOpacity
                                    style={[styles.circleButtonSmall, styles.shadowEffect]}
                                    onPress={() => setShowCard(false)}
                                >
                                    <View style={{ flexDirection: "row", padding: 8 }} >
                                        <IconM name={"star"} size={30} color={colors.primary} />
                                        <Text style={{ marginLeft: 20, marginTop: 8 }} >Rate Us</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.circleContainerCenter} >
                                <TouchableOpacity
                                    style={[styles.circleButtonSmall, styles.shadowEffect]}
                                    onPress={() => {
                                        setShowCard(false)
                                    }}
                                >
                                    <View style={{ flexDirection: "row", padding: 8 }} >
                                        <Icon name={"share-alt"} size={30} color={colors.primary} />
                                        <Text style={{ marginLeft: 20, marginTop: 8 }} >Share</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ color: colors.mediumLightGray, paddingTop: 10 }} >App version 1.0.0</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


        </>
    );
}

const styles = StyleSheet.create({

    // to hide the overlay model
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },

    container: {
        backgroundColor: colors.primary
    },

    searchBar: {
        position: "absolute",
        backgroundColor: colors.primary,
        width: "75%",
        height: "80%",
        borderBottomWidth: 0.3,
        borderBottomColor: colors.lightGray,
        right: 20,
    },

    modelContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 230
    },
    modelShareRateContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        top: 40,
        right: 40
    },

    verticalDotContainerCard: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 140,
        height: 160,
        paddingBottom: 5
    }
})
export default AppBar;