//import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";

import { useNavigate } from "react-router-dom";
import { useMixpanel } from "./utils/useMixpanel";
import { analytics } from "./utils/analytics";
import { AnalyticsEvent } from "./utils/constans";

function App() {
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);
  //const [locationState, setLocationState] = useState("");
  const navigate = useNavigate();
  useMixpanel();

  const handleRef = (
    event: React.MouseEvent,
    ref: React.MutableRefObject<HTMLElement | null>,
    path?: string | null
  ) => {
    console.log("click");
    event.preventDefault();
    if (path) {
      navigate(path);
      analytics.event(AnalyticsEvent.navbar_click, { type: "path" });
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(
    `
%c👀 I know what you're doing here... 🕵️‍♂️
`,
    "color: red; font-size: 16px; font-weight: bold; background: black; padding: 5px; border-radius: 3px;"
  );

  /*   const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log("Navigated to:", location.pathname);
    setLocationState(location.pathname);
  }, [location]);
 */
  //navigate();
  return (
    <body className="App">
      <Navbar
        meRef={meRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        handleRef={handleRef}
      ></Navbar>

      <Main
        meRef={meRef}
        projectsRef={projectsRef}
        mediaRef={mediaRef}
        contactRef={contactRef}
      />
    </body>
  );
}

export default App;
//
//animacje dla navbar
//zrobić style dla body
