import React from "react";
import styles from "../Projects.module.css";
import { BsGithub } from "react-icons/bs";
import MediaButton from "../../../Buttons/MediaButton";
import Separator from "../../../Separator";
import ReactPlayerComponent from "../ReactPlayerComponent";

export const RiichiMahjongProject = () => {
  return (
    <article className={styles.projects_article}>
      <h2>Riichi Mahjong in React Native</h2>
      <div className={styles.projects_article_container}>
        <div className={styles.projects_article_item}>
          <p className={styles.project_paragraph}>
            Born from late nights and a passion for programming, this project
            evolved from a hobby into something more.
            <Separator />
            Optimizing JavaScript’s single-threaded execution was a challenge,
            especially for Computer-players-driven tasks. While JS Hermes boosts
            performance, offloading Computer-players-AI logic to a native module
            was considered too late in development.
            <Separator />
            TypeScript and Redux ensure scalability.
            <Separator />
            Computer-players-AI decision-making is built on heuristic
            algorithms, refining tile discards and gameplay strategy. The app is
            fully functional but continues to evolve, with performance, UX, and
            AI improvements on the horizon.
          </p>
          <h3 className={styles.project_paragraph_title}>
            Curious? Check out the project:
          </h3>
          <div className={styles.projects_article_links}>
            <MediaButton
              link="https://github.com/Schnippen/mahjong?tab=readme-ov-file#riichi-mahjong-game-in-react-native"
              Icon={BsGithub}
              tooltip="Project repository"
            />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className={styles.project_youtube_container}>
            <ReactPlayerComponent
              urlYoutube="https://www.youtube.com/watch?v=xU6Rur4swco"
              urlName="mahjong"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
//https://www.youtube.com/watch?v=xU6Rur4swco
