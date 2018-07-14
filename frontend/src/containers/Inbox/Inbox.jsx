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
}

const defaultProps = {
    isOpen: false,
}
// eslint-disable-next-line
const checkDevice = () => window.matchMedia('only screen and (max-width: 580px)')

class Inbox extends PureComponent {
    constructor(props) {
        super(props)
        this.timer = 0
        this.refDetails = React.createRef()
        this.componentDetail = null
        this.state = {
            isMobile: false,
            isCollapsed: false,
        }
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

    onEndAnimation = (e) => {
        e.target.classList.remove('opacity')
        this.componentDetail = e.target
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

    handleDetalEmail = async (id) => {
        const { detailEmail } = this.props
        detailEmail(id)

        const isMobile = checkDevice()

        if (isMobile.matches) {
            this.setState(() => ({
                isMobile: true,
                isCollapsed: true,
            }))
        } else {
            this.componentDetail.classList.add('opacity')
            this.componentDetail = null
        }
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed,
        }))

        const isMobile = checkDevice()

        if (isMobile.matches) {
            this.setState({
                isMobile: true,
            })
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
        } = this.props
        const { isMobile, isCollapsed } = this.state

        return (
            <React.Fragment>
                <div
                    // eslint-disable-next-line
                    className={isMobile ? !isCollapsed ? 'sidebar slideLeft' : 'sidebar slideRight' : 'sidebar'}
                >
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
                        (emails) && (
                            <EmailList
                                data={emails}
                                onClick={this.handleDetalEmail}
                            />
                        )

                    }
                </div>
                {
                    isOpen
                        && (
                            <Details
                                ref={this.refDetails}
                                isCollapsed={isCollapsed}
                                isMobile={isMobile}
                                toggleSidebar={this.toggleSidebar}
                                endAnimation={this.onEndAnimation}
                            />
                        )
                }
            </React.Fragment>
        )
    }
}

Inbox.propTypes = propTypes
Inbox.defaultProps = defaultProps

export default Inbox
