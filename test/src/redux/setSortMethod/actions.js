import { CHANGE_SORT_METHOD } from "./types";

export const setSortMethod = sortmethod => ({
         type: CHANGE_SORT_METHOD,
         payload: sortmethod
       });