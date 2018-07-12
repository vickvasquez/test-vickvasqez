import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const propTypes = {
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    attachements: PropTypes.arrayOf(PropTypes.object).isRequired,
    isReaded: PropTypes.bool.isRequired,
}

const SidebarItem = ({
    subject, body, isReaded, attachements, date,
}) => (
    <Link to="/email/2">
        <div className={isReaded ? 'card card--readed' : 'card'}>
            <div className="card__left">
                <h2 className="card__title"> {subject}</h2>
                <p className="card__content"> { body.substring(0, 30)} </p>
            </div>
            <div className="card__right">
                <p className="card__date"> {date}</p>
                {
                    (attachements && attachements.length)
                        && (
                            <FontAwesomeIcon
                                style={{ marginTop: '.7rem' }}
                                icon={faPaperclip}
                            />
                        )
                }
            </div>
        </div>
    </Link>
)

SidebarItem.propTypes = propTypes

export default SidebarItem
