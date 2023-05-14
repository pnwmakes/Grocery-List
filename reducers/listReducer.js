const initialState = {
    items: [],
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case 'CLEAR_LIST':
            return {
                ...state,
                items: [],
            };
        case 'CREATE_LIST':
            // Handle create list action
            return {
                // Update state accordingly
            };
        default:
            return state;
    }
};

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
});

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
});

export const clearList = () => ({
    type: 'CLEAR_LIST',
});

export const createList = () => ({
    type: 'CREATE_LIST',
});

export default listReducer;
