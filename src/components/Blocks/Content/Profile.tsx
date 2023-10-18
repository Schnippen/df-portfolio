import React from "react";
import styles from "./Profile.module.css";
import ProfilePicture from "../../../assets/images/profile_picture.webp";
import MediaButton from "../../Buttons/MediaButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
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
          link="https://www.linkedin.com/in/damian-fojcik-483371218/"
          Icon={BsLinkedin}
          tooltip="linkedin"
        />
      </div>
    );
  };

  return (
    <div className={styles.profile_container}>
      <article className={styles.profile_item}>
        <div className={styles.profile_paragraph_container}>
          <p className={styles.profile_paragraph}>
            As a passionate problem solver and hobbyist programmer, I bring a
            unique blend of skills to the table. My real estate journey has
            honed my ability to find the perfect spaces, whether it's buying,
            selling, or managing properties, including commercial spaces,
            student housing, and Airbnb rentals.
            <br />
          </p>
          <p className={styles.profile_paragraph}>
            I firmly believe in the power of simplicity and elegant design as
            the keys to effective solutions. My analytical nature drives me to
            understand the core of any problem before crafting a solution.
          </p>
          <p className={styles.profile_paragraph}>
            I thrive on challenges, and I'm equally excited to bring my
            problem-solving mindset to the dynamic world of real estate and the
            ever-evolving realm of programming.
          </p>
          <p className={styles.profile_paragraph}>
            Through my experiences, I've grown into a self-reliant individual
            who excels at working with diverse people and handling the pressures
            and stresses that come with multifaceted endeavors.
          </p>
          <p className={styles.profile_paragraph}>
            I eagerly anticipate the opportunity to share my journey and
            portfolio with you, showcasing how my unwavering passion for real
            estate and technology aligns seamlessly with my dedication to
            resolving complex issues and delivering elegant solutions.
          </p>
        </div>
        <section className={styles.profile_picture_container}>
          <img
            src={ProfilePicture}
            alt="Profile Picture"
            className={styles.profile_picture}
          />
          <MediaContainer />
        </section>
      </article>
    </div>
  );
}

export default Profile;
