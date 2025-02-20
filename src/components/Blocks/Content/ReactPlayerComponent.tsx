import React from "react";
import ReactPlayer from "react-player/youtube";
import { analytics } from "../../../utils/analytics";
import { AnalyticsEvent } from "../../../utils/constans";

const ReactPlayerComponent = ({
  urlYoutube,
  urlName,
}: {
  urlYoutube: string;
  urlName: string;
}) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
      }}
    >
      <ReactPlayer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        url={urlYoutube}
        width="100%"
        height="100%"
        onStart={() =>
          analytics.event(AnalyticsEvent.youtube_play, { type: urlName })
        }
      />
    </div>
  );
};

export default ReactPlayerComponent;
