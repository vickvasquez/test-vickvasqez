import { combineReducers } from 'redux'
import uid from 'uuid/v1'
import {
    LOAD_DATA_SUCCESS,
    FETCHING_DATA,
    LOAD_DATA_FAIL,
    MARK_AS_READ,
    MARK_AS_SPAM,
    DELETE_EMAIL,
    FILTER_BY,
    filters,
} from './actions/constants'

const { INBOX } = filters

const initialState = {
    data: [],
    loading: false,
    error: false,
}

const markEmail = (email, id, type) => (
    (email.id === id)
        ? { ...email, [ type ]: true }
        : email
)

const filter = (state = INBOX, action) => {
    if (action.type === FILTER_BY) {
        return action.filter
    }

    return state
}

const inbox = (state = initialState, action) => {
    switch (action.type) {
    case FETCHING_DATA:
        return {
            ...state,
            loading: true,
        }
    case LOAD_DATA_SUCCESS:
        return {
            ...state,
            data: state.data.concat(action.data.map(item => (
                {
                    ...item,
                    isSpam: false,
                    id: uid(),
                    isDeleted: false,
                }
            ))),
            loading: false,
        }

    case LOAD_DATA_FAIL:
        return {
            ...state,
            error: true,
        }
    case MARK_AS_READ:
        return {
            ...state,
            data: state
                .data
                .map(email => (markEmail(email, action.id, 'isReaded'))),
        }

    case MARK_AS_SPAM:
        return {
            ...state,
            data: state
                .data
                .map(email => (markEmail(email, action.id, 'isSpam'))),
        }
    case DELETE_EMAIL:
        return {
            ...state,
            data: state
                .data
                .map(email => (markEmail(email, action.id, 'isDeleted'))),
        }
    default:
        return state
    }
}

export default combineReducers({ inbox, filter })
