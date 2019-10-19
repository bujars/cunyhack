import {GET_ORDERS_SUCCESS} from '../actions/actionTypes';

const INITIAL_STATE = {
    orders: []
}

export default function nonProfitReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_ORDERS_SUCCESS:
            return {...state, orders: action.payload};
        default:
            return state;
    }
}