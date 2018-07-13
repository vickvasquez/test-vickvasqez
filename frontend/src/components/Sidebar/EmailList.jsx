import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SidebarItem from './SidebarItem'
import './styles/index.scss'

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
}
const EmailList = ({ data, onClick }) => (
    <div className="container__emails">
        <ReactCSSTransitionGroup
            transitionName="item"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >

            {
                data.length
                    ? data.map(email => (
                        <SidebarItem {...email} key={email.id} onClick={onClick} />
                    ))
                    : (
                        <h3
                            style={{
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                        > No hay emails.
                        </h3>
                    )
            }
        </ReactCSSTransitionGroup>
    </div>
)
EmailList.propTypes = propTypes

export default EmailList
