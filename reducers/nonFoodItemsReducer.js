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

export default nonFoodItemsReducer;
