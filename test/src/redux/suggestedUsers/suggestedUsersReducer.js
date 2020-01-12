import { REQUEST_SUGGESTED_PENDING, REQUEST_SUGGESTED_SUCCESS, REQUEST_SUGGESTED_FAILURE } from "./types";

const initialState = {
    loading: true,
    suggestedUsers:[],
    error:''
};

export const suggestedUsersReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case REQUEST_SUGGESTED_PENDING: return {
            ...state,
            loading: true,
            suggestedUsers: [],
            error:''
        }
        case REQUEST_SUGGESTED_SUCCESS: return {
            ...state,
            loading: false,
            suggestedUsers: payload,
            error:''
        }
        case REQUEST_SUGGESTED_FAILURE: return {
            ...state,
            loading: false,
            suggestedUsers: [],
            error: payload
        }
        default: return state

    }
}