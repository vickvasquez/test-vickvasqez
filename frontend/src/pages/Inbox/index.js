import { connect } from 'react-redux'
import Inbox from './Inbox'
import {
    setFilter,
    markAsReaded,
    fetchDetailEmail,
} from '~base/actions/emails'
import { fetchData } from '~base/actions/actionCreator'

const toggleFilter = (emails, filterBy) => {
    if (filterBy === 'INBOX') {
        const inbox = emails.filter(email => (!email.isSpam && !email.isDeleted))
        const countInbox = inbox.filter(email => !email.isReaded).length
        return [inbox, countInbox]
    }
    if (filterBy === 'SPAM') {
        const inbox = emails.filter(email => email.isSpam)
        const countInbox = inbox.filter(email => !email.isReaded).length

        return [inbox, countInbox]
    }
    if (filterBy === 'DELETED') {
        const inbox = emails.filter(email => email.isDeleted)
        const countInbox = inbox.filter(email => !email.isReaded).length

        return [inbox, countInbox]
    }
    return []
}

const mapStateToprops = (state) => {
    const {
        data,
        loading,
        error,
        isOpen,
    } = state.list

    const { filter } = state

    const [emails, countInbox] = toggleFilter(data, filter)

    return {
        emails,
        filter,
        countInbox,
        loading,
        error,
        isOpen,
    }
}

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    fetchData: () => dispatch(fetchData()),
    detailEmail: (id) => {
        dispatch(fetchDetailEmail(id))
        dispatch(markAsReaded(id))
    },
})

export default connect(mapStateToprops, mapDispatchToProps)(Inbox)
