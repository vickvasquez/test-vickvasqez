import { combineReducers } from 'redux'
import { emails, filter } from './emails'
// import email from './email'

export default combineReducers({
    list: emails,
    //  detail: email,
    filter,
})
