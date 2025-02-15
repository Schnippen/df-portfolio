import React from "react";
import styles from "../Projects.module.css";
import { BsGithub } from "react-icons/bs";
import MediaButton from "../../../Buttons/MediaButton";
import Separator from "../../../Separator";
import ReactPlayer from "react-player/youtube";
//https://www.npmjs.com/package/react-player
export const RiichiMahjongProject = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Riichi Mahjong in React Native</h2>
      <div className={styles.projects_article_container}>
        <div className={styles.projects_article_item}>
          <p className={styles.project_paragraph}>
            Lanriochiirs.
            <Separator />
            riichi
            <Separator />
            riichi
          </p>
          <h3 className={styles.project_paragraph_title}>Core ideas:</h3>
          {/*  <TechnologicalStackList
              array={LandingPageTechnologicalStackArray}
            /> */}
          <div className={styles.projects_article_links}>
            <MediaButton
              link="https://github.com/Schnippen/mahjong?tab=readme-ov-file#riichi-mahjong-game-in-react-native"
              Icon={BsGithub}
              tooltip="Project repository"
            />
          </div>
        </div>
        <div className={styles.project_photo_gallery}>
          <ReactPlayer url="https://www.youtube.com/watch?v=xU6Rur4swco" />
        </div>
      </div>
    </article>
  );
};
