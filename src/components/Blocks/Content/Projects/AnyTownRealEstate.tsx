import React from "react";
import MediaButton from "../../../Buttons/MediaButton";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { realEstateProjectPhotos } from "../../../../assets/images/realEstateProject/realEstateProjectPhotos";
import Separator from "../../../Separator";
import PhotoGallery from "../PhotoGallery";
import styles from "../Projects.module.css";
import { TechnologicalStackList } from "../TechStack/TechnologicalStackList";
import { AnyTownTechnologicalStackArray } from "../TechStack/TechnologicalStackArray";
const AnyTownRealEstate = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Any Town Real Estate</h2>
      <div className={styles.projects_article_container}>
        <div className={styles.project_photo_gallery}>
          <PhotoGallery
            photos={realEstateProjectPhotos}
            delay={3000}
            alt={"Tarot Reader Ladning Page Screenshot"}
          />
        </div>
        <div className={styles.projects_article_item}>
          <p className={styles.project_paragraph}>
            Any Town Real Estate was my first side project and introduction to
            both frontend and a bit of backend development.
            <Separator />
            It started with a need for real estate data various websites and
            from Airbnb, Booking. Since no API was available, I built a web
            scraper—because lack of an API doesn’t mean lack of data.
            <Separator />
            With that data in hand, I created a UI overlay inspired by Zillow
            and Morizon, turning raw information into an interactive experience.
          </p>
          <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
          <TechnologicalStackList array={AnyTownTechnologicalStackArray} />
          <div className={styles.projects_article_links}>
            <MediaButton
              link="https://github.com/Schnippen"
              Icon={BsGithub}
              tooltip="Github"
            />
            <MediaButton
              link="estate-next.vercel.app"
              Icon={HiOutlineExternalLink}
              tooltip="Visit AnyTown Real Estate"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default AnyTownRealEstate;
