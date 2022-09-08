import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cryptosReducer from './currencies/cryptos';
import detailsReducer from './currencies/details';

const rootReducer = combineReducers({ cryptos: cryptosReducer, details: detailsReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
