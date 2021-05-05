import {combineReducers} from 'redux'

//user created reducers 

import userReducer from './user/user.reducer'


export default combineReducers({
    user:userReducer
});