const initialState = {
    items: [],
};

const nonFoodItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NON_FOOD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'DELETE_NON_FOOD_ITEM':
            return {
                ...state,
                items: state.items.filter(
                    (item, index) => index !== action.payload
                ),
            };
        case 'MOVE_NON_FOOD_ITEM_TO_FOOD_GROUP':
            const { payload: index } = action;
            const itemToMove = state.items[index];
            return {
                ...state,
                items: state.items.filter((item, i) => i !== index),
            };
        default:
            return state;
    }
};

export const addNonFoodItem = (item) => ({
    type: 'ADD_NON_FOOD_ITEM',
    payload: item,
});

export const deleteNonFoodItem = (index) => ({
    type: 'DELETE_NON_FOOD_ITEM',
    payload: index,
});

export const moveNonFoodItemToFoodGroup = (index) => ({
    type: 'MOVE_NON_FOOD_ITEM_TO_FOOD_GROUP',
    payload: index,
});

export default nonFoodItemsReducer;
