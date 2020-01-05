import React, { useReducer, useEffect } from "react";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";
import axios from "axios";
import "./App.css";

export const appContext = React.createContext();

const initialState = {
  loading: true,
  error: "",
  leftUsers: [],
  rightUsers: [],
  sortMethod: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUGGESTED_SUCCESS":
      return {
        ...state,
        loading: false,
        rightUsers: action.payload,
        error: "noerror"
      };
    case "FETCH_STARRED_SUCCESS":
      return {
        ...state,
        loading: false,
        leftUsers: action.payload,
        error: " "
      };
    case "FETCH_SUGGESTED_ERROR":
      return {
        ...state,
        loading: false,
        leftUsers: [],
        error: "Something went wrong..."
      };
    case "FETCH_STARRED_ERROR":
      return {
        ...state,
        loading: false,
        rightUsers: [],
        error: "Something went wrong..."
      };
    case "CHANGE_SORT_METHOD":
      return {
        ...state,
        sortMethod: action.payload
      };
    case "CHANGE_RIGHT_USERS":
      return {
        ...state,
        rightUsers: action.payload
      };
    default:
      return state;
  }
};

function App() {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://api.myjson.com/bins/k7uck")
      .then(response => {
        dispatch({
          type: "FETCH_SUGGESTED_SUCCESS",
          payload: response.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_SUGGESTED_ERROR"
        });
      });
    axios
      .get("https://api.myjson.com/bins/w6vbo")
      .then(response => {
        dispatch({
          type: "FETCH_STARRED_SUCCESS",
          payload: response.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_STARRED_ERROR"
        });
      });
  }, []);

  const moveUser = id => {
    let { leftUsers, rightUsers } = currentState;
    rightUsers.push(leftUsers.find(user => user.influencer_id === id));
    dispatch({
      type: "CHANGE_RIGHT_USERS",
      payload: rightUsers
    });
  };

  const removeUser = id => {
    let { rightUsers } = currentState;
    rightUsers = rightUsers.filter(user => user.influencer_id !== id);
    dispatch({
      type: "CHANGE_RIGHT_USERS",
      payload: rightUsers
    });
  };

  const sortMethod = method => {
    dispatch({
      type: "CHANGE_SORT_METHOD",
      payload: method
    });
  };

  let users = currentState.leftUsers || [];

  let filteredUsers = users.filter(
    user => !currentState.rightUsers.includes(user)
  );

  return (
    <appContext.Provider
      value={{ currentState, dispatch, filteredUsers, moveUser, removeUser,sortMethod }}
    >
      <div className="MyApp">
        <div className="Content">
          <div className="leftSideMain">
            <LeftSide/>
          </div>
          <div className="rightSideMain">
            <RightSide />
          </div>
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
