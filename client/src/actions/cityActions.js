import { GET_CITIES, SEARCH_CITIES } from './types';

export const getCities = () => dispatch => {
    fetch('http://localhost:5000/cities/')
    .then(response => response.json())
    .then(response => {
        // handle success
        console.log(response);
        dispatch({
            type: GET_CITIES,
            payload: response
        })
    
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export const searchCities = (searchInput = '') => dispatch => {
    console.log(searchInput);
    dispatch({
        type: SEARCH_CITIES,
        payload: searchInput
    });
}
    
