import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../config/colors';
import Chair from '../assets/chair.jpg';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.deleteIcon}></View>
            <View style={styles.closeIcon}></View>
            <Image 
                resizeMode="contain"
                style={styles.image}
                source={Chair} 
            />
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1,
    },
    closeIcon: {
        width: 30,
        height: 30,
        backgroundColor: Colors.primary,
        position: "absolute",
        top: 30,
        left: 30
    },
    deleteIcon: {
        width: 30,
        height: 30,
        backgroundColor: Colors.secondary,
        position: "absolute",
        top: 30,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen

