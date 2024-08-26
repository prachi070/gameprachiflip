import { useState, useEffect } from "react";
import { getImagePairs_medium } from "../Medium/Mediumlevellist.js";
import "./Mediumlevel.css";
import Lose from "../lose/Lose.js";
import Happy from '../Happy/Happy.js';
import { usePoints } from "../PointContext.js";
import { IoTrophy } from "react-icons/io5";

const Mediumlevel = () => {
  const [images, setImages] = useState(getImagePairs_medium());
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);
  const [stage, setStage] = useState("init");
  const [timeLeft, setTimeLeft] = useState(180); // 180 seconds for medium level
  const [pointsAwarded, setPointsAwarded] = useState(false); 
  const { mediumPoints, setMediumPoints } = usePoints();

  const shuffleImages = () => {
    const copyImages = [...images];
    return copyImages.sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setStage("start");
    setImages(shuffleImages());
    setSolvedList([]);
    setTimeLeft(180); // Reset timer
    setPointsAwarded(false); 
  };

  const handleClick = (index) => {
    if (opened.length === 2 || opened.includes(index)) return;
    setOpened((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (opened.length === 2) {
      const [id1, id2] = opened;
      setTimeout(() => {
        if (images[id1].src === images[id2].src) {
          setSolvedList((prev) => [...prev, images[id1]]);
        }
        setOpened([]);
      }, 1000);
    }
  }, [opened, images]);

  useEffect(() => {
    if (solvedList.length === images.length / 2 && !pointsAwarded) {
      setStage("win");
      setMediumPoints(mediumPoints + 1); 
      setPointsAwarded(true); 
    }
  }, [solvedList, images, mediumPoints, setMediumPoints, pointsAwarded]);

  useEffect(() => {
    if (stage === "start" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else if (timeLeft === 0) {
      setStage("lost");
    }
  }, [stage, timeLeft]);

  const getClassName = (index) => {
    if (solvedList.some((img) => img.src === images[index].src)) {
      return "remove_medium";
    } else if (opened.includes(index)) {
      return "show_medium";
    } else {
      return "hide_medium";
    }
  };

  return (
    <div className="App_medium">
      <div className="pointandtrophy"><IoTrophy className="trophy"/> {mediumPoints}</div>
      {stage === "init" && <button onClick={handleStart}>Play Game</button>}

      {stage === "start" && (
        <div className="game_medium">
          <div className="timer_medium">
            Time Left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
          <div className="cards_medium">
            {images.map((img, i) => (
              <div
                key={i}
                className={`card_medium ${getClassName(i)}`}
                onClick={() => handleClick(i)}
              >
                <div className="card-inner_medium">
                  <div className="card-front_medium cardfont"></div>
                  <div className="card-back_medium">
                    <img src={img.src} alt={img.alt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {stage === "win" && (
        <div>
          <Happy />
          <button onClick={handleStart}>Play Again</button>
        </div>
      )}

      {stage === "lost" && (
        <div>
          <Lose />
          <button onClick={handleStart}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Mediumlevel;
