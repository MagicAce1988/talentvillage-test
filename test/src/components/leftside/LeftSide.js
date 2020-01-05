import React from "react";
import "../cssfiles/LeftSide.css";
import SuggestedInfluencerList from "./SuggestedInfluencerList";

function LeftSide () {
    return (
      <div>
        <h2 className="leftSide">
          <strong>Suggested Influencers</strong>
        </h2>
        <SuggestedInfluencerList />
      </div>
    );
  }

export default LeftSide;
