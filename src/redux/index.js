import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { cashReduser } from './cashSlice';
import { users } from './userSlise';
const rootReducer = combineReducers({
  toolkit: cashReduser,
  loh: users,
});
const store = configureStore({ reducer: rootReducer });
export default store;
