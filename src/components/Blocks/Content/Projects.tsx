import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <article className={styles.projects_container}>
      <div className={styles.projects_item_1}>1</div>
      <div className={styles.projects_item_2}>2</div>
      <div className={styles.projects_item_3}>3</div>
      <div className={styles.projects_item_4}>4</div>
      <div className={styles.projects_item_5}>5</div>
      <div className={styles.projects_item_6}>6</div>
    </article>
  );
}

export default Projects;
