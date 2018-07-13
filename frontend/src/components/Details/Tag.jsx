import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    text: PropTypes.string.isRequired,
}

const Tag = ({ text }) => (
    <span className="tag">
        {text}
    </span>
)

Tag.propTypes = propTypes

export default Tag
