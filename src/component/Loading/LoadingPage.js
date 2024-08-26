// LoadingPage.js
import React from "react";
import './LoadingPage.css';
import brain from './brainimg.webp';

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <img src={brain} alt="Happy Emoji" className="brain-emoji" />
      <h1 className="loading-text">Memory Game</h1>
    </div>
  );
};

export default LoadingPage;
