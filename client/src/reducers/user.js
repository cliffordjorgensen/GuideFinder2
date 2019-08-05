import { USER_ERROR, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  email: '',
  age: '',
  yearsOfExperience: '',
  activities: '',
  city: '',
  description: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_ERROR:
      return {...state, errorMessage: action.payload };
    case FETCH_USER:
      return {...state, email: action.payload.email, age: action.payload.age, yearsOfExperience: action.payload.yearsOfExperience, activities: action.payload.activities,
       city: action.payload.city, description: action.payload.description};
    default:
      return state;
  }
}