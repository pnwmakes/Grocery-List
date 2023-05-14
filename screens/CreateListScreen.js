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
import { useDispatch, useSelector } from 'react-redux';
import {
    addFoodGroupItem,
    addNonFoodItem,
    deleteFoodGroupItem,
} from '../reducers/foodGroupReducer';
import { deleteNonFoodItem } from '../reducers/nonFoodItemsReducer';

const CreateListScreen = () => {
    const [newItem, setNewItem] = useState('');

    const foodGroupItems = useSelector((state) => state.foodGroup.items);
    const nonFoodItems = useSelector((state) => state.nonFoodItems.items);

    const dispatch = useDispatch();

    const handleAddFoodGroupItem = () => {
        if (newItem !== '') {
            dispatch(addFoodGroupItem(newItem));
            setNewItem('');
        }
    };

    const handleAddNonFoodItem = () => {
        if (newItem !== '') {
            dispatch(addNonFoodItem(newItem));
            setNewItem('');
        }
    };

    const handleDeleteFoodGroupItem = (index) => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete this item?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => dispatch(deleteFoodGroupItem(index)),
                },
            ]
        );
    };

    const handleDeleteNonFoodItem = (index) => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete this item?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => dispatch(deleteNonFoodItem(index)),
                },
            ]
        );
    };

    const renderFoodGroupItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleDeleteFoodGroupItem(index)}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    const renderNonFoodItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleDeleteNonFoodItem(index)}
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
                    onPress={handleAddFoodGroupItem}
                >
                    <Text style={styles.buttonText}>Add to Food Group</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddNonFoodItem}
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
});

export default CreateListScreen;
