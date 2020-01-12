import { REQUEST_STARRED_PENDING, REQUEST_STARRED_SUCCESS, REQUEST_STARRED_FAILURE, REMOVE_STARRED_BY_ID, ADD_INFLUENCER_TO_STARRED } from "./types";

const initialState = {
    loading: true,
    starredUsers:[],
    error:''
};

export const starredUsersReducer = (state=initialState,{type,payload}) => {
    switch (type) {
      case REQUEST_STARRED_PENDING:
        return {
          ...state,
          loading: true,
          starredUsers: [],
          error: ""
        };
      case REQUEST_STARRED_SUCCESS:
        return {
          ...state,
          loading: false,
          starredUsers: payload,
          error: ""
        };
      case REQUEST_STARRED_FAILURE:
        return {
          ...state,
          loading: false,
          starredUsers: [],
          error: payload
        };
      case REMOVE_STARRED_BY_ID:
        return {
          ...state,
          starredUsers: state.starredUsers.filter(user => user.influencer_id !== payload)
        };
      case ADD_INFLUENCER_TO_STARRED:
        return {
          ...state,
          starredUsers: [...state.starredUsers, payload]
        };
      default:
        return state;
    }
}