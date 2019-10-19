import {GET_NONPROFIT_SUCCESS} from './actionTypes';
import firebase from 'firebase';


//adding user to database and authentication
export function addUser(user){
    return async (dispatch)=>{
        console.log(user)
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then( res => {
        if (res.user.uid !== null || res.user.uid !== undefined) {
            firebase.database().ref(`/users/${res.user.uid}`)
            .set(user);
        }
        dispatch({
            type: "USER_ADD",
            payload: user
        }) 
    }
                          
        ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        }
    )};
}
//get current user
export function getCurrentUser(){
    return (dispatch)=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              dispatch({
                  type: "GET_SINGLE_USER",
                  payload: user
              })
            } else {
              console.log("No user is signed in.") 
            }
          });
    }
}

export function getNonProfits() {
    let {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}`).on('value', snapshot => {
        snapshot.forEach(child => {
            let nonProfitUsers = [];
        });
    })
}
