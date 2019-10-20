import {FETCH_FEED} from '../actions/actionTypes';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
};
export default FeedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FEED:{
            return action.payload;
        }
        default:{
            return state;
        }
    }
}