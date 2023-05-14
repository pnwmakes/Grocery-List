import { combineReducers } from 'redux';
import foodGroupReducer from './foodGroupReducer';
import nonFoodItemsReducer from './nonFoodItemsReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    foodGroup: foodGroupReducer,
    nonFoodItems: nonFoodItemsReducer,
    list: listReducer,
});

export default rootReducer;
