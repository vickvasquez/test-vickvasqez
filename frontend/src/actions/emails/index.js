import {
    FETCHING_DATA,
    LOAD_DATA_FAIL,
    LOAD_DATA_SUCCESS,
    FILTER_BY,
    MARK_AS_READED,
    FETCH_DETAIL_EMAIL,
} from '../constants'

export const loadData = () => ({ type: FETCHING_DATA })
export const dataSucces = data => ({ type: LOAD_DATA_SUCCESS, data })
export const dataFail = error => ({ type: LOAD_DATA_FAIL, error })
export const setFilter = filter => ({ type: FILTER_BY, filter })
export const markAsReaded = id => ({ type: MARK_AS_READED, id })
export const fetchDetailEmail = id => ({ type: FETCH_DETAIL_EMAIL, id })
