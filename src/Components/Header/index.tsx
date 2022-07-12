import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <span className="branding">Drum App</span>
      <div className="menu-buttons">
        <button>start game</button>
        <button>record</button>
        <button>playback</button>
      </div>
    </nav>
  );
};

export default Header;
