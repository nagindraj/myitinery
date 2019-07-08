import { POST_USER_DATA } from '../actions/types';

const initialState = {
    message: '',
    auth: '',
    token: ''
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case POST_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;    
    }
}
