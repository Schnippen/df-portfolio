import React from "react";
import styles from "./Projects.module.css";
import DevIcons from "../../../assets/DevIcons";
import {
  DescriptionAnytownRealEstate,
  DescriptionTarot,
} from "../../../assets/Descriptions";
import Button from "../../Buttons/Button";
import ProfilePicture from "../../../assets/images/profile_picture.png";

import { useNavigate, Link } from "react-router-dom";

function Projects() {
  return (
    <section className={styles.projects_container}>
      <article className={styles.projects_article}>
        <h2>Tarot Reader</h2>
        <div className={styles.projects_article_container}>
          <img
            src={ProfilePicture}
            alt="Tarot Reader App screenshot"
            className={styles.project_image}
          />
          <p>adaasdasdasd</p>
        </div>
      </article>
      <article className={styles.projects_article}>
        <h2>Tarot Reader landing page</h2>
        <img
          src={ProfilePicture}
          alt="Tarot Reader Landing page screenshot"
          className={styles.project_image}
        />
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
  }; */
