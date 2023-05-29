import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";

type SidebarTypes = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  handleRef: (
    event: React.MouseEvent<Element, MouseEvent>,
    ref: React.MutableRefObject<HTMLElement | null>
  ) => void;
  meRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
};

function Sidebar({
  isOpened,
  setIsOpened,
  handleRef,
  meRef,
  projectsRef,
  contactRef,
}: SidebarTypes) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      console.log(e.target);
      console.log(sidebarRef.current);
      if (isOpened && sidebarRef.current !== e.target) {
        setIsOpened(!isOpened);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpened]);
  useEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);
  //<div className={styles.logo}>{Logo}</div>

  return (
    <aside
      className={styles.sidebar}
      ref={sidebarRef}
      style={{ left: isOpened ? "0" : "-100%" }}
    >
      <ul className={styles.sidebar_list}>
        <li onClick={(event) => handleRef(event, meRef)}>
          <div className={styles.overlay}>About Me</div>
        </li>
        <li onClick={(event) => handleRef(event, projectsRef)}>
          <div className={styles.overlay}>Projects</div>
        </li>
        <li>
          <div className={styles.overlay}>Media</div>
        </li>
        <li onClick={(event) => handleRef(event, contactRef)}>
          <div className={styles.overlay}>Contact me</div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
//border-bottom: 1px solid black;
