import { FETCH_LOCATION } from "./types";

export const fetchLocation = location  => dispatch => {
    console.log(location)
    dispatch ({
        type: FETCH_LOCATION,
        payload: location
    })
};