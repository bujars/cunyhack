import {GET_NONPROFIT_SUCCESS, GET_ORDERS_SUCCESS} from './actionTypes';
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
export function getListings() {
    const data = [
        [`listingID${i}`],
        [{
            author: 'authorID',
            restaurantName: 'Italian To Go',
            foodName: 'Spaghetti And Meatball',
            description: 'Made 10 hours ago. Still good to eat.',
            pictureURL: 'https://www.jennycancook.com/wp-content/uploads/2015/08/quick-easy-spaghetti-meatballs.jpg',
            expirationDate: Math.floor(Date.now() / 1000),
            postDate: Math.floor(Date.now() / 1000),
            quantity: 10
        }]
    ]
    return {type: GET_LISTINGS_SUCCESS, payload: data};

}
export function getNonProfitOrders() {
    data = [
        {
            picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg',
            itemName: 'apple', quantity:2 
        },
        { picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg', itemName: 'burgers', quantity: 5 },
        { picture: 'https://image.shutterstock.com/image-photo/image-450w-722718082.jpg', itemName: 'pasta', quantity: 7 }
    ]
    return {type: GET_ORDERS_SUCCESS, payload: data};
}
