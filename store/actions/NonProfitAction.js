import {GET_NONPROFIT_SUCCESS, GET_ORDERS_SUCCESS} from './actionTypes';
import firebase from 'firebase';

export function getNonProfitOrders() {
    data = [
        {
            picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg',
             itemName: 'apple', quantity:2 },
        {
            picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg', itemName: 'burgers', quantity: 5 },
        { picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg', itemName: 'pasta', quantity: 7 }
    ]
    return {type: GET_ORDERS_SUCCESS, payload: data};
}
