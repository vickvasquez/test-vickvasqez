import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.element.isRequired,
}

const Layout = ({ children }) => (
    <div className="container">
        {children}
    </div>
)

Layout.propTypes = propTypes

export default Layout
