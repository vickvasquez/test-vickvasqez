import React from 'react'
import Header from 'components/Header'
import PropTypes from 'prop-types'

const propTypes = {
    markAsSpam: PropTypes.func.isRequired,
    markAsUnRead: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
}

const HeaderDetails = ({ markAsSpam, markAsUnRead, deleteEmail }) => (
    <Header>
        <div>
            <input
                type="button"
                className="button button--red"
                value="Delete"
                onClick={deleteEmail}
            />
            <input
                type="button"
                className="button button--transparent"
                value="Spam"
                onClick={markAsSpam}
            />
        </div>
        <div>
            <input
                type="button"
                className="button button__blue"
                value="Mark as unread"
                onClick={markAsUnRead}
            />
        </div>
    </Header>
)

HeaderDetails.propTypes = propTypes

export default HeaderDetails
