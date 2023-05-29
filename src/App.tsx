import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Block from "./components/Blocks/Block";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Blocks/Content/Profile";
import Projects from "./components/Blocks/Content/Projects";

function App() {
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const mediaRef = useRef(null);
  const contactRef = useRef(null);

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
    <body className="App">
      <Navbar
        meRef={meRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        handleRef={handleRef}
      ></Navbar>
      <main style={{ paddingTop: "120px", backgroundColor: "f5f8fb" }}>
        <div
          style={{
            display: "block",
            height: "300px",
            width: "100%",
            backgroundColor: "beige",
          }}
        ></div>
        <Block
          myRef={meRef}
          title={"About Me"}
          childComponent={<Profile />}
        ></Block>
        <Block
          myRef={projectsRef}
          title={"Projects"}
          childComponent={<Projects />}
        ></Block>
      </main>
      <Contact myRef={contactRef} />
    </body>
  );
}

export default App;
//
//animacje dla navbar
//zrobić style dla body
