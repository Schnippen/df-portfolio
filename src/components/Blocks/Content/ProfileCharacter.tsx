import React from "react";

type ProfileCharacterTypes = {
  image: JSX.Element;
  text: string;
  title: string;
};

const ProfileCharacter = ({ image, text, title }: ProfileCharacterTypes) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {image}
      <h4
        style={{
          textAlign: "center",
          userSelect: "none",
          fontWeight: "bold",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.8em",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ProfileCharacter;
