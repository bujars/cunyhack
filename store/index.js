import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import restaurantReducer from './utilities/restaurant';
const rootReducer = combineReducers({restaurantReducer});
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);
export default store;