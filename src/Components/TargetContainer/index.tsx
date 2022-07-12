import React from "react";
import { keyConfigs } from "../../Helpers/sounds";
import "./target-container.css";

const TargetContainer = () => {
  const [activeKey, setActiveKey] = React.useState<string | undefined>();
  const handleKeyDown = (ev: KeyboardEvent) => {
    console.log(ev);
    const key = ev.key;

    const keyConfig = keyConfigs.find((item) => item.key === key);
    // console.log(keyConfig);

    if (keyConfig) {
      setActiveKey(keyConfig.key);
      const audio = new Audio(keyConfig.sound);
      audio.play();

      audio.onended = () => {
        setActiveKey(undefined);
      };
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="control container">
      {keyConfigs.map((item) => (
        <div
          key={item.id}
          className={`control card ${activeKey === item.key && "playing"}`}
        >
          <div className="label container">{item.key}</div>
          <div className="key container">{item.id.split("_").join(" ")}</div>
        </div>
      ))}
    </div>
  );
};

export default TargetContainer;
