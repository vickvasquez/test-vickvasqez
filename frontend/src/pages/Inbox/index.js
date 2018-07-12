import { connect } from 'react-redux'
import Inbox from './Inbox'

const filter = (emails, filterBy) => {
    if (filterBy === 'INBOX') { return emails.filter(email => (!email.isSpam && !email.isDeleted)) }
    if (filterBy === 'SPAM') return emails.filter(email => email.isSpam)
    if (filterBy === 'DELETED') return emails.filter(email => email.isDeleted)
    return emails
}

const mapStateToprops = (state) => {
    const { data, loading, error } = state.inbox
    const emails = filter(data, state.filter)
    return {
        emails, loading, error,
    }
}

// const mapDispatchToProps = () => {}

export default connect(mapStateToprops)(Inbox)
