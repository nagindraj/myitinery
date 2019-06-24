import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itinerary';

export default combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer
})