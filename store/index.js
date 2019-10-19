import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import restaurant from './utilities/restaurant';
import nonProfit from './utilities/nonProfitReducer'
const rootReducer = combineReducers({
    restaurant,
    nonProfit
});
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);
export default store;