import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import counter from './counter';
import auth from './auth';
import todo from './todo';
import guideAuth from './guideAuth'
import user from './user'

export default combineReducers({
  auth,
  form,
  todo,
  counter, 
  guideAuth,
  user
});