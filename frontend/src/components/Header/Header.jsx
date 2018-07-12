import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}

const Header = ({ children }) => (
    <div className="container__header">
        {children}
    </div>
)

Header.propTypes = propTypes

export default Header
