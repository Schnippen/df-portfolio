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
  console.log(dimensions);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    if (768 >= height) {
      setHeight(240);
    }
    if (578 >= height) {
      setHeight(300);
    }
  }, []);
  //define animation
  const { size, opacity, ...rest } = useSpring({
    config: config.slow,
    from: { size: "0px", background: "hotpink", opacity: 0 },
    to: {
      size: isOpened ? `${height}` : "0px",
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
