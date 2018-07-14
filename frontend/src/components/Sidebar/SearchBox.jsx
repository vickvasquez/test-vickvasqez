import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Header from 'components/Header'

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const SearchBox = ({ handleSubmit }) => (
    <Header>
        <form className="form__search" onSubmit={handleSubmit}>
            <input
                name="query"
                type="text"
                placeholder="Search"
                className="input__search"
            />
            <FontAwesomeIcon icon={faSearch} />
        </form>
    </Header>
)

SearchBox.propTypes = propTypes
export default SearchBox
