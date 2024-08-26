import React, { useState, useEffect } from "react";
import Easylevel from "./component/Easy/Easylevel";
import Mediumlevel from "./component/Medium/Mediumlevel";
import Hardlevel from "./component/Hard/Hardlevel";
import Header from "./component/Header";
import "./App.css";
import LoadingPage from "./component/Loading/LoadingPage";
import { PointsProvider } from "./component/PointContext";
import girl from './mainbodyimage/girl.gif';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("easy");
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const renderGameMode = () => {
    switch (mode) {
      case "medium":
        return <Mediumlevel />;
      case "hard":
        return <Hardlevel />;
      default:
        return <Easylevel />;
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <PointsProvider>
      <div className="App">
        <Header />
        <div className="overlay-content">
          {!gameStarted && (
            <>
              <img src={girl} style={{ mixBlendMode: "multiply", width: "50%", borderRadius: "50%" }} />
              <h2>Welcome to the Memory Game</h2>
              <h3>Select your level and start playing!</h3>
            </>
          )}

            <div className="mode-selector">
              <label htmlFor="mode">Level: </label>
              <select id="mode" value={mode} onChange={handleModeChange}>
                <option value="easy">Easy (4 X 3)</option>
                <option value="medium">Medium (4 X 4)</option>
                <option value="hard">Hard (4 X 5)</option>
              </select>
            </div>
        

          <br />

          {!gameStarted && (
            <button onClick={handleStartGame}>Continue...</button>
          )}

          {gameStarted && (
            <div className="game-board">
              {renderGameMode()}
            </div>
          )}
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </PointsProvider>
  );
};

export default App;
