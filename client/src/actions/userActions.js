import { POST_USER_DATA, LOGIN_USER } from './types';
import axios from 'axios';

export const postUserData = (userData) => dispatch => {
    axios.post('http://localhost:5000/register', userData)
    .then(response => {
        console.log(response);
        dispatch({
            type: POST_USER_DATA,
            payload: response.data
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

export const loginUser = (userData) => dispatch => {
    axios.post('http://localhost:5000/login', userData)
    .then(response => {
        console.log(response);
        dispatch({
            type: LOGIN_USER,
            payload: response.data
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}