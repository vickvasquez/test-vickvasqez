import uid from 'uuid/v1'
import {
    FETCHING_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAIL,
    FETCH_DETAIL_EMAIL,
    FILTER_BY,
    MARK_AS_UNREAD,
    MARK_AS_SPAM,
    DELETE_EMAIL,
    filters,
} from '~base/actions/constants'
import { MARK_AS_READED } from '../actions/constants'

const { INBOX } = filters

const filter = (state = INBOX, action) => {
    if (action.type === FILTER_BY) {
        return action.filter
    }

    return state
}

const initialState = {
    data: [],
    loading: false,
    error: false,
    detail: {},
    isOpen: false,
}

const markEmail = (email, id, type, val = true) => (
    (email.id === id)
        ? { ...email, [ type ]: val }
        : email
)

const emails = (state = initialState, action) => {
    let newData = []
    switch (action.type) {
    case FETCHING_DATA:
        return {
            ...state,
            loading: true,
        }
    case LOAD_DATA_SUCCESS:
        newData = action.data.map(item => ({
            ...item,
            isSpam: false,
            id: uid(),
            isDeleted: false,
        }))

        return {
            ...state,
            data: newData.concat(state.data),
            loading: false,
        }

    case LOAD_DATA_FAIL:
        return {
            ...state,
            error: true,
        }
    case FETCH_DETAIL_EMAIL:
        return {
            ...state,
            detail: state.data.filter(email => email.id === action.id)[ 0 ],
            isOpen: true,
        }
    case MARK_AS_READED:
        return {
            ...state,
            data: state
                .data
                .map(mail => (markEmail(mail, action.id, 'isReaded'))),
        }
    case MARK_AS_UNREAD:
        return {
            ...state,
            data: state
                .data
                .map(mail => (markEmail(mail, action.id, 'isReaded', false))),
        }

    case MARK_AS_SPAM:
        return {
            ...state,
            data: state
                .data
                .map(mail => (markEmail(mail, action.id, 'isSpam'))),
            isOpen: false,
            detail: {},
        }
    case DELETE_EMAIL:
        return {
            ...state,
            data: state
                .data
                .map(mail => (markEmail(mail, action.id, 'isDeleted'))),
            isOpen: false,
            detail: {},
        }
    default:
        return state
    }
}

export {
    emails,
    filter,
}
