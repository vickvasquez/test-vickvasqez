import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    EmailList,
    HeaderSidebar,
    SearchBox,
} from 'components/Sidebar'
import Details from '~base/pages/Details'

const propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    countInbox: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired, /*
    markAsSpam: PropTypes.func.isRequired,
    markAsUnRead: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired, */
    isOpen: PropTypes.bool,
    detailEmail: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    // loadMoreData: PropTypes.func.isRequired,
}

const defaultProps = {
    isOpen: false,
}

class Inbox extends PureComponent {
    constructor(props) {
        super(props)
        this.timer = 0
    }

    componentWillMount= async () => {
        const { fetchData } = this.props
        fetchData()
    }

    componentDidMount = async () => {
        const { fetchData } = this.props

        this.timer = setInterval(async () => {
            await fetchData()
        },
        90000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    setFilter = (filter) => {
        if (filter !== 'Filter by') {
            const { setFilter } = this.props
            setFilter(filter)
        }
    }

    render() {
        const {
            emails,
            loading,
            error,
            countInbox,
            filter,
            isOpen,
            detailEmail,
        } = this.props

        return (
            <React.Fragment>
                <div className="sidebar">
                    <HeaderSidebar
                        countInbox={countInbox}
                        title={filter}
                        setFilter={this.setFilter}
                    />
                    <SearchBox />
                    {
                        loading && <p> Cargando emails </p>
                    }
                    {
                        error && <p> Sucedió un error al cargar los datos </p>
                    }
                    {
                        (emails) && <EmailList data={emails} onClick={detailEmail} />

                    }
                </div>
                {
                    isOpen
                        && <Details />
                }
            </React.Fragment>
        )
    }
}

Inbox.propTypes = propTypes
Inbox.defaultProps = defaultProps

export default Inbox
