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
import { analytics } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../utils/constans";
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
    let timer = setTimeout(() => {
      setIsFadingOut(false);
    }, 500);
    clearTimeout(timer);
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
    analytics.event(AnalyticsEvent.photoGallery_click, { type: "previous" });
  };

  const handleNext = () => {
    if (isPaused === false) {
      setIsPaused(true);
    }
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 300);
    analytics.event(AnalyticsEvent.photoGallery_click, {
      type: "next",
    });
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    analytics.event(AnalyticsEvent.photoGallery_click, {
      type: "pause",
    });
  };

  const handleFullscreen = () => {
    console.log("isFullscreen", isFullScreen);
    setIsFullScreen(!isFullScreen);
    analytics.event(AnalyticsEvent.photoGallery_click, {
      type: "fullscren",
    });
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
        analytics.event(AnalyticsEvent.photoGallery_click, {
          type: "close_fullscreen",
        });
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
    tooltip,
  }: {
    Icon: IconType;
    handler: () => void;
    tooltip?: string;
  }) => {
    return (
      <li
        className={PhotoGalleryStyles.control_panel_button}
        onClick={handler}
        title={tooltip}
      >
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
          tooltip="Previous"
        />
        <ControlPanelButton
          Icon={HiOutlinePlayPause}
          handler={handlePause}
          tooltip="Pause / Play"
        />
        <ControlPanelButton
          Icon={BsArrowsFullscreen}
          handler={handleFullscreen}
          tooltip="Toggle Fullscreen"
        />
        <ControlPanelButton
          Icon={IoPlaySkipForwardOutline}
          handler={handleNext}
          tooltip="Next"
        />
      </ul>
    );
  };

  return (
    <div>
      {isFullScreen ? (
        <div className={PhotoGalleryStyles.fullscreen_container} ref={ref}>
          <figure className={PhotoGalleryStyles.fullscreen_wrapper}>
            <img
              loading="lazy"
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
