import React from "react";
import { Text, View } from "native-base";
import { Drawer } from "react-native-paper";

function AppDrawer({ onHandleDrawer }) {
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section title="hi there" >
            <Drawer.Item
                style={{ backgroundColor: "red" }}
                label="Scan Doc"
                active={active === 'first'}
                onPress={() => {
                    setActive("first")
                    onHandleDrawer();
                }}
            />
            <Drawer.Item
                label="Read Text"
                active={active === 'second'}
                onPress={() => setActive("second")}
            />
            <Drawer.Item
                label="Traanslate"
                active={active === 'third'}
                onPress={() => setActive("third")}

            />
        </Drawer.Section>
    );
}

export default AppDrawer;