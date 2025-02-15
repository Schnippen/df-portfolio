import React from "react";
import styles from "../Projects.module.css";
import ButtonGooglePlayStore from "../../../Buttons/ButtonGooglePlayStore";
import Separator from "../../../Separator";
import { mobileProjectPhotos } from "../../../../assets/images/mobileProject/mobileProjectPhotos";
import PhotoGallery from "../PhotoGallery";
import { TechnologicalStackList } from "../TechStack/TechnologicalStackList";
import { MobileTarotProjectTechnologicalStackArray } from "../TechStack/TechnologicalStackArray";

const MobileTarotProject = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Tarot Reader</h2>
      <div className={styles.projects_article_container}>
        <div className={styles.project_photo_gallery}>
          <PhotoGallery
            photos={mobileProjectPhotos}
            delay={4000}
            alt={"Screenshot of Tarot Reader App"}
          />
        </div>
        <div className={styles.projects_article_item}>
          <h3 className={styles.project_paragraph_title}>Project Overview:</h3>
          <p className={styles.project_paragraph}>
            Riding the wave of excitement around the newly available chatGPT
            API, I decided to create this app as a fun project.
            <Separator />
            It offers personalized tarot readings tailored to users' specific
            questions, making the experience unique for each individual. At its
            core, the app focuses on delivering customized tarot insights,
            ensuring that every reading feels relevant and meaningful to the
            user.
            <Separator />
            While working on the Tarot Reader mobile app on my own, I handled
            everything—from coding to design to managing the project. Along the
            way, I learned a lot about programming, monetization, and marketing,
            turning a small idea into a real, working app.
          </p>
          <h3 className={styles.project_paragraph_title}>
            Technological Stack:
          </h3>
          <TechnologicalStackList
            array={MobileTarotProjectTechnologicalStackArray}
          />
          <div className={styles.projects_article_links}>
            <ButtonGooglePlayStore />
          </div>
        </div>
      </div>
    </article>
  );
};

export default MobileTarotProject;
