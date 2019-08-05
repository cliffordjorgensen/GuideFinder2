import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import counter from './counter';
import auth from './auth';
import todo from './todo';
import location from './location'

export default combineReducers({
  auth,
  form,
  todo,
  counter,
  location
});