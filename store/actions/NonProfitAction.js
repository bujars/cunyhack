import {GET_NONPROFIT_SUCCESS, GET_ORDERS_SUCCESS} from './actionTypes';
import firebase from 'firebase';

export function getNonProfitOrders() {
    data = [
        {picture: '#', itemName: 'apple', quantity:2 },
        { picture: '#', itemName: 'burgers', quantity: 5 },
        { picture: '#', itemName: 'pasta', quantity: 7 }
    ]
    return {type: GET_ORDERS_SUCCESS, payload: data};
}
