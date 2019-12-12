import React, { Component } from "react";
import "./LeftSide.css";
import SuggestedInfluencerList from "./SuggestedInfluencerList";

class LeftSide extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let {users} = this.props;
    let {moveUser} = this.props;
    return (
      
      <div className="leftSide">
          <h2>
            <strong>Suggested Influencers</strong>
          </h2>
            <SuggestedInfluencerList users={users} moveUser={moveUser}/>
        </div>
    );
  }
}

export default LeftSide;
