import mixpanel from "mixpanel-browser";

export const analytics = {
  event: (name: string, params?: any) => {
    mixpanel.track(name, params);
  },
};
