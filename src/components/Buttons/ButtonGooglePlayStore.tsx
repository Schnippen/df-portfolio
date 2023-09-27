import React from "react";
import GooglePlayImage from "../../assets/images/GooglePlayStore.png";
import styles from "../Blocks/Content/Profile.module.css";
const ButtonGooglePlayStore = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
      className={styles.google_play_store}
      title="Tarot Reader Google Play Store"
      style={{ userSelect: "none" }}
    >
      <img
        src={GooglePlayImage}
        alt="Get on Google Play"
        height="80"
        width="206.7"
      ></img>
    </a>
  );
};

export default ButtonGooglePlayStore;
