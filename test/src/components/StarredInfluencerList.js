import React, { Component } from "react";
import StarredInfluencer from "./StarredInfluencer";

class StarredInfluencerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfInfluencers: []
    };
  }

  componentDidMount() {
    let {users} = this.props;
    this.setState({listOfInfluencers: users});
  }
  


  render() {
    let { sortMethod } = this.props;

    let { removeUser } = this.props;

    let userList = this.state.listOfInfluencers;

    switch (sortMethod) {
      case "FollowersAsc":
        userList.sort(
          (a, b) => a.statistics.followers - b.statistics.followers
        );
        break;
      case "FollowersDesc":
        userList.sort(
          (a, b) => b.statistics.followers - a.statistics.followers
        );
        break;
      case "EngagementAsc":
        userList.sort(
          (a, b) =>
            parseFloat(a.statistics.engagement) -
            parseFloat(b.statistics.engagement)
        );
        break;
      case "EngagementDesc":
        userList.sort(
          (a, b) =>
            parseFloat(b.statistics.engagement) -
            parseFloat(a.statistics.engagement)
        );
        break;
      case "AlphabetAsc":
        userList.sort((a, b) =>
          a.influencer_full_name.localeCompare(b.influencer_full_name)
        );
        break;
      case "AlphabetDesc":
        userList.sort((a, b) =>
          b.influencer_full_name.localeCompare(a.influencer_full_name)
        );
        break;
      default:
        userList.sort((a, b) =>
          a.influencer_full_name.localeCompare(b.influencer_full_name)
        );
    }

    return (
      <div className="group">
        {userList.map((user, i) => (
          <StarredInfluencer
            key={i}
            id={user.influencer_id}
            name={user.influencer_full_name}
            instagram={user.influencer_instagram_username}
            picture={user.influencer_instagram_profile_image}
            followers={user.statistics.followers}
            engagement={user.statistics.engagement}
            removeUser={removeUser}
          />
        ))}
      </div>
    );
  }
}

export default StarredInfluencerList;
