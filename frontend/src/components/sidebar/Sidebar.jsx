import React from 'react'
import PropTypes from 'prop-types'
import SidebarItem from './SidebarItem'
import './styles.scss'

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,

}
const Sidebar = ({ data }) => (
    <div className="container__sidebar">
        {
            data.map(email => (
                <SidebarItem {...email} key={Math.random()} />
            ))
        }
    </div>
)
Sidebar.propTypes = propTypes
export default Sidebar
