import React from "react";
import styles from "./Profile.module.css";
import DevIcons from "../../../assets/DevIcons";
import ProfilePicture from "../../../assets/images/profile_picture.png";
import MediaButton from "../../Buttons/MediaButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
function Profile() {
  const ProfileDataSVGs = [
    {
      image: <DevIcons.Independence />,
      text: "People value my ability to think independently and form my own opinions.",
      title: "Independence of opinion",
    },
    {
      image: <DevIcons.Honesty />,
      text: "My commitment to being honest and transparent is highly regarded by others.",
      title: "Honesty",
    },
    {
      image: <DevIcons.Talkative />,
      text: "I am recognized for my strong interpersonal skills and ability to communicate effectively.",
      title: "Soft skills",
    },
    {
      image: <DevIcons.AnaliticalThinking />,
      text: "Others appreciate my capacity for analytical thinking and problem-solving.",
      title: "Analytical thinking",
    },
  ];

  const MediaContainer = () => {
    return (
      <div className={styles.media_container}>
        <MediaButton
          link="https://github.com/Schnippen"
          Icon={BsGithub}
          tooltip="Github"
        />
        <MediaButton link="_blank" Icon={BsLinkedin} tooltip="linkedin" />
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
            resolving complex issues and delivering elegant solutions."
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
/*[
    <DevIcons.Independence />,
    <DevIcons.Imagination />,
    <DevIcons.Talkative />,
    <DevIcons.Creativity />,
  ];*/
/*
      <article className={styles.profile_item}>
        <p className={styles.profile_paragraph}>{ArticleItemData.part3}</p>
      </article>
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
      </article>*/
