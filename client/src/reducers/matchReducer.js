import { FETCH_USER_GUIDE_MATCH, FETCH_USER_GUIDE_MATCH_ERROR } from "../actions/types";

export default function(state={}, action){

    switch(action.type) {
        case FETCH_USER_GUIDE_MATCH:
            return {...state, match: action.payload};
        case FETCH_USER_GUIDE_MATCH_ERROR:
            return {...state, city: action.payload};
        default:
            return state;
    }
}