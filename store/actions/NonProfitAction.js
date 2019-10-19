import {GET_NONPROFIT_SUCCESS} from './actionTypes';
import firebase from 'firebase';

export function getNonProfits() {
    let {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`).on('value', snapshot => {
        snapshot.forEach(child => {
            let nonProfitUsers = [];
        });
    })
}
