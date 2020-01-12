import React, { useEffect } from "react";
import {connect} from 'react-redux'
import SuggestedInfluencer from "./SuggestedInfluencer";
import SuggestedInfluencerLoading from "./SuggestedInfluencerLoading";
import {fetchSuggestedUsers} from '../../redux'

const mapStateToProps = ({ starredUsersReducer,suggestedUsersReducer }) => {
  const { loading, suggestedUsers, error } = suggestedUsersReducer;
  return {
    loading,
    suggestedUsers,
    starredUsers: starredUsersReducer.starredUsers,
    error
  };
};

const mapDispatchToProps = dispatch => {
    return {
        getSuggestedUsers: () => dispatch(fetchSuggestedUsers())
    }
}

function SuggestedInfluencerList ({loading,suggestedUsers,starredUsers, error,getSuggestedUsers}) {

  useEffect(() => {
    getSuggestedUsers()
  },[getSuggestedUsers])

  let filteredUsers = suggestedUsers.filter(
    user => !starredUsers.includes(user)
  );

    return loading ?

        <SuggestedInfluencerLoading number={3}/>

      : error === "" ? 
      
      <div className="group">
        {filteredUsers.map((user, i) => (
          <SuggestedInfluencer
            key={i}
            id={user.influencer_id}
            name={user.influencer_full_name}
            instagram={user.influencer_instagram_username}
            picture={user.influencer_instagram_profile_image}
          />
        ))}
      </div>

     :

      <h2>{error}</h2>
    ;
        }

export default connect(mapStateToProps,mapDispatchToProps)(SuggestedInfluencerList);
