import { connect } from 'react-redux'
import { getSchools } from "../actions/School";
import { addSchoolToFavoriteList} from "../actions/User"
import { refreshUser } from '../actions/User'

import SearchResults from '../components/SearchResults'

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    searchResults: state.school.searchResults,
    userRefreshed: state.user.refreshUser,
    addedSchool: state.user.addedSchool
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSchools: (location, major) => {
      dispatch(getSchools(location, major))
    },
    addSchoolToFavoriteList: (listID, school) => {
      dispatch(addSchoolToFavoriteList(listID, school))
    },
    refreshUser: () => {
      dispatch(refreshUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)