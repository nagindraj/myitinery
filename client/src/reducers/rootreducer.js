import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itinerary';
import userReducer from './userReducer';
import loginReducer from './loginReducer'

export default combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    message: userReducer,
    login: loginReducer
})