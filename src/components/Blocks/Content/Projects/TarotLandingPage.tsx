import React from "react";
import styles from "../Projects.module.css";
import Separator from "../../../Separator";
import MediaButton from "../../../Buttons/MediaButton";
import { HiOutlineExternalLink } from "react-icons/hi";
import PhotoGallery from "../PhotoGallery";
import { landingPagePhotos } from "../../../../assets/images/landingPage/landingPagePhotos";
import { TechnologicalStackList } from "../TechStack/TechnologicalStackList";
import { LandingPageTechnologicalStackArray } from "../TechStack/TechnologicalStackArray";
const TarotLandingPage = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Tarot Reader Landing Page</h2>
      <div className={styles.projects_article_container}>
        <div className={styles.projects_article_item}>
          <p className={styles.project_paragraph}>
            While developing the Tarot Reader mobile app, I took on various
            roles to bring the project to life, enhancing my skills in
            programming, monetization, and marketing.
            <Separator />
            The landing page, product blog, and Instagram funnel served as key
            components of my app's marketing strategy, providing a compelling
            introduction to potential users.
            <Separator />
            The landing page featured integrated analytics and platform
            preference analysis, helping me decide whether to focus on the
            Google Play Store or the Mac App Store for future releases.
          </p>

          <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
          <TechnologicalStackList array={LandingPageTechnologicalStackArray} />

          <div className={styles.projects_article_links}>
            <MediaButton
              link="https://tarot-landing-page-next.vercel.app/"
              Icon={HiOutlineExternalLink}
              tooltip="Visit Tarot Reader Landing Page"
            />
          </div>
        </div>
        <div className={styles.project_photo_gallery}>
          <PhotoGallery
            photos={landingPagePhotos}
            delay={3000}
            alt={"Tarot Reader Ladning Page Screenshot"}
          />
        </div>
      </div>
    </article>
  );
};

export default TarotLandingPage;
