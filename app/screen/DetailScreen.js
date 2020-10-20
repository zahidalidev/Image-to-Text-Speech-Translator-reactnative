import React from 'react';
import { Text, View, Button } from 'react-native';

function DetailScreen({ navigation }) {
    return (
        <View>
            <Text>details screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default DetailScreen;