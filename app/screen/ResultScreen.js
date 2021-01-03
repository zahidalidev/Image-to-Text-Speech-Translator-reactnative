import React, { Component, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ResultScreen(props) {

    const [image, setImage] = useState(null)

    useEffect(() => {
        let responce = props.route.params.data;
        setImage(responce)
        console.log('called')
    })

    return (
        <View style={styles.container}>
            <Image style={{ width: 200, height: 350 }} source={image} />
            <Text>Result Screen</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {

    }
})

export default ResultScreen;