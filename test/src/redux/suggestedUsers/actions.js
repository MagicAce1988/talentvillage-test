import axios from "axios";
import { REQUEST_SUGGESTED_PENDING, REQUEST_SUGGESTED_SUCCESS, REQUEST_SUGGESTED_FAILURE } from "./types";

const fetchSuggestedUsersRequest = () => {
  return {
    type: REQUEST_SUGGESTED_PENDING
  };
};
const fetchSuggestedUsersSuccess = users => {
  return {
    type: REQUEST_SUGGESTED_SUCCESS,
    payload: users
  };
};
const fetchSuggestedUsersFailure = () => {
  return {
    type: REQUEST_SUGGESTED_FAILURE,
    payload: 'Something went wrong...'
  };
};

export const fetchSuggestedUsers = () => {
  return function(dispatch) {
    dispatch(fetchSuggestedUsersRequest());
    axios
      .get("https://api.myjson.com/bins/w6vbo")
      .then(response => {
        const users = response.data.data;
        dispatch(fetchSuggestedUsersSuccess(users));
      })
      .catch(() => {
        dispatch(fetchSuggestedUsersFailure());
      });
  };
};
