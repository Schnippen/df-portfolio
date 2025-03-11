import React from "react";
import styles from "../Projects.module.css";
import Separator from "../../../Separator";
import { mobileProjectPhotos } from "../../../../assets/images/mobileProject/mobileProjectPhotos";
import PhotoGallery from "../PhotoGallery";
import { TechnologicalStackList } from "../TechStack/TechnologicalStackList";
import { MobileTarotProjectTechnologicalStackArray } from "../TechStack/TechnologicalStackArray";
import ReactPlayerComponent from "../ReactPlayerComponent";

const MobileTarotProject = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Tarot Reader</h2>
      <div className={styles.projects_article_container}>
        <div style={{ flexDirection: "column" }}>
          <div className={styles.project_photo_gallery}>
            <PhotoGallery
              photos={mobileProjectPhotos}
              delay={4000}
              alt={"Screenshot of Tarot Reader App"}
            />
          </div>
          <div
            className={styles.project_youtube_container}
            style={{ marginTop: "10%", marginBottom: "48px" }}
          >
            <ReactPlayerComponent
              urlYoutube="https://www.youtube.com/watch?v=u4dzeGxwvCg"
              urlName="tarot"
            />
          </div>
        </div>
        <div className={styles.projects_article_item}>
          <h3 className={styles.project_paragraph_title}>Project Overview:</h3>
          <p
            className={
              (styles.project_paragraph, styles.project_paragraph_addendum)
            }
          >
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
            <Separator />
            I'd be happy to share how I would approach building it again or what
            I would do differently with the knowledge I have now.
          </p>
          <h3 className={styles.project_paragraph_title}>
            Technological Stack:
          </h3>
          <TechnologicalStackList
            array={MobileTarotProjectTechnologicalStackArray}
          />
          <p className={styles.project_paragraph_addendum}>
            Sadly, thanks to the Digital Services Act (DSA), Google decided to
            remove apps where developers didn’t publicly list their home
            address. Since I wasn’t too keen on sharing mine with the world, my
            app mysteriously vanished from the Play Store—who could’ve seen that
            coming?
          </p>
        </div>
      </div>
    </article>
  );
};

export default MobileTarotProject;
