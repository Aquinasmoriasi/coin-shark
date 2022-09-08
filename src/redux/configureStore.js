import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import currenciesReducer from './currencies/currency';

const store = configureStore({
  reducer: currenciesReducer,
  middleware: [thunk],
});
export default store;
