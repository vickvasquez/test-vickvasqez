import React from 'react'
import PropTypes from 'prop-types'
import HeaderDetails from 'components/Details/HeaderDetails'
import Detail from 'components/Details/'

const propTypes = {
    markAsSpam: PropTypes.func.isRequired,
    markAsUnRead: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    detail: PropTypes.objectOf(PropTypes.array, PropTypes.string, PropTypes.bool).isRequired,
}

const Details = ({
    detail,
    markAsSpam,
    markAsUnRead,
    deleteEmail,
}) => (
    <div className="details">
        <HeaderDetails
            markAsSpam={() => { markAsSpam(detail.id) }}
            markAsUnRead={() => { markAsUnRead(detail.id) }}
            deleteEmail={() => { deleteEmail(detail.id) }}
        />
        <Detail {...detail} />
    </div>
)

Details.propTypes = propTypes

export default Details
