import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './User'
import school from './School'

const reducer = combineReducers({
    user,
    school,
    routing: routerReducer
})

export default reducer