import React from "react";
import "./score.css";

const ScoreContainer = () => {
  return (
    <div className="score container">
      <div className="score-card card">
        <span className="score-header">Score</span>
        <span id="score">0</span>
      </div>
    </div>
  );
};

export default ScoreContainer;
