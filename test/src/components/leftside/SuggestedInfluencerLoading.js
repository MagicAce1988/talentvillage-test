import React from "react";
import styles from "../cssfiles/SuggestedInfluencerLoading.module.css";

function SuggestedInfluencerLoading() {
  return (
    <div className="content">
      <div className={styles.image}></div>

      <div className={styles.SuggestedInfluencer}>
        <div className={[styles.Text, styles["Name"]].join(" ")}>
          <div className={[styles.line, styles.nameline].join(" ")}></div>
          <div className={[styles.smallText, styles["Instagram"]].join(" ")}>
            <div className={[styles.line, styles["instagram-line"]].join(" ")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedInfluencerLoading;
