import React from "react";
import { Text, View } from "native-base";
import { Button, Divider, Drawer } from "react-native-paper";
import { Image, StyleSheet } from "react-native";

function AppDrawer({ navigation }) {
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section  >
            <View style={{ flexDirection: 'row', padding: 20 }} >
                <Image style={{ width: 260, height: 50 }} source={require("../assets/navigationIcon.png")} />
            </View>
            <Divider />
            <Drawer.Item
                label="Home"
                icon="home"
                active={active === 'second'}
                onPress={() => navigation.navigate('Home')}
            />
            <Divider />
            <Drawer.Item
                label="Features"
            />

            <Drawer.Item
                label="Image To Text"
                icon="camera"
                active={active === 'second'}
                onPress={() => navigation.navigate('Home')}
            />
            <Drawer.Item
                label="Listen"
                icon="account-voice"
                active={active === 'third'}
                onPress={() => navigation.navigate("ReadTextScreen")}

            />
            <Drawer.Item
                label="Translate"
                icon="translate"
                active={active === 'third'}
                onPress={() => navigation.navigate("TranslateScreen")}

            />
            <Divider />
            <Drawer.Item
                label="Extras"
            />
            <Drawer.Item
                label="Privacy Policy"
                icon="lock"
                active={active === 'third'}
                onPress={() => navigation.navigate("TranslateScreen")}

            />
            <Drawer.Item
                label="Rate Us"
                icon="star"
                active={active === 'third'}
                onPress={() => navigation.navigate("TranslateScreen")}

            />
            <Drawer.Item
                label="Share"
                icon="share"
                active={active === 'third'}
                onPress={() => navigation.navigate("TranslateScreen")}

            />
        </Drawer.Section>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "flex-start",
        paddingVertical: 20,

    }
})

export default AppDrawer;