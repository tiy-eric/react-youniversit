import _ from 'lodash';

const user = (state = {}, action) => {
    
    state = {currentUser: JSON.parse(localStorage.getItem("currentUser")) || {} };

    switch (action.type) {
        case "USER_REGISTERED":
            const newState = _.merge({}, state);
            newState.registeredUser = action.result;
            return newState;
        default:
            return state
        }
}

export default user