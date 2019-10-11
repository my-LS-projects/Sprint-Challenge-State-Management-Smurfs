import axios from 'axios'


// urls
const baseUrl = 'http://localhost:3333/'
const smurfsUrl = `${baseUrl}smurfs`

// action types
export const START_FETCHING = 'START_FETCHING'
export const START_POSTING = 'START_POSTING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILURE = 'POST_FAILURE'


export const fetchSmurfs = () => {

    return (dispatch) => {
        dispatch({ type: START_FETCHING })
        axios.get(smurfsUrl)
        .then(response => {
            console.log('RESPONSE DATA: ', response.data)
            dispatch( { type: FETCH_SUCCESS , payload: response.data})
        })
        .catch(error => {
            console.log('ERROR: ', error)
            dispatch( { type: FETCH_FAILURE , payload: error })
        })
    }
}

export const postSmurfs = smurf => {
    return (dispatch) => {
        dispatch( { type: START_POSTING })
        axios.post(smurfsUrl, smurf)
        .then(response => dispatch( { type: POST_SUCCESS , payload: response.data }))
        .error(error => {
            console.log('POST ERROR: ', error)
            dispatch( { type: POST_FAILURE , payload: error} )
        })
    }
}