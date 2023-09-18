//import logo from "./logo.svg";
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import ProjectPage from "./pages/ProjectPage";
import { Route, Routes } from "react-router";

import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);
  const [locationState, setLocationState] = useState("");
  const navigate = useNavigate();

  const handleRef = (
    event: React.MouseEvent,
    ref: React.MutableRefObject<HTMLElement | null>,
    path?: string | null
  ) => {
    console.log("click");
    event.preventDefault();
    if (path) {
      navigate(path);
    }
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
