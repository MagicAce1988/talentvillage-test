import { CHANGE_SORT_METHOD } from "./types";

const initialState = {
    sortMethod:''
};

export const sortMethodReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case CHANGE_SORT_METHOD: return {
            ...state,
            sortMethod:payload
            
        }
        default: return state

    }
}