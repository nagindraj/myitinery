import { GET_ITINERARIES, GET_ACTIVITIES } from '../actions/types';

const initialState = {
    itineraries: [],
    activities: []
};

export default function itineraryReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state;    
    }
}