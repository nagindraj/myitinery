import { LOGIN_USER } from '../actions/types';

const initialState = {
    loggedIn: false,
    message: '',
    url:''
};

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;    
    }
}
