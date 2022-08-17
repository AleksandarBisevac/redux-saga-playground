import usersReducer from './reducer';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
