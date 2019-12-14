import React from "react";
import styles from "../cssfiles/StarredInfluencerLoading.module.css";
import "../../../node_modules/font-awesome/css/font-awesome.css";

function StarredInfluencerLoading() {
  
    return (
      <div className={`${styles.content}`}>
        <div className={`${styles.StarredInfluencer}`}>
        </div>
        <i
          className={[styles.fa, styles['fa-times']].join(" ")}
          aria-hidden="true"
        ></i>
      </div>
    );
  }

export default StarredInfluencerLoading;
