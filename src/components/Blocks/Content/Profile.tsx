import React from "react";
import styles from "./Profile.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ProfileCharacter from "./ProfileCharacter";
import DevIcons from "../../../assets/DevIcons";
function Profile() {
  const ProfileDataSVGs = [
    {
      image: <DevIcons.Independence />,
      text:
        "People value my ability to think independently and form my own opinions.",
      title: "Independence of opinion",
    },
    {
      image: <DevIcons.Honesty />,
      text:
        "My commitment to being honest and transparent is highly regarded by others.",
      title: "Honesty",
    },
    {
      image: <DevIcons.Talkative />,
      text:
        "I am recognized for my strong interpersonal skills and ability to communicate effectively.",
      title: "Soft skills",
    },
    {
      image: <DevIcons.AnaliticalThinking />,
      text:
        "Others appreciate my capacity for analytical thinking and problem-solving.",
      title: "Analytical thinking",
    },
  ];

  return (
    <div className={styles.profile_container}>
      <article className={styles.profile_description}>
        Profile <div>who am i?</div>
        <a
          href="https://github.com/Schnippen"
          target="new"
          className={styles.link}
        >
          <BsGithub className={styles.icon} />
        </a>
        <a href="*" target="new" className={styles.link}>
          <BsLinkedin className={styles.icon} />
        </a>
      </article>
      <article className={styles.profile_photo}>
        <img src="https://picsum.photos/500/500?random=1" alt="Profile_Photo" />
      </article>
      <article className={styles.profile_character}>
        <h2 className={styles.profile_character_title}>
          What do other people appreciate about me?
        </h2>

        {ProfileDataSVGs.map((item, index) => ProfileCharacter(item))}
      </article>
    </div>
  );
}

export default Profile;
/*[
    <DevIcons.Independence />,
    <DevIcons.Imagination />,
    <DevIcons.Talkative />,
    <DevIcons.Creativity />,
  ];*/
