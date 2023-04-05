import React, { ReactNode } from "react";
import styles from "./Block.module.css";

type BlockTypes = {
  title: string;
  childComponent: ReactNode;
  myRef: React.MutableRefObject<HTMLElement | null>;
};

function Block({ myRef, title, childComponent }: BlockTypes) {
  return (
    <section className={styles.block_container} ref={myRef}>
      <h2 className={styles.block_title}>{title}</h2>
      <article className={styles.block_article}>{childComponent}</article>
    </section>
  );
}

export default Block;

//block będzie na gridzie
//tytuł tło transparent pierwszy row, 1-2 column
//propsy będa miały propsdata.tsx
