import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class ResultScreen extends Component {
    state = {
        image: ''
    }

    componentDidMount = () => {
        let responce = JSON.parse(this.props.route.params.data)
        this.setState({ image: responce[0] })
        console.log('Image', responce[0]);
    }
    render() {
        const { image } = this.state;
        return (
            <View style={styles.container}>
                <Image style={{ width: 200, height: 350 }} source={image} />
                <Text>Result Screen</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {

    }
})

export default ResultScreen;