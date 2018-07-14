import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    EmailList,
    HeaderSidebar,
    SearchBox,
} from 'components/Sidebar'
import Details from '~base/containers/Details'

const propTypes = {
    emails: PropTypes.arrayOf(PropTypes.object).isRequired,
    countInbox: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool,
    setFilter: PropTypes.func.isRequired,
    detailEmail: PropTypes.func.isRequired,
    searchEmail: PropTypes.func.isRequired,
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
        // const { fetchData } = this.props

        // this.timer = setInterval(async () => {
        //  await fetchData()
        // },
        // 90000)
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

    searchEmail = (e) => {
        e.preventDefault()
        const { searchEmail } = this.props

        // eslint-disable-next-line
        const data = new FormData(e.target)

        const query = data.get('query') || 'INBOX'
        searchEmail(query)
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
                    <SearchBox handleSubmit={this.searchEmail} />
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
