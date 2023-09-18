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
        width: "276",
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
          fontSize: "0.7em",
          width: "250px",
          padding: "12px",
          userSelect: "none",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ProfileCharacter;
