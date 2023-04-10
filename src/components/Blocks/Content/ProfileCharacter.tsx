import React from "react";

type ProfileCharacterTypes = {
  image: JSX.Element;
  text: string;
};

const ProfileCharacter = ({ image, text }: ProfileCharacterTypes) => {
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
      <p style={{ textAlign: "center", fontSize: "1.2em", userSelect: "none",fontWeight:"bold" }}>
        {text}
      </p>
    </div>
  );
};

export default ProfileCharacter;
