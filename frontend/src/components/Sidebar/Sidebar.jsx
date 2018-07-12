import React from 'react'
import PropTypes from 'prop-types'

import SidebarItem from './SidebarItem'
import HeaderSidebar from './HeaderSidebar'
import SearchBox from './SearchBox'
import './styles/index.scss'

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,

}
const Sidebar = ({ data }) => (
    <div className="container__sidebar">
        <HeaderSidebar />
        <SearchBox />
        <div className="container__emails">
            {
                data.map(email => (
                    <SidebarItem {...email} key={Math.random()} />
                ))
            }
        </div>
    </div>
)
Sidebar.propTypes = propTypes
export default Sidebar
