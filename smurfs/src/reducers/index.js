import { START_FETCHING, START_POSTING, FETCH_SUCCESS, FETCH_FAILURE, POST_SUCCESS, POST_FAILURE } from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case START_POSTING:
            return {
                ...state,
                isPosting: true,
                error: action.payload
            }
        case POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
            }
        case POST_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer