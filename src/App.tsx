import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Block from "./components/Blocks/Block";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Blocks/Content/Profile";
import Projects from "./components/Blocks/Content/Projects";
import { Ref } from "react";

function App() {
  const meRef = useRef(null);
  const projectsRef = useRef(null);

  const handleRef = (
    event: React.MouseEvent,
    ref: React.MutableRefObject<HTMLElement | null>
  ) => {
    event.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar
        meRef={meRef}
        projectsRef={projectsRef}
        handleRef={handleRef}
      ></Navbar>
      <body style={{ marginTop: "120px", backgroundColor: "f5f8fb" }}>
        <Block myRef={meRef} title={"Me"} childComponent={<Profile />}></Block>
        <Block
          myRef={projectsRef}
          title={"Projects"}
          childComponent={<Projects />}
        ></Block>
      </body>
      <Contact />
    </div>
  );
}

export default App;
//
//animacje dla navbar
//zrobić style dla body
