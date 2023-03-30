import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Block from "./components/Blocks/Block";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Blocks/Content/Profile";
import Projects from "./components/Blocks/Content/Projects";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <body style={{ marginTop: "120px", backgroundColor: "f5f8fb" }}>
        <Block title={"Me"} childComponent={<Profile />}></Block>
        <Block title={"Projects"} childComponent={<Projects />}></Block>
      </body>
      <Contact />
    </div>
  );
}

export default App;
//
//animacje dla navbar
//zrobić style dla body
