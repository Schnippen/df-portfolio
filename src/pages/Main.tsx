import React from "react";
import Block from "../components/Blocks/Block";
import Contact from "../components/Contact/Contact";
import Profile from "../components/Blocks/Content/Profile";
import Projects from "../components/Blocks/Content/Projects";
import styles from "./Main.module.css";

type MainTypes = {
  meRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
  mediaRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
};

function Main({ meRef, projectsRef, mediaRef, contactRef }: MainTypes) {
  return (
    <>
      <main className={styles.main}>
        <Block
          myRef={meRef}
          title={"About Me"}
          childComponent={<Profile />}
        ></Block>
        <Block
          myRef={projectsRef}
          title={"Projects"}
          childComponent={<Projects />}
        ></Block>
        <Contact myRef={contactRef} id="Contact" mediaRef={mediaRef} />
      </main>
    </>
  );
}

export default Main;
