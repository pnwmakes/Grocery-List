import { combineReducers } from 'redux';
import foodGroupReducer from './foodGroupReducer';
import nonFoodItemsReducer from './nonFoodItemsReducer';

const rootReducer = combineReducers({
    foodGroup: foodGroupReducer,
    nonFoodItems: nonFoodItemsReducer,
});

export default rootReducer;
