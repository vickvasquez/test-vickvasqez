import { connect } from 'react-redux'
import Detail from './Details'

import { markAsUnRead, markAsSpam, deleteEmail } from '~base/actions/email'

const mapStateToProps = state => ({
    detail: state.list.detail,
})

const mapDispatchToProps = dispatch => ({
    markAsUnRead: id => dispatch(markAsUnRead(id)),
    markAsSpam: id => dispatch(markAsSpam(id)),
    deleteEmail: id => dispatch(deleteEmail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
