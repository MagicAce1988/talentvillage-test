import React, { Component, Fragment } from "react";
import SuggestedInfluencer from "./SuggestedInfluencer";
import SuggestedInfluencerLoading from "./SuggestedInfluencerLoading";

class SuggestedInfluencerList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checkIfListWasShown: 0
    }
  }
  
  checkIfListWasShown = () => {
    this.setState({
      checkIfListWasShown: 1
    })
  }

  render() {
    let userList = this.props.users;
    let { moveUser } = this.props;


    return (userList.length || this.state.checkIfListWasShown) ?
      <div className="group">
        {userList.map((user, i) => (
          <SuggestedInfluencer
            key={i}
            id={user.influencer_id}
            name={user.influencer_full_name}
            instagram={user.influencer_instagram_username}
            picture={user.influencer_instagram_profile_image}
            moveUser={moveUser}
            checkIfListWasShown={this.checkIfListWasShown}

          />
        ))}
      </div> : <Fragment><SuggestedInfluencerLoading /><SuggestedInfluencerLoading /> <SuggestedInfluencerLoading /></Fragment>
    
  }
}

export default SuggestedInfluencerList;
