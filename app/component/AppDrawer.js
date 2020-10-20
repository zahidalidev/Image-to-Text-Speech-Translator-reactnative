import React from "react";
import { Text, View } from "native-base";
import { Drawer } from "react-native-paper";

function AppDrawer({ navigation }) {
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section  >
            <View>
                <Text>
                    Doc OCR
                </Text>
                <Text>
                    Home
                </Text>
                <Text>
                    DetailsScreen
                </Text>
            </View>
            {/* <Drawer.Item
                label="Doc OCR"
                active={active === 'first'}
            // style={{  }}
            />
            <Drawer.Item
                label="Home"
                active={active === 'second'}
                onPress={() => navigation.navigate('Home')}
            />
            <Drawer.Item
                label="Details"
                active={active === 'third'}
                onPress={() => navigation.navigate("DetailScreen")}

            /> */}
        </Drawer.Section>
    );
}

export default AppDrawer;