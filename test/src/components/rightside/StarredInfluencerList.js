import React, {useEffect } from "react";
import {connect} from 'react-redux';
import StarredInfluencer from "./StarredInfluencer";
import StarredInfluencerLoading from "./StarredInfluencerLoading";
import { fetchStarredUsers } from "../../redux";

const mapStateToProps = ({ sortMethodReducer, starredUsersReducer }) => {
  const {loading,starredUsers,error}=starredUsersReducer
  return {
    sortMethod: sortMethodReducer.sortMethod,
    loading,
    starredUsers,
    error

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStarredUsers: () => dispatch(fetchStarredUsers())
  };
};

function StarredInfluencerList({sortMethod,starredUsers,loading,error,getStarredUsers}) {

  useEffect(() => {
    getStarredUsers();
  }, [getStarredUsers]);

  switch (sortMethod) {
    case "FollowersAsc":
      starredUsers.sort(
        (a, b) => a.statistics.followers - b.statistics.followers
      );
      break;
    case "FollowersDesc":
      starredUsers.sort(
        (a, b) => b.statistics.followers - a.statistics.followers
      );
      break;
    case "EngagementAsc":
      starredUsers.sort(
        (a, b) =>
          parseFloat(a.statistics.engagement) -
          parseFloat(b.statistics.engagement)
      );
      break;
    case "EngagementDesc":
      starredUsers.sort(
        (a, b) =>
          parseFloat(b.statistics.engagement) -
          parseFloat(a.statistics.engagement)
      );
      break;
    case "AlphabetAsc":
      starredUsers.sort((a, b) =>
        a.influencer_full_name.localeCompare(b.influencer_full_name)
      );
      break;
    case "AlphabetDesc":
      starredUsers.sort((a, b) =>
        b.influencer_full_name.localeCompare(a.influencer_full_name)
      );
      break;
    default:
      starredUsers.sort((a, b) =>
        a.influencer_full_name.localeCompare(b.influencer_full_name)
      );
  }

  return loading?
  
        <StarredInfluencerLoading number={6}/>
      
      : error === "" ? 
      <div className="group">
        {starredUsers.map((user, i) => (
          <StarredInfluencer
            key={i}
            id={user.influencer_id}
            name={user.influencer_full_name}
            instagram={user.influencer_instagram_username}
            picture={user.influencer_instagram_profile_image}
            followers={user.statistics.followers}
            engagement={user.statistics.engagement}
          />
        ))}
      </div>
     : 
      <h2 className="errorMessage">{error}</h2>
}

export default connect(mapStateToProps,mapDispatchToProps)(StarredInfluencerList);
