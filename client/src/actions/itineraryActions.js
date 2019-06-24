import { GET_ITINERARIES, GET_ACTIVITIES } from './types';

export const getItineraries = (city) => dispatch => {
    fetch('http://localhost:5000/itineraries/' + city)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        dispatch({
            type: GET_ITINERARIES,
            payload: response
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

export const getActivities = (userId) => dispatch => {
    fetch('http://localhost:5000/activities/' + userId)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        dispatch({
            type: GET_ACTIVITIES,
            payload: response
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}