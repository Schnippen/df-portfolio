import React from "react";
import styles from "./Projects.module.css";
import DevIcons from "../../../assets/DevIcons";

function Projects() {
  return (
    <article className={styles.projects_container}>
      <div className={styles.projects_item_1}>
        1{"child"}
        <h2>nazwa projektu</h2>
        <div>zdjecie</div>
        <p>krótki opis</p>
      </div>
      <div className={styles.projects_item_2}>
        <h2>opis projektu</h2>

        <button> czytaj wiecej</button>
        <div className={styles.icon}>
          <DevIcons.ReactIcon />
        </div>
        <button>Live</button>
        {"child"}
      </div>
      <div className={styles.projects_item_3}>3{"child"}</div>
      <div className={styles.projects_item_4}>4{"child"}</div>
      <div className={styles.projects_item_5}>5{"child"}</div>
      <div className={styles.projects_item_6}>6{"child"}</div>
    </article>
  );
}

export default Projects;
