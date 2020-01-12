import React from "react";
import styles from "../cssfiles/StarredInfluencerLoading.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.css";

function StarredInfluencerLoading({number}) {
  let Placeholder = () =>(
    <div className={`${styles.content}`}>
      <div className={`${styles.StarredInfluencer}`}></div>
      <i
        className={[styles.fa, styles["fa-times"]].join(" ")}
        aria-hidden="true"
      ></i>
    </div>)
  
  let loadingPlaceHolders = [];

for (var i = 0; i < number; i++) {
    loadingPlaceHolders.push(i);
}

return (
  <div className="placeholder">
    {loadingPlaceHolders.map((i) => (
      <Placeholder key={i}></Placeholder>
    ))}
  </div>
);

}

export default StarredInfluencerLoading;
