import React from "react";
import ScoreContainer from "../ScoreContainer";
import SequenceContainer from "../SequenceContainer";
import TargetContainer from "../TargetContainer";
import "./main-container.css";

const generateTargetKeys = () => {
  const keys: string[] = [];
  while (keys.length < 50) {
    keys.push("a", "s", "d", "f", "g");
  }
  return keys;
};

const keys = generateTargetKeys();

const MainContainer = () => {
  const [target_keys, setTargetKeys] = React.useState(keys.slice(0, 4));
  const [active_index, setActiveIndex] = React.useState(0);

  return (
    <div className="main-container">
      <ScoreContainer />
      <SequenceContainer
        active_index={active_index}
        target_keys={target_keys}
      />
      <TargetContainer />
    </div>
  );
};

export default MainContainer;


