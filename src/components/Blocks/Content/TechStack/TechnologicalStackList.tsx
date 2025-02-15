import React, { useState } from "react";
import styles from "../Projects.module.css";
export const TechnologicalStackList = ({
  array,
}: {
  array: ((
    index: number,
    isOpened: boolean,
    onToggle: () => void
  ) => React.JSX.Element)[];
}) => {
  const [selectedIndex, setSelected] = useState<number | null>(null);
  return (
    <ul className={styles.project_list}>
      {array.map((item, index) => (
        <div key={index}>
          {item(index, selectedIndex === index, () =>
            setSelected(selectedIndex === index ? null : index)
          )}
        </div>
      ))}
    </ul>
  );
};
