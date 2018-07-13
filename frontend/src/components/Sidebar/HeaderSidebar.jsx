import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

const propTypes = {
    countInbox: PropTypes.number.isRequired,
    title: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
}

const defaultProps = {
    title: 'Inbox',
}

const HeaderSidebar = ({ countInbox, title, setFilter }) => (
    <Header>
        <div>
            <p className="title">{ title }</p>
            {
                (countInbox > 0)
                && <span className="bell"> {countInbox} </span>
            }
        </div>
        <div>
            <select onChange={({ currentTarget }) => { setFilter(currentTarget.value) }}>
                <option valu="--">Filter by</option>
                <option value="INBOX">Inbox</option>
                <option value="SPAM">Spam</option>
                <option value="DELETED">Deleted</option>
            </select>
        </div>
    </Header>
)

HeaderSidebar.propTypes = propTypes
HeaderSidebar.defaultProps = defaultProps
export default HeaderSidebar
