import React, { useContext, Fragment } from "react";
import SuggestedInfluencer from "./SuggestedInfluencer";
import SuggestedInfluencerLoading from "./SuggestedInfluencerLoading";
import {appContext} from './../../App';

function SuggestedInfluencerList () {
  const context = useContext(appContext);
  let { currentState, filteredUsers } = context;

    if (currentState.loading) {
      return (
        <Fragment><SuggestedInfluencerLoading /><SuggestedInfluencerLoading /> <SuggestedInfluencerLoading /></Fragment>
      );
    }

    return currentState.error !== "Something went wrong..." ? (
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
    ) : (
      <h2>{currentState.error}</h2>
    );
        }

export default SuggestedInfluencerList;
