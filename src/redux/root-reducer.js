import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
//this is for local/session storage
import {persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; //local storage
//import sessionStorage from 'redux-persist/lib/storage'

import directoryReducer from './directory/directory.reducer'

const persistConfig = {
  key:'root',
  storage, 
  whitelist:['cart','directory']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory:directoryReducer
});

export default persistReducer(persistConfig,rootReducer)
