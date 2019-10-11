import axios from 'axios'


// urls
const baseUrl = 'http://localhost:3333/'
const smurfsUrl = `${baseUrl}smurfs`

// action types
export const START_FETCHING = 'START_FETCHING'
export const START_POSTING = 'START_POSTING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'


export const fetchSmurfs = () => {

    return (dispatch) => {
        dispatch({ type: START_FETCHING })
        axios.get(smurfsUrl)
        .then(response => console.log('RESPONSE: ', response))
        .catch(error => console.log('ERROR: ', error))
    }
}