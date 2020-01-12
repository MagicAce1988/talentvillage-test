import React from "react";
import StarredInfluencerList from "./StarredInfluencerList";
import Sorter from "./Sorter";
import "../cssfiles/RightSide.css";

function RightSide() {
  return (
    <div className="rightSide">
      <div className="topSide">
        <h2>
          <strong>Starred Influencers</strong>
        </h2>
        <Sorter />
      </div>
      <div className="bottomSide">
        <StarredInfluencerList />
      </div>
    </div>
  );
}
export default RightSide;
