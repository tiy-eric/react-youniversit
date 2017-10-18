import _ from 'lodash';

const school = (state = {}, action) => {

    switch (action.type) {
        case "SEARCHED_SCHOOLS":
            const newState = _.merge({}, state);
            newState.searchResults = action.schools;
            return newState;
        default:
            return state
        }
}

export default school