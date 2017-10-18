import { connect } from 'react-redux'
import { getSchools } from "../actions/School";

import SearchResults from '../components/SearchResults'

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    searchResults: state.school.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSchools: (location, major) => {
      dispatch(getSchools(location, major))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)