import { combineReducers } from 'redux'
import { emails, filter } from './emails'

export default combineReducers({
    list: emails,
    filter,
})
