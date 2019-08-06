import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import auth from './auth';
import todo from './todo';
import user from './user'
import location from './location'


export default combineReducers({
  auth,
  form,
  todo,
  user,
  location
});