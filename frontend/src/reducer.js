import { combineReducers } from 'redux'
import {
    LOAD_DATA_SUCCESS, FETCHING_DATA, LOAD_DATA_FAIL, MARK_AS_READ, MARK_AS_SPAM, DELETE_EMAIL,
} from './actions/constants'

const initialState = {
    data: [],
    loading: false,
    error: false,
}

const actionsEmail = (state = initialState, action) => {
    switch (action.type) {
    case MARK_AS_READ:
        return {
            ...state,
        }
    case MARK_AS_SPAM:
        return {
            ...state,
        }
    case DELETE_EMAIL:
        return {
            ...state,
        }
    default:
        return state
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOAD_DATA_SUCCESS:
        return {
            ...state,
            data: state.data.concat(action.data),
            loading: false,
        }
    case FETCHING_DATA:
        return {
            ...state,
            loading: true,
        }
    case LOAD_DATA_FAIL:
        return {
            ...state,
            error: true,
        }
    default:
        return state
    }
}

export default combineReducers({ data: reducer, actions: actionsEmail })
