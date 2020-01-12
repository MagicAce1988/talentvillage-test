import axios from "axios";
import {
  REQUEST_STARRED_PENDING,
  REQUEST_STARRED_SUCCESS,
  REQUEST_STARRED_FAILURE,
  REMOVE_STARRED_BY_ID,
  ADD_INFLUENCER_TO_STARRED
} from "./types";

const fetchStarredUsersRequest = () => {
  return {
    type: REQUEST_STARRED_PENDING
  };
};
const fetchStarredUsersSuccess = users => {
  return {
    type: REQUEST_STARRED_SUCCESS,
    payload: users
  };
};
const fetchStarredUsersFailure = () => {
  return {
    type: REQUEST_STARRED_FAILURE,
    payload: "Something went wrong..."
  };
};


export const fetchStarredUsers = () => {
  return function(dispatch) {
    dispatch(fetchStarredUsersRequest());
    axios
      .get("https://api.myjson.com/bins/k7uck")
      .then(response => {
        const users = response.data.data;
        dispatch(fetchStarredUsersSuccess(users));
      })
      .catch(() => {
        dispatch(fetchStarredUsersFailure());
      });
  };
};

export const removeStarredById = id => {
  return {
    type: REMOVE_STARRED_BY_ID,
    payload: id
  };
};

export const addInfluencerToStarred = value => {
  return {
    type: ADD_INFLUENCER_TO_STARRED,
    payload: value
  };
};
