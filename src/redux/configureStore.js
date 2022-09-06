import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import leaguesReducer from './leagues/leagues';

const rootReducer = combineReducers({ leagues: leaguesReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
