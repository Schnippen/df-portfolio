import React from "react";
import styles from "./Profile.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Profile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_description}>
        Profile <div>who am i?</div>
        <div>Co doceniają we mnie inni ludzie?</div>
        <p>Niezależność opinii, Poczucie humoru, Szczerość, Wyobraźnię</p>
        <BsGithub className={styles.icon} />
        <BsLinkedin className={styles.icon} />
      </div>
      <div className={styles.profile_photo}>
        <img src="https://picsum.photos/500/500?random=1" alt="Profile_Photo" />
      </div>
    </div>
  );
}

export default Profile;
