import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import AppDrawer from "./AppDrawer";

import colors from "../config/colors";

const AppBar = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [showSearch, setShowSearch] = React.useState(false);
    const [showAppBar, setShowAppBar] = React.useState(true);

    const handleMenu = () => {
        navigation.openDrawer();
    };
    const handleMore = () => console.log('Shown more');
    const handleSearch = () => console.log('Searching');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            {showAppBar && <Appbar.Header style={styles.container} >
                <Appbar.Action size={30} icon="menu" onPress={handleMenu} />
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
        </>
    );
}

const styles = StyleSheet.create({
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
        // borderRadius: 95
    }
})
export default AppBar;