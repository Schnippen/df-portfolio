import React from "react";
import { IconType } from "react-icons";
import styles from "./MediaButton.module.css";
import { analytics } from "../../utils/analytics";
import { AnalyticsEvent } from "../../utils/constans";

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
    <a
      href={link}
      target="new"
      className={styles.link}
      title={tooltip}
      onClick={() => {
        analytics.event(AnalyticsEvent.mediaButton_click, { type: link });
      }}
    >
      <Icon className={styles.icon} />
    </a>
  );
}

export default MediaButton;
