import _ from 'lodash';

const school = (state = {}, action) => {

    const newState = _.merge({}, state);

    switch (action.type) {
        case "SEARCHED_SCHOOLS":
            newState.searchResults = action.schools;
            return newState;
        case "SCHOOL_DETAILS":
            newState.schoolDetails = action.schooldetails;
            return newState;
        default:
            return newState;
        }
}

export default school