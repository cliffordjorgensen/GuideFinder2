import { AUTH_GUIDE, AUTH_GUIDE_ERROR } from "../actions/types";

const INITIAL_STATE = {
  guideAuthenticated: '',
  guideErrorMessage: ''
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    case AUTH_GUIDE:
      return { ...state, guideAuthenticated: action.payload };
    case AUTH_GUIDE_ERROR:
      return { ...state, guideErrorMessage: action.payload };
    default:
      return state;
  }
}