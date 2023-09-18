import React, { useState } from "react";
import Block from "../components/Blocks/Block";
import Contact from "../components/Contact/Contact";
import Profile from "../components/Blocks/Content/Profile";
import Projects from "../components/Blocks/Content/Projects";


type MainTypes = {
  meRef: React.MutableRefObject<null>;
  projectsRef: React.MutableRefObject<null>;
  mediaRef: React.MutableRefObject<null>;
  contactRef: React.MutableRefObject<null>;
};

function Main({ meRef, projectsRef, mediaRef, contactRef }: MainTypes) {
  const [text, setText] = useState("");

  return (
    <>
      <main style={{ paddingTop: "120px", backgroundColor: "f5f8fb" }}>
        <div
          style={{
            display: "block",
            height: "300px",
            width: "100%",
            backgroundColor: "beige",
          }}
        ></div>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <div>
          <p>{text}</p>
        </div>
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
        <Contact myRef={contactRef} id="Contact" />
      </main>
    </>
  );
}

export default Main;
