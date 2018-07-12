import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/Sidebar'

// import Sidebar from 'components/sidebar'

const propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
}

const Inbox = ({ emails, loading, error }) => (
    <React.Fragment>
        {
            loading && <p> Cargando emails </p>
        }
        {
            error && <p> Sucedió un error al cargar los datos </p>
        }
        {
            (emails && emails.length) && <Sidebar data={emails} />

        }
    </React.Fragment>
)

Inbox.propTypes = propTypes

export default Inbox
