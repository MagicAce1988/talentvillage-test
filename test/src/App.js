import React  from "react";
import LeftSide from "./components/leftside/LeftSide";
import RightSide from "./components/rightside/RightSide";
import "./App.css";

function App() {

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
