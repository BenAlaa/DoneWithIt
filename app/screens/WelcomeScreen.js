import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import Colors from '../config/colors';
const background = require('../assets/background.jpg')
const logo = require('../assets/logo-red.png')

const WelcomeScreen = (props) => {
    return ( 
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
     );
}
 
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems:"center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: Colors.primary
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: Colors.secondary
    }
});
export default WelcomeScreen;