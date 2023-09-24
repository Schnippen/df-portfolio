import React, { useEffect, useState, useRef } from "react";
import styles from "./Projects.module.css";
import PhotoGalleryStyles from "./PhotoGallery.module.css";
import { HiOutlinePlayPause } from "react-icons/hi2";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IconType } from "react-icons";

const PhotoGallery = ({
  photos,
  delay,
  alt,
}: {
  photos: any;
  delay: number;
  alt?: string;
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    console.log("isPaused:", isPaused);
    const timer = setInterval(() => {
      if (!isPaused) {
        setIsFadingOut(true);

        setTimeout(() => {
          setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
          setIsFadingOut(false);
        }, 500);
      }
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [photos.length, delay, isPaused]);

  useEffect(() => {
    setTimeout(() => {
      setIsFadingOut(false);
    }, 500);
  }, [currentPhotoIndex]);

  const currentPhotoStyle = {
    opacity: isFadingOut ? 0 : 1,
    transition: "opacity 0.5s ease-in-out",
  };

  const handlePrevious = () => {
    if (isPaused === false) {
      setIsPaused(true);
    }
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
      );
    }, 300);
  };

  const handleNext = () => {
    if (isPaused === false) {
      setIsPaused(true);
    }
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 300);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleFullscreen = () => {
    console.log("isFullscreen", isFullScreen);
    setIsFullScreen(!isFullScreen);
  };
  //prevent scrolling while in fullscreen
  useEffect(() => {
    document.body.style.overflow = isFullScreen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullScreen]);

  //close fullscreen on click
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (isFullScreen && ref.current === e.target) {
        setIsFullScreen(!isFullScreen);
      }
    };
    if (isFullScreen) {
      document.addEventListener("click", handleClose);
    }
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isFullScreen]);

  //fullscreen photogallery controls
  const ref = useRef(null);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        handleNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        handlePrevious();
      }
      if (e.key === " " || e.code === "Space") {
        handlePause();
      }
      if (e.key === "Escape" || e.key === "Backspace") {
        handleFullscreen();
      }
    };
    if (isFullScreen) {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [isFullScreen]);

  const ControlPanelButton = ({
    Icon,
    handler,
  }: {
    Icon: IconType;
    handler: () => void;
  }) => {
    return (
      <li className={PhotoGalleryStyles.control_panel_button} onClick={handler}>
        <Icon />
      </li>
    );
  };

  //buttons
  const ControlPanel = () => {
    return (
      <ul
        className={
          isFullScreen
            ? PhotoGalleryStyles.control_panel_container_fullscreen
            : PhotoGalleryStyles.control_panel_container
        }
      >
        <ControlPanelButton
          Icon={IoPlaySkipBackOutline}
          handler={handlePrevious}
        />
        <ControlPanelButton Icon={HiOutlinePlayPause} handler={handlePause} />
        <ControlPanelButton
          Icon={BsArrowsFullscreen}
          handler={handleFullscreen}
        />
        <ControlPanelButton
          Icon={IoPlaySkipForwardOutline}
          handler={handleNext}
        />
      </ul>
    );
  };

  return (
    <div className={styles.PhotoGallery}>
      {isFullScreen ? (
        <div className={PhotoGalleryStyles.fullscreen_container} ref={ref}>
          <figure className={PhotoGalleryStyles.fullscreen_wrapper}>
            <img
              src={photos[currentPhotoIndex]}
              alt={alt}
              style={currentPhotoStyle}
              className={PhotoGalleryStyles.fullscreen_image}
            />
            <ControlPanel />
            <div className={PhotoGalleryStyles.index_display}>{`${
              currentPhotoIndex + 1
            }/${photos.length}`}</div>
          </figure>
        </div>
      ) : (
        <>
          <img
            src={photos[currentPhotoIndex]}
            alt={alt}
            style={currentPhotoStyle}
            className={styles.project_image}
          />
          <ControlPanel />
        </>
      )}
    </div>
  );
};

export default PhotoGallery;
