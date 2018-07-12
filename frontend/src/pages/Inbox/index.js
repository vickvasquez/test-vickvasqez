import { connect } from 'react-redux'
import Inbox from './Inbox'

const mapStateToprops = (state) => {
    const { data, loading, error } = state.data
    return { data, loading, error }
}

// const mapDispatchToProps = () => {}

export default connect(mapStateToprops)(Inbox)
