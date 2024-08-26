import { useState, useEffect } from "react";
import { getImagePairs_hard } from "../Hard/Hardlevellist.js";
import "./Hardlevel.css";
import Lose from "../lose/Lose.js";
import Happy from "../Happy/Happy.js";
import { usePoints } from "../PointContext.js"; 
import { IoTrophy } from "react-icons/io5";

const Hardlevel_easy = () => {
  const [images, setImages] = useState(getImagePairs_hard());
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);
  const [stage, setStage] = useState("init");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const { hardPoints, setHardPoints } = usePoints(); 

  const shuffleImages = () => {
    const copyImages = [...images];
    return copyImages.sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setStage("start");
    setImages(shuffleImages());
    setSolvedList([]);
    setTimeLeft(180); // Reset timer
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
    if (solvedList.length === images.length / 2) {
      setStage("win");
      setHardPoints((prev) => prev + 1); // Increment points 
    }
  }, [solvedList, images, setHardPoints]);

  useEffect(() => {
    if (stage === "start" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer on 
    } else if (timeLeft === 0) {
      setStage("lost");
    }
  }, [stage, timeLeft]);

  const getClassName = (index) => {
    if (solvedList.some((img) => img.src === images[index].src)) {
      return "remove_hard";
    } else if (opened.includes(index)) {
      return "show_hard";
    } else {
      return "hide_hard";
    }
  };

  return (
    <div className="App_hard">
      <div className="pointandtrophy"><IoTrophy className="trophy" /> {hardPoints}</div> 
      {stage === "init" && <button onClick={handleStart}>Play Game</button>}
      {stage === "start" && (
        <div className="game_hard">
          <div className="timer_hard">
            Time Left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
          <div className="cards_hard">
            {images.map((img, i) => (
              <div
                key={i}
                className={`card_hard ${getClassName(i)}`}
                onClick={() => handleClick(i)}
              >
                <div className="card-inner_hard">
                  <div className="card-front_hard cardfont "></div>
                  <div className="card-back_hard">
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

export default Hardlevel_easy;
