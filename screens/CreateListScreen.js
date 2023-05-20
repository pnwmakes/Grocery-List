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
    deleteFoodGroupItem,
    moveFoodGroupItemToNonFoodGroup,
} from '../reducers/foodGroupReducer';
import {
    addNonFoodItem,
    deleteNonFoodItem,
    moveNonFoodItemToFoodGroup,
} from '../reducers/nonFoodItemsReducer';

import { createList } from '../reducers/listReducer';
import { useNavigation } from '@react-navigation/native';

const CreateListScreen = () => {
    const [newItem, setNewItem] = useState('');
    const foodGroupItems = useSelector((state) => state.foodGroup.items);
    const nonFoodItems = useSelector((state) => state.nonFoodItems.items);
    const dispatch = useDispatch();
    const navigation = useNavigation();

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
        Alert.alert('Options', 'Choose an action', [
            {
                text: 'Delete',
                onPress: () => dispatch(deleteFoodGroupItem(index)),
                style: 'destructive',
            },
            {
                text: 'Move to Non-Food Group',
                onPress: () => handleMoveToNonFoodGroup(index),
            },
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ]);
    };

    const handleDeleteNonFoodItem = (index) => {
        Alert.alert('Options', 'Choose an action', [
            {
                text: 'Delete',
                onPress: () => dispatch(deleteNonFoodItem(index)),
                style: 'destructive',
            },
            {
                text: 'Move to Food Group',
                onPress: () => handleMoveToFoodGroup(index),
            },
            {
                text: 'Cancel',
                style: 'cancel',
            },
        ]);
    };

    const handleGenerateList = () => {
        const mergedFoodGroupItems = [...foodGroupItems];
        const mergedNonFoodItems = [...nonFoodItems];
        if (
            mergedFoodGroupItems.length === 0 &&
            mergedNonFoodItems.length === 0
        ) {
            Alert.alert('No items added');
        } else {
            dispatch(createList(mergedFoodGroupItems, mergedNonFoodItems));
            navigation.navigate('FinalList');
        }
    };

    const handleMoveToNonFoodGroup = (index) => {
        const itemToMove = foodGroupItems[index];
        dispatch(moveFoodGroupItemToNonFoodGroup(index));
        dispatch(addNonFoodItem(itemToMove));
    };

    const handleMoveToFoodGroup = (index) => {
        const itemToMove = nonFoodItems[index];
        dispatch(moveNonFoodItemToFoodGroup(index));
        dispatch(addFoodGroupItem(itemToMove));
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
            <TouchableOpacity
                style={styles.generateButton}
                onPress={handleGenerateList}
            >
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
