import { connect } from 'react-redux'
import { login, logout } from '../actions/User'

import NavLogin from '../components/NavLogin'

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(login(user))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin)