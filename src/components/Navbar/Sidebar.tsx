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

  return (
    <aside
      className={styles.sidebar}
      ref={sidebarRef}
      style={{ left: isOpened ? "0" : "-100%" }}
    >
      <ul className={styles.sidebar_list}>
        <li onClick={(event) => handleRef(event, meRef)}>
          <p className={styles.overlay}>About Me</p>
        </li>

        <li onClick={(event) => handleRef(event, projectsRef)}>
          <p className={styles.overlay}>Projects</p>
        </li>
        <li>
          <p className={styles.overlay}>Media</p>
        </li>
        <li onClick={(event) => handleRef(event, contactRef)}>
          <p className={styles.overlay}>Contact me</p>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
//border-bottom: 1px solid black;
