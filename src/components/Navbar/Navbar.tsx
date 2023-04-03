import React from "react";
import styles from "./Navbar.module.css";
import Projects from "../Blocks/Content/Projects";
type NavbarTypes = {
  handleRef: (
    event: React.MouseEvent,
    ref: React.MutableRefObject<HTMLElement | null>
  ) => void;
  meRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
};

function Navbar({ handleRef, meRef, projectsRef }: NavbarTypes) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li onClick={(event) => handleRef(event, meRef)}>
          <div className={styles.overlay}>About me</div>
        </li>
        <li onClick={(event) => handleRef(event, projectsRef)}>
          <div className={styles.overlay}>Projects</div>
        </li>
        <div className={styles.logo}>
          <h2>
            <span>D</span>amian
          </h2>
          <h2>
            <span>F</span>ojcik
          </h2>
        </div>
        <li>
          <div className={styles.overlay}>Media link</div>
        </li>
        <li>
          <div className={styles.overlay}>Contact me</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
//        <li>          <div className={styles.overlay}>Darkmode?</div>        </li>
//140px
