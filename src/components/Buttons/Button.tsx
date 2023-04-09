import React from "react";
import styles from "./Button.module.css";

type ButtonTypes = {
  text?: string;
  buttonHeight: string;
  buttonWidth: string;
};

function Button({ text, buttonHeight, buttonWidth }: ButtonTypes) {
  return (
    <button
      className={styles.button_body}
      style={{ height: `${buttonHeight}`, width: `${buttonWidth}` }}
    >
      {text}
    </button>
  );
}

export default Button;
