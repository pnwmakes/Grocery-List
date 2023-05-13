import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Alert,
} from 'react-native';

const CreateListScreen = () => {
    const [foodGroupItems, setFoodGroupItems] = useState([]);
    const [nonFoodItems, setNonFoodItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addFoodGroupItem = () => {
        if (newItem !== '') {
            setFoodGroupItems([...foodGroupItems, newItem]);
            setNewItem('');
        }
    };

    const addNonFoodItem = () => {
        if (newItem !== '') {
            setNonFoodItems([...nonFoodItems, newItem]);
            setNewItem('');
        }
    };

    const deleteFoodGroupItem = (index) => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete this item?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => confirmDeleteFoodGroupItem(index),
                },
            ]
        );
    };

    const deleteNonFoodItem = (index) => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete this item?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => confirmDeleteNonFoodItem(index),
                },
            ]
        );
    };

    const confirmDeleteFoodGroupItem = (index) => {
        const updatedItems = [...foodGroupItems];
        updatedItems.splice(index, 1);
        setFoodGroupItems(updatedItems);
    };

    const confirmDeleteNonFoodItem = (index) => {
        const updatedItems = [...nonFoodItems];
        updatedItems.splice(index, 1);
        setNonFoodItems(updatedItems);
    };

    const renderFoodGroupItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => deleteFoodGroupItem(index)}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    const renderNonFoodItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => deleteNonFoodItem(index)}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create Grocery List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter item'
                    value={newItem}
                    onChangeText={(text) => setNewItem(text)}
                    autoCorrect={true}
                    spellCheck={true}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={addFoodGroupItem}
                >
                    <Text style={styles.buttonText}>Add to Food Group</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={addNonFoodItem}
                >
                    <Text style={styles.buttonText}>Add to Non-Food Items</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.listHeading}>Food Group Items</Text>
                <FlatList
                    data={foodGroupItems}
                    renderItem={renderFoodGroupItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text style={styles.listHeading}>Non-Food Items</Text>
                <FlatList
                    data={nonFoodItems}
                    renderItem={renderNonFoodItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <TouchableOpacity style={styles.generateButton}>
                <Text style={styles.buttonText}>Generate List</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#0e8ae8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    listContainer: {
        flex: 1,
    },
    listHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 5,
    },
    generateButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },

    listItem: {
        backgroundColor: '#eaeaea',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
    },
});

export default CreateListScreen;
