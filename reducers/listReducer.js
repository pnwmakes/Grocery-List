const initialState = {
    items: [],
};

const listReducer = (state = initialState, action) => {
    console.log('Action:', action);
    console.log('Previous State:', state);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'CREATE_LIST':
            console.log('foodGroupItems:', action.payload.foodGroupItems);
            console.log('nonFoodItems:', action.payload.nonFoodItems);

            const mergedItems = [
                ...(action.payload.foodGroupItems || []).map((item) => ({
                    name: item,
                    checked: false,
                })),
                ...(action.payload.nonFoodItems || []).map((item) => ({
                    name: item,
                    checked: false,
                })),
            ];

            console.log('mergedItems:', mergedItems);

            return {
                ...state,
                items: mergedItems,
            };

        case 'TOGGLE_ITEM_CHECKED':
            const updatedItems = state.items.map((item, index) => {
                if (index === action.payload) {
                    return { ...item, checked: !item.checked };
                }
                return item;
            });

            return {
                ...state,
                items: updatedItems,
            };
        case 'CLEAR_LIST':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
});

export const createList = (foodGroupItems, nonFoodItems) => {
    return {
        type: 'CREATE_LIST',
        payload: {
            foodGroupItems: foodGroupItems || [],
            nonFoodItems: nonFoodItems || [],
        },
    };
};

export const toggleItemChecked = (index) => ({
    type: 'TOGGLE_ITEM_CHECKED',
    payload: index,
});

export const clearList = () => ({
    type: 'CLEAR_LIST',
});

export default listReducer;
