import React from "react";
import "./sequence-container.css";

type SequenceContainerProps = {
  active_index: number;
  target_keys: string[];
};

const SequenceContainer = ({
  active_index,
  target_keys,
}: SequenceContainerProps) => {
  const other_elements = [];
  if (active_index < 3) {
    const remaining_elements = 3 - active_index;
    for (let i = 0; i < remaining_elements; i++) {
      other_elements.push("");
    }
  }

  return (
    <div className="sequence-container container">
      {other_elements.map((x, index) => (
        <div key={index} className={`sequence-card card`}>
          {x}
        </div>
      ))}
      {target_keys.map((x, index) => (
        <div
          key={index}
          className={`sequence-card card ${index === active_index && "active"}`}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default SequenceContainer;
