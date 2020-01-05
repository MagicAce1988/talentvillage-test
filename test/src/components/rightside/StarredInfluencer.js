import React, {useContext} from "react";
import "../cssfiles/StarredInfluencer.css";
import "../../../node_modules/font-awesome/css/font-awesome.css";
import { appContext } from "./../../App";

let grouper = require("number-grouper");

function StarredInfluencer (props) {
  const context = useContext(appContext);

  let {removeUser} = context

    let {
      name,
      instagram,
      picture,
      followers,
      engagement,
      id
    } = props
   
    return (
      <div className="content">
        <div className="image">
          <img src={picture} alt="starred influencer" />
        </div>

        <div className="StarredInfluencer">
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
          <div className="Text Followers">
            <p>
              <strong>{grouper(followers)}</strong>
            </p>
            <p className="smallText">Followers</p>
          </div>
          <div className="Text Engagement">
            <p>
              <strong className="Percent">{engagement}</strong>
            </p>
            <p className="smallText">Engagement</p>
          </div>
        </div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            removeUser(id)}}
        ></i>
      </div>
    );
  }

export default StarredInfluencer;
