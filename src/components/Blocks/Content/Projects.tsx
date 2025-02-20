import React from "react";

import MobileTarotProject from "./Projects/MobileTarotProject";
import styles from "./Projects.module.css";
import { RiichiMahjongProject } from "./Projects/RiichiMahjongProject";
import TarotLandingPage from "./Projects/TarotLandingPage";
import AnyTownRealEstate from "./Projects/AnyTownRealEstate";

function Projects() {
  return (
    <section className={styles.projects_container}>
      <RiichiMahjongProject />
      <MobileTarotProject />
      <TarotLandingPage />
      <AnyTownRealEstate />
    </section>
  );
}

export default Projects;
