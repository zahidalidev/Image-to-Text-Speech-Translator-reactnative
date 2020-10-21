import React from 'react';
import { Text, View, Button } from 'react-native';

function ReadTextScreen({ navigation }) {
    return (
        <View>
            <Text>Read screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default ReadTextScreen;