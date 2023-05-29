import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItemChecked, clearList } from '../reducers/listReducer';

const FinalListScreen = () => {
    const mergedItems = useSelector((state) => state.list.items);
    const dispatch = useDispatch();

    const toggleChecked = (index) => {
        dispatch(toggleItemChecked(index));
    };

    const clearListHandler = () => {
        Alert.alert('Clear List', 'Are you sure you want to clear the list?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Clear List',
                style: 'destructive',
                onPress: () => dispatch(clearList()),
            },
        ]);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleChecked(index)}
        >
            <Text
                style={item.checked ? styles.checkedText : styles.uncheckedText}
            >
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Final Grocery List</Text>
            <FlatList
                data={mergedItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.clearButton}
                onPress={clearListHandler}
            >
                <Text style={styles.clearButtonText}>Clear List</Text>
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
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    checkedText: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'darkslategray',
        textShadowColor: 'darkslategray',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    uncheckedText: {
        textDecorationLine: 'none',
    },
    clearButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    clearButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default FinalListScreen;
