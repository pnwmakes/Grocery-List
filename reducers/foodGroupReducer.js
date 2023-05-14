const initialState = {
    items: [],
};

const foodGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FOOD_GROUP_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'DELETE_FOOD_GROUP_ITEM':
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

export const addFoodGroupItem = (item) => ({
    type: 'ADD_FOOD_GROUP_ITEM',
    payload: item,
});

export const deleteFoodGroupItem = (index) => ({
    type: 'DELETE_FOOD_GROUP_ITEM',
    payload: index,
});

export default foodGroupReducer;
