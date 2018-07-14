import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import Tag from './Tag'

import './styles.scss'

const propTypes = {
    body: PropTypes.string.isRequired,
    attachements: PropTypes.arrayOf(PropTypes.object).isRequired,
    subject: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
}

const Details = ({
    body,
    attachements,
    subject,
    tag,
}) => (
    <div className="container__details">
        <h2 className="details__title"> {subject}</h2>
        <div className="details__tags">
            <span>Tags</span><Tag text={tag} />
        </div>
        <div className="details__content">
            <p>
                { body }
            </p>
            <div className="details__footer">
                {
                    (attachements && attachements.length)
                    && <FontAwesomeIcon icon={faPaperclip} />
                }
                <input
                    type="button"
                    value="Replay"
                    className="button button__blue button__blue--big"
                />
            </div>
        </div>
    </div>
)

Details.propTypes = propTypes

export default Details
