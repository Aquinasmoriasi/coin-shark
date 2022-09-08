import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cryptosReducer from './cryptocurrencies/cryptos';
import detailsReducer from './cryptocurrencies/details';

const rootReducer = combineReducers({ cryptos: cryptosReducer, details: detailsReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
