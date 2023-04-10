import React from "react";
import styles from "./Projects.module.css";
import DevIcons from "../../../assets/DevIcons";
import DescriptionAnytownRealEstate from "../../../assets/Descriptions";
import Button from "../../Buttons/Button";

function Projects() {
  return (
    <article className={styles.projects_container}>
      <div className={styles.projects_item_1}>
        1{"child"}
        <h2>Anytown Real Estate</h2>
        <div className={styles.image_container}>
          <img
            src="https://picsum.photos/500/500?random=2"
            className={styles.image}
          ></img>
        </div>
        <p>krótki opis</p>
      </div>
      <div className={styles.projects_item_2}>
        <h2 className={styles.projects_item_title}>Anytown Real Estate</h2>
        <div className={styles.projects_item_description}>
          <DescriptionAnytownRealEstate />
        </div>
        <button> czytaj wiecej</button>
        <div className={styles.icon}>
          <DevIcons.ReactIcon />
        </div>
        <button>Live</button>
        <Button text={"Open"} buttonHeight={"40px"} buttonWidth={"100px"} />
      </div>
      <div className={styles.projects_item_3}>3{"child"}</div>
      <div className={styles.projects_item_4}>4{"child"}</div>
      <div className={styles.projects_item_5}>5{"child"}</div>
      <div className={styles.projects_item_6}>6{"child"}</div>
    </article>
  );
}

export default Projects;
