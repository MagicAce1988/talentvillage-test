import React, { Component } from "react";
import SuggestedInfluencer from "./SuggestedInfluencer";

class SuggestedInfluencerList extends Component {

  render() {
    let userList = this.props.users;
    let { moveUser } = this.props;

    return (
      <div className="group">
        {userList.map((user, i) => (
          <SuggestedInfluencer
            key={i}
            id={user.influencer_id}
            name={user.influencer_full_name}
            instagram={user.influencer_instagram_username}
            picture={user.influencer_instagram_profile_image}
            moveUser={moveUser}
          />
        ))}
      </div>
    );
  }
}

export default SuggestedInfluencerList;
