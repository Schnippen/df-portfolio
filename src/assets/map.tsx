import React from "react";

const Map = () => {
  return (
    <div style={{height:"100%"}}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.openstreetmap.org/export/embed.html?bbox=19.01745736598969%2C50.25769053945744%2C19.024538397789005%2C50.26050964024686&amp;layer=mapnik"
        style={{ border: "1px solid black" }}
      ></iframe>
    </div>
  );
};

export default Map;
