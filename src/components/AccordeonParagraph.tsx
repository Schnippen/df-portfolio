import React, { useEffect, useState } from "react";
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
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [height, setHeight] = useState(180);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //set height of accordeon paragraph
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (dimensions.width > 768) {
      setHeight(180);
    }
    if (1180 >= dimensions.width) {
      setHeight(200);
    }
    if (dimensions.width >= 1160) {
      setHeight(260);
    }
    if (dimensions.width >= 1110) {
      setHeight(270);
    }
    if (dimensions.width >= 1040) {
      setHeight(280);
    }
    if (dimensions.width >= 1024) {
      setHeight(240);
    }
    if (768 >= dimensions.width) {
      setHeight(240);
    }
    if (640 >= dimensions.width) {
      setHeight(260);
    }
    if (578 >= dimensions.width) {
      setHeight(300);
    }
    if (425 >= dimensions.width) {
      setHeight(360);
    }
    if (375 >= dimensions.width) {
      setHeight(370);
    }
  }, []);
  //define animation
  const { size, opacity, ...rest } = useSpring({
    config: config.slow,
    from: {
      size: "0px",
      background: `rgb(245 235 224 /${0}%)`,
      opacity: 0,
    },
    to: {
      size: isOpened ? `${height}` : "0px",
      background: isOpened
        ? `rgb(245 235 224 /${100}%)`
        : "rgb(255 255 255 / 0%)",
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
