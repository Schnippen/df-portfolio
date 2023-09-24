import React from "react";
import { IconType } from "react-icons";
import styles from "./MediaButton.module.css";

function MediaButton({
  link,
  Icon,
  tooltip,
}: {
  link?: string;
  Icon: IconType;
  tooltip?: string;
}) {
  return (
    <a href={link} target="new" className={styles.link} title={tooltip}>
      <Icon className={styles.icon} />
    </a>
  );
}

export default MediaButton;
