const INITIAL_STATE = {
    users:[],
    currentUser: {},
};
export default restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:return state;
        case 'USER_ADD':{
            return {...state, users: [action.payload,...state.users]};
        }
        case 'GET_SINGLE_USER':{
            return {...state, currentUser: action.payload}
        }
    }
}