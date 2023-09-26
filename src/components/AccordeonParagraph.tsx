import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { animated, useSpring, config } from "react-spring";
import styles from "./AccordeonParagraph.module.css";

const AccordeonParagraph = ({
  paragraphText,
  title,
}: {
  paragraphText: string;
  title: string;
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  //height prop
  const { size, opacity, ...rest } = useSpring({
    config: config.slow,
    from: { size: "0px", background: "hotpink", opacity: 0 },
    to: {
      size: isOpened ? "160px" : "0px",
      background: isOpened ? "white" : "blue",
      opacity: isOpened ? 1 : 0,
    },
  });

  const rotation = useSpring({
    from: { x: 0 },
    to: { x: isOpened ? -180 : 0 },
  });
  return (
    <li className={styles.accordeon}>
      <div
        className={styles.accordeon_title_container}
        onClick={() => {
          setIsOpened(!isOpened);
          console.log("isOpened:", isOpened);
        }}
      >
        <h4 className={styles.accordeon_title}>{title}</h4>
        <animated.div
          style={{
            transform: rotation.x.to((value) => `rotate(${value}deg)`),

            userSelect: "none",
          }}
          className={styles.svg}
          title={isOpened ? "Close" : "Open"}
        >
          {isOpened ? "-" : "+"}
        </animated.div>
      </div>
      <animated.div
        style={{
          ...rest,
          width: "100%",
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isOpened ? (
          <animated.p
            style={{ opacity: opacity }}
            className={styles.project_paragraph}
          >
            {paragraphText}
          </animated.p>
        ) : null}
      </animated.div>
    </li>
  );
};

export default AccordeonParagraph;

//className={styles.accordeon_wrapper}
