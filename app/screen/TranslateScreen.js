import React from 'react';
import { Text, View, Button } from 'react-native';

function TranslateScreen({ navigation }) {
    return (
        <View>
            <Text>Translate Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default TranslateScreen;