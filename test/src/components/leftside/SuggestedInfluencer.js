import React, { useContext } from "react";
import "../cssfiles/SuggestedInfluencer.css";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import { appContext } from "./../../App";

function SuggestedInfluencer(props) {
  const context = useContext(appContext);
  let { moveUser } = context;
  let { name, picture, instagram, id } = props;

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
        onClick={() => {
          moveUser(id);
        }}
      ></i>
    </div>
  );
}

export default SuggestedInfluencer;
