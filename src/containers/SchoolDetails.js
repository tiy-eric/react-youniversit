import { connect } from 'react-redux'
import { schoolDetails } from '../actions/School'

import SchoolDetails from '../components/SchoolDetails'

const mapStateToProps = state => {
  return {
    currentSchool: state.school.schoolDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    schoolDetails: (schoolid) => {
      dispatch(schoolDetails(schoolid))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolDetails)