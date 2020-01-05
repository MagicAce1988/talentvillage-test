import React, { useContext } from "react";
import StarredInfluencerList from "./StarredInfluencerList";
import Sorter from "./Sorter";
import "../cssfiles/RightSide.css";
import { appContext } from "./../../App";

function RightSide() {
  const context = useContext(appContext);
  let { sortMethod } = context;
  return (
    <div className="rightSide">
      <div className="topSide">
        <h2>
          <strong>Starred Influencers</strong>
        </h2>
        <Sorter handler={sortMethod} />
      </div>
      <div className="bottomSide">
        <StarredInfluencerList />
      </div>
    </div>
  );
}
export default RightSide;
