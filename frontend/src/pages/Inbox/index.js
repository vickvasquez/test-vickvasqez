import { connect } from 'react-redux'
import Inbox from './Inbox'

const mapStateToprops = (state) => {
    const { data } = state
    return { data }
}

// const mapDispatchToProps = () => {}

export default connect(mapStateToprops)(Inbox)
