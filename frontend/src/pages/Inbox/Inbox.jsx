import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/sidebar'

// import Sidebar from 'components/sidebar'

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
}

const Inbox = ({ data, loading, error }) => (
    <React.Fragment>
        {
            loading && <p> Cargando emails </p>
        }
        {
            error && <p> Sucedió un error al cargar los datos </p>
        }
        {
            data.length && <Sidebar data={data} />

        }
    </React.Fragment>
)

Inbox.propTypes = propTypes

export default Inbox
