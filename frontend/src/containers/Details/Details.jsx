import React from 'react'
import PropTypes from 'prop-types'
import HeaderDetails from 'components/Details/HeaderDetails'
import Detail from 'components/Details/'

const propTypes = {
    markAsSpam: PropTypes.func.isRequired,
    markAsUnRead: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    endAnimation: PropTypes.func.isRequired,
    detail: PropTypes.objectOf(PropTypes.array, PropTypes.string, PropTypes.bool).isRequired,
    isMobile: PropTypes.bool.isRequired,
    isCollapsed: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
}

const Details = ({
    detail,
    markAsSpam,
    markAsUnRead,
    deleteEmail,
    isMobile,
    isCollapsed,
    toggleSidebar,
    endAnimation,
}) => (
    <div
        onAnimationEnd={endAnimation}
        className={
            isCollapsed
                ? 'slideRightDetail'
                : isMobile
                    ? 'details slideLefttDetail'
                    : 'details opacity'
        }
    >
        <HeaderDetails
            markAsSpam={() => { markAsSpam(detail.id) }}
            markAsUnRead={() => { markAsUnRead(detail.id) }}
            deleteEmail={() => { deleteEmail(detail.id) }}
            toggleSidebar={toggleSidebar}
        />
        <Detail {...detail} />
    </div>
)

Details.propTypes = propTypes

export default Details
