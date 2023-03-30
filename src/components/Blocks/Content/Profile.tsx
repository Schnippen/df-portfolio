import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_description}>
        Profile <div>who am i?</div>
      </div>
      <div className={styles.profile_photo}>Profile2 </div>
    </div>
  );
}

export default Profile;
