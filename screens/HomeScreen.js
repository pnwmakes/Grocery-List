import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { createList } from '../reducers/listReducer';

const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        Bangers_400Regular,
    });

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleCreateList = () => {
        dispatch(createList());
        navigation.navigate('CreateList');
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/bag3.png')}
                    style={styles.image}
                />
                <Text style={styles.text}>My Grocery List App!</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCreateList}
                >
                    <Text style={styles.buttonText}>Create List</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8cf0e',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
    },
    image: {
        width: 300,
        height: 400,
        marginBottom: 1,
    },
    text: {
        fontSize: 45,
        fontFamily: 'Bangers_400Regular',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#0e8ae8',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 40,
        fontFamily: 'Bangers_400Regular',
        color: '#ffffff',
    },
});

export default HomeScreen;
