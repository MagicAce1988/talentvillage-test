import React  from "react";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";
import "./App.css";

export const appContext = React.createContext();

function App() {

  // const moveUser = id => {
  //   let { leftUsers, rightUsers } = currentState;
  //   rightUsers.push(leftUsers.find(user => user.influencer_id === id));
  //   dispatch({
  //     type: "CHANGE_RIGHT_USERS",
  //     payload: rightUsers
  //   });
  // };

  // const removeUser = id => {
  //   let { rightUsers } = currentState;
  //   rightUsers = rightUsers.filter(user => user.influencer_id !== id);
  //   dispatch({
  //     type: "CHANGE_RIGHT_USERS",
  //     payload: rightUsers
  //   });
  // };

  // let filteredUsers = currentState.leftUsers.filter(
  //   user => !currentState.rightUsers.includes(user)
  // );

  return (
      <div className="MyApp">
        <div className="Content">
          <div className="leftSideMain">
            <LeftSide />
          </div>
          <div className="rightSideMain">
            <RightSide />
          </div>
        </div>
      </div>
  );
}

export default App;
