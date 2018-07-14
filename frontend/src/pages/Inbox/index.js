import { connect } from 'react-redux'
import Inbox from './Inbox'
import {
    setFilter,
    markAsReaded,
    fetchDetailEmail,
    searchEmail,

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
    const query = filterBy.toLowerCase()
    const searchResult = emails.filter(email => (
        email.from.toLowerCase().includes(query)
        || email.body.toLowerCase().includes(query)
        || email.to.toLowerCase().includes(query)
        || email.subject.toLowerCase().includes(query)
        || email.tag.toLowerCase().includes(query)
    ))
    const numberMatch = searchResult.length

    return [searchResult, numberMatch]
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
    searchEmail: query => dispatch(searchEmail(query)),
    detailEmail: (id) => {
        dispatch(fetchDetailEmail(id))
        dispatch(markAsReaded(id))
    },
})

export default connect(mapStateToprops, mapDispatchToProps)(Inbox)
