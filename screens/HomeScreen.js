import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        Bangers_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/grocery-bag.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>My Grocery List App!</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcf803',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    text: {
        fontSize: 45,
        fontFamily: 'Bangers_400Regular',
    },
});

export default HomeScreen;
