import { GET_CITIES, SEARCH_CITIES } from '../actions/types';

const initialState = {
    cities: []
};

export default function cityReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CITIES:
            initialState.cities = action.payload;
            return {
                ...state,
                cities: action.payload
            }
        case SEARCH_CITIES:
            return {
                ...state,
                cities: filterCities(initialState, action.payload)
            }
        default:
            return state;    
    }
}

export function filterCities(state, searchInput) {
    const filteredCities = state.cities.filter(function(city) {
        return city.name.indexOf(searchInput) > -1
    });

    return filteredCities;
}
