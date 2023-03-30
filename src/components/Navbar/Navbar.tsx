import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <div className={styles.overlay}>About link</div>
        </li>
        <li>
          <div className={styles.overlay}>Media</div>
        </li>
        <div className={styles.logo}>
          <h2>Damian</h2>
          <h2>Fojcik</h2>
        </div>
        <li>
          <div className={styles.overlay}>Project link</div>
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
