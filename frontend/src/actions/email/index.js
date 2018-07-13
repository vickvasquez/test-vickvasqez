import {
    MARK_AS_SPAM,
    MARK_AS_UNREAD,
    DELETE_EMAIL,
} from '../constants'

export const markAsUnRead = id => ({ type: MARK_AS_UNREAD, id })
export const markAsSpam = id => ({ type: MARK_AS_SPAM, id })
export const deleteEmail = id => ({ type: DELETE_EMAIL, id })
