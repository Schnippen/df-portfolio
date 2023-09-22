import React from "react";
import styles from "./Projects.module.css";
import { BsGithub } from "react-icons/bs";

import DevIcons from "../../../assets/DevIcons";
import {
  DescriptionAnytownRealEstate,
  DescriptionTarot,
} from "../../../assets/Descriptions";
import GooglePlayImage from "../../../assets/images/GooglePlayStore.png";
import Screenshot1 from "../../../assets/images/mobileProject/ScreenShot (1).png";
import Screenshot2 from "../../../assets/images/mobileProject/ScreenShot (2).png";
import Screenshot3 from "../../../assets/images/mobileProject/ScreenShot (3).png";
import Screenshot4 from "../../../assets/images/mobileProject/ScreenShot (4).png";
import Screenshot5 from "../../../assets/images/mobileProject/ScreenShot (5).png";
import Screenshot6 from "../../../assets/images/mobileProject/ScreenShot (6).png";
import Screenshot7 from "../../../assets/images/mobileProject/ScreenShot (7).png";
import Screenshot8 from "../../../assets/images/mobileProject/ScreenShot (8).png";
import Screenshot9 from "../../../assets/images/mobileProject/ScreenShot (9).png";
import Screenshot10 from "../../../assets/images/mobileProject/ScreenShot (10).png";
import { landingPagePhotos } from "../../../assets/images/landingPage/landingPagePhotos";
import { mobileProjectPhotos } from "../../../assets/images/mobileProject/mobileProjectPhotos";
import { realEstateProjectPhotos } from "../../../assets/images/realEstateProject/realEstateProjectPhotos";
import PhotoGallery from "./PhotoGallery";

const ButtonGooglePlayStore = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
      className={styles.google_play_store}
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

function Projects() {
  return (
    <section className={styles.projects_container}>
      <article className={styles.projects_article}>
        <h2>Tarot Reader</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={mobileProjectPhotos}
              delay={3000}
              alt={"Screenshot of Tarot Reader App"}
            />
          </div>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              I am proud to present my React Native Tarot Reader mobile app, a
              project that encompasses my skills in development, monetization,
              and marketing. As a solo entrepreneur, I took on various roles to
              bring this app to life.
            </p>
            <p className={styles.project_paragraph}>
              Key Features and Technologies React Native App: Developed a
              cross-platform mobile app using React Native, ensuring
              compatibility with both Android and iOS devices. NoSQL Database
              Integration: Utilized Firestore, a NoSQL database, to efficiently
              store and manage data for the app, including user profiles and
              tarot card information. Monetization Strategy: Successfully
              monetized the app using RevenueCat, implementing in-app purchases
              to offer premium features and content. Google Play Store
              Publication: The app is live on the Google Play Store, allowing
              Android users to access and use the Tarot Reader. Social Media
              Presence: Created and managed dedicated social media pages,
              including Instagram, to engage with the audience, share updates,
              and effectively market the app. Authentication System: Implemented
              a robust user authentication system, enabling users to create
              accounts, log in securely, and access personalized features.
              One-Person Startup: I served as a sole founder, taking on the
              responsibilities of development, marketing, and monetization. This
              experience allowed me to hone my entrepreneurial and project
              management skills.
            </p>
            <ButtonGooglePlayStore />
          </div>
        </div>
      </article>
      <article className={styles.projects_article}>
        <h2>Tarot Reader landing page</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              I am proud to present my React Native Tarot Reader mobile app, a
              project that encompasses my skills in development, monetization,
            </p>
            <p className={styles.project_paragraph}>
              Key Features and Technologies React Native App: Developed a
              cross-platform mobile app using React Native, ensuring
            </p>
            <a href="_blank" target="new">
              LINK
            </a>
          </div>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={landingPagePhotos}
              delay={3000 * 100}
              alt={"Tarot Reader Ladning Page Screenshot"}
            />
          </div>
        </div>
      </article>
      <article className={styles.projects_article}>
        <h2>Any Town real estate</h2>
        <div className={styles.projects_article_container}>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={realEstateProjectPhotos}
              delay={3000 * 100}
              alt={"Tarot Reader Ladning Page Screenshot"}
            />
          </div>
          <div className={styles.projects_article_item}>
            <p className={styles.project_paragraph}>
              I am proud to present my React Native Tarot Reader mobile app, a
              project that encompasses my skills in development, monetization,
            </p>
            <p className={styles.project_paragraph}>
              Key Features and Technologies React Native App: Developed a
              cross-platform mobile app using React Native, ensuring
            </p>
            <a
              href="https://github.com/Schnippen"
              target="new"
              className={styles.link}
            >
              <BsGithub className={styles.icon} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;

/*   const handleNavigateItem = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate(`/Item/${item.offerID}`, { state: item });
  }; 
  
  <img
              src={Screenshot1}
              alt="Tarot Reader App screenshot"
              className={styles.project_image}
            />


  */
