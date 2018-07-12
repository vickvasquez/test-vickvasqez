import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Header from 'components/Header'

const SearchBox = () => (
    <Header>
        <form className="form__search">
            <input type="text" placeholder="Search" className="input__search" />
            <FontAwesomeIcon icon={faSearch} />
        </form>
    </Header>
)
export default SearchBox
