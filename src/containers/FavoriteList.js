import { connect } from 'react-redux'
import { refreshUser, deleteSchoolFromFavoriteList } from '../actions/User'

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
    },
    deleteSchoolFromFavoriteList: (listID, school) => {
      dispatch(deleteSchoolFromFavoriteList(listID, school))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteList)