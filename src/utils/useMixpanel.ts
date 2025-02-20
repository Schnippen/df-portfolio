import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export const useMixpanel = () => {
  useEffect(() => {
    mixpanel.init(process.env.REACT_APP_MIXPANEL as string, {
      debug: process.env.NODE_ENV === "development",
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);
};
