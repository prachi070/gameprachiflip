import { useState, useEffect } from "react";
import { getImagePairs_easy } from "./Easylevellist.js";
import "./Easylevel.css";
import Lose from "../lose/Lose.js";
import Happy from "../Happy/Happy.js";
import { usePoints } from "../PointContext.js"; 
import { IoTrophy } from "react-icons/io5";

const Easylevel_easy = () => {
  const [images, setImages] = useState(getImagePairs_easy());
  const [opened, setOpened] = useState([]);
  const [solvedList, setSolvedList] = useState([]);
  const [stage, setStage] = useState("init");
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const { easyPoints, setEasyPoints } = usePoints(); 

  const shuffleImages = () => {
    const copyImages = [...images];
    return copyImages.sort(() => Math.random() - 0.5);
  };

  const handleStart = () => {
    setStage("start");
    setImages(shuffleImages());
    setSolvedList([]);
    setTimeLeft(120); // Reset timer to 2 minutes
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
      setEasyPoints((prev) => prev + 1); // Increment points 
    }
  }, [solvedList, images, setEasyPoints]);

  useEffect(() => {
    if (stage === "start" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer
    } else if (timeLeft === 0) {
      setStage("lost");
    }
  }, [stage, timeLeft]);

  const getClassName = (index) => {
    if (solvedList.some((img) => img.src === images[index].src)) {
      return "remove_easy";
    } else if (opened.includes(index)) {
      return "show_easy";
    } else {
      return "hide_easy";
    }
  };

  return (
    <div className="App_easy">
      <div className="pointandtrophy">
        <IoTrophy className="trophy" /> {easyPoints}
      </div>
      {stage === "init" && <button onClick={handleStart}>Play Game</button>}
      {stage === "start" && (
        <div className="game_easy">
          <div className="timer_easy">
            Time Left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
          <br />
          <div className="cards_easy">
            {images.map((img, i) => (
              <div
                key={i}
                className={`card_easy ${getClassName(i)}`}
                onClick={() => handleClick(i)}
              >
                <div className="card-inner_easy">
                  <div className="card-front_easy cardfont"></div>
                  <div className="card-back_easy">
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

export default Easylevel_easy;
