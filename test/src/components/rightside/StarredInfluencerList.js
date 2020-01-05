import React, { useContext, Fragment } from "react";
import StarredInfluencer from "./StarredInfluencer";
import StarredInfluencerLoading from "./StarredInfluencerLoading";
import { appContext } from "./../../App";

function StarredInfluencerList() {
  const context = useContext(appContext);
  let { currentState } = context;
  let userList = currentState.rightUsers;

  switch (currentState.sortMethod) {
    case "FollowersAsc":
      userList.sort((a, b) => a.statistics.followers - b.statistics.followers);
      break;
    case "FollowersDesc":
      userList.sort((a, b) => b.statistics.followers - a.statistics.followers);
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

  if (currentState.loading) {
    return <Fragment>
        <StarredInfluencerLoading />
        <StarredInfluencerLoading />
        <StarredInfluencerLoading />
        <StarredInfluencerLoading />
        <StarredInfluencerLoading />
      </Fragment>

  }

    return currentState.error !== "Something went wrong..." ? (
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
          />
        ))}
      </div>
    ) : (
      <h2 className='errorMessage'>{currentState.error}</h2>
    );
}

export default StarredInfluencerList;
