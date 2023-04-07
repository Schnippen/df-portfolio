import React from "react";

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const ReactIcon = () => {
  return (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
      alt="React icon"
    />
  );
};
const TypescriptIcon = () => {
  return (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  );
};
const CssIcon =()=>{
  return(
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
  )
}

export default { ReactIcon, TypescriptIcon,CssIcon };
