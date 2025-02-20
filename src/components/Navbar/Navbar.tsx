import React, { useState } from "react";
import styles from "./Navbar.module.css";

import Sidebar from "./Sidebar";
import { analytics } from "../../utils/analytics";
import { AnalyticsEvent } from "../../utils/constans";

type NavbarTypes = {
  handleRef: (
    event: React.MouseEvent,
    ref: React.MutableRefObject<HTMLElement | null>,
    path?: string | null
  ) => void;
  meRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
};

function Navbar({ handleRef, meRef, projectsRef, contactRef }: NavbarTypes) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const Logo = () => {
    return (
      <div className={styles.logo}>
        <h2>
          <span className={styles.slide}>D</span>amian
        </h2>
        <h2>
          <span className={styles.slide}>F</span>ojcik
        </h2>
      </div>
    );
  };

  return (
    <>
      <Sidebar
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        handleRef={handleRef}
        meRef={meRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <nav className={styles.navbar}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOpened(!isOpened);
            analytics.event(AnalyticsEvent.hamburger_click);
          }}
          className={styles.Hamburger}
        >
          <div
            style={{ transform: isOpened ? "rotate(45deg)" : "rotate(0)" }}
          ></div>
          <div
            style={{
              opacity: isOpened ? "0" : "1",
              transform: isOpened ? "translateX(-20px)" : "translateX(0)",
            }}
          ></div>
          <div
            style={{ transform: isOpened ? "rotate(-45deg)" : "rotate(0)" }}
          ></div>
        </div>
        <ul className={styles.list}>
          <li onClick={(event) => handleRef(event, meRef)}>
            <div className={styles.overlay} style={{}}>
              About me
            </div>
          </li>
          <li onClick={(event) => handleRef(event, projectsRef)}>
            <div className={styles.overlay}>Projects</div>
          </li>
          <Logo />

          <li onClick={(event) => handleRef(event, contactRef)}>
            <div className={styles.overlay}>Media link</div>
          </li>

          <li onClick={(event) => handleRef(event, contactRef)}>
            <div className={styles.overlay}>Contact me</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
