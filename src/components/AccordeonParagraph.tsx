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

  const { size, ...rest } = useSpring({
    config: config.slow,
    from: { size: "0px", background: "hotpink" },
    to: {
      size: isOpened ? "160px" : "0px",
      background: isOpened ? "white" : "blue",
    },
  });

  const rotation = useSpring({
    from: { x: 0 },
    to: { x: isOpened ? -180 : 0 },
  });
  //style={{ transform: to(rotation.x, value => `rotateZ(${value}deg)`) }}
  return (
    <li className={styles.accordeon}>
      <div className={styles.accordeon_title_container}>
        <h4 className={styles.accordeon_title}>{title}</h4>
        <animated.div
          style={{
            transform: rotation.x.to((value) => `rotate(${value}deg)`),
            cursor: "pointer",
          }}
          onClick={() => {
            setIsOpened(!isOpened);
            console.log("isOpened:", isOpened);
          }}
          className={styles.svg}
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
          <p className={styles.project_paragraph}>{paragraphText}</p>
        ) : null}
      </animated.div>
    </li>
  );
};

export default AccordeonParagraph;

//className={styles.accordeon_wrapper}
