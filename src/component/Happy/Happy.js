import React from 'react'
import hap from './output-onlinegiftools (2).gif'
import './Happy.css'
import { IoTrophy } from "react-icons/io5";

const Happy = () => {
  return (
    <div className='happy_box'>
   <div class="confetti">
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
</div>
      <h1 style={{color:"black"}}>You won the Game!</h1>
      <img src={hap} alt="Happy Emoji" className="Happy-emoji" />
      <h1 className='happypoint'>Your earn <IoTrophy/> </h1>
    </div>
  )
}

export default Happy
