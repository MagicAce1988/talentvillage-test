import React from "react";
import styles from "../cssfiles/SuggestedInfluencerLoading.module.css";

function SuggestedInfluencerLoading({number}) {

  let Placeholder = () => (<div className="content">
      <div className={styles.image}></div>

      <div className={styles.SuggestedInfluencer}>
        <div className={[styles.Text, styles["Name"]].join(" ")}>
          <div className={[styles.line, styles.nameline].join(" ")}></div>
          <div className={[styles.smallText, styles["Instagram"]].join(" ")}>
            <div className={[styles.line, styles["instagram-line"]].join(" ")}></div>
          </div>
        </div>
      </div>
    </div>)


    let loadingPlaceHolders = [];

    for (var i = 0; i < number; i++) {
      loadingPlaceHolders.push(i);
    }

    return (
      <div className="placeholder">
        {loadingPlaceHolders.map(i => (
          <Placeholder key={i}></Placeholder>
        ))}
      </div>
    );
        }

export default SuggestedInfluencerLoading;
