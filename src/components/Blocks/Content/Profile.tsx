import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "../../../assets/images/profile_picture.webp";
import MediaButton from "../../Buttons/MediaButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAirbnb } from "react-icons/fa";
function Profile() {
  const MediaContainer = () => {
    return (
      <div className={styles.media_container}>
        <MediaButton
          link="https://github.com/Schnippen"
          Icon={BsGithub}
          tooltip="Github"
        />
        <MediaButton
          link="https://www.airbnb.com/users/show/296076814?locale=en"
          Icon={FaAirbnb}
          tooltip="Airbnb"
        />
        <MediaButton
          link="https://www.linkedin.com/in/damian-fojcik-483371218/"
          Icon={BsLinkedin}
          tooltip="linkedin"
        />
      </div>
    );
  };
  //https://www.airbnb.com/users/show/296076814?locale=en
  return (
    <div className={styles.profile_container}>
      <article className={styles.profile_item}>
        <div className={styles.profile_paragraph_container}>
          <p className={styles.profile_paragraph}>
            I’m a problem solver at heart and a hobbyist programmer who loves
            figuring things out. My real estate journey has sharpened my ability
            to find the right spaces—whether it’s buying, selling, or managing
            properties like student housing, commercial spaces, or Airbnb
            rentals.
            <br />
          </p>
          <p className={styles.profile_paragraph}>
            I believe the best solutions are simple and well-designed. I like to
            break problems down, understand what really matters, and then build
            something that works.
          </p>
          <p className={styles.profile_paragraph}>
            I enjoy a good challenge, whether it’s in real estate or coding, and
            I’m always up for learning something new. Over time, I’ve become
            pretty good at working with different people, juggling multiple
            things at once, and staying cool under pressure.
          </p>
          <p className={styles.profile_paragraph}>
            I’d love to share more about my journey and projects—how my passion
            for real estate and tech comes together to solve real-world problems
            in creative ways.
          </p>
        </div>
        <section className={styles.profile_picture_container}>
          <img
            src={ProfilePicture}
            alt="myself"
            className={styles.profile_picture}
          />
          <MediaContainer />
        </section>
      </article>
    </div>
  );
}

export default Profile;
