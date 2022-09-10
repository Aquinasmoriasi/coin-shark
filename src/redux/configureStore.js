import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cryptosReducer from './cryptocurrencies/cryptos';

const store = configureStore({
  reducer: cryptosReducer,
  middleware: [thunk],
});

export default store;
