import React from "react";
import {connect} from 'react-redux';
import "../cssfiles/SuggestedInfluencer.css";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import {addInfluencerToStarred} from '../../redux';

const mapStateToProps = ({suggestedUsersReducer}) => {
    return {
      suggestedUsers: suggestedUsersReducer.suggestedUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addInfluencerToStarred: (influencer) => dispatch(addInfluencerToStarred(influencer))
    }
}

function SuggestedInfluencer(props) {
  
  const {
    name,
    picture,
    instagram,
    suggestedUsers,
    addInfluencerToStarred
  } = props;

  return (
    <div className="content">
      <div className="image">
        <img src={picture} alt="suggested influencer" />
      </div>

      <div className="SuggestedInfluencer">
        <div className="Text Name">
          <p>
            <strong>{name}</strong>
          </p>
          <div className="smallText Instagram">
            <div>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div>{instagram}</div>
          </div>
        </div>
      </div>
      <i
        className="fa fa-plus"
        aria-hidden="true"
        onClick={() =>
          addInfluencerToStarred(
            suggestedUsers.find(user => user.influencer_full_name === name)
          )
        }
      ></i>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedInfluencer);
