import React from "react";

const Separator = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px 0px",
      }}
    >
      <div
        style={{ height: "1px", backgroundColor: "rgb(0, 0, 0)", width: "90%" }}
      ></div>
    </div>
  );
};

export default Separator;
