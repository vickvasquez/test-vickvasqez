import {
    FETCHING_DATA,
    LOAD_DATA_FAIL,
    LOAD_DATA_SUCCESS,
} from './constants'

export const loadData = () => ({
    type: FETCHING_DATA,
})

export const dataSucces = data => ({
    type: LOAD_DATA_SUCCESS,
    data,
})

export const dataFail = error => ({
    type: LOAD_DATA_FAIL,
    error,
})
