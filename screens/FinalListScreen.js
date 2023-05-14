import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleItemChecked } from '../reducers/listReducer';

const FinalListScreen = () => {
    const mergedItems = useSelector((state) => state.list.items);
    const dispatch = useDispatch();

    const toggleChecked = (index) => {
        dispatch(toggleItemChecked(index));
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
    },
    uncheckedText: {
        textDecorationLine: 'none',
    },
});

export default FinalListScreen;
