import { connect } from 'react-redux'
import { refreshUser } from '../actions/User'

import FavoriteList from '../components/FavoriteList'

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    userRefreshed: state.user.refreshUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshUser: () => {
      dispatch(refreshUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteList)