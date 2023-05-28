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
      className={isOpened ? styles.sidebar : styles.sidebarClosed}
      ref={sidebarRef}
    >
      sda
      <ul>
        <li onClick={(event) => handleRef(event, meRef)}>ME</li>
        <li onClick={(event) => handleRef(event, projectsRef)}>Projects</li>
        <li>Media</li>
        <li onClick={(event) => handleRef(event, contactRef)}>Contact</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
